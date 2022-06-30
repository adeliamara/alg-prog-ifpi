import { input } from "./io_utils.js"

function main(){
    const year = Number(input('Digite o ano atual no formato yyyy: '))
    const month =  Number(input('Digite o mes atual no formado mm: '))
    const day =  Number(input('Digite o dia atual no formato dd: '))

    if(valid_date(year, month, day)){
        console.log(`${year}-${month}-${day} é uma data válida`)
    }else{
        console.log(`${year}-${month}-${day} não é uma data válida`)
    }
}

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