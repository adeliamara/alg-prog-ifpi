import { createNewArray, fillArrayRandomNumber, map_vetor } from "./array_utils.js";


function main() {
    let array = createNewArray(10)

    fillArrayRandomNumber(-4, 4, array)
    console.table(array)

    console.log(`sum positiva filter and reduce: ${sumPositiveElements(array)}`)

    const sumNegativeNumber = numberSumCalculator('Negative', array)
    const sumPositiveNumber = numberSumCalculator('Positive', array)

    console.log(`sum negativa: ${sumNegativeNumber}`)
    console.log(`sum positiva: ${sumPositiveNumber}`)

}


function numberSumCalculator(signal = 'Positive', array) {
    const comparador = signal === 'Positive' ? positive : negative
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        if (comparador(array[i])) {
            sum += array[i]
        }
    }

    return sum
}

const positive = valor => valor > 0
const negative = valor => valor < 0

const sumPositiveElements = array => array.filter(num => num > 0).reduce((acumulado, atual) => acumulado + atual)


main()