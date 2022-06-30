/*Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.*/

import {input, print} from './\io_utils.js'

function main(){
    //enter
    const sale_value = input('Enter a number to represent of sale value: ')

    //processing
    const installments = Math.floor(sale_value/3)
    const value_input = sale_value - installments * 2

    //result
    print(`An input of R$ ${value_input.toFixed(2)} e 2 parcelas de R$${installments.toFixed(2)} `)   
    
}

main()


