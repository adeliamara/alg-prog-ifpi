// 38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
//resultado em forma de fração.
import {print, input} from './\io_utils.js';

function simplify(str) {
    let result = ''
    const aux_fraction = str.split(['/']) 
    let numOne = Number(aux_fraction[0])
    let numTwo = Number(aux_fraction[1])
    for (let i =1; i< Math.max(numOne, numTwo); i++) {
        if ((numOne % i == 0) && (numTwo % i == 0)) {
            numOne /= i
            numTwo /= i                
        }
    }

    if (numTwo === 1) {
        result = numOne.toString()
    } 
    else {
        result = numOne.toString() + '/' + numTwo.toString()
    }
    return result
}


function main(){
    //entrada
    const str_fraction1 = input('Enter a fraction 1 in the form  "a/b": ');
    const str_fraction2 = input('Enter a fraction 1 in the form "a/b": ');

    //processing

    //1. separating fraction string into denominator and numerator of type number
    const aux_str_fraction1 = str_fraction1.split(["/"])
    const num_fraction1 = Number(aux_str_fraction1[0])
    let den_fraction1 = Number(aux_str_fraction1[1])
    const aux_str_fraction2 = str_fraction2.split(["/"])
    const num_fraction2 = Number(aux_str_fraction2[0])
    let den_fraction2 = Number(aux_str_fraction2[1])

    //2. checking if the fraction has denominator = 1
    if(isNaN(den_fraction1)){
        den_fraction1 = 1
    }
    if(isNaN(den_fraction2)){
        den_fraction2 = 1
    }
    
    //3.sum
    const numerator = ((num_fraction1*den_fraction2) +(num_fraction2*den_fraction1))
    const denominator = den_fraction1*den_fraction2
    let result = numerator.toString() + '/' + denominator.toString()
    result = simplify(result) //calling a function of simplify the fraction 

    //result
    print(str_fraction1, '+' ,str_fraction2, '=', result )
}

main()



