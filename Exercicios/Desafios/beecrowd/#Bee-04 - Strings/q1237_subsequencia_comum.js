import fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()
const lines = fs.readFileSync('arquivo1237.txt', 'utf-8').split('\r\n')


function main() {
    const string1 = lines[0]
    const string2 = lines[1]

    let subsequencia_comum

    subsequencia_comum = calcula_subsequencia_comum(string1, string2)

    console.log(subsequencia_comum)

}


function calcula_subsequencia_comum(string1, string2) {
    let tamanho_string1 = string1.length
    let tamanho_string2 = string2.length
    let tamanho = 0
    let contador_de_sequencia = 0
    let sequencia_comum = ''
    let maior_sequencia = 0
    let new_str = ''
    let aux_sequencia_comum
    console.log(string2)
    if (tamanho_string1 > tamanho_string2) {
        for (let letra of string2) {
            new_str += letra
            console.log(letra)
            console.log(new_str.match(string1))
            if (new_str.match(string1)) {
                contador_de_sequencia++
            }
        }
    } else {
        for (let letra of string1) {
            new_str += letra
            console.log(letra)
            
            console.log(new_str.match(string2))
            if (new_str.match(string2)) {
                console.log('veio aqui')
                contador_de_sequencia++
            }
        }

    }
    //contador_de_sequencia = sequencia_comum.length

    /*for (let letra of string1) {
        console.log('veio pra ca')
        for (let char of string2) {
            if (letra == char && anterior_eh_sequencia) {
                contador_de_sequencia++
                anterior_eh_sequencia = true
            }else if(!anterior_eh_sequencia && letra === char ){
                contador_de_sequencia = 1 
                anterior_eh_sequencia = true
            }else{
                anterior_eh_sequencia = false
            }
            if(maior_sequencia < contador_de_sequencia){
                maior_sequencia = contador_de_sequencia
            } 
            break
        }

    }*/
    return contador_de_sequencia

}
main()