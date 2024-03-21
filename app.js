// // შექმენით მასივი, რომელშიც ჩაწერთ ყველა
// // 3ის ჯერად რიცხვს 0დან 100მდე. გადაუარეთ და დაბეჭდეთ ეს რიცხვები

// let arr = []
// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0) {
//     arr.push(i)
//   }
// }
// console.log(arr)

// ჩაწერეთ მასივში 50 რენდომ რიცხვი 100დან 500მდე შუალედში. დაბეჭდეთ
// თითოეული რიცხვი და რიცხვის ინდექსი. შექმენი მასივი, რომელშიც ჩაწერთ 10 სახელს.
// დაბეჭდეთ ამ მასივიდან ყველა სახელი, რომელიც იწყება "g"ზე(თუ სახელი იწყება G-ზე, მაინც)

// let randomArr = []
// for (let i = 0; i < 50; i++) {
//   let randomNum = Math.floor(Math.random() * 401 + 100)
//   randomArr.push(randomNum)
// }

// for (let i = 0; i < randomArr.length; i++) {
//   console.log(i, randomArr[i])
// }

//!or
// randomArr.map((element, index) => {
//   console.log(index, element)
// })

// //* names

// let namesArr = [
//   'Giorgi',
//   'Vaja',
//   'Demetre',
//   'Mamuka',
//   'Daviti',
//   'Galaqtioni',
//   'Tornike',
//   'Tamazi',
//   'Avtandili',
//   'Akaki'
// ]

// for (let i = 0; i < namesArr.length; i++) {
//   if (namesArr[i].toLowerCase().charAt(0) === 'g') {
//     console.log(namesArr[i])
//   }
// }

// Შექმენით მასივი რომელშიც იქნება შენახული რიცხვები 2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326,
// გადაიარეთ მასივზე ციკლის მეშვეობით და დაბეჭდეთ კონსოლის ფანჯარაში თითოეული რიცხვის გამოყოფების რაოდენობა.

// let numbersArr = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326]
// let dividersArr = []
// let dividersCount = 0

// for (let i = 0; i < numbersArr.length; i++) {
//   dividersCount = 0
//   for (let j = 1; j <= numbersArr[i]; j++) {
//     if (numbersArr[i] % j === 0) {
//       dividersCount++
//     }
//   }
//   dividersArr.push(`${numbersArr[i]} has ${dividersCount} dividers`)
// }

// console.log(dividersArr)

//ჩაწერეთ მასივში 10 რენდომ რიცხვი. შემდეგ დაბეჭდეთ ამ რიცხვების ჯამი

// let rndArr = []

// for (let i = 0; i < 10; i++) {
//   rndArr.push(Math.floor(Math.random() * 100 + 1))
// }

// console.log(rndArr)

// ჩაწერეთ მასივში 10 რენდომ რიცხვი. იპოვეთ მათ შორის უმცირესი და უდიდესი. დაბეჭდეთ ისინი ეკრანზე
// let rndArr = []

// for (let i = 0; i < 10; i++) {
//   rndArr.push(Math.floor(Math.random() * 100 + 1))
// }

// let minimumNumber = rndArr[0]
// let maximumNumber = rndArr[0]

// for (let i = 0; i < rndArr.length; i++) {
//   if (rndArr[i] > maximumNumber) {
//     maximumNumber = rndArr[i]
//   }
//   if (rndArr[i] < minimumNumber) {
//     minimumNumber = rndArr[i]
//   }
// }

// console.log(rndArr, minimumNumber, maximumNumber)
