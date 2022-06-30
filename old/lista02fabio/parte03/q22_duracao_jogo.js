import { input} from './\io_utils.js';

function main(){
    const start_hour = Number(input('digite a hora inicial: '))
    const start_minute = Number(input('digite o minuto inicial: '))
    const end_hour = Number(input('digite a hora final: '))
    const end_minute = Number(input('digite o minuto final: '))

    const time = calc_time_minute(start_hour, start_minute, end_hour, end_minute)
    const result = minute_to_hours(time)

    console.log(result)

}

const ended_new_day = (start_hour, start_minute, end_hour, end_minute) => {
    return end_hour < start_hour || (end_hour === start_hour && end_minute < start_minute)
}   

function calc_time_minute(start_hour, start_minute, end_hour, end_minute){
    if(ended_new_day(start_hour, start_minute, end_hour, end_minute)){
        return (23-start_hour)*60 + 60 - start_minute + end_hour * 60 + end_minute
    } else if(start_minute <= end_minute){
        return (end_hour-start_hour)*60 + end_minute - start_minute 
    }
    return (end_hour - start_hour - 1) * 60 + 60 - start_minute + end_minute

}
const minute_to_hours = value => {
    const hour = Math.trunc(value/60)
    const minute = value % 60
    return `${hour}:${minute} h`
}
main()