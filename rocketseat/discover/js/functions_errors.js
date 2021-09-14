// trow

function sayMyname(name = ''){
    if(name === ''){
        throw "Nome é obrigatório"
    }
    console.log("Depois do erro")
}

// try...cath

try {
    sayMyname("Mauricio")
} catch (error) {
    console.log(error)
}

console.log("Após a função do try/catch")