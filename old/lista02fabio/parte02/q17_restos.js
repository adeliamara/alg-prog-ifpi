import { input } from './\io_utils.js';

function main() {

    //entrada
    const value_a = Number(input('Insira o valor A: '))
    const value_b = Number(input('Insira o valor b: '))

    //processamento
    let result = ' '
    if (value_b !== 0){
        const resto = calc_resto(value_a, value_b)
        if (resto === 1) {
            result = resto_eh_1(value_a, value_b)
        }else if (resto === 2) {
            result = resto_eh_2(value_a, value_b)
        }else if (resto === 3) {
            result = resto_eh_3(value_a, value_b)
        }else if (resto === 4) {
            result = resto_eh_4(value_a, value_b)
        }else{
            result = `a ao quadrado: ${value_a * value_a}` + `\nb ao quadrado: ${value_b * value_b}`
        }
    }else{
        result = 'b=0, não é possível calcular o resto'
    } 

    console.log(result)       
        

}

const calc_resto = (a, b) => a % b

const resto_eh_1 = (a, b) => 1 + a + b

function resto_eh_2(a, b) {
    if (check_even(a)) {
        if (check_even(b)) {
            return 'ambos são pares'
        } else {
            return `${a} é par e ${b} é impar`
        }
    } else if (check_even(b)) {
        return `${a} é impar e ${b} é par`
    } else {
        return `ambos são impares`
    }

}
const resto_eh_3 = (a, b) => (a + b) * a

const resto_eh_4 = (a, b) => (a + b) / b

function check_even(num) {
    return num % 2 === 0
}

main()