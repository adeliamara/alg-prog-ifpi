import fs from 'fs'
const lines = fs.readFileSync('arquivo1235.txt', 'utf-8').split('\r\n')


function main() {
    const qtd_casos_teste = Number(lines[0])
    let metade = 0
    let primeira_metade = ''
    let segunda_metade = ''
    let primeira_metade_correta 
    let segunda_metade_correta 
    let texto_correto = ''
    let mensagem = ''

    for(let index = 0; index < qtd_casos_teste; index++){
        mensagem = lines[index + 1]
        metade = (mensagem.length)/2
        primeira_metade = fatia_texto(mensagem, 0, metade)
        primeira_metade_correta = inverte_texto(primeira_metade)
        segunda_metade = fatia_texto(mensagem, metade, mensagem.length)
        segunda_metade_correta = inverte_texto(segunda_metade)
        texto_correto = primeira_metade_correta + segunda_metade_correta
        console.log(texto_correto)
    }

}

function fatia_texto(mensagem, inicio, fim){
    let novaMensagem = ''
    for(let index = inicio; index < fim; index++){
        novaMensagem += mensagem[index]
    }

    return novaMensagem
}

function inverte_texto(mensagem){
    let novaMensagem = ''
    for(let index = mensagem.length - 1; index >= 0; index--){
        novaMensagem += mensagem[index]
    }
    return novaMensagem
}

main()