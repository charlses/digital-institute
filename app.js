// //! შექმენით ალგორითმი რომელიც დაითვლის თუ
// //! რამდენი გამყოფი აქვს მომხმარებლის მიერ შემოტანილ რიცხვს

// let userNumber
// let dividers = 1
// let counter = 0
// do {
//   userNumber = Number(
//     prompt('შემოიყვანეთ რიცხვი რომ გავიგოთ რამდენი გამყოფი აქვს რიცხვს!')
//   )
// } while (isNaN(userNumber))

// while (dividers <= userNumber) {
//   if (userNumber % dividers === 0) {
//     counter++
//   }
//   dividers++
// }

// console.log(counter)

// //! შექმენით ალგორითმი რომელიც დაბეჭდავს რიცხვებს მომხმარებლის
// //! მიერ შემოყვანილ რიცხვებს შორის

// let startNumber
// let endNumber

// do {
//   startNumber = Number(prompt('enter starting number'))
//   endNumber = Number(prompt('enter ending number'))
// } while (startNumber >= endNumber || !isNaN(startNumber) || !isNaN(endNumber))

// let counter = startNumber + 1

// while (counter < endNumber) {
//   console.log(counter)
//   counter++
// }

// //! Თხოვეთ მომხმარებელს შემოიტანოს რიცხვი  და დაბეჭდეთ კონსოლში ყველა რიცხვის ნამრავლი
// //! რეზულტატი 1 დან მომხმარებლის მიერ შემოყვანილ რიცხვამდე

// let userNumber = 0

// do {
//   userNumber = Number(prompt('შემოიყვანეთ რიცხვი!'))
// } while (isNaN(userNumber) || userNumber < 0)

// let counter = 1
// let result = 1

// while (counter <= userNumber) {
//   result *= counter
//   counter++
// }

// console.log(result)

// //! Თხოვეთ მომხმარებელს რომ შემოიტანოს რიცხვი 1 დან -100 მდე,დაბეჭდეთ
// //! ყველა კენტი რიცხვი 0 დან მომხმარებლის მიერ შემოყვანილ რიცხვამდე

// let userNumber

// do {
//   userNumber = Number(prompt('Enter a number between 1 and 100'))
// } while (isNaN(userNumber) || (userNumber < 0 && userNumber > 100))

// let counter = 0

// while (counter <= userNumber) {
//   if (counter % 2 !== 0) {
//     console.log(counter)
//   }
//   counter++
// }

// //! დაბეჭდეთ 0დან 100მდე ყველა რიცხვი, რომელიც 3ზეც იყოფა და 5ზეც.

// let endNumber = 100
// let counter = 1
// while (counter <= endNumber) {
//   if (counter % 3 === 0 && counter % 5 === 0) {
//     console.log(counter)
//   }
//   counter++
// }

// //! დაბეჭდეთ 0დან 100მდე ყველა რიცხვი, რომელიც 3ზე ან 5ზე იყოფა.

// let endNumber = 100
// let counter = 1
// while (counter <= endNumber) {
//   if (counter % 3 === 0 || counter % 5 === 0) {
//     console.log(counter)
//   }
//   counter++
// }

// //! დაითვალეთ ჯამი ყველა რიცხვისა 0დან 100მდე, რომელიც 3ზე და 5ზე იყოფა.

// let endNumber = 100
// let counter = 1
// let sum = 0

// while (counter < endNumber) {
//   if (counter % 3 === 0 && counter % 5 === 0) {
//     sum += counter
//   }
//   counter++
// }

// console.log(sum)

// //! დაითვალეთ ჯამი ყველა რიცხვისა 0დან 100მდე, რომელიც 3ზე ან 5ზე იყოფა.

// let endNumber = 100
// let counter = 1
// let sum = 0

// while (counter < endNumber) {
//   if (counter % 3 === 0 || counter % 5 === 0) {
//     sum += counter
//   }
//   counter++
// }

// console.log(sum)
