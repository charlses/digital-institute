function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

function checkEquals(x, y) {
  return x === y ? 'რიცხვები ტოლია' : 'არ არის ტოლი'
}

function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

function calculator() {
  let operation = prompt(
    `გთხოვთ აირჩიოთ ოპერაცია:
    1. მიმატება + 
    2. გამოკლება -
    3. გამრავლება *
    4. გაყოფა /
    5. ტოლობა =
    შეიყვანეთ შესაბამისი რიცხვი ან ოპერაციის ნიშანი: (+, -, *, /, =)
    `
  )

  if (
    operation !== '1' &&
    operation !== '+' &&
    operation !== '2' &&
    operation !== '-' &&
    operation !== '3' &&
    operation !== '*' &&
    operation !== '4' &&
    operation !== '/' &&
    operation !== '5' &&
    operation !== '='
  ) {
    alert('გთხოვთ შეიყვანოთ შესაბამისი რიცხვი ან ოპერაცია')
    calculator()
    return
  }

  let num1 = prompt('შეიყვანეთ პირველი რიცხვი:')
  let num2 = prompt('შეიყვანეთ მეორე რიცხვი:')

  // Check if inputs are valid numbers
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    alert('გთხოვთ შეიყვანეთ რიცხვები სწორად!')
    calculator()
    return
  }

  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  let result
  switch (operation) {
    case '1':
    case '+':
      result = add(num1, num2)
      break
    case '2':
    case '-':
      result = subtract(num1, num2)
      break
    case '3':
    case '*':
      result = multiply(num1, num2)
      break
    case '4':
    case '/':
      if (num2 === 0) {
        alert('Error: ნულზე გაყოფა არ მოჟნა!')
        calculator() // Re-prompt
        return
      }
      result = divide(num1, num2)
      break
    case '5':
    case '=':
      result = checkEquals(num1, num2)
      break
  }

  alert(`შედეგი: ${result}`)
}

calculator()
