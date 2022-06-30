//var input = require('fs').readFileSync('arquivo', 'utf8');
import { readFileSync } from 'fs'
var input = readFileSync('multiplos13.txt', 'utf-8')
var lines = input.split('\n');

function main() {
    let num1 = Number(lines[0])
    let num2 = Number(lines[1])
  
    
    let maior_numero = select_maior_numero(num1, num2)
    let menor_numero = select_menor_numero(num1, num2)
    let sum = 0

    for (let i = menor_numero; i <= maior_numero; i++) {
        if(i%13 !== 0){
            sum += i
        }
    }
    console.log(sum)

}

const select_maior_numero = (num1, num2) => {
    if(num1>num2){
        return num1
    }
    return num2
}


const select_menor_numero = (num1, num2) => {
    if(num1<num2){
        return num1
    }
    return num2
}


main()