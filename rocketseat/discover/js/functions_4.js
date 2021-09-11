//Função Liquidificador
let fruta1 = "carambola"
let fruta2 = "abacaxi"
function fazerSuco(fruta1, fruta2){
  let copo = fruta1 + fruta2
  return copo
}

fazerSuco(fruta1, fruta2)


console.log(`Fiz um suco com ${fruta1} e ${fruta2}`)

//Função Liquidificador 2

function fazerSuco2(fruta1, fruta2){
  return 'suco de: ' + fruta1 + ' e ' + fruta2
}

const copo = fazerSuco2('maracujá', 'acerola')

console.log(copo)