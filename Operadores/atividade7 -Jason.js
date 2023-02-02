let filhos = "Blue";
console.log(filhos);

filhos = "Lola";
console.log(filhos);

filhos = "Shadow";
console.log(filhos);

filhos = "Zyan";
console.log(filhos);

//Operadores Unários

console.log ("Idades dos filhos");

let f1 = "Blue";
let f2 = "Lola";
let f3 = "Shadow";
let f4 = "Zyan";
let idadef1 = 12
let idadef2 = 10
let idadef3 = 7
let idadef4 = 1
console.log(f1, + idadef1)
console.log(f2, + idadef2)
console.log(f3, + idadef3)
console.log(f4, + idadef4)
console.log("O Blue é mais velho que " + f2);
console.log(`Os idades do filhos são ${idadef1}, ${idadef2}, ${idadef3}, ${idadef4}.`);
console.log('O idade certo do Blue é ' + idadef1);
console.log(`O idade do Zyan é ${idadef4}.`)


idadef2++;
console.log (idadef2)
idadef4--;
console.log(idadef4);
idadef1--;
console.log(idadef1);

//Operadores Binários

let comparacao = idadef1 > idadef4; // True or False
console.log("Os idades da comparação entre os gatos é " + comparacao);

let comparacao2 = idadef3 < idadef2;
console.log("Os idades da comparação entre os gatos é " + comparacao2);

let compaacao3 = idadef4 == idadef2;
console.log(compaacao3);

let comparacao4 = f1 != f3;
console.log(comparacao4);

let Pai = 1954;
let Mãe = 1955;
console.log (Pai - Mãe);
let comparacao5 = 2023 - 1955;
console.log ("O idade do meu pai é " + comparacao5);
let comparacao6 = Pai > Mãe;
console.log("Meu pai e mais jovem do que minha mãe? "  + comparacao6);

// Operador Ternário
let hora = 8;
let resultado = hora < 15 ? "manhã" : "noite";
console.log(`O resultado da hora o Zyan nasceu à tarde é ${resultado}.`)

let age = 47;
let diferençaDeIdade = age - idadef3;
console.log(diferençaDeIdade);
console.log(`A diferença de idade entre Athos e Shadow é ${diferençaDeIdade}.`);

let idade2 = 18
let soma = 18 - 11;
console.log(soma);
console.log(`Lola pode beber cerveja ${soma} anos depois!`);

let idadeLegalParaBeber = false;
let idadeSemPais = false; 
let resultadoOperadorE = idadeSemPais || idadeLegalParaBeber;
console.log(`Um menino de 11 anos pode beber cerveja e sair sem os pais à noite é ${resultadoOperadorE}.`)

console.log("---Filmes Adultos---");
let dezitoAnosOuMais = true;
let  graficoSexual= true;

let resultadoOu = dezitoAnosOuMais || graficoSexual;
console.log(resultadoOu);

let regrasOU = !resultadoOu
console.log("Meu filho de 14 anos pode assistir filmes adultos? " + regrasOU)


console.log("---Posto Gasolina---")

let tanque = 40; //40 litros
let tanqueAtual = 5; //5 litros
let alcool = false;
let gasolina = true;
let modelo = "Ford";
console.log(tanque - tanqueAtual)
console.log (`O carro do ${modelo} é lindo!`);

let comparacao3 = gasolina < alcool; // True or False
console.log("O Ford pode tomar alcool é " + comparacao3);

modelo = true;
let laranja = true
let resultadoModelo = modelo && laranja;
console.log(resultadoModelo)
let carroLaranja = true;
carroLaranja = !carroLaranja
console.log(carroLaranja)

let vermelho = false;
let Escort = false; 
let resultadoOperadorE2 = vermelho || Escort;
console.log(`O Ford carro é vermelho e o Escort é ${resultadoOperadorE2}.`)

//Operador Ternário 
let precisarGas = 40;
let quantoFalta = precisarGas - tanqueAtual;
console.log(quantoFalta);
console.log(`O carro precisa de ${quantoFalta} litros para abastecer.`);


let colocarGas = 35;
let add = colocarGas * (colocarGas > 40 ? 0.05 : 0.15);
console.log(add)


let colocarGasNoFord = 35; //35 litros
let resultado2 = colocarGasNoFord < tanqueAtual ? "gás Cheio" : "gás vazio";
console.log(`O resultado da gás do Ford é ${resultado2}.`)

console.log("---Ford carro---");
let preto = true;
let carroAutomatico  = true;

let resultadoOu2 = preto || carroAutomatico;
console.log(resultadoOu2);

let comprarOU = !resultadoOu2
console.log("Meu filho tem o carro é " + comprarOU)


