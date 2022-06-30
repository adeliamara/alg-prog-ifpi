
import {input} from './\io_utils.js'
import * as fs from 'fs'
let linha = -1

function main(){
    const qtdNotas = 2
    const notas = loadfile().split('\n')
    let nota
    let sum = 0
    for(let i=0; i<qtdNotas;i++){
        nota = obter_nota_valida(notas)
        sum+=nota
    }
    const media = sum/qtdNotas
    console.log(`media = ${media.toFixed(2)}`)

}

function obter_nota_valida(notas){
    linha++
    let nota = Number(notas[linha])
    while(nota>10 || nota < 0){
        console.log(`nota invalida`)
        nota =  obter_nota_valida(notas)
    }
    return nota
}


function loadfile() {
    try {
        const data = fs.readFileSync('notas.txt', 'utf-8')
        return data
    } catch (error) {
        console.error(error)
    }
}


main()