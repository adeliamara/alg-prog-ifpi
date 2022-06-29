import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare, determinantCalculator, fillMatrix, sumMatrixCalculator, sumPrincipalDiagonalCalculator, sumSecondaryDiagonalCalculator } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = []

    matrix = createMatrixSquare(order)
    console.log(matrix)

    fillMatrix(matrix)
    console.log(matrix)

    const determinant = determinantCalculator(matrix)
 

    console.log(`D = ${determinant}`)

}





main()