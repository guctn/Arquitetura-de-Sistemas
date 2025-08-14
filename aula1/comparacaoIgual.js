
// == só verifica se os valores são iguais - faz coerção automática
// === verifica o valor como também o tipo do dado
console.log(1 == 1)//true
console.log (1 == "1") //true
console.log (1 === 1) //true
console.log (1 === "1")//false
console.log (true == 1) //true
console.log (1 == [1])//true
console.log (null == null)//true
console.log (null == undefined)//true
console.log([] == false)//true
console.log ([] == [])//false
console.log([1] == [1])//false
console.log([1] == 1) //true
//faz coerção sempre usando o valor de tipo primitivo como o padrão

//comparando objetos
var a = [1]
var b = [1]

console.log(a == b) //false porque podem ter o mesmo valor mas possuem objetos diferentes

var c = a //variável de referência
console.log(a == c) //aqui é true porque aponta para o mesmo objeto

console.log([1] === 1)
console.log([1] === [1]) //ele reclama porque sempre será falso, 
// dois objetos mesmo que com o mesmo valor são diferente