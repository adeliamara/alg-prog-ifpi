import {print, input} from './\io_utils.js';


function main(){
    //entrada
    const velocidade_kmh = Number(input('Entre com a velocidade em km/h: '));

    //processamento;=
    const velocidade_ms = velocidade_kmh / 3.6;

    //resultado
    print(`velocidade = ${velocidade_ms.toFixed(2)} m/s`);

}

main()