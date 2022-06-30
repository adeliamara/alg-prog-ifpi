import {input} from './/io_utils.js'

function main(){
    const option = input('Insira sua opcao de (1 a 3): ')
    const num = input('Insira tres numeros separados por espaço: ')

    if(option > 0 && option <= 3){
        const select_num = num.split(' ')[option - 1]
        console.log(`O número selecionado é: ${select_num}`)
    }else{
        console.log('Insira uma opção válida')
    }

}

main()