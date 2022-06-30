//7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const a = Number(input('Digite o primeiro numero: '));
    const b = Number(input('Digite o segundo numero: '));
    const c = Number(input('Digite o terceiro numero: '));

    //processamento;=
    const sum = a + b;
    const dif = b - c;

    //resultado
    print(`A soma é ${sum} e a diferença ${dif}`);

}

main()