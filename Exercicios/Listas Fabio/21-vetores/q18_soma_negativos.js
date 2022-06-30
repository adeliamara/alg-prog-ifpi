import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare, determinantCalculator, fillMatrix, sumMatrixCalculator, sumPrincipalDiagonalCalculator, sumSecondaryDiagonalCalculator } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = createMatrixSquare(order)
    fillMatrix(matrix)

    console.table(matrix)

    const sumNegativeNumber = numberSumCalculator('Negative', matrix)
    const sumPositiveNumber = numberSumCalculator('Positive', matrix)

    console.log(`sum negativa: ${sumNegativeNumber}`)
    console.log(`sum positiva: ${sumPositiveNumber}`)

}


function numberSumCalculator(signal = 'Positive', matrix) {
    const comparador = signal === 'Positive' ? positive : negative
    let sum = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (comparador(matrix[i][j])) {
                sum += matrix[i][j]
            }
        }
    }

    return sum
}

const positive = valor => valor > 0
const negative = valor => valor < 0

main()
