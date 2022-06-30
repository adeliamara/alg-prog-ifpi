import {print, input} from './\io_utils.js';

function main(){
    const X = Number(input('Entre com o numero a '));
    const Y = Number(input('Entre com o numero b '));
    
    const eficiencia = X/Y
    
    console.log(`${eficiencia.toFixed(3)} km/l`)
    
}

main()
    
    