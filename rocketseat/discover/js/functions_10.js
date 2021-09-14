//Manipulando Arrays

let techs = ["html", "css", "js","dart", "c", "c++"]
console.log(`Os elementos iniciais são: ${techs}`)

//adicionar um item no fim
techs.push("nodejs")
console.log(`Após adição de um novo item no fim: ${techs}`)

//adicionar no começo
techs.unshift("sql")
console.log(`Após adição de um novo item no começo: ${techs}`)

//remover do fim(ultimo elemento)
techs.pop()
console.log(`Após remoção do último item: ${techs}`)

//remover do inicio(primeiro elemento)
techs.shift()
console.log(`Após remoção do primeiro item: ${techs}`)

//pegar comente alguns elementos do array(posição, item(s))
console.log(`Eu quero pegar os 2 últimos elementos que são: ${techs.slice(1, 3)}`)

//remover 1 ou mais itens de qualquer posição do array(posição, item(s))
techs.splice(1, 2)
console.log(`Removi 2 item e ficou apenas o item(s): ${techs}`)

//encontrar a posição de um elemento no array
let index = techs.indexOf('c')
console.log(`A posição da linguagem procurada é: ${index}`)

