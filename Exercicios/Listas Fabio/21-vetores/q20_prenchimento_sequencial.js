import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = createMatrixSquare(order)

    preencherMatrizSequencial(matrix)

    console.table(matrix)

}


function preencherMatrizSequencial(matrix) {
    let contador = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = contador
            contador++
        }
    }
}

main()