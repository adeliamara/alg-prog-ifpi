//comprimento de uma circunferencia

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const raio = Number(input('Digite o raio: '));
    const pi = 3.14;
    

    //processamento;=
    const comprimento = 2 * pi * raio

    //resultado
    print(`Comprimento: ${comprimento}`);

}


main()