import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare, fillMatrix, transposeMatrix } from "./matriz_utils.js"


 function main(){
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = []

    matrix = createMatrixSquare(order)
    console.table(matrix)

    fillMatrix(matrix)
    console.table(matrix)

    transposeMatrix(matrix)
    console.table(matrix)

 }


 main()