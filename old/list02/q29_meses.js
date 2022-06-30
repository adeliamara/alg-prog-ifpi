//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    let months = Number(input('Entre com o valor em months: '));

    //processamento
    const years = Math.floor(months/12);
    months = months % 12

    //resultado

    print(`O resultado é de ${years} anos(s) ${months} mes(es)`);


}


main()