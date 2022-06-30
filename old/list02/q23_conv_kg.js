import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const valor_kg = Number(input('Digite o valor em kg'));
    
    //processamento;=
    const valor_g = valor_kg * 1000

    //resultado
    print(`${valor_kg} Kg = ${valor_g} g`);

}


main()