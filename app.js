// //!დაბეჭდეთ ყველა 5 ის ჯერადი რიცხვი 0 დან 1600 მდე რომელიც არ იყოფა 10 ზე უნაშთოდ.

// const userNumber = 1600
// let counter = 0

// while (counter <= userNumber) {
//   if (counter % 5 === 0 && counter % 10 !== 0) {
//     console.log(counter)
//   }
//   counter++
// }

// //!Თხოვეთ მომხმარებელს რომ შემოიტანოს რიცხვი 1 დან -100 მდე,
// //!დაბეჭდეთ ყველა კენტი რიცხვი 0 დან მომხმარებლის მიერ შემოყვანილ რიცხვამდე.

// let userNumber = Number(
//   prompt('გთხოვთ შემოიყვანოთ ნებისმიერი რიცხვი 1-დან 100-მდე')
// )
// let counter = 0

// while (typeof userNumber !== 'number' || userNumber < 1 || userNumber > 100) {
//   alert('გთხოვთ შემოიყვანოთ სწორი ციფრი (1-100)!')
//   userNumber = Number(
//     prompt('გთხოვთ შემოიყვანოთ ნებისმიერი რიცხვი 1-დან 100-მდე')
//   )
// }

// while (counter < userNumber) {
//   if (counter % 2 !== 0) {
//     console.log(counter)
//   }
//   counter++
// }

// //!შექმენით ალგორითმი რომელიც დაბეჭდავს რიცხვებს მომხმარებლის
// //!მიერ შემოყვანილ რიცხვებს შორის

// let startCounter = Number(prompt('შემოიყვანეთ საწყისი რიცხვი!'))
// let endCounter = Number(prompt('შემოიყვანეთ საბოლოო ციფრი!'))

// while (
//   endCounter <= startCounter ||
//   typeof startCounter !== 'number' ||
//   typeof endCounter !== 'number'
// ) {
//   alert('შემოიყვანეთ რიცხვები სწორად!')
//   startCounter = Number(prompt('შემოიყვანეთ საწყისი რიცხვი!'))
//   endCounter = Number(prompt('შემოიყვანეთ საბოლოო ციფრი!'))
// }

// while (startCounter <= endCounter) {
//   console.log(startCounter)
//   startCounter++
// }

// //!Თხოვეთ მომხმარებელს რომ შემოიყვანოს რიცხვი 50 დან 100 მდე და დაბეჭდეთ
// //!კონსოლში მომხმარებლის მიერ შემოყვანილი რიცხვის ფაქტორეალი.
// //!Ფაქტორეალის გამომთვლელი ფორმულაა :
// //!5 ! = 1 * 2 * 3 * 4 * 5;  8! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8;

// let factorialNumber = Number(
//   prompt(
//     'შემოიყვანეთ ნებისმიერი რიცხვი 50-დან 100-მდე რომ გამოვითვალოთ ფაქტორიალი'
//   )
// )
// let result = 1
// let factorialStart = 1

// while (
//   factorialNumber < 50 ||
//   factorialNumber > 100 ||
//   isNaN(factorialNumber)
// ) {
//   alert('შემოიყვანეთ რიცხვები სწორად!')
//   factorialNumber = Number(
//     prompt(
//       'შემოიყვანეთ ნებისმიერი რიცხვი 50-დან 100-მდე რომ გამოვითვალოთ ფაქტორიალი'
//     )
//   )
// }

// while (factorialStart <= factorialNumber) {
//   result *= factorialStart
//   factorialStart++
// }

// console.log(`factorial of ${factorialNumber} = ${result}`)

// //!შექმენით ალგორითმი რომელიც კონსოლში დალოგავს გამრავლების
// //!ტაბულას*(whileში while შეიძლება დაგჭირდეთ)

let i = 1

while (i <= 10) {
  let j = 1
  while (j <= 10) {
    console.log(`${i} * ${j} = ${i * j}`)
    j++
  }
  console.log('') // Empty line for better readability
  i++
}
