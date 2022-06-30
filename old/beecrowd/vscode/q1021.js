import {print, input} from './\io_utils.js';

function main(){
    const saque = Number(input('Entre com o valor a ser sacado: '));

    //separa parte menores que 1
    const saque_inteiro = Math.floor(saque)
    const saque_decimal = (saque - saque_inteiro)*100
    
    //calcula cedulas + moeda 1 real
    const qtd_notas100 = Math.floor(saque_inteiro/100) 
    let resto = saque_inteiro%100
    const qtd_notas50 = Math.floor(resto/50)
    resto = resto%50
    const qtd_notas20 = Math.floor(resto/20) 
    resto = resto%20
    const qtd_notas10 = Math.floor(resto/10)
    resto = resto%10
    const qtd_notas5 = Math.floor(resto/5)
    resto = resto%5
    const qtd_notas2 = Math.floor(resto/2)
    const qtd_moedas_1real = resto%2
    
    //valores menores do que 1
    const qtd_moedas_50 = Math.floor(saque_decimal/50)
    resto = saque_decimal%50
    const qtd_moedas_25 = Math.floor(resto/25)
    resto = resto%25
    const qtd_moedas_10 = Math.floor(resto/10)
    resto = resto%10
    const qtd_moedas_5 = Math.floor(resto/5)
    const qtd_moedas_1 = Math.floor(resto%5)
  
    //saida
    console.log('NOTAS:');
    console.log(`${qtd_notas100} nota(s) de R$ 100.00`)
    console.log(`${qtd_notas50} nota(s) de R$ 50.00`)
    console.log(`${qtd_notas20} nota(s) de R$ 20.00`)
    console.log(`${qtd_notas10} nota(s) de R$ 10.00`)
    console.log(`${qtd_notas5} nota(s) de R$ 5.00`)
    console.log(`${qtd_notas2} nota(s) de R$ 2.00`)
    
    console.log('MOEDAS:');
    console.log(`${qtd_moedas_1real} moeda(s) de R$ 1.00`)
    console.log(`${qtd_moedas_50} moeda(s) de R$ 0.50`)
    console.log(`${qtd_moedas_25} moeda(s) de R$ 0.25`)
    console.log(`${qtd_moedas_10} moeda(s) de R$ 0.10`)
    console.log(`${qtd_moedas_5} moeda(s) de R$ 0.05`)
    console.log(`${qtd_moedas_1} moeda(s) de R$ 0.01`)

}

main()
