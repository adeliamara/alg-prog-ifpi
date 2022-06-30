//var input = require('fs').readFileSync('arquivo', 'utf8');
import {readFileSync} from 'fs'
var input = readFileSync('arquivo.txt', 'utf-8')
var lines = input.split('\n');

function main(){
    let option = 1
    let qtdGrenais = 0
    let golGremio = 0
    let golInter = 0
    let vitoriasInter = 0
    let vitoriasGremio = 0
    let empates = 0
    let index = 0
    let lines_aux
    while (option === 1) {
        lines_aux = lines[index].split(' ')
        golInter = lines_aux[0]
        golGremio = lines_aux[1]
        if (golGremio > golInter) {
            vitoriasGremio++
        } else if (golGremio < golInter) {
            vitoriasInter++
        } else {
            empates++
        }
        index++
        console.log('Novo grenal (1-sim 2-nao)')
        option = Number(lines[index])
        qtdGrenais++
        index++
    }


    let vencedor = ' '
    if (inter_venceu_mais(vitoriasInter, vitoriasGremio)) {
        vencedor = 'Inter'
    } else {
        vencedor = 'Gremio'
    }

    console.log(`${qtdGrenais} grenais`)
    console.log(`Inter:${vitoriasInter}`)
    console.log(`Gremio:${vitoriasGremio}`)
    console.log(`Empates:${empates}`)
    console.log(`${vencedor} venceu mais`)

}

const inter_venceu_mais = (vitoriaInter, vitoriaGremio) => vitoriaInter > vitoriaGremio

main()