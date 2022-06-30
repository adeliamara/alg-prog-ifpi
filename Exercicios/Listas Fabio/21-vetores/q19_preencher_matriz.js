import { get_number_positive } from "./io_utils.js"
import { createMatrixSquare } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix = createMatrixSquare(order)

    preencherMatrizEspecial(matrix)

    console.table(matrix)

}


function preencherMatrizEspecial(matrix) {
    let extremidade_inicial = 0
    let extremidade_final = 0
    let valor_atribuido = 0
    let tam
    for (let i = 0; i < matrix.length / 2; i++) {
        tam = matrix.length - 1 - i
        console.log(tam)
        valor_atribuido = i + 1
        extremidade_inicial = i
        extremidade_final = matrix[i].length - i
        for (let j = 0; j < matrix[i].length; j++) {
            if (j >= extremidade_inicial && j < extremidade_final) {
                matrix[i][j] = valor_atribuido
                matrix[tam][j] = valor_atribuido

            } else {
                matrix[i][j] = valor_atribuido - 1
                matrix[tam][j] = valor_atribuido - 1
            }
        }
    }
}

main()