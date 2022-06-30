import { get_number_positive } from "./io_utils.js"
import { createMatrixIdentity } from "./matriz_utils.js"


function main() {
    const order = get_number_positive('Insira a ordem da matriz: ')
    let matrix =  createMatrixIdentity(order)

    console.table(matrix)
}


main()