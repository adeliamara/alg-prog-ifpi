import {input} from './\io_utils.js'

function main(){
    let lines = input('insira o par:')
    lines = lines.split(' ').map(Number)
    let maior_numero
    let menor_numero = select_menor_numero(lines) 
    let texto_da_resposta = ''
    let sum = 0


    while(menor_numero>0){
        maior_numero = select_maior_numero(lines)      
        for(let i = menor_numero; i <= maior_numero; i++){
            texto_da_resposta = texto_da_resposta + i + ' '
            sum+=i
        }
        texto_da_resposta+= 'Sum=' + sum
        console.log(texto_da_resposta)
        texto_da_resposta = ''
        sum = 0
        lines = input('insira o par:')
        lines = lines.split(' ').map(Number)
        menor_numero = select_menor_numero(lines) 
    }

}

const select_maior_numero = lines => lines.reduce(function(a, b){
    return Math.max(a,b)
});

const select_menor_numero = lines => lines.reduce(function(a, b){
    return Math.min(a,b)
});


main()