//8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const a = Number(input('Digite o primeiro numero: '));
    const b = Number(input('Digite o segundo numero: '));


    //processamento;=
    const result = (a + b)/(a-b);

    //resultado
    print(`O resultado é ${result}`);

}

main()