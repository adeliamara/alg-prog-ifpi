//volume de uma esfera

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const raio = Number(input('Digite o raio: '));
    const pi = 3.14;
    

    //processamento;=
    const volume = (4 * pi * raio ** 3)/3

    //resultado
    print(`Volume: ${volume}`);

}


main()