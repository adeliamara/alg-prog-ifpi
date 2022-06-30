import { input } from './\io_utils.js'

function main() {
    const numeroInicial = Number(input('Digite um numero: '))

    let numeroSeguinte = ''

    while(numeroInicial !== numeroSeguinte){
        numeroSeguinte = Number(input('Digite um numero: '))
    }
    console.log(`${numeroSeguinte} = ${numeroInicial}`)
}


main()