

function main() {
    const lines = create_list_random_numbers()

    const maior = select_maior(lines)
    console.log(lines)
    const position = Number(check_index(maior, lines)) + 1
    console.log(maior)
    console.log(position)


}

function create_list_random_numbers() {
    var list = []
    for (let j = 0; j < 100; j++) {
        list.push(getRandom(10000000))
    }
    return list.map(Number)
}

function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}


const select_maior = lines => lines.reduce(function(a, b){
    return Math.max(a,b)
});

function check_index(character, list){
    for (let index in list){
        if(character === list[index] ){
            return index
        }
    }
}
main()