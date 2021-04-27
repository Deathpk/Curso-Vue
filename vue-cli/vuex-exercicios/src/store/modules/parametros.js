export default {
    state: { // Representa o estado central compartilhado do vuex
        quantidade: 1,
        preco: 10.00
    },

    mutations: { // Responsável por alterar o estado global da aplicação.

        setQuantidade(state,payload){
            state.quantidade = payload
        },
        setPreco(state,payload){
            state.preco = payload
        }
    },
}