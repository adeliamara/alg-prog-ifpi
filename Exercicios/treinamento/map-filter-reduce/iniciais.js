

function main(){

    const texto = 'Adelia Mara C Sousa'
    console.log(selectIniciais(texto))
}


const selectIniciais = text => text.split(' ').map(word => word[0]).join('\n');

main()
