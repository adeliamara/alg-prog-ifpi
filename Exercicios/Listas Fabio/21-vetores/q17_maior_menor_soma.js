import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare, determinantCalculator, fillMatrix, sumMatrixCalculator, sumPrincipalDiagonalCalculator, sumSecondaryDiagonalCalculator } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = []

    matrix = createMatrixSquare(order)
    fillMatrix(matrix)

    console.table(matrix)

    const row = findrowWithGreatherSum(matrix)
    const rowSum = rowSumCalculador(row, matrix)

    console.log(`row = ${row} \n sum = ${rowSum}`)

}


function findrowWithGreatherSum(matrix){
    let sum = 0
    let row = 0
    let maior = 0

    for (let i = 0; i < matrix.length; i++) {
        sum = 0
        for (let j = 0; j < matrix[i].length; j++) {
            sum = rowSumCalculador(i, matrix)
            if(sum > maior){
                maior = sum
                row = i
            }
        }
    }

    return row
}

function rowSumCalculador(row, matrix){
    let sum = 0
          
    for (let j = 0; j < matrix[row].length; j++) {
            sum += matrix[row][j]
    }

    return sum
}


main()