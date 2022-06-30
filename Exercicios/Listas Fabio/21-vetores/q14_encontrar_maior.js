import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare, determinantCalculator, fillMatrix, sumMatrixCalculator, sumPrincipalDiagonalCalculator, sumSecondaryDiagonalCalculator } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = []

    matrix = createMatrixSquare(order)
    fillMatrix(matrix)

    console.table(matrix)

    const elemento = findGreaterElement(matrix)
    const posicao = findValuePosition(elemento,matrix)

    console.log(`elemento: ${elemento}`)
    console.log(`posicao: (${posicao})`)


}

function findGreaterElement(matrix) {
    let maior = matrix[0][0]

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] > maior) {
                maior = matrix[i][j]
            }
        }
    }

    return maior
}

function findValuePosition(value, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (value === matrix[i][j]) return [i, j]
        }
    }

    return ''
}

main()