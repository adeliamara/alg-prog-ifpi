import fs from 'fs'
const lines = fs.readFileSync('arquivo1234.txt', 'utf-8').split('\r\n')


function main() {
    let texto = ''
   
    for (let index = 0; index < lines.length && lines[index] !== ""; index++) {
        texto = transformaTextoEmDancante(lines[index])
        console.log(texto)
    }

}

function transformaTextoEmDancante(texto){
    let textoDancante = ''
    let ultima_letra_eh_maiuscula = false
    for(let letra of texto){
        if(letra !== ' '){
            if(ultima_letra_eh_maiuscula){
                letra = letra.toLowerCase()
                textoDancante += letra
                ultima_letra_eh_maiuscula = false
            }else{
                letra = letra.toUpperCase()
                textoDancante += letra
                ultima_letra_eh_maiuscula = true
            }
        }else{
            textoDancante +=  letra
        }
    }
    return textoDancante
}
main()