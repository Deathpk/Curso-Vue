new Vue({
    el: '#app',
    data: {
        running: false, // Game Iniciado?
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
       startGame(){
           this.running = true
       },
       resetGame(){
           this.running = false,
           this.playerLife = 100,
           this.monsterLife = 100,
           this.logs = []
        },
        attack(special){
            this.hurt('monsterLife', 5 , 10 , special , 'Player', 'Monster', 'Player')
            if(this.monsterLife > 0){
                this.hurt('playerLife', 7 , 12 , false , 'Monster', 'Player' , 'Monster')
            }
        },
        hurt(targetProperty , min, max , special , source , target, cls){
            const specialDamage = special ? 5 : 0
            const dealDamage = this.getRandom(min + specialDamage , max + specialDamage)
            this[targetProperty] = Math.max(this[targetProperty] - dealDamage, 0) // Se a diferença for negativa , o maior numero será 0.
            this.registerLog(`${source} atingiu ${target} com ${dealDamage}.`, cls)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        },

        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'Monster')
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'Player')
        },
    },
    watch: {
        hasResult(value){
            if (value) this.running = false
        }
    }
})