// Sistema de gastos familiares

let spending = {
  incomes: [2500, 3200, 250.43, 360.45],
  expense: [320.34, 128.45, 176.87, 1450.0, 5000.0]
}

function sum(array) {
  let total = 0
  for (let value of array) {
    total += value
  }
  return total
}

function calculateSpeding() {
  const calculateIncomes = sum(spending.incomes)
  const calculateExpenses = sum(spending.expense)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let spendingText = 'negativo'

  if (itsOk) {
    spendingText = 'positivo'
  }
  console.log(`Seu saldo é ${spendingText} R\$: ${total.toFixed(2)}`)
}

calculateSpeding()
