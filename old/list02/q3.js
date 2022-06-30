import {input, print} from './\io_utils.js';

function main(){
    //entrada
    let minutes = Number(input('Entre com o valor em minutos: '));

    //processamento
    const hours = Math.floor(minutes/60);
    minutes = minutes % 60; 

    //resultado

    print(`O resultado é de ${hours} hora(s) e ${minutes} minuto(s)`);


}


main()