

import { input } from "./\io_utils.js"


function main() {
    const linha = input('Insira os valores: ')
    const elementos = linha.split(' ')

    const A = Number(elementos[0])
    const B = Number(elementos[1])
    const C = Number(elementos[2])

    const delta = Math.pow(B, 2) - 4 * A * C
    if (delta < 0) {
        console.log('Impossivel calcular')
    }
    else if (A === 0) {
        console.log('Impossivel calcular')
    }
    else {
        const R1 = (-B + Math.sqrt(delta)) / (2 * A)
        const R2 = (-B - Math.sqrt(delta)) / (2 * A)
        console.log('R1 =', R1.toFixed(5))
        console.log('R2 =', R2.toFixed(5))
    }

}

main()