//Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo

import {input, print} from './\io_utils.js'

function main(){
    //enter
    const a = input('Enter a number a:')
    const b = input('Enter a number b:')
    const c = input('Enter a number c:')
    const d = input('Enter a number d:')
    const e = input('Enter a number e:')
    const f = input('Enter a number f:')

    //processing
    const denominator = a*e - b*d
    if(denominator == 0){
        print('Denominator canot be zero, enter other numbers')
    }
    else{
        const x = (c*e - b*f)/denominator
        const y = (a*f - c*d)/denominator
         //result
        print(`The X = ${x} and the Y = ${y}`)   
    }

   
}

main()