//36.Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.//


import {input, print} from './\io_utils.js'


function main(){

    //enter
    const years = Number(input('Enter an integer to represent age in years: '))
    const months = Number(input('Enter an integer to represent age in months: '))
    const days = Number(input('Enter an integer to represent age in days: '))


    //processing
    const age_total = years * 365 + Math.floor(years/4) + months * 30 + days


    //result
    print(`${years} years + ${months} months + ${days} days = ${age_total} days`)
    





}

main()