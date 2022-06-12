import {readFileSync} from 'fs'
const lines = readFileSync('arquivo1172.txt', 'UTF-8').split('\r\n')

function main(){
    const vetorX = new Array(10)

    for (let index = 0; index < vetorX.length; index++) {
        vetorX[index] = Number(lines[index])

        if(vetorX[index] <= 0){
            vetorX[index] = 1
        }
        console.log(`X[${index}] = ${vetorX[index]}`)
    }
}

main()