import { createNewArray, fillArrayRandomNumber, map_vetor } from "./array_utils.js";


function main(){
    let array = createNewArray(10)

    fillArrayRandomNumber(0,4, array)
    console.table(array)

    console.log('aplicando metodo')
    array.map(potencia)
    console.table(array)

    console.log('recebendo metodo')
    array = array.map(potencia)
    console.table(array)

    const array_potencia = map_vetor(array, potencia)
    console.table(array_potencia)



}

const potencia = item => Math.pow(item,2)


main()