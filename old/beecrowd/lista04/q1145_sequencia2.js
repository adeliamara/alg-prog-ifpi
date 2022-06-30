import { input } from './\io_utils.js'

function main() {

    let lines = input('> ')
    let limite_linha = lines.split(' ').map(Number)
    const limite_geral = limite_linha[1]
    limite_linha = limite_linha[0]
    let texto = ''

    for (let i = 1; i < limite_geral; i++) {
        
        if (i % limite_linha === 0){
            texto += i + '\n'
        } else{
            texto += i + ' '
        }   
        
        
    }
    texto += limite_geral

    console.log(texto)


}

main()