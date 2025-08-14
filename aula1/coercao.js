//CAST
//Quando dois tipos primitivos de tipos diferentes estão
//envolvidos em uma expressão, um deles pode ter seu tipo 
//alterado para que a expressão faça sentido
const n1 = 2
const n2 = '3'
//coerção implícita de n1, concatenação acontece

const n3 = n1 + n2
console.log(n3) // output: 23

//coerção explícita, soma acontece
const n4 = n1 + Number(n2)
console.log(n4) // output: 5