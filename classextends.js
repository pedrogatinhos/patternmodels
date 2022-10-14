class Familia {
    constructor(sobrenome, parentesco, pais){

        this.sobrenome = sobrenome;
        this.parentesco = parentesco
        this.pais = pais
        
    
       
    }
    
}

class Pessoa extends Familia {
    constructor (nome, sobrenome, parentesco, pais){
    super(sobrenome, parentesco, pais)
    this.nome = nome
    
    }
}

// const p1 = new Familia('pedro', 'henrique')

const p2 = new Pessoa ('lucas', 'henrique','bilbon','africa')
console.log(p2)