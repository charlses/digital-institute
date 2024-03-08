const z = parseInt(prompt('შეიყვანეთ Z რომ ამოვხსნათ 2z + 3y = 5x'))
const y = parseInt(prompt('შეიყვანეთ Y რომ ამოვხსნათ 2z + 3y = 5x'))
const x = (2 * z + 3 * y) / 5

alert(`
2z + 3y = 5x => 2 * ${z} + 3 * ${y} = 5 * ${x}
x= ${x}
`)
