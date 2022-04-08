const nome = "Cleo";
const idade = 4;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const Pedido = `${nome} diz " Por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(Pedido)
