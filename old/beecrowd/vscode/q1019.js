//Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

import {print, input} from './\io_utils.js';

function main(){
    const entrada_segundos = Number(input('Entre com o valor em segundos: '));

    const horas = Math.floor(entrada_segundos/3600) 
    let resto = entrada_segundos%3600
    const minutos = Math.floor(resto/60)
    resto = resto%60
    const segundos = resto
  
    console.log(`${horas}:${minutos}:${segundos}`)

}

main()