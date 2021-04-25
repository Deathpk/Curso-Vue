<template>
    <div class="new-task">
        <input class="form-element" v-model="taskName" @keydown.enter="addTask" type="text" placeholder="Adicione uma nova tarefa">
        <button class="form-element" @click="addTask" >+</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            taskName:''
        }
    },
    methods:{
        addTask(){
            this.$emit('taskAdded', { name:this.taskName , pending:true })
            this.taskName = ''    
        }
    }
}
</script>

<style>
    .new-task{
    margin:35px
}
.form-element{
    outline: none;
    font-size: 2rem;
    border: 1px solid #fff;
    padding: 5px 10px 8px;
    color:#fff;
}
input.form-element{
    width: 500px;
    background:#FFF2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

button.form-element{
    border-left: none;
    background-color:#2196F3;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>