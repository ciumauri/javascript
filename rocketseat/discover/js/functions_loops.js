// Estruturas de repetição

// for
// break - parar a execução do loop
// continue - pular a execução do momento

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

console.log('O incremento termina aqui')

for (let y = 10; y > 0; y--) {
  console.log(y)
}
console.log('O decremento termina aqui')

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}

console.log('O break termina aqui')

for (let y = 10; y > 0; y--) {
  if (y === 5) {
    continue
  }
  console.log(y)
}
console.log('O continue termina aqui')
console.log('Aqui finaliza o FOR e inicia o WHILE')

// while
let i = 54564556465454654654654
while (i >= 10) {
  console.log(i)

  i /= 35
}
console.log('Aqui finaliza o WHILE e inicia o FOR OF')

// for...of
let myName = 'Mauricio'

for (let char of myName) {
  console.log(char)
}
/*-----------------------------------*/
let myNames = ['Mauricio', 'Marcos', 'Lucas']

for (let myName of myNames) {
  console.log(myName)
}
console.log('Aqui finaliza o FOR OF e inicia o FOR IN')

// for...in
let person = {
  name: 'Mauricio',
  age: 39,
  weight: 88.6
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
  console.log('Acessando as propriedades do objeto tipo 1')
  console.log(`O nome da pessoa é ${person['name']}`)
  console.log(`A idade da pessoa é ${person['age']}`)
  console.log(`O peso da pessoa é ${person['weight']}`)
  console.log('Acessando as propriedades do objeto tipo 2')
  console.log(`O nome da pessoa é ${person.name}`)
  console.log(`A idade da pessoa é ${person.age}`)
  console.log(`O peso da pessoa é ${person.weight}`)
}
