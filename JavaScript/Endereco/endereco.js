function addEndereco(endereco) {
    const {cidade, estado} = endereco
    const novoEndereco = {
        cidade,
        estado,
        pais: 'Brasil'
    }
    console.log(`${novoEndereco.cidade}, ${novoEndereco.estado} - ${novoEndereco.pais}`)
}

addEndereco({cidade:'São Bernardo do Campo', estado: 'São Paulo'});


//Exercicio com rest e spread operators
function maisNomes(nomes, ...novosNomes) {
    let juntados = [...nomes, ...novosNomes]
    console.log(juntados)
}
let nomes = ['Maria', 'Joao']
let novosNomes = maisNomes(nomes, 'Paulo', 'Pedro', 'Zacarias', 'Miguel')