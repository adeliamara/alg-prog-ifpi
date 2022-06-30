//Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

import {print, input} from './\io_utils.js';

function main(){
    const idade_dias = Number(input('Entre com o valor em dias: '));

    const anos = Math.floor(idade_dias/365) 
    const resto = idade_dias%365
    const meses = Math.floor(resto/30)
    const dias = resto%30
  
    console.log(`${anos} ano(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)

}

main()