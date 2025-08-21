//JSON -> Javascript Object Notation
//Simplifica o modelo .xml 
//js sruge para usar no web

let pessoa = {
    nome: "João",
    idade: 17 //tailoring comma -> just works for .js and not .json
} // esse estilo só funciona em .js -> logo é melhor usar o jeito .json porque funciona com os dois

// console.log("Me chamo " + pessoa.nome)
// console.log("Tenho " + pessoa["idade"])

let pessoaComEndereco = {
    "nome": "Marcia",
    "idade": 27,
    "endereco": {
        "logradouro": "Rua B",
        "numero": 121,
        "estado": {
            "nome": "São Paulo",
            "sigla": "SP"
        }
    }
};

console.log(`Sou ${pessoaComEndereco.nome}, tenho ${pessoaComEndereco.idade} anos,moro na rua ${pessoaComEndereco.endereco.logradouro}, 
    ${pessoaComEndereco.endereco.numero} em ${pessoaComEndereco.endereco.estado.nome} - ${pessoaComEndereco.endereco.estado.sigla}`)

// o maior objetivo do Javascript é que os users em aplicações web não sofram de erros
// assim, js criou o undefined -> uma criação para evitar que o erro aparecesse e já tivesse que ser tratado

//Logo se você tentar usar o valor de alguma chave que não existe ou escrita de jeito errado (quando chamada)
// o js não irá gerar um erro e sim resultar em undefined

let concessionaria = {
    "cnpj": "00011122210001-45",
    "endereco": {
        "logradouro": "Rua A",
        "numero": 10,
        "bairro": "Vila Jota",
    },
    "veiculos": [
        {
            "marca": "Ford",
            "modelo": "Ecosport",
            "anoDeFabricacao": 2018
        },
        {
            "marca": "Chevrolet",
            "modelo": "Onix",
            "anoDeFabricacao": 2020
        },        
        {
            "marca": "Volkswagen",
            "modelo": "Nivus",
            "anoDeFabricacao": 2022
        }
    ]
};

// for (let veiculo of concessionaria.veiculos){
//     console.log(`Marca: ${veiculo.marca}`) //mostra todas as marcas
//     console.log(`Modelo: ${veiculo.modelo}`);
//     console.log(`Ano de Fabricação:${veiculo.anoDeFabricacao}`);
// }

let calculadora = {
    soma: (a, b) => a + b,
    subtracao: function (a, b) {
        return a - b;
    },
}

console.log(`2 + 3 ${calculadora.soma(2, 3)}`)
console.log(`2 - 3 ${calculadora.subtracao(2, 3)}`)

//pode ocorrer de ter mais de um objeto com o mesmo nome - por causa de um erro
// se acontecer a ultima sempre será a final