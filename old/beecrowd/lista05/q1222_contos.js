import fs from 'fs'
const lines = fs.readFileSync('arquivo1222.txt', 'utf-8').split('\r\n')


function main() {

    let texto = ''
    let qtd_caracteres = 0
    let qtd_linhas = 0
    let qtd_palavras = 0

    let aux


    for (let index = 0; index < lines.length-1; index++) {
        aux = lines[index].split(' ').map(Number)
        qtd_palavras = aux[0]
        qtd_linhas = aux[1]
        qtd_caracteres = aux[2]
        index++
        texto = lines[index]
        let numero_paginas = 1
        if (texto !== undefined) {
            numero_paginas = calcula_numero_de_paginas(qtd_palavras, qtd_linhas, qtd_caracteres, texto)
        }

        console.log(numero_paginas)

    }



}

function calcula_numero_de_paginas(qtd_palavras, qtd_linhas, qtd_caracteres, frase) {
    let palavras = frase.split(' ')
    let qtd_linhas_frase = 1
    let caracteres = 0
    
    for (let index = 0; index < palavras.length; index++) {
        caracteres += palavras[index].length
        if (caracteres > qtd_caracteres) {
            qtd_linhas_frase++
            caracteres = palavras[index].length
        }
        if (caracteres < qtd_caracteres) {
            caracteres++
        }
    }
    const qtd_paginas_frase = Math.ceil(qtd_linhas_frase / qtd_linhas)
    return qtd_paginas_frase

}


main()