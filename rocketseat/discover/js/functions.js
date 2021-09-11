/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name, idade) {
  this.name = name
  this.idade = idade
  this.walk = ()=> this.name + " está andando, e tem " + this.idade + " anos."
}

const mauricio = new Person('Mauricio', 38)
const anne = new Person('Anne', 33)
console.log(mauricio.walk())
console.log(anne.walk())