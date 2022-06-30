import { input } from './\io_utils.js';

function main() {

    //entrada
    const value_a = Number(input('Insira o valor A: '))
    const value_b = Number(input('Insira o valor b: '))
    console.log('Insira operação com o numero correspondente \n\t1 - Adiçao \n\t2- Subtração \n\t3- Multiplicação \n\t4 - Divisão')
    const operator = Number(input('Digite a operação: '))

    const result = calcule(value_a, value_b, operator)

    console.log(result)

}

function calcule(a, b, op) {
    if (op === 1) {
        const result = a + b
        return `${a} + ${b} = ${result}`
    } else if (op === 2) {
        const result = a - b
        return `${a} - ${b} = ${result}`
    } else if (op === 3) {
        const result = a * b
        return `${a} * ${b} = ${result}`
    } else if (op === 4) {
        if(b === 0){
            return 'não é possível dividir por zero'
        }
        const result = a / b
        return `${a} / ${b} = ${result}`
    }
    return 'você não inseriu um operador válido'
}

main()