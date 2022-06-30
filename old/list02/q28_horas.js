//Leia um número inteiro de horas, calcule e escreva quantas semanas,
// quantos dias e quantas horas ele corresponde.

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    let hours = Number(input('Entre com o valor em horas: '));

    //processamento
    const weeks = Math.floor(hours/168);
    const days = Math.floor((hours-weeks*168)/24);
    hours = hours - (weeks * 168 + days * 24);

    //resultado

    print(`O resultado é de ${weeks} semana(s), ${days} dia(s) e ${hours} hour(s)`);


}


main()