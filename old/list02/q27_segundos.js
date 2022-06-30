import {input, print} from './\io_utils.js';

function main(){
    //entrada
    let segundos = Number(input('Entre com o valor em segundos: '));

    //processamento
    const hours = Math.floor(segundos/3600);
    const minutes = Math.floor((segundos-hours*3600)/60);
    segundos = segundos - (hours * 3600 + minutes * 60);

    //resultado

    print(`O resultado é de ${hours} hora(s), ${minutes} minuto(s) e ${segundos} segundo(s)`);


}


main()