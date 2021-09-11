// criar um aplicatido de frases motivacionais

//declaration - declaração da função - function statement
//function expression
//function anonymous
let total = 0
const sum = function(a, b){
  total = a + b
  return total
}

//executar a function
//rodar, chamar, invocar
//execute, run, call, invoke

//sum(5, 6)

let c = 5
let d = 6
console.log(`o argumento a da funćão recebe = ${c}`)
console.log(`o argumento b da funćão recebe = ${d}`)
console.log(`a somda de a + b é = ${sum(c,d)}`)
console.log(`Inicialmente o valor de total é 0 e depois é ${total}`)
console.log('Aqui termina o primeiro código com a variável global')


// criar um aplicatido de frases motivacionais

//declaration - declaração da função - function statement
//function expression
//function anonymous
const sum2 = function(e, f){
 let total2 = e + f
  return total2
}
//executar a function
//rodar, chamar, invocar
//execute, run, call, invoke

//sum(5, 6)

let g = 8
let h = 9
console.log(`o argumento e da funćão recebe = ${g}`)
console.log(`o argumento f da funćão recebe = ${h}`)
console.log(`a somda de e + f é = ${sum2(g,h)}`)
console.log('Aqui termina o segundo código com a variável local')
