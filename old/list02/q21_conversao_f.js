//conversao F -> C

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const graus_f = Number(input('Digite a temperatura em °C : '));
    
    //processamento;=
    const graus_c = (5*graus_f-160)/9

    //resultado
    print(`${graus_f} °C = ${graus_c} °F`);

}


main()