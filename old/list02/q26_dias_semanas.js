import {input, print} from './\io_utils.js';

function main(){
    //entrada
    let dias = Number(input('Entre com o valor em dias: '));

    //processamento
    const semanas = Math.floor(dias/7);
    dias = dias % 7; 

    //resultado

    print(`O resultado é de ${semanas} semana(s) e ${dias} dias(s)`);


}


main()