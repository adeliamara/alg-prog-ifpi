// 39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:o.

import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const A = Number(input('Digite o numero A: '));
    const B = Number(input('Digite o numero B: '));
    const C = Number(input('Digite o numero C: '));


    //processamento;=
    const R = (A + B) ** 2;
    const S = (B + C) ** 2;
    const D = (R + S)/2;

    //resultado
    print(`D=  ${D}`);

}

main()



