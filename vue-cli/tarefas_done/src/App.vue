<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress :progress="progress"/>
		<NewTask @taskAdded="addTask($event)"/>
		
		<TaskGrid 
		:tasks="tasks"
		@taskDeleted="deleteTask"
		@changeState="changeTaskState" />
		
	</div>
</template>

<script>
import TaskProgress from './components/taskProgress.vue'
import NewTask from './components/newTask.vue'
import TaskGrid from './components/taskGrid.vue'
export default {
	components:{ TaskProgress ,TaskGrid, NewTask},
	data(){
		return{
			tasks: [
				
			]
		}
	},
	computed:{
		progress(){
			const total = this.tasks.length
			const done = this.tasks.filter( t=> !t.pending ).length
			return Math.round( done / total * 100) || 0 // Coloquei o 0 para se o calculo dar 0 , o math.round não retornar um erro dizendo que não é um numero.
		}
	},
	watch: {
		tasks: {
			deep: true, // Watch profundo , observa tanto adição ,quanto remoção.
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods:{
		addTask(task){
			const isSameName = t => t.name === task.name
			const isBlank = task.name != ''
			const reallyNew = this.tasks.filter(isSameName).length == 0

			if(reallyNew && isBlank){
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i){
			this.tasks.splice(i,1) // Remove 1 elemento , logo depois do indice indicado.
		},
		changeTaskState(i){
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created(){
		const storagedTasks = localStorage.getItem('tasks')
		const array = JSON.parse(storagedTasks)
		this.tasks = Array.isArray(array) ? array : []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
