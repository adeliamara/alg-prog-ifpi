import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare, ehSimetrica, fillMatrix } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = []

    matrix = createMatrixSquare(order)
    fillMatrix(matrix)

    console.log(matrix)
    console.log(`simetrica = ${ehSimetrica(matrix)}`)


}





main()