// Uma função que recebe uma String como parâmetro e retorna uma Saudação.

function saudacoesRetorna(String){
    let pegueString = "Olá, bom dia!";
    let retornaSaudacoes = "Bom dia";
    return retornaSaudacoes;
}

console.log(saudacoesRetorna());


// Uma função que recebe uma idade e retorna esta idade em dias. 

function retornaDeDias(){
    let idadeInput = 24;

    let idade1 = (idadeInput) * 365;
    return idade1;

}

console.log(retornaDeDias());

// Uma função que recebe um número e devolve o mês que combina com o número

//tomar número entre 1 a 12 e devolver o mês
 
function retornodeMeses(string) {
    let stringMes = "0";
    let mesNumero = "4";
   
    if (mesNumero == 1) {
        stringMes = "janeiro";
    }
    else if (mesNumero == 2) {
        stringMes = "fevereiro";
 
    }
    else if (mesNumero == 3) {
        stringMes = "março";
 
    }
    else if (mesNumero == 4) {
        stringMes = "abril";
 
    }
    else if (mesNumero == 5) {
        stringMes = "maio";
 
    }
    else if (mesNumero == 6) {
        stringMes = "junho";
 
    }
    else if (mesNumero == 7) {
        stringMes = "julho";
 
    }
    else if (mesNumero == 8) {
        stringMes = "agosto";
 
    }
    else if (mesNumero == 9) {
        stringMes = "setembro";
 
    }
    else if (mesNumero == 10) {
        stringMes = "outubro";
 
    }
    else if (mesNumero == 11) {
        stringMes = "novembro";
 
    }
    else if (mesNumero == 12) {
        stringMes = "dezembro";
    }
    else {
        stringMes ="Nenhum número para aquele mês."
    }
 
 
    return stringMes;
 
}
 
console.log(retornodeMeses());
