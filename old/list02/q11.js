//11.Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const num = input('Insira um número com tres digitos: ');

    //processamento
    const C = num[0];
    const D = num[1];
    const U = num[2];

    const result = U+D+C;

    //resultado
    print(`O inverso é de ${result}`);

}


main()