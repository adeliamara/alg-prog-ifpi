import {input} from './\io_utils.js';

function main(){

    //entrada
    const value_teacher1 = input('Digite o valor cobrado por hora pelo professor 01: ')
    const value_teacher2 = input('Digite o valor cobrado por hora pelo professor 02: ')
    const work_time_teacher1 = input('Digite a quantidade de horas trabalhadas pelo professor 01: ')
    const work_time_teacher2 = input('Digite o quantidade de horas trabalhadas pelo professor 02: ')
    

    //processamento
    const salary_teacher1 = calc_salary(value_teacher1, work_time_teacher1)
    const salary_teacher2 = calc_salary(value_teacher2, work_time_teacher2)

    if(salary_teacher1 === salary_teacher2 ){
        console.log(`Os dois salários são iguais no valor de R$ ${salary_teacher1.toFixed(2)}`)
    }else{
        let dict_salary_teacher = new Map() //cria algo semelhante a um dicionario em python
        dict_salary_teacher.set("Teacher 1", salary_teacher1) //set acrescenta chave e valor
        dict_salary_teacher.set("Teacher 2", salary_teacher2)
        const maior = check_maior(dict_salary_teacher)
        console.log(`O maior salário é o do ${maior} e o valor é R$${dict_salary_teacher.get(maior).toFixed(2)} `)//get extrai o valor da chave referenciada
    }
}

function calc_salary(value, hour){
    return value * hour
}

function check_maior(dict){
    if( dict.get("Teacher 1")> dict.get("Teacher 2")){
        return  'Teacher 1'
    } else
    return 'Teacher 2' 
}

main()
