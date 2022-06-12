import fs from 'fs'
const lines = fs.readFileSync('arquivo1239.txt', 'utf-8').split('\r\n')


function main() {
    let result = ''

    for (let index = 0; lines[index] !== "";index++) {
        result = convert2HTML(lines[index])
        console.log(result)
    }

}

function convert2HTML(mensagem) {
    let html = ''
    let eh_carcater_abertura = true
    for (let caracter of mensagem) {
        if (deve_converter_para_negrito(caracter)) {
            if (eh_carcater_abertura) {
                html = html + "<b>"
                eh_carcater_abertura = false
            } else {
                html = html + "</b>"
                eh_carcater_abertura = true
            }
        } else if (deve_converter_para_italico(caracter)) {
            if (eh_carcater_abertura) {
                html = html + "<i>"
                eh_carcater_abertura = false
            } else {
                html = html + "</i>"
                eh_carcater_abertura = true
            }
        } else {
            html += caracter
        }

    }


    return html

}

const deve_converter_para_negrito = caracter => caracter === "*"
const deve_converter_para_italico = caracter => caracter === "_"


main()







