import { input } from './\io_utils.js'

function main() {
    const numero = input('Digite um numero: ')

    const algarismo = calculaAlgarismos(numero)

    console.log(algarismo)
}

const calculaAlgarismos = numero => numero.length

main()