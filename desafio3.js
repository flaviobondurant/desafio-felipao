
class heroi{
    constructor(nome, idade, tipo){
            this.nome = nome
            this.idade = idade
            this.tipo = tipo
        
        
        }

        saida(){
            let golpe;

                if  (this.tipo === "Mago"){
                golpe = "Magia";
                }
                else if (this.tipo === "Guerreiro"){
                golpe = "Espada";
                 }
                 else if (this.tipo === "Monge"){
                golpe = "Artes Marciais";
                 }
                 else if (this.tipo === "Ninja"){
                golpe = "Shoriuken"
                 }


            console.log(`o ${this.tipo} atacou usando ${golpe}`);
        }

        
}





let magoo = new heroi ("Magoo", 1200, "Mago")
let guerreito = new heroi ("Guerreiru", 3000, "Guerreiro")



magoo.saida()
guerreito.saida()



//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)
