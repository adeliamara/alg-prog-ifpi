import {input} from './\io_utils.js';

function main(){

    //entrada
   const notas = input('Insira as notas de um aluno separadas por espaço: ')

   //processamento
   let final_average = 0
   let vetor_notas = notas.split(' ').map(Number)  
   const average = calc_average(vetor_notas)

    if(need_final_exam(average)){ //verifica se o aluno precisa de exame final e calcula a nova nota
        const nota_exame_final = input('Insira a nota do exame final: ')
        vetor_notas.push(nota_exame_final)
        vetor_notas = vetor_notas.map(Number)  
        final_average = calc_average(vetor_notas)
        if(approved(final_average)){
            console.log(`Aprovado com média ${final_average.toFixed(2)}`)
        }else{
            console.log(`Reprovado com média ${final_average.toFixed(2)}`)
        }
    }else{
        final_average = average
        if(approved(final_average)){
            console.log(`Aprovado com média ${final_average.toFixed(2)}`)
        }else{
            console.log(`Reprovado com média ${final_average.toFixed(2)}`)
        }
    }
}

function calc_average(numeros){
    const soma = numeros.reduce((acumulado, elemento_atual)=> acumulado + elemento_atual,0)
    return soma/numeros.length
}

function need_final_exam(avg){
    if(avg < 7){
        return true
    }
    return false
}

function approved(avg){
    if(avg>=5){
        return true
    }
    return false
}


main()
