//area retangulo

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const base = Number(input('Digite a base: '));
    const altura = Number(input('Digite a altura: '));
    

    //processamento;=
    const area = base*altura

    //resultado
    print(`Area: ${area}`);

}


main()