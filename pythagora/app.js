const a = parseInt(
  prompt('შეიყვანეთ a რომ გავიგოთ a^2 + b^2 = c^2 (ჰიპოთენუზა)')
)

const b = parseInt(
  prompt('შეიყვანეთ b რომ გავიგოთ a^2 + b^2 = c^2 (ჰიპოთენუზა)')
)

const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

alert(`ჰიპოთენუზა(c) = ${c} (სადაც a = ${a} და b = ${b}`)
