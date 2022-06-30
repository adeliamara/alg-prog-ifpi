import { print, input } from './\io_utils.js'


function main() {
    let precos = input('Insira os precos p1 p2 p3 separados por espaco: ')
    precos = precos.split(' ')

    const produto_mais_barato = select_menor(precos)

    console.log('O produto mais barato custa', produto_mais_barato)

}

const select_menor = precos => precos.reduce(function (a, b) {
    return Math.min(a, b)
})



main()