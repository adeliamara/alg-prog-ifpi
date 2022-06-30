import {print, input} from './\io_utils.js';


function main(){
    const linha1 = input('digite os tres elementos na linha ')
    const linha2 = input('digite os tres elementos na linha ')
    const elementos1 = linha1.split(' ')
    const elementos2 = linha2.split(' ')
    const x1 = Number(linha1[0]);
    const y1 = Number(linha1[1]);
    const x2 = Number(linha2[0]);
    const y2 = Number(linha2[1]);
    
    const distance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))
    
    print(distance.toFixed(4))
}

main()
    
    
    