// Estrutura condicional IF

// Forma de pagamento da padaria

let food = "padaria";
let numero1 = "credito";
let numero2 = "debito";
let numero3 = "dinheiro";
let credito = 123
let dinheiro = 57

if ( food == "Forma de pagamento ") {
    console.log("Jason pagou 6 peças das padarias com " + (numero1));

} else if (food == "food sobrando"){
    console.log(`A mãe comprou 10 dos pães franceses com ${numero3} e eles comeram apenas 6 pães franceses e é sobrando ${10 - 6}`);

} else if (food == "qual do forma do pagamento ?"){
    console.log(`A forma do pagamento de ${numero1} por ${numero2} é igual a ${numero3}`)

} else if (food == "supermercado"){
    console.log(`Elise quer pagar em duas formas de pagamento e pagar R$ ${credito} no cartão de crédito e pagar R$ ${dinheiro} por dinheiro.`)
} else {
    console.log("Forma de paamento é inválida, informe um banco para resolver!")
}




//  Curso de Língua de sinais americana (ASL)

let cursoASL = 100; // 100 reais por hora
let cargoDeCursoASL = 60 // horas total complete curso

if(cursoASL * 60) {
    console.log("Preciso pagar curso ASL em total de " + (cursoASL * cargoDeCursoASL));
}
 
let serasa = 120;
let wiseHands = 90;
let caro = true;
let barato = false;

if (serasa < cursoASL){
    console.log("Qual valor de proposta é caro é " + serasa < cursoASL);

}else if (serasa == "caro"){
    console.log(`A curso ASL da proposta de Serasa é ${serasa} e caro porque ${serasa * cursoASL}!`);

}else if (wiseHands == "barato)") {
    console.log(`A curso ASL da proposta de Serasa é ${wiseHands} e barato!  ${barato}`);
}

if (serasa < cursoASL){
    console.log(`Qual valor de proposta é barato é ${wiseHands} ?`);

}else {
    console.log("Fazer um curso é mais barato na Wise Hands");
}

// medida de farinha

let media = 500; //500 ml
if(media > 325){
    console.log("Precisa mais farinha")
}
if(media - 325){
    console.log("Presisa buscar mais ml de farinha é " + (media - 325))
}
if(media = media){
    console.log("É a medida perfeita para a farinha e está pronta para fazer o bolo.")
}


if(media <= 501 && media > 499){
    console.log("é quase muito igual.")
}