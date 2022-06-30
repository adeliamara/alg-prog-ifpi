//O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
//seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
//escreva o custo ao consumidor.

import {input, print} from './\io_utils.js'


function main(){

    //enter
    const factory_cost = Number(input('Enter a factory cost of the car:'))
    const tax = 0.45
    const distributor = 0.28

    //processing
    const cost_total = factory_cost + tax * factory_cost + distributor * factory_cost

    //result
    print(`The cost total of the car is ${cost_total}`)   

}

main()