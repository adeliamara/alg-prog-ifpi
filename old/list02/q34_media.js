//34. Leia 3 números, calcule e escreva a média dos números.

import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const n1 = Number(input('Digite a primeira nota: '));
    const n2 = Number(input('Digite a segunda nota: '));
    const n3 = Number(input('Digite a terceiro nota: '));
   

    //processamento;=
    const media = (n1 + n2 + n3)/(3)

    //resultado
    print(`A média é ${media}`);

}

main()