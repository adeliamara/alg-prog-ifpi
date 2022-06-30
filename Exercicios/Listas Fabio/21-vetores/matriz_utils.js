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
            matrix[i][j] = defaultValue || get_random_number(-10, 10)
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
export function findValuePosition(value, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (value === matrix[i][j]) return [i, j]
        }
    }

    return ''
}


export function ehSimetrica(matriz){
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length /2; j++) {
            if(matriz[i][j] !== matriz[j][i]){
                return false
            } 
        }
        
    }
    return true
}

export function createMatrixIdentity(order){
    let matrix = createMatrixSquare(order)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(i === j){
                matrix[i][j] = 1
            }else{
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}