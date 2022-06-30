import { input} from './\io_utils.js';

function main(){
    const date1 = input('Entre com a data 1 no formato yyyy-mm-dd: ')
    const date2 = input('Entre com a data 2 no formato yyyy-mm-dd: ')

    const [year1, month1, day1] = date1.split('-').map(Number)
    const [year2, month2, day2] = date2.split('-').map(Number)

    const maior_data = verificar_maior_data(year1, month1, day1,year2, month2, day2)

    console.log(`A maior data data é ${maior_data}`)

}

function verificar_maior_data(year1, month1, day1, year2, month2, day2){
    if(year1 > year2){
        return `${year1}-${month1}-${day1}`
    }else if(year2>year1){
        return `${year2}-${month2}-${day2}`
    }else if(month1>month2){
        return `${year1}-${month1}-${day1}`
    }else if(month2>month1){
        return `${year2}-${month2}-${day2}`
    }else if(day1>day2){
        return `${year1}-${month1}-${day1}`
    }
    return `${year2}-${month2}-${day2}`
}

main()
