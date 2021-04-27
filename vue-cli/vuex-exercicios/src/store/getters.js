//Podemos colocar aqui os getters genéricos , que não fazem parte de um módulo especifico.
export const getNome = state => state.nome
export const getNomeCompleto = state => state.nome + state.sobrenome