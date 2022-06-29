import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare, fillMatrix, sumMatrixCalculator, sumPrincipalDiagonalCalculator, sumSecondaryDiagonalCalculator } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = []

    matrix = createMatrixSquare(order)
    console.log(matrix)

    fillMatrix(matrix)
    console.log(matrix)

    const sumMatrix = sumMatrixCalculator(matrix)
    const sumPrincipal = sumPrincipalDiagonalCalculator(matrix)
    const sumSecondary = sumSecondaryDiagonalCalculator(matrix)

    console.log(`somatorio matriz = ${sumMatrix}`)
    console.log(`somatorio diagonal principal = ${sumPrincipal}`)
    console.log(`somatorio diagonal secundaria = ${sumSecondary}`)
}





main()