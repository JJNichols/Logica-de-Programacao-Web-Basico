// Forma de pagamento

const formaDePagamento = ["credito", "dinheiero", "parcelas ou vista -plano do pagamento"];

console.log (formaDePagamento[0]);
console.log (formaDePagamento[1]);
console.log (formaDePagamento[2]);

// ou

const formaDePagamento2 ={
    0: "credito",
    1: "dinheiro",
    2: "parcelas ou vista -plano do pagamento"
};
 
console.log (formaDePagamento2[0]);
console.log (formaDePagamento2[1]);
console.log (formaDePagamento2[2]);
 
// Quantos lanches foram vendidos


function vendidos(lancheDeFrango, lancheDeContraFile, lancheDeMisto){
  lancheDeFrango = 31.50
  lancheDeContraFile = 46.50
  lancheDeMisto = 18.00
  totalVendidos = (lancheDeFrango + lancheDeContraFile + lancheDeMisto)
  console.log(`Eu vendi três lanches por ${lancheDeFrango + lancheDeContraFile + lancheDeMisto} reais total!`);
  return totalVendidos
}
console.log(vendidos())

//ou
const lanches = ["Lanche de frango", "Lanche de contra file", "Lanche de misto"];

let lancheDeFrango2 = 31.50
let lancheDeContraFile2 = 46.50
let lancheDeMisto2 = 18.00
let totalVendidos2 = (lancheDeFrango2 + lancheDeContraFile2 + lancheDeMisto2)

console.log (lanches[0]);
console.log (lanches[1]);
console.log (lanches[2]);
console.log(`Eu vendi os três lanches: ${(lanches[0])} para ${lancheDeFrango2} reais, ${lanches[1]} para ${lancheDeContraFile2} reais, e ${lanches[2]} para ${lancheDeMisto2} reais em total valor de ${totalVendidos2} reais total`);

// ou (aprendei de internet)

const soma = [31.50, 46.50, 18.00].reduce(add, 0);
function add(accumulator, a) {
  return accumulator + a;
}
console.log(soma + " reais total para três lanches.");
 
// A média do valor da conta, ou seja 10 + 5 + 15 = 30 / 3 = 10

const media = array => array.reduce((a, b) => a + b) / array.length;

console.log(media ([10,5,15]));
 
// Qual lanche a pessoa quer, e usar um IF ELSE, Switch

let lanche = '0';

if(lanche == '0'){
  console.log("Ele quer um lanche!");
}
else if(lanche >= '1'){
  console.log("Ele quer sem lanche!");
}
else if(lanche > '2'){
  console.log("Ele quer mais queijo!")
}
switch  (lanche) {
  case '0':
    console.log('A Graziela quer um lanche de frango!');
    break;
  case '1':
      console.log('O Jason quer um lanche de file contra!');
    break;
  case '2':
      console.log('O Guilherme quer u mlanche de misto com ovo');
    break;
}