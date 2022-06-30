//Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
//decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
//saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
//disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
//notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
//indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
//algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
//critério da distribuição ótima.


import {input, print} from './\io_utils.js'

function main(){
    //enter
    const saque = input('Entre com o valor de saque: ')

    //notas disponiveis no banco
    const qtd_notas1 = 3
    const qtd_notas2 = 3
    const qtd_notas5 = 4
    const qtd_notas10 = 3
    const qtd_notas20 = 5
    const qtd_notas50 = 6
    const qtd_notas100 = 2
    print(`Notas disponiveis: Há ${qtd_notas100} notas de 100, ${qtd_notas50} notas de 50,  ${qtd_notas20} notas de 20, ${qtd_notas10} notas de 10, ${qtd_notas5} notas de 5, ${qtd_notas2} notas de 2 e ${qtd_notas1} notas de 1`)
    const valor_total = qtd_notas1 + 2 * qtd_notas2 + 5 * qtd_notas5 + 10*qtd_notas10 +20*qtd_notas20 + 50 * qtd_notas50
    
    if (saque>valor_total){
        print('Não há dinheiro suficiente em caixa')
    }
    else{
          let qtd_notas100_saque = Math.floor(saque/100)
          if(qtd_notas100_saque > qtd_notas100){
              qtd_notas100_saque = qtd_notas100
          }
          let qtd_notas50_saque = Math.floor((saque-qtd_notas100_saque*100)/50)
          if(qtd_notas50_saque > qtd_notas50){
              qtd_notas50_saque = qtd_notas50
          }
          let qtd_notas20_saque = Math.floor((saque-qtd_notas100_saque*100-qtd_notas50_saque*50)/20)
          if(qtd_notas20_saque > qtd_notas20){
              qtd_notas20_saque = qtd_notas20
          }
          let qtd_notas10_saque = Math.floor((saque -qtd_notas100_saque*100-qtd_notas50_saque*50 -qtd_notas20_saque * 20)/10)
          if(qtd_notas10_saque > qtd_notas10){
              qtd_notas10_saque = qtd_notas10
          }
          let qtd_notas5_saque = Math.floor((saque -qtd_notas100_saque*100-qtd_notas50_saque*50 -qtd_notas20_saque * 20-qtd_notas10_saque*10)/5)
          if(qtd_notas5_saque > qtd_notas5){
              qtd_notas5_saque = qtd_notas5
          }
          let qtd_notas2_saque = Math.floor((saque -qtd_notas100_saque*100-qtd_notas50_saque*50 -qtd_notas20_saque * 20 -qtd_notas10_saque*10-qtd_notas5_saque * 5)/2)
          if(qtd_notas2_saque > qtd_notas2){
              qtd_notas2_saque = qtd_notas2
          }
          const qtd_notas1_saque = saque -qtd_notas100_saque*100-qtd_notas50_saque*50 -qtd_notas20_saque * 20 -qtd_notas10_saque * 10 - qtd_notas5_saque *5 - qtd_notas2_saque * 2
          print(`O saque será com: \n ${qtd_notas100_saque} notas de 100 \n ${qtd_notas50_saque} notas de 50 \n ${qtd_notas20_saque} notas de 20 \n ${qtd_notas10_saque} notas de 10 \n ${qtd_notas5_saque} notas de 5 \n ${qtd_notas2_saque} notas de 2 \n ${qtd_notas1_saque} notas de 1`)

        } 
}

main()