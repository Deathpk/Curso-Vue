<template>
    <div class="task-grid" v-if="tasks.length >0 ">
       <Task v-for="(task,i) in tasks" :key="task.name"
       :task="task"
       @stateChanged="$emit('stateChanged', i)"
       @deleteTask="$emit('deleteTask', )"
       />
    </div>

    <div class="no-task" v-else>
        <p>Sua vida está em dia ;)</p>
    </div>
    
</template>

<script>
import Task from './Task.vue'
export default {
    components:{Task},
   props:{
       tasks:{type:Array , required:true}
   } 
}
</script>

<style>
    .task-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .task-grid .task {
        margin:10px
    }

    .no-task{
        color:#AAA;
        font-size:1.7rem;
    }
</style>