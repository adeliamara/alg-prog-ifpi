import { input} from './\io_utils.js';

function main(){
    const valores = input('entre com os valores a, b e c separados por espaço')
    const [A,B,C] = valores.split(' ').map(Number)
    
const delta = Math.pow(B,2) - 4 * A * C
    if(delta < 0 ){
        console.log('Impossivel calcular')
    }
    else if( A === 0){
        console.log('Impossivel calcular')
    }    
    else{
        const R1 = (-B  + Math.sqrt(delta))/(2 * A)
        const R2 = (-B  - Math.sqrt(delta))/(2 * A)
        console.log('R1 =', R1.toFixed(5))
        console.log('R2 =', R2.toFixed(5))
    }

}

main()