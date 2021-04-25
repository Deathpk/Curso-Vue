<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress
		:progress="progress"/>
		<NewTask
		@taskAdded="addTask"/>
		<TaskGrid
		:tasks="tasks"
		@stateChanged="changeState"
		@deleteTask="destroyTask"
		/>
	</div>
</template>

<script>
import TaskProgress from './components/TaskProgress.vue'
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'
export default {
	components:{TaskProgress , NewTask ,TaskGrid},
	data(){
		return {
			tasks:[
				
			]
		}
	},
	watch:{
		tasks:{
			deep:true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},

	computed:{
		progress(){
			const total = this.tasks.length
			const done = this.tasks.filter( (t)=> !t.pending ).length
			return Math.round(done/total * 100) || 0
		}
	},

	methods:{
		addTask(task){
			const isSameName = (t)=> task.name === t.name
			const isBlank = task.name  != ''
			const reallyNew = this.tasks.filter(isSameName).length == 0 
			
			if(reallyNew && isBlank){
				this.tasks.push({
					name: task.name,
					pending: task.pending
				})
			}
		},
		changeState(i){
			this.tasks[i].pending = !this.tasks[i].pending
		},
		destroyTask(i){
			this.tasks.splice(i,1)
		},
	},
	created(){
		const storagedTasks = JSON.parse( localStorage.getItem('tasks') )
		this.tasks = Array.isArray(storagedTasks) ? storagedTasks : []
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
