//10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const a = Number(input('Digite o primeiro numero: '));
    const b = Number(input('Digite o segundo numero: '));


    //processamento;=
    const quociente = Math.floor(a/b);
    const resto = a%b;

    //resultado
    print(`O quociente é ${quociente}`);
    print(`O resto é ${resto}`);

}

main()