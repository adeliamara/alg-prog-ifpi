import { createNewArray, fillArrayRandomNumber, map_vetor } from "./array_utils.js";


function main() {
    let array = [12, 46, 32, 64];//createNewArray(7)

    //fillArrayRandomNumber(0,10, array)
    console.table(array)

    const media = calculaMedia(array)

    console.table(`media = ${media}`)
    console.table(array)

    const mediana = calculaMediana(array)
    console.log(mediana)

}



const calculaMedia = array => (array.reduce((acumulado, atual) => acumulado + atual)) / array.length

const ordenaArray = array => array.sort((a, b) => a - b) //modifica array original

function calculaMediana(array) {
    ordenaArray(array) //sort modifica original
    //para fazer com funcoes poprias, use bubble sort no lugar do sort

    let mediana = 0
    const metade = Math.ceil(array.length / 2)
    if (array.length % 2 === 0) {
        mediana = (array[metade] + array[metade - 1]) / 2
    } else {
        mediana = array[metade]
    }
    return mediana
}


main()