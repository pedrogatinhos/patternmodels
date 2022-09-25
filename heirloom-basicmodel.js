function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -=quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
}
Camiseta.prototype = Object.create(Produto.prototype); //cria um objeto invocado dentro do prototype
Camiseta.prototype.constructor = Camiseta;              //como o prototype ja ta redefinido, ele só altera o nome da chave
                                                        //checar console.log ./aula 95.herança