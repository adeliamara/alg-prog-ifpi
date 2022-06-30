//conversao km -> m

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const valor_km = Number(input('Digite o valor em km'));
    
    //processamento;=
    const valor_m = valor_km * 1000

    //resultado
    print(`${valor_km} Km = ${valor_m} m`);

}


main()