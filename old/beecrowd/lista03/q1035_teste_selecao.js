import { input } from "./\io_utils.js"


function main() {
    const linha = input('Insira os valores: ')

    const elementos = linha.split(' ')

    const A = Number(elementos[0])
    const B = Number(elementos[1])
    const C = Number(elementos[2])
    const D = Number(elementos[3])

    if (B > C && D > A && C + D > A + B && C >= 0 && D >= 0 && A % 2 === 0) {
        console.log('Valores aceitos')
    }
    else console.log('Valores nao aceitos')


}

main()