import fs from 'fs'
const mensagens = fs.readFileSync('arquivo1024.txt', 'utf-8').split('\r\n')


function main() {

    const qtd_de_vezes = mensagens[0]
    let mensagem_deslocada
    let mensagem_invertida
    let mensagem_criptografada

    for (let i = 1; i <= qtd_de_vezes; i++) {
        let mensagem = mensagens[i]

        //1 deslocar as letras 3 posicoes para a direita
        mensagem_deslocada = deslocar_letras_da_mensagem(mensagem)

        //2  a linha deverá ser invertida. 
        mensagem_invertida = inverter_mensagem(mensagem_deslocada)
        
        //3 deslocar a segunda metade truncada uma posicao para a esquerda
        mensagem_criptografada = truncar_e_codificar_segunda_metade(mensagem_invertida)

        console.log(mensagem_criptografada)
    }
}

function eh_letra_maiuscula(caracter) {
    const asc_code = caracter.charCodeAt(0)
    return (asc_code >= 65) && (asc_code <= 90)
}

function eh_letra_minuscula(caracter) {
    const asc_code = caracter.charCodeAt(0)
    return (asc_code >= 97) && (asc_code <= 122)
}

function deslocar_letra_n_posicoes(caracter, n) {
    const asc_code = caracter.charCodeAt(0)
    const letra_deslocada = String.fromCharCode(asc_code + n)
    return letra_deslocada
}

function deslocar_letras_da_mensagem(mensagem){
    let letra_deslocada = ''
    let mensagem_deslocada = ''

    for (let caracter of mensagem) {
        if (eh_letra_maiuscula(caracter) || eh_letra_minuscula(caracter)) {
            //deslocar mensagem
            letra_deslocada = deslocar_letra_n_posicoes(caracter, 3)
            mensagem_deslocada += letra_deslocada
        } else {
            mensagem_deslocada += caracter
        }
    }

    return mensagem_deslocada
}

function inverter_mensagem(mensagem) {
    const ultimo_index = mensagem.length - 1
    let mensagem_invertida = ''
    for (let index = ultimo_index; index >= 0; index--) {
        mensagem_invertida += mensagem[index]
    }
    return mensagem_invertida
}

function fatia_string(string, inicio, fim) {

    let substring = ""

    for (let n = inicio; n < fim; n++) {
        substring += string[n]
    }
    return substring
}

function truncar_e_codificar_segunda_metade(mensagem) {
    const tamanho = mensagem.length
    const metade = Math.trunc(tamanho / 2)
    let mensagem_criptografada = fatia_string(mensagem, 0, metade)

    for (let i = metade; i < tamanho; i++) {
        mensagem_criptografada += deslocar_letra_n_posicoes(mensagem[i], -1)
    }

    return mensagem_criptografada
}

main()