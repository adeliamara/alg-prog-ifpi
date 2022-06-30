import { input } from './\io_utils.js'


function main() {
    const qtd_litros = Number(input('Insira a quantidade de litros: '))
    let tipo_combustivel = receber_letra_correta('Insira ao tipo de combustível:  G - gasolina e A- alcool: ')

    let desconto
    let custo_litro

    if (tipo_combustivel === 'G') {
        tipo_combustivel = 'Gasolina'
        custo_litro = 2.5
        if (qtd_litros > 20) {
            desconto = 0.06
        } else {
            desconto = 0.04
        }
    }
    if (tipo_combustivel === 'A'){
        tipo_combustivel = 'Alcool'
        custo_litro = 1.90
        if (qtd_litros > 20) {
            desconto = 0.05
        } else {
            desconto = 0.03
        }
    }

    const total = custo_litro * qtd_litros * (1 - desconto)

    console.log(`${qtd_litros} litros de ${tipo_combustivel} custarão R$ ${total.toFixed(2)}`)

    function receber_letra_correta(msg){
        let resposta = input(msg)
        resposta = resposta.toUpperCase()
        while(resposta !== 'G' && resposta !=='A'){
            resposta = input('Voce inseriu a letra errada \n' + msg)
            resposta = resposta.toUpperCase()
        }
        return resposta 
    }
    


}

main()