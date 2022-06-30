
import {input} from './\io_utils.js'
import * as fs from 'fs'
let linha = -1

function main(){
    const qtdNotas = 2
    const notas = loadfile().split('\n')
    let nota
    let sum = 0
    let option = 1
    while(option === 1 && linha < notas.length){
        sum = 0
        for(let i=0; i<qtdNotas;i++){
            nota = obter_nota_valida(notas)
            sum+=nota
        }
        const media = sum/qtdNotas
        console.log(`media = ${media.toFixed(2)}`)
        linha++
        console.log('novo calculo (1-sim 2-nao)')
        option = notas[linha]
        console.log(option)
        while(option !== 1 && option !== 2){
            console.log('novo calculo (1-sim 2-nao)')
            linha++
            option = notas[linha]
            console.log(option)
        } 
    }


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

function obter_opcao_valida(notas){
    linha++
    console.log('novo calculo (1-sim 2-nao)')
    let option = Number(notas[linha])
    while(option !== 1 && option !== 2){
        console.log('novo calculo (1-sim 2-nao)')
        option =  obter_nota_valida(notas)
    } 
        return option
    
   
}





main()


function loadfile() {
    try {
        const data = fs.readFileSync('arquivo.txt', 'utf-8')
        return data
    } catch (error) {
        console.error(error)
    }
}

