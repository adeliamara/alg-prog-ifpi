import { readFileSync } from 'fs'
const lines = readFileSync('arquivo1180.txt', 'UTF-8').split('\r\n')


function main(){
    const tamanho = lines[0]
    const elementos_vetor = lines[1].split(' ').map(Number)
    const vetorX = new Array(tamanho)

    copiarElementosDoVetor(elementos_vetor, vetorX)

    const menor = encontrarMenorValor(vetorX)

    const posicao = encontrarPosicaoElemento(menor, vetorX)

    console.log(`Menor valor: ${menor}`)
    console.log(`Posicao: ${posicao}`)
}



function copiarElementosDoVetor(vetor, vetorCopia){
    for(let index in vetor){
        vetorCopia[index] = vetor[index]
    }
}

function encontrarMenorValor(vetor){
    let menor = 99999999999
    for(let elemento of vetor){
        if(elemento < menor){
            menor = elemento
        }
    }
    return menor
}


function encontrarPosicaoElemento(elemento, vetor){
    for(let index in vetor){
        if(elemento === vetor[index]) return index
    }
}

main()