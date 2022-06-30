import { input } from './\io_utils.js'


function main() {
    const qtd_morango = Number(input('Insira a quantidade de kg de morango: '))
    const qtd_maca = Number(input('Insira a quantidade de kg de maca: '))

    let custo_morango
    let custo_maca

    if (qtd_morango <= 5) {
        custo_morango = 2.5
    } else {
        custo_morango = 2.2
    }
    if (qtd_maca <= 5) {
        custo_maca = 1.80
    } else {
        custo_maca = 1.50
    }

    let custo_total = custo_maca * qtd_maca + custo_morango * qtd_morango

    if (qtd_morango + qtd_maca > 8 || custo_total > 25) {
        custo_total = custo_total * 0.9
    }

    console.log(`O custo total será R$ ${custo_total.toFixed(2)}`)
}

main()