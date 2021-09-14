// Transformar notas escolares
//Modelo 1

let nota = 100

if (nota >= 90) {
  console.log('A')
} else if (nota <= 89 && nota >= 80) {
  console.log('B')
} else if (nota <= 79 && nota >= 70) {
  console.log('C')
} else if (nota <= 69 && nota >= 60) {
  console.log('D')
} else {
  console.log('F')
}
console.log('Final do Modelo 1 e inicio do Modelo 2')
//Modelo 2

function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score <= 89 && score >= 80
  let scoreC = score <= 79 && score >= 70
  let scoreD = score <= 69 && score >= 60
  let scoreF = score <= 59 && score >= 0
  let scoreFinal

  if (scoreA) {
    scoreFinal = 'A'
  } else if (scoreB) {
    scoreFinal = 'B'
  } else if (scoreC) {
    scoreFinal = 'C'
  } else if (scoreD) {
    scoreFinal = 'D'
  } else if (scoreF) {
    scoreFinal = 'F'
  } else {
    scoreFinal = 'Nota inválida'
  }
  return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-5))
console.log(getScore(10))
console.log(getScore(20))
console.log(getScore(30))
console.log(getScore(40))
console.log(getScore(50))
console.log(getScore(60))
console.log(getScore(70))
console.log(getScore(80))
console.log(getScore(90))
console.log(getScore(100))
