// class declara uma classe.
// constructor deve ser sempre a função principal.
// this substitui o comando let quando dentro de uma classe. ( variavel)



class heroi{
    constructor(nome, idade, tipo){
            this.nome = nome
            this.idade = idade
            this.tipo = tipo
        }

    ataque(){
            if (tipo = "Mago")
                ataque = "Magia";
        }


        saida(){
            console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
        }

        
}


let magoo = new heroi ("Magoo", 1200, "Mago")


magoo.saida()

// pendente criar estrutuda de f-definição para o ataque de acordo com o tipo do heroi 
//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)