//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const entrada_dias = Number(input("Insira a sua idade em dias "));

    //processamento
    const anos = Math.floor(entrada_dias/365);
    const meses = Math.floor((entrada_dias - anos * 365)/30);
    const dias = entrada_dias - (anos * 365 + meses * 30);

    //resultado
    print(`${entrada_dias} dias = ${anos} anos, ${meses} meses e ${dias} dias`)

}

main()