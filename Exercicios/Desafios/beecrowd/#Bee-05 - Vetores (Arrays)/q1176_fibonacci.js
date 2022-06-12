import {readFileSync} from 'fs'
const lines = readFileSync('arquivo1176.txt', 'UTF-8').split('\r\n')

function main(){
    const vetorFib = new Array(61)
    const qtd_casos_teste = Number(lines[0])
    montarVetorSequenciaFibonacci(vetorFib)

    for (let index = 1; index <= qtd_casos_teste; index++) {
        let posicao_solicitada = lines[index]
        console.log(`Fib(${posicao_solicitada}) = ${vetorFib[posicao_solicitada]}`)  
    }

}

function montarVetorSequenciaFibonacci(vetor){
    vetor[0] = 0
    vetor[1] = 1

    for(let index = 2; index<vetor.length;index++){
        vetor[index] = vetor[index-1] + vetor[index-2]
    }
}


main()