import { print, input } from './\io_utils.js';

function main() {
    const linha = input('digite linha 1 ')
    const elementos = linha.split(' ')
    const A = Number(elementos[0]);
    const B = Number(elementos[1]);
    const C = Number(elementos[2]);
    
    const D = (A + B + Math.abs(A-B))/2
    const maior = (C + D + Math.abs(C -D))/2
    
    console.log(`${maior} eh o maior`)
    
}

main()