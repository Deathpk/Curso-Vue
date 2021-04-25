<template>
    <div>
       <Rotulo nome="Nome">
           <input type="text" @input="alterarNome" :value="value.nome">
       </Rotulo>

        <Rotulo nome="Sobrenome">
            <input type="text" @input="alterarSobrenome" :value="value.sobrenome">
        </Rotulo>

    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'
export default {
    components:{Rotulo},
    props:{
        value:{
            type:Object ,
            required: true
        }
    },
    methods:{
        alterarNome(event){
            this.$emit('input',
                {
                    nome: event.target.value ,
                    sobrenome: this.value.sobrenome
                } 
            )
        },
        alterarSobrenome(event){
            this.$emit('input',
                {   
                    nome: this.value.nome ,
                    sobrenome: event.target.value 
                }
            )
        }
    }
}
</script>

<style scoped>
.elemento {
    display: flex;
    align-self: stretch;
    margin: 10px 0px;
}

input, textarea, select {
    flex: 1;
    font-size: 1.4rem;
    outline: none;
    border: 1px solid #DDD;
    border-radius: 5px;
    padding: 5px 10px;
}


input:focus {
    border: 1px solid #BBB;
}
</style>