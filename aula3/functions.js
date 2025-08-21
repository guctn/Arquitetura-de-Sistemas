function hello() {
  console.log("Hello!");
}

hello();

function hello (nome){
  console.log(`Oi ${nome}`)
}

hello("Pedro")
//se eu chamar a função e não colocar os parametros ela roda, mas o resultado é undefined
//Não existe sobrecarga, então se faz duas funções iguais, só vai valer a última

function soma(a, b){
  return a + b
}

res = soma(2, 3)
console.log(res)
console.log(soma('2', '3'))
//ele aceita string mas não da erro e só concatena

// funções anonimas
const dobro = function (n) {
  return n * 2
}
console.log(dobro(3))

//valores default para parâmetros
// se não for dado um valor para o parametro ele será 5
const triplo = function (n = 5){
  return 3 * n;
}
console.log(triplo(3))
console.log(triplo())

const quadruplo = function(n){
  return dobro(n)
}
console.log(quadruplo(4))

let quintuplo = triplo(triplo())
console.log(quintuplo)

const fatorial = function(n){ 
  if (n == 0){ 
    return 1
  } 
  else{
    return n*fatorial(n-1)
  }
}


//Arrow function
const bye = () => console.log("bye")
bye()

const metade = (valor) => valor / 2;
console.log(metade(2))

const triplo2 = (valor) => {
  valor * 3
}
console.log(triplo2(2))
//retorna undefined porque está usando chaves e
// não tem nada para retornar na função (return)

const ehPar = (n) => {
  if (n % 2 == 0){
    return true
  }else{
    return false
  }
}

console.log(ehPar(10))

const ehPar2 = (n) => n % 2 == 0;
console.log(ehPar2(2))