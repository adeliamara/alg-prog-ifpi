import { input } from "./\io_utils.js"


function main() {
    const numero = input('Insira o código e a quantidade ')

    let total = 0

    const valor_cachorro_quente = 4
    const valor_x_salada = 4.5
    const valor_x_bacon = 5
    const valor_torrada = 2
    const valor_refrigerante = 1.5
    const [codigo, quantidade] = numero.split(' ').map(Number)

    if (codigo === 1) {
        total = calcula_total(quantidade, valor_cachorro_quente)
    } else if (codigo === 2) {
        total = calcula_total(quantidade, valor_x_salada)
    } else if (codigo === 3) {
        total = calcula_total(quantidade, valor_x_bacon)
    }
    else if (codigo === 4) {
        total = calcula_total(quantidade, valor_torrada)
    } else if (codigo === 5) {
        total = calcula_total(quantidade, valor_refrigerante)
    }

    console.log(`Total: R$ ${total.toFixed(2)}`)

}

const calcula_total = (qtd, valor) => qtd * valor

main()
