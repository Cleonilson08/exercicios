//exercio 01
// a função multiplicar que adicionar dois dois, multiplique-os e ressarcimento do resultado da multiplicação.

function multiplicar(num1, num2){
   return num1 * num2;
}
console.log(multiplicar(6,08))

//exercicio 02
//Agora pedimos que você declare uma função triploDaSoma() que recebe dois parâmetros. Então você tem que adicionar ambos e retornar
// três vezes o valor do resultado da soma dos dois parâmetros . Será preciso declarar uma função triplo,
// que recebe um parâmetro e retorna o valor dele multiplicado por três.

function triplo(numero1){
    return numero1* 3;
}
function triploSoma(num1, num2) {
    var soma = num1 + num2;
    return triplo(soma)
}
console.log(triplo)
console.log(triploSoma(8,8))

//exercicio 03
// Vamos criar uma função de perímetro que nos diga os perímetros de um círculo quando damos a ele o raio como parâmetro.
// Também a área de função que nos dá uma área de um círculo quando recebe o raio como parâmetro.
// Lembre-se de usar o valor de 3.14 no lugar do π . perímetro = π * raio * 2; área = π * raio * raio;

function perimetro(raio) {
   return perímetro = 3.14 * raio * 2;
}
console.log("Perimentro, " + (perimetro(4)))
function area(raio) {
    return area = 3.14 * raio * raio;
}
console.log("area, "+ area(4))


//exercicio 04
// Escreva a função escrever Cartao, que recebe parâmetros como um título, e um nome e retorna uma string única como resultado.
function Cartao(titulo, nome, sobrenome) {
   informacao = titulo + "" + nome + "" + sobrenome;
   return informacao; 
}
console.log(Cartao('pr ', 'cleo ', 'carvalho ' ))

// Exercício 05
// Escreva uma função Probabilidade(), que não recebe os parâmetros a gerar de probabilidade de chuva e retornam aleatoriamente (função automática do Math.random).

function Probabilidade() {
     matematica= Math.random()*100;
     return matematica;
}
console.log( Probabilidade(1))


























