import { input } from "./\io_utils.js"


function main() {
    const numero = Number(input('Insira um número: '))

    const result = verifica_intervalo(numero)

    console.log(result)

}

function verifica_intervalo(n) {
    if (n < 0 || n > 100) {
        return 'Fora de intervalo'
    } else if (n <= 25) {
        return 'Intervalo [0,25]'
    } else if (n <= 50) {
        return 'Intervalo (25,50]'
    } else if (n <= 75) {
        return 'Intervalo (50,75]'
    }
    return 'Intervalo (75,100]'
}


main()