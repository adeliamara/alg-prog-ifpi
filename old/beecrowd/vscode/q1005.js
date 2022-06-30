import {print, input} from './\io_utils.js';

function main(){
    const A = Number(input('Entre com o numero a '));
    const B = Number(input('Entre com o numero b '));
    
    const MEDIA = (A *3.5 + B *7.5)/11
    
    console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
   
}

main()