import { input } from './\io_utils.js'


function main() {
    const qtd_carne = Number(input('Insira a quantidade de kg de carne: '))
    const tipo_carne = receber_palavras_corretas('Insira a carne (File, alcatra ou Picanha): ')
    const pagamento_cartao = receber_letra_correta_e_retornar_bool('O pagamento vai ser feito com cartao tabajara? "s" - sim ou "n" - nao ')

    const total = calcula_custo(qtd_carne, tipo_carne)
    let desconto = 0
    let metodo_pagamento = 'outros'
    if(pagamento_cartao){
        desconto = total * 0.05
        metodo_pagamento = 'cartão tabajara'

    }
    const total_a_pagar = total - desconto

    console.log('------ NOTA FISCAL --------')
    console.log(`${qtd_carne} kg de ${tipo_carne} = ${total.toFixed(2)}`)
    console.log(`metodo de pagamento: ${metodo_pagamento}`)
    console.log(`desconto: ${desconto.toFixed(2)}`)
    console.log(`valor a pagar: R$ ${total_a_pagar.toFixed(2)}`)

}

function receber_palavras_corretas(msg){
    let resposta = input(msg)
    resposta = resposta.toLowerCase()
    while(resposta !== 'file' && resposta !=='alcatra' && resposta !=='picanha' ){
        resposta = input('Voce inseriu a palavra errada \n' + msg)
        resposta = resposta.toLowerCase()
    }
    return resposta 
}

const calcula_custo = (qtd_carne, tipo_carne) =>{
    let valor_unitario
    if(tipo_carne === 'file'){
        if(qtd_carne > 5){
            valor_unitario = 5.8
        }else{
            valor_unitario = 4.90
        }
    }else if(tipo_carne === 'alcatra'){
        if(qtd_carne > 5){
            valor_unitario = 6.80
        }else{
            valor_unitario = 5.90
        }
    }else{
        if(qtd_carne > 5){
            valor_unitario = 7.80
        }else{
            valor_unitario = 9.90
        }
    }
    let custo = valor_unitario * qtd_carne
    return custo
    
}

function receber_letra_correta_e_retornar_bool(msg){
    let resposta = input(msg)
    while(resposta !== 's' && resposta !=='n'){
        resposta = input('Voce inseriu a letra errada \n' + msg)
    }
    return resposta === 's'
}

main()