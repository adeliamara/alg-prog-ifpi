import { input } from './\io_utils.js'


function main() {
    const telefonou = receber_letra_correta_e_retornar_bool('Telefonou para a vítima? s - sim ou n-nao: ')
    const esteve_no_local = receber_letra_correta_e_retornar_bool('Esteve no local do crime? s - sim ou n-nao: ')
    const mora_perto = receber_letra_correta_e_retornar_bool('Mora perto da vítima? s - sim ou n-nao: ')
    const devia_para_vitima = receber_letra_correta_e_retornar_bool('Devia para a vítima? s - sim ou n-nao: ')
    const trabalhou_com_a_vitima = receber_letra_correta_e_retornar_bool('Trabalhou com a vítima? s - sim ou n-nao: ')

    const result = classifica_participacao_crime(telefonou, esteve_no_local, mora_perto, devia_para_vitima, trabalhou_com_a_vitima)

    console.log(result)

}

main()

function receber_letra_correta_e_retornar_bool(msg){
    let resposta = input(msg)
    while(resposta !== 's' && resposta !=='n'){
        resposta = input('Voce inseriu a letra errada \n' + msg)
    }
    return resposta === 's'
}

function classifica_participacao_crime(telefonou, esteve_no_local, mora_perto, devia_para_vitima, trabalhou_com_a_vitima){
    let pontuacao =0
    if(telefonou){
        pontuacao++
    }
    if(esteve_no_local){
        pontuacao++
    }
    if(devia_para_vitima){
        pontuacao++
    }
    if(mora_perto){
        pontuacao++
    }
    if(trabalhou_com_a_vitima){
        pontuacao++
    }
    if(pontuacao < 2){
        return 'Inocente'
    }else if(pontuacao===2){
        return 'Suspeita'
    }else if(pontuacao<=4){
        return 'Cúmplice'
    }
return 'Assassino'
}



