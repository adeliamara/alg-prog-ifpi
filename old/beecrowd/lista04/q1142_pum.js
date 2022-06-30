import {input} from './\io_utils.js'

function main(){
    let qtd_linhas = input()
    let qtd_elementos = qtd_linhas * 4 // ha 4 elementos por linha
    let texto_da_resposta = ''
    for(let i = 1; i<=qtd_elementos; i++){
        if(i%4 !== 0){
            texto_da_resposta += i + ' '
        }else{
            texto_da_resposta +=  'PUM'
            console.log(texto_da_resposta)
            texto_da_resposta = ''
        }
        

    }
}

main()