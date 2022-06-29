import { createNewArray } from "./array_utils.js";
import { get_random_number } from "./io_utils.js";


export function createNewMatrix(qtdRows, qtdColumns){
    const matrix = createNewArray(qtdRows)

    for (let index = 0; index < qtdRows; index++) {
        matrix[index] = createNewArray(qtdColumns)
    }

    return matrix
}

export function createMatrixSquare(order){
    
    const matrix = createNewMatrix(order, order)

    return matrix
}

export function fillMatrix(matrix, defaultValue){

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = defaultValue || get_random_number(0, 500)
        }
    }

    return matrix
}

export function show_matriz(matrix){
    console.table(matrix)
}

export  function transposeMatrix(matrix){
    let auxiliar = 0
    for (let i = 0; i < matrix.length/2; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            auxiliar = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = auxiliar
        }        
    }
 }

 export function sumMatrixCalculator(matrix) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j]
        }
    }

    return sum
}

export function sumPrincipalDiagonalCalculator(matrix) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                sum += matrix[i][j]
                break
            }
        }
    }

    return sum
}


export function sumSecondaryDiagonalCalculator(matrix) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i + j === matrix.length -1 ) {
                sum += matrix[i][j]
                break
            }
        }
    }

    return sum
}

export function determinantCalculator(matrix){
    const result = sumPrincipalDiagonalCalculator(matrix) - sumSecondaryDiagonalCalculator(matrix)

    return result
}