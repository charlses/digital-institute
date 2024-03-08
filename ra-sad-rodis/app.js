const questions = [
  {
    question: 'რომელია საფრანგეთის დედაქალაქი?',
    answers: ['პარიზი', 'ლონდონი', 'ბერლინი', 'რომი'],
    correctIndex: 0
  },
  {
    question: 'სად მდებარეობს ჩინეთის დიდი კედელი?',
    answers: ['ინდოეთში', 'ჩინეთში', 'იაპონიაში', 'რუსეთში'],
    correctIndex: 1
  },
  {
    question: 'როდის დამთავრდა II მსოფლიო ომი?',
    answers: ['1913', '1918', '1939', '1945'],
    correctIndex: 3
  }
]

function playQuiz() {
  let score = 0
  for (let i = 0; i < questions.length; i++) {
    let questionObj = questions[i]
    let userAnswer = prompt(
      `${questionObj.question} 
        გთხოვთ აირჩიოთ სწორი პასუხი:
        1. ${questionObj.answers[0]} 
        2. ${questionObj.answers[1]} 
        3. ${questionObj.answers[2]}
        4. ${questionObj.answers[3]}
        
        შეიყვანეთ შესაბამისი რიცხვი:
        `
    )
    if (
      userAnswer !== null &&
      parseInt(userAnswer) - 1 === questionObj.correctIndex
    ) {
      alert('სწორია!')
      score++
    } else {
      alert(
        `არასწორია. სწორი პასუხია: 
          questionObj.answers[questionObj.correctIndex]`
      )
    }
  }
  alert(`თქვენ დაასრულეთ თამაში ქულით: ${score}/${questions.length}`)
}

playQuiz()
