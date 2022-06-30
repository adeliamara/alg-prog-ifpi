import { input } from './\io_utils.js'

function main() {
    let numberList = input('Insira a lista de numeros separados por espaço: ')
    numberList = numberList.split(' ')
    let dividers = []

    for (let number of numberList) {
        if (!isNaN(number)) {
            dividers = findDividers(number)
            console.log(`Os divisores de ${number} são: ${dividers}`)
        } else {
            console.log(`${number} não é um número`)
        }
    }

}

function findDividers(number) {
    number = Number(number)
    let dividersList = []
    for (let index = 1; index <= number / 2; index++) {
        if (number % index === 0) {
            dividersList.push(index)
        }
    }
    dividersList.push(number)
    return dividersList
}

main()