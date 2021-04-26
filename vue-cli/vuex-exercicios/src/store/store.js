import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // Representa o estado central compartilhado do vuex
        produtos: []
    },
    getters: {
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },

    mutations: { // Responsável por alterar o estado global da aplicação.
        adicionarProduto(state,payload){ // payload = produto
            state.produtos.push(payload)
        }
    },
    actions: {
        adicionarProduto(context, payload) {
            setTimeout(() => {
                context.commit('adicionarProduto',payload)
            }, 1000)
        }
    }
})