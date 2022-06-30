//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).


import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const a = Number(input('Digite o primeiro numero: '));
    const b = Number(input('Digite o segundo numero: '));

    //resultado
    print(`A ordem inversa de (${a}, ${b}) é (${b}, ${a})`);

}

main()