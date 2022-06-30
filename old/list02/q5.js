import {input, print} from './\io_utils.js';

function main(){
    //entrada
    const num = input('Insira um número com tres digitos: ');

    //processamento
    const C = Number(num[0]);
    const D = Number(num[1]);
    const U = Number(num[2]);

    const result = C + D + U;

    //resultado
    print(`O resultado é de ${result}`);

}


main()