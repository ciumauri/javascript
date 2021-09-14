//Manipulação de Strings e Arrays

//Separando Strings 
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

//Unindo Strings  
let phraseUnderScore = myArray.join("_")
console.log(phraseUnderScore.toUpperCase())

//Verificação de textos
console.log(phrase.includes("Amor"))

//Contando caracteres e digitos
let word = "paralelepipedo"
console.log(`A palavra tem ${word.length} caracteres.`)
let number = 1234
console.log(`A quantidade de digitos é: ${String(number).length}`)

//Criando Array como construtor
//let arrayConst = ['a', 'b', 'c']
let arrayConst = new Array('a', 'b', 'c')
console.log(arrayConst)

//Contar elementos de um array
console.log(`O Array contém ${['a', 'b', 'c'].length} elementos`)

//Manipulando Arrays
//Transformar cadeia de caracteres em elementos de um Array

let words = "manipulação"
console.log(Array.from(words))
