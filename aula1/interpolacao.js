//escopo não restrito a bloco
var idade = 18

console.log(`Oi, ${nome}`) //interpolação - são crases invés de aspas

if (idade >= 18){
    var nome = "João"
    console.log(`Parabéns, ${nome}. Você pode dirigir`)
}

console.log(`Até mais, ${nome}.`)
// variavel nome não existia até a linha 32, mas como ela é global ai não da erro mesmo que esteja depois do console.log()
// se fosse let, ai sim causaria um problema
