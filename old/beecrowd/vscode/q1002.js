import {print, input} from './\io_utils.js';

function main(){
    const raio = Number(input('Raio'));
    const PI = 3.14159;
    
    const area = PI * Math.pow(raio, 2);
    
    console.log(`A = ${area}`);
   
}

main()