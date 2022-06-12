import {readFileSync} from 'fs'
const lines = readFileSync('arquivo1177.txt', 'UTF-8').split('\r\n')

function main(){
    const vetor = new Array(1000)
    const limite = Number(lines[0])
    montarVetorComLimite(vetor,limite)

    for (let index = 0; index < vetor.length; index++) {
        console.log(`N[${index}] = ${vetor[index]}`)  
    }

}

function montarVetorComLimite(vetor,limite){
    let valor = 0
    for(let index = 0; index < vetor.length;index++){
        if(valor >= limite){
            valor = 0
        }
        vetor[index] = valor
        valor++
    }
}


main()