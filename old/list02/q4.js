import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const conversion = Number(input('Entre com o valor de conversão de real em dolar: '));
    const dol = Number(input('Entre com o valor do dolar: '));


    //processamento
    const real = conversion * dol

    //resultado

    print(`${dol} dolares equivalem a ${real} reais`);


}


main()