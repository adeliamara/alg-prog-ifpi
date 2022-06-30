import { input } from './\io_utils.js'

function main() {
    const numeroInicial = Number(input('Digite um numero: '))

    let numeroAnterior = ''
    let numeroAtual = numeroInicial


    while(numeroInicial !== (numeroAnterior + numeroAtual)){
        numeroAnterior = numeroAtual
        numeroAtual = Number(input('Digite um numero: '))
    }
    console.log(`${numeroAnterior} + ${numeroAtual} = ${numeroInicial}`)
}


main()