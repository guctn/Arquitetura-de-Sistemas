//ser devolvida por uma função
//uma função dentro da função

//função de alta ordem é como o filter()
//uma função que precisa de outra função dentro para funcionar

// CLOSURE
// função dentro de variavel - uma função pode ser atribuida a uma variável
let umaFuncao = function() {
    console.log("Fui armazenada em uma variavel")
}
umaFuncao()

function teste(){
    console.log("Eu sou um teste")
}

//receber uma função como argumento
function f (funcao){
    funcao()
}

f(umaFuncao)
f(teste)
//f espera receber uma outra função
// e assim com o parenteses eu estou passando o retorno da função
// que no caso é undefined e assim quebra
f(function (){
    console.log('Estou sendo passada para f')
})

//uma função pode retornar uma função
function g () {
    function outraFuncao(){
        console.log("Fui criada por g");
    }
    return outraFuncao;
}
// gResult = g()
// console.log(gResult = g()) //gResult é recebe o valor de uma função
// gResult()
// console.log(g())
// g()()

f(g)
f(g())


function h(){
    let nome = "João"   
    function i (){
        console.log(nome)
    }
    i()
}
h()

function ola() {
    let nome = "Maria"
    return function (){ //let só funciona dentro do loop mas um loop dentro do loop também pode usar
      console.log("Olá,", nome); // conceito de closure - quando ta no return as linhas de cima já não existem mais
    }                           // e assim o escopo externo é preservado para que o return funcione
}
olaResult = ola()
olaResult()