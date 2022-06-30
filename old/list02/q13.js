

//13.Leia um valor em real (R$), calcule e escreva 70% deste valor.

import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const valor = Number(input('Insira um valor: '));

    //processamento
    const novo_valor = valor * 0.70;

    //resultado
    print(`70% desse valor é: ${novo_valor}`);

}


main()