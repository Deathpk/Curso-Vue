import Vue from 'vue'
export default  new Vue({
    methods: {
        showUsuarioInfo(usuario){
            this.$emit('showUser',usuario)
        },

        listenToUsuario(callback){
            this.$on('showUser',callback)
        }
    }
})