//Crie dois exemplos de operadores de atribuição

let cabelo = "loiro";
console.log(cabelo);

cabelo = "encaracolado";
console.log(cabelo);

cabelo += " lindo";
console.log(cabelo);


let caneta = "Faber Castell";
console.log(caneta);

caneta = "caneta";
console.log(caneta);

caneta += " roxa";
console.log(caneta);

//Crie dois exemplos de operadores unários

console.log(" ");
console.log("Escreva de 100 a 199");

let n1 = 101;
console.log(n1);
n1++;
console.log(n1);

console.log("Escreva nomes em ordem numérica ao contrário do alfabeto");

let n2 = 1000;
console.log(n2);
n2--;
console.log(n2);

//Crie dois exemplos de operadores binários

let n3 = 13;
console.log(n3 + 7);
n3++;
console.log(n3);

let n4 = 245;
console.log(n4 * 2);
n4--;
console.log(n4);

//Crie dois exemplos de operadores ternários

//OperadoresTernários

let hora = 7;
let saudacao = hora > 12 ? "Boa Tarde" : "Bom dia";
console.log(saudacao)

let salario = 1000;
let bonus = salario * (salario > 1000 ? 0.10 : 0.15);
console.log(bonus)

//Crie dois exemplos de operador E

let viajamosEuropa = true;
let letBuscarOnibus= false;
let PodemosIr = viajamosEuropa && letBuscarOnibus;
console.log(PodemosIr);
let viagamEmOperadorE = false
viagamEmOperadorE = !viagamEmOperadorE;
console.log(viagamEmOperadorE);

let tigela = true;
let laranja = true
let resultadoTigela = tigela && laranja;
console.log(resultadoTigela)
let tigelaLaranja = true;
tigelaLaranja = !tigelaLaranja
console.log(tigelaLaranja)

//Crie dois exemplos de operador OU

console.log("---Bolo---");
let chocolate = true;
let cobertraDeBaunilha = true;

let resultadoOu = chocolate || cobertraDeBaunilha;
console.log(resultadoOu);

let negacaoOU = !resultadoOu
console.log("Vou ganhar bolo de banana no meu aniversário? " + negacaoOU)


console.log("---Festa Revelação---");

let menino = true;
let menina = false;

let revelacaoOu = menino || menina;
console.log(revelacaoOu);

let revelacaoDeSexoOu =!revelacaoOu;
console.log("O casa terá uma menina! " + revelacaoDeSexoOu)
