<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade é: {{ idade }} </p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:{
        nome: {
            type: String,
            // required:true
            default:'Jubileu'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome(){
            // return this.nome
             return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            const antigo = this.nome
            this.nome = "Pedro"
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo
            })
        }
    },
    created() { // Método de ciclo de vida
        barramento.quandoIdadeMudar( idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
