import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const hours = Number(input('Entre com o valor em horas: '));
    const minutes = Number(input('Entre com o valor em minutos: '));

    //processamento
    const result = hours * 60 + minutes;

    //resultado

    print(`O total de minutos é ${result}`);


}


main()