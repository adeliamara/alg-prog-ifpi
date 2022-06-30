import {print, input} from './\io_utils.js';


function main(){
    //entrada
    const velocidade_ms = Number(input('Entre com a velocidade em m/s: '));

    //processamento;=
    const velocidade_kmh = velocidade_ms * 3.6;

    //resultado
    print(`velocidade = ${velocidade_kmh.toFixed(2)} km/h`);

}

main()