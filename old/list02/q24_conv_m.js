//conversao m ->cm

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const valor_m = Number(input('Digite o valor em metros: '));
    
    //processamento;=
    const valor_cm = valor_m / 100

    //resultado
    print(`${valor_m} m = ${valor_cm} cm`);

}


main()