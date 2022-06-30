import {print, input} from './\io_utils.js';

function main(){
    const saque = Number(input('Entre com o valor a ser sacado: '));

    const qtd_notas100 = Math.floor(saque/100) 
    let resto = saque%100
    const qtd_notas50 = Math.floor(resto/50)
    resto = resto%50
    const qtd_notas20 = Math.floor(resto/20) 
    resto = resto%20
    const qtd_notas10 = Math.floor(resto/10)
    resto = resto%10
    const qtd_notas5 = Math.floor(resto/5)
    resto = resto%5
    const qtd_notas2 = Math.floor(resto/2)
    resto = resto%2
    const qtd_notas1 = resto
  
    console.log(saque);
    console.log(`${qtd_notas100} nota(s) de R$ 100,00`)
    console.log(`${qtd_notas50} nota(s) de R$ 50,00`)
    console.log(`${qtd_notas20} nota(s) de R$ 20,00`)
    console.log(`${qtd_notas10} nota(s) de R$ 10,00`)
    console.log(`${qtd_notas5} nota(s) de R$ 5,00`)
    console.log(`${qtd_notas2} nota(s) de R$ 2,00`)
    console.log(`${qtd_notas1} nota(s) de R$ 1,00`)
    
}

main()