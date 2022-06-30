//conversao C -> F

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const graus_c = Number(input('Digite a temperatura em °C : '));
    
    //processamento;=
    const graus_f = (9*graus_c+160)/5

    //resultado
    print(`${graus_c} °C = ${graus_f} °F`);

}


main()