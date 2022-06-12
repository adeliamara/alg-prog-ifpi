import { readFileSync } from 'fs'
const lines = readFileSync('arquivo1179.txt', 'UTF-8').split('\r\n')

function main() {
    const vetorPar = new Array(5)
    const vetorImpar = new Array(5)
    let posicaoVetorPar = 0
    let posicaoVetorImpar = 0
    let elemento = 0

    for (let j = 0; j < 15; j++) {
        elemento = lines[j]
        if (elemento_eh_par(elemento) % elemento !==0) {
            vetorPar[posicaoVetorPar] = Number(elemento)
            posicaoVetorPar++
        } else {
            vetorImpar[posicaoVetorImpar] = elemento
            posicaoVetorImpar++
        }
        if (posicaoVetorImpar > vetorImpar.length - 1) {
            for (let index in vetorImpar) {
                console.log(`impar[${index}] = ${vetorImpar[index]}`)
            }
            posicaoVetorImpar = 0
        }
        if (posicaoVetorPar > vetorPar.length - 1) {
            for (let index in vetorPar) {
                console.log(`par[${index}] = ${vetorPar[index]}`)
            }
            posicaoVetorPar = 0
        }
    }
        for (let index = 0; index < posicaoVetorImpar; index++) {
            if (vetorImpar[index] !== undefined) console.log(`impar[${index}] = ${vetorImpar[index]}`)
        }

        for (let index = 0; index < posicaoVetorPar; index++) {
            if (vetorPar[index] !== undefined) console.log(`par[${index}] = ${vetorPar[index]}`)
        }


}

const elemento_eh_par = elemento => elemento % 2 === 0

const qtd_elementos_para_imprimir = (count, vetor) => count % vetor.length 


main()