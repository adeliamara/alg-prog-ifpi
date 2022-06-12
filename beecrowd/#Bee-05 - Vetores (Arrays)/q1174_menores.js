import {readFileSync} from 'fs'
const lines = readFileSync('arquivo1174.txt', 'UTF-8').split('\r\n')

function main(){
    const vetorA = new Array(100)

    for (let index = 0; index < vetorA.length; index++) {
        vetorA[index] = Number(lines[index])

        if(elemento_menor_ou_igual_a_n(vetorA[index], 10)){
            console.log(`A[${index}] = ${vetorA[index].toFixed(1)}`)
        }
        
    }
}

const elemento_menor_ou_igual_a_n = (elemento, n) => elemento <=10


main()