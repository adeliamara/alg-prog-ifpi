//35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
//número = 9534 ; soma = 9+5+3+4 = 21.

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const num = input('Insira um número com quatro digitos: ');

    //processamento
    const M = Number(num[0]);
    const C = Number(num[1]);
    const D = Number(num[2]);
    const U = Number(num[3]);

    const result = M + C + D + U;

    //resultado
    print(`O resultado é de ${result}`);

}


main()