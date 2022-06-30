//Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
// ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

import {input, print} from './\io_utils.js'

function main(){
    //enter
    let point1 = input('Enter a the position of the point 1 in form x1,y1:')
    let point2 = input('Enter a the position of the point 2 in form x2,y2:')

    //processing
    point1 = point1.split([","])
    point2 = point2.split([","])
    const x1 =  Number(point1[0])
    const y1 =  Number(point1[1])
    const x2 =  Number(point2[0])
    const y2 =  Number(point2[1])


    const distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

    //result
    print(`The distance between the two points is ${distance}`)   
}

main()