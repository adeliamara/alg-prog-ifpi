//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import  {input, print} from './\io_utils.js';

function main(){
    //entrada
    const nibble = input('Insira um binario com 4 bits: ');

    //processamento
    const b3 = Number(nibble[0]);
    const b2 = Number(nibble[1]);
    const b1 = Number(nibble[2]);
    const b0 = Number(nibble[3]);


    const result = b3 * 2 ** 3 + b2 * 2 ** 2 + b1 * 2 ** 1 + b0 * 1

    //resultado
    print(`O resultado é de ${result}`);

}


main()