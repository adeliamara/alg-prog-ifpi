//33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
//(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const num = input('Insira um número com tres digitos: ');

    //processamento
    const C = num[0];
    const D = num[1];
    const U = num[2];

    const result = Number(C+D+U) + Number(U+D+C);

    //resultado
    print(`O inverso é de ${result}`);

}


main()