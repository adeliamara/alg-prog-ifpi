import { input } from './\io_utils.js'

function main(){
    const born_year = Number(input('Digite o ano de nascimento: '))
    const born_month = Number(input('Digite o mes de nascimento: '))
    const born_day = Number(input('Digite o dia de nascimento: '))

    const now_year = Number(input('Digite o ano atual: '))
    const now_month = Number(input('Digite o mes atual: '))
    const now_day = Number(input('Digite o dia atual: '))
    let result = 0

    if(valid_date(born_year, born_month, born_day) && valid_date(now_year, now_month, now_day ) &&  check_valid_date(born_year, born_month, born_day, now_year, now_month, now_day)){
        console.log('Idade válida')
        result = check_age(born_year, born_month, born_day, now_year, now_month, now_day)
    }else{
        result ='Alguma(s) datas inseridas não são válidas'
    }

    console.log(result)

}

//funcao que verifica a idade
function check_age(born_year, born_month, born_day, now_year, now_month, now_day){
    let anos = 0
    let dias = 0
    let meses = 0
    if(born_month > now_month){
        anos = now_year - born_year - 1
        meses = now_month - 1 + 12 - born_month
        dias = 30 - born_day + now_day
        return `${anos} anos, ${meses} meses e ${dias} dias`
    }else if(born_month === now_month){
        if(born_day > now_day){
            anos = now_year - born_year - 1
            meses = now_month - 1 + 12 - born_month
            dias = 30 - born_day + now_day
            console.log('here')
            return `${anos} anos, ${meses} meses e ${dias} dias`
        }else{
            anos = now_year - born_year
            meses = 0
            dias = now_day - born_day 
            return `${anos} anos, ${meses} meses e ${dias} dias`
        }  
    }else if((born_day > now_day)){
        anos = now_year - born_year
        meses = now_day - born_month - 1
        dias = now_day + 30 - born_day 
        return `${anos} anos, ${meses} meses e ${dias} dias`
    }else{
        anos = now_year - born_year
        meses = now_day - born_month 
        dias = now_day - born_day
        return `${anos} anos, ${meses} meses e ${dias} dias`
    }
}

//verifica se a data atual é maior ou igual a data de nascimento
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


//veririca se data é negativa ou fora do
function valid_date(y, m ,d){
    if(y > 0 && m > 0 && d > 0 && m <= 12 && d <= 31){
        if(d>30){
            return m === 1 || m === 3 || m === 5 ||m === 7 ||m === 8 || m === 10 || m === 12
        }else if(m === 2 && d === 29){
            return ano_eh_bissexto(Number(y))
        }else if(d=== 30 && m !== 2 || d < 29){
            return true
        }
        return false
    } 
    return false
}

const ano_eh_bissexto = year => (year% 4 === 0 && year % 100 !== 0) || year%400 === 0

main()