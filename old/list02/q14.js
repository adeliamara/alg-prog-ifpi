
import {print, input} from './\io_utils.js';

function main(){
    //entrada
    const n1 = Number(input('Digite a primeira nota: '));
    const n2 = Number(input('Digite a segunda nota: '));
    const n3 = Number(input('Digite a terceiro nota: '));
    const p1 = Number(input('Digite o peso 1: '));
    const p2 = Number(input('Digite o peso 2: '));
    const p3 = Number(input('Digite o peso 3: '));

    //processamento;=
    const media = (n1*p1 + n2*p2 + n3*p3)/(p1+p2+p3)

    //resultado
    print(`A média é ${media}`);

}

main()