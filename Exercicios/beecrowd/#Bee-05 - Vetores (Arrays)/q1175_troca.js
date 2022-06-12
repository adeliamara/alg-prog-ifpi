import {readFileSync} from 'fs'
const lines = readFileSync('arquivo1175_troca.txt', 'UTF-8').split('\r\n')

function main(){
    const vetorN = new Array(20)

    for (let index = 0; index < vetorN.length; index++) {
        vetorN[index] = Number(lines[index]) 
    }
    const metadeTamanhoVetor = (vetorN.length)/2
    for (let index = 0; index < metadeTamanhoVetor; index++) {
        trocaValoresNasPosicoes(vetorN,index, vetorN.length-index-1)
    }
    for (let index = 0; index < vetorN.length; index++) {
        console.log(`N[${index}] = ${vetorN[index]}`)
    }

}

function trocaValoresNasPosicoes(vetor, inicial, final){
    let auxiliar_inicial
    let auxiliar_final 
    auxiliar_inicial = vetor[inicial]
    auxiliar_final = vetor[final]
    vetor[inicial] = auxiliar_final
    vetor[final] = auxiliar_inicial
}


main()