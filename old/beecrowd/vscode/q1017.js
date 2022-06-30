import {print, input} from './\io_utils.js';

function main(){
    const tempo = Number(input('Entre com o numero a '));
    const velocidade = Number(input('Entre com o numero a '));

    const distancia = tempo * velocidade
    const litros = distancia/12
    
    console.log(litros.toFixed(3))
    
}

main()