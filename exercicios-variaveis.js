// Exercício 01:
// Declara duas variáveis, uma o seu nome e outra com o seu sobrenome, e então a variável nomeCompleto e mantém tudo junto.
// Exemplo: "Cesar Michelin"

var nome = "Cleonilson ";
var Sobrenome = "Carvalho";
var nomeCompleto = nome + Sobrenome;

console.log(nomeCompleto)

//Exercício 02:
// Declarar e três variáveis, uma com o seu 'nome', outra com o seu 'sobrenome' e outra com a sua 'idade'.
// Então, declare uma variável com nome resultado e atribua uma string unindo suas variáveis ​​da seguinte forma: "João Silva terá 30 anos"
// e utilize o console.log para mostrar o que acontece. Respeite os espaços!
// Resolução:

var nome = " Cleonilson ";
var sobrenome = " Carvalho ";
var idade =  2022 - 1983;

var resultado = nome + sobrenome + " terá " + idade + " anos";
console.log(resultado)

//Exercício 03:
// Defina duas variáveis: umNumeroPequeno e umNumeroGrande, e atribua a eles dois valores numéricos diferentes de acordo com seus nomes.
// Então defina a variável eMenor e atribua o resultado da comparação se umNumeroPequeno é menor do que umNumeroGrande; e defina a variável eMaior,
// com o resultado da comparação umNumeroPequeno é maior que umNumeroGrande.

var umNumeroPequeno  = 2;
var umNumeroGrande = 100;
var eMenor = (umNumeroPequeno < umNumeroGrande);
var eMaior = (umNumeroPequeno > umNumeroGrande);

console.log(eMenor)
console.log(eMaior)


//condicionais:
//Exercício 04; 
// Declara uma variável diaDeSemana que recebe uma string "domingo". Depois implemente uma condicional usando o if que compare se
// diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string "Hoje é dia de futebol!!!".

var diaDeSemana = "Domingo";
if(diaDeSemana === "Domingo" ) {
    console.log(" Hoje é dia de futebol!!!")
}else{
    console.log("dia comum")
}

// Exercício 05:
//função;
// Define uma função hojeSeJoga, que aumenta por parâmetro uma string que informa o dia da semana. Esta função deve retornar "Hoje é dia de futebol!!!"
// se parâmetro para "domingo", caso contrário deve retornar "Hoje não é dia de futebol :(".

function hojeSeJoga(diaDeSemana){
    if(diaDeSemana === "domingo") {
 return " hoje é dia de futebol!";
    }else {
        return " hoje não é dia de futebol"
    };
};
console.log(hojeSeJoga("domingo"))
console.log(hojeSeJoga("terça"))

// Exercício 06
// Definido a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.

function maior(num1,num2 ) {
    if(num1 > num2) {
        return num1 + " maior "; 
    }else{
        return num2 +" maior ";
    }
};
console.log(maior(111,56))

// Exercício 07:
// Podemos dizer que é um número da sorte se o número: 1-é positivo 2-é um múltiplo de 2 ou 3 3-não é 15
// Escreva a função eNumeroDaSorte que, recebendo um número, diz se é um número da sorte (true). Lembre-se de que o número deve
// obedece às condições mencionadas. Seu desafio adicional será: NÃO use o if.
    function numerodasorte(num1) {
        return num1 >= 1 && num1 % 2 == 0 && num1 != 15;
    }
    console.log(numerodasorte(4))

// Exercício 08:
// Defina a função possorAo parâmetrosBanco que, mais dois, o primeiro é diaDaSemana (string) eo
// segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.    

function bancoAberto(diaDaSemana, horaAtual) {
   return diaDaSemana != "sabado" && diaDaSemana != "domingo" && horaAtual >= 8 && horaAtual <= 15;
}
console.log(bancoAberto("segunda", 9))
console.log(bancoAberto("terca", 11))
console.log(bancoAberto("domingo", 3))

// Exercício 09:
// Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string)
// e o número de milhas que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa é ou não (true / false), um filósofo Hipster.
// Tenha em mente que um filósofo Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 milhas por dia.
 
function filosofoHipster(profissao, nacionalidade, numeromilha) {
 if (profissao == "musico" && nacionalidade == "brasil" && numeromilha == 2) {
      return true;
}else {
    return false;
};
};
console.log(filosofoHipster("musico", "brasil", 2)) 
console.log(filosofoHipster("médico", "brasil", 2)) 
console.log(filosofoHipster("musico", "brasil", 3)) 

// Exercício 10:
// Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária que uma pessoa tem.
// Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.

function podeSeAposentar(idade, sexo, anosDecontribuicao ){
   if(idade >= 65 && sexo == "masculino" && anosDecontribuicao >= 30) {
       return " Homen pode se aposentar.";
   }
   if(idade >= 60 && sexo == "feminino" && anosDecontribuicao >= 30) {
       return " Mulher pode se apaserntar.";
   } else {
       return " Cidadão(o) náo se encaixa nos requisítos para se aposentar.";
   }
 }
 console.log(podeSeAposentar(65, "masculino", 31))
 console.log(podeSeAposentar(65, "feminino", 31))
 console.log(podeSeAposentar(60, "masculino", 31))

// Exercício 11:
// Definido podeSubir, receber a função3 (numero: alturaComCompania), temProblemaCardiaco (booleano), retorna true ou false
//conforme o caso. Levar em conta as condições mencionadas acima.
// Condições: 1- Atingir a altura mínima de 1,5 m (ou 1,2 m, se igual a um adulto) 2- Não ter qualquer problema cardíaco.

function podeSubir(alturaComCompania, temProblemaCardiaco){
    if(alturaComCompania >= 1.5 || alturaComCompania >= 1.2 && temProblemaCardiaco == false) {
        return true;
    }else {
        return false;
    }
}
console.log(podeSubir(1.5, false))

// Exercício 09:
// Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de acordo com o parâmetro. Dica: nessa função você pode usar vários if.
// Resolução:

function medalha(podio) {
    if(podio == 1) {
        return "medalhade ouroo";
    };
    if(podio == 2) {
        return "medalha prata";
    };
    if (podio == 3) { 
        return "medalha de bronze";
    }else {
        return "Não ganhou medalha"
    };    
};
   console.log(medalha(1))
   console.log(medalha(2)) 
   console.log(medalha(3))
   console.log(medalha(4))