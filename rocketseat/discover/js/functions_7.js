//Callback function com arrow function

function sayMyName(element) {
  console.log("Estou antes de uma callback");
  element();
  console.log("Estou depois de uma callback");
}

sayMyName(() => {
  console.log("Estou em uma callback");
});

console.log("Fim do código");

//Callback function sem arrow function

function sayMyName2() {
  console.log("Estou antes de uma callback");
  function element1() {
    console.log("Estou em uma callback");
  }
  element1();
  console.log("Estou depois de uma callback");
}

sayMyName2();

console.log("Fim do código");
