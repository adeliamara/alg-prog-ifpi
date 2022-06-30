import {input, print} from './\io_utils.js';

function main(){
    //entrada
    let metros = Number(input('Entre com o valor em metros: '));

    //processamento
    const km = Math.floor(metros/1000);
    metros = metros % 1000; 

    //resultado

    print(`O resultado é de ${km} km(s) e ${metros} metros(s)`);


}


main()