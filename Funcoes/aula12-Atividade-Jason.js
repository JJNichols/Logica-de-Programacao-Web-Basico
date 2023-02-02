// Escrevendo para pegar em dois parâmetros (um para salário, um para percentagem de aumento) e calcular o valor total do novo aumento salarial

function salario(meuSalario, salarioAumentar){
    meuSalario = 500.00
    salarioAumentar = .10
    totalSalario = (meuSalario * salarioAumentar)
    return meuSalario + totalSalario
   
}
console.log(salario())

// ou outra forma - PRATICAAAAAA!!!!!

function salario2(meuSalario2, salarioAumentar2){
    meuSalario2 = 700.00
    salarioAumentar2 = .20
    totalSalario2 = (meuSalario2 * salarioAumentar2)
    console.log(`Meu salário vai aumentar é ${meuSalario2 * salarioAumentar2} reais mais!`);
    return meuSalario2 + totalSalario2
}
console.log(salario2())