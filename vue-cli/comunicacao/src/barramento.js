import Vue from 'vue'
export default new Vue({
    
    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou',idade)
        },
        quandoIdadeMudar(callback){
            // console.log(callback)
            this.$on('idadeMudou', callback)
        }
    }

})