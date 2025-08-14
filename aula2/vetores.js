//declaração de vetores
const v1 = []

console.log(v1.length) //output: 0

v1[0] = 3.4

console.log(v1.length); //output: 1
console.log(v1[100]) //output: undefined

v1[10] = 'ab'
console.log(v1.length) //output: 11 

// for (let i = 0; i<v1.length; i++){
//     console.log(v1[i])
// } //output: 3.4 - undefined 8 vezes - ab]


const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

const apenasComA = nomes.filter((nome) => nome.startsWith("A"))
console.log(apenasComA)

const res = nomes.map((nome)=> nome.charAt(0))
console.log(res)

const todosComecamComA = nomes.every((nome) => nome.startsWith('A'))
console.log(todosComecamComA);
// só sera true se todos entrarem na condição

const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => ac + v)
console.log(soma)
//ac é um acumulador e o v os números em cada iteração isso aconteve por causa do reduce