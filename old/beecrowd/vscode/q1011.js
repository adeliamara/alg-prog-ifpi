import {print, input} from './\io_utils.js';

function main(){
    const raio = Number(input('Raio'));
    const PI = 3.14159;
    
    const volume = 4/3 * PI * Math.pow(raio, 3);
    
    console.log(`VOLUME = ${volume.toFixed(3)}`);
   
}

main()