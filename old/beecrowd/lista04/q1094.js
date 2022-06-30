import {input} from './\io_utils.js'

function main(){
    let quantidade_teste = Number(input('Insira a quantidade de testes: '))
    let informacao_teste_atual
    let index_teste = 0
    let counter_sapo = 0
    let counter_rato = 0
    let counter_coelho = 0

    let quantidade
    let animal

    while(index_teste<quantidade_teste){
        informacao_teste_atual = input('Insira a informacao do teste atual: ')

        informacao_teste_atual = informacao_teste_atual.split(' ')
        animal = informacao_teste_atual[1]
        quantidade = Number(informacao_teste_atual[0])

    
        if(animal === 'C'){
            counter_coelho+= quantidade
        }else if(animal === 'R'){
            counter_rato+= quantidade
        }else if(animal === 'S'){
            counter_sapo+= quantidade
        }

        index_teste++
    }

    const total = counter_coelho + counter_rato + counter_sapo
    const percentual_coelhos = counter_coelho/total * 100
    const percentual_sapos = counter_sapo/total * 100
    const percentual_ratos = counter_rato/total * 100

    console.log(`Total: ${total}`)
    console.log(`Total de coelhos: ${counter_coelho} cobaias`)
    console.log(`Total de ratos: ${counter_rato}`)
    console.log(`Total de sapos: ${counter_sapo}`)
    console.log(`Percentual de coelhos: ${percentual_coelhos.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${percentual_ratos.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${percentual_sapos.toFixed(2)} %`)
}

main()