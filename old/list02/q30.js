//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
//corresponde.

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const entrada_minutos = Number(input("Entre com o valor em minutos: "));

    //processamento
    const dias = Math.floor(entrada_minutos/1440);
    const horas = Math.floor((entrada_minutos - dias * 1440)/60);
    const minutos = entrada_minutos - (dias * 1440 + horas * 60);

    //resultado
    print(`${entrada_minutos} minutos = ${dias} dias, ${horas} horas e ${minutos} minutos`)

}

main()