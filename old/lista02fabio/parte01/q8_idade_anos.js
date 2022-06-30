import {input} from './\io_utils.js'

function main(){
    const born_year = input('Digite o ano de nascimento: ')
    const born_month = input('Digite o mes de nascimento: ')
    const born_day = input('Digite o dia de nascimento: ')

    const now_year = input('Digite o ano atual: ')
    const now_month = input('Digite o mes atual: ')
    const now_day = input('Digite o dia atual: ')

    if(check_valid_date(born_year, born_month, born_day, now_year, now_month, now_day)){
        console.log('Idade válida')
        const idade = check_age(born_year, born_month, born_day, now_year, now_month, now_day)
        console.log(`\t Idade = ${idade} anos`)
    }else{
        console.log('Idade não válida')
    }

}

function check_valid_date(born_year, born_month, born_day, now_year, now_month, now_day){
    if(born_year < now_year){
        return true
    }else if(born_year === now_year){
        if(born_month < now_month){
            return true
        }else if(born_month === now_month){
            return born_day <= now_day
        }
        return false
    }
    return false
}

function check_age(born_year, born_month, born_day, now_year, now_month, now_day){
    if(born_month > now_month){
        return now_year - born_year - 1
    }else if(born_month === now_month){
        if(born_day > now_day){
            return now_year - born_year - 1
        }
        return now_year - born_year
    }
    return now_year - born_year 
}

main()