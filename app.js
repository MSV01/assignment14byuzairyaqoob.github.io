// var question = [
//     {
//       question: "Html Stands For ____________________________________________________________",
//       options: [
//         "Hyper Text Makeup Language",
//         "html",
//         "Case Cading Style Sheet",
//         "Hypertext markup language",
//       ],
//       correctAns: "Hypertext markup language",
//     },
//     {
//       question: "Css Stands For _________",
//       options: [
//         "Casecading Style Sheet",
//         "Java",
//         "Ram",
//         "Hypertext markup language",
//       ],
//       correctAns: "Casecading Style Sheet",
//     },
//     {
//       question: "Js Stands For _________",
//       options: ["Java Style", "Java Script", "Script", "Script Src"],
//       correctAns: "Java Script",
//     },
//     {
//       question: "Dom Stands For _________",
//       options: ["Document Object Model", "html", "Css", "Java"],
//       correctAns: "Document Object Model",
//     },
//     {
//       question: "Ram Stands For _________",
//       options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
//       correctAns: "Random Acccess Memory",
//     },
//     {
//       question: "Rom Stands For _________",
//       options: [
//         "Hyper Text Markup Language",
//         "html",
//         "HTml",
//         "Read Only Memory",
//       ],
//       correctAns: "Read Only Memory",
//     },
//   ]


//   var currentQuestion = document.getElementById('currentQuestion');
//   var totalQuestion = document.getElementById('totalQuestion');
//   var ques = document.getElementById('ques');
//   var option = document.getElementById('option');
//   var currentIndex = 0;



//   function init() {
//     option.innerHTML = ""
//     totalQuestion.innerHTML = question.length;
//     currentQuestion.innerHTML = currentIndex + 1;
//     ques.innerHTML = question[currentIndex].question;
//     for (var i = 0; i < question[currentIndex].options.length; i++) {

//       console.log(question[currentIndex].options[i])
//       option.innerHTML += `<button class="col btn">${question[currentIndex].options[i]}</button>`
//     }

//   }
//   init();
//   function next() {
//     if (currentIndex + 1 == question.length) {

//     } else {
//       currentIndex++;
//       init();
//     }
//   }
const quizData = [
  {
      question: "Html Stands For _________",
      a: "Hyper Text Markup Language",
      b: "html",
      c: "Case Cading Style Sheet",
      d: "Hypertext makeup language",
      correct: "a",
  },
  {
      question: "Css Stands For _________",
      a: "Casecading Style Sheet",
      b: "Java",
      c: "Ram",
      d: "Hypertext markup language",
      correct: "a",
  },
  {
      question: "Js Stands For _________",
      a: "Java Style",
      b: "Java Script",
      c: "Script",
      d: "Script Src",
      correct: "b",
  },
  {
      question: "Dom Stands For _________",
      a: "Document Object Model",
      b: "html",
      c: "css",
      d: "java",
      correct: "a",
  },
  {
    question: "Ram Stands For _________",
    a: "Read Only Memory",
    b: "Dom",
    c: "Random Access Memory",
    d: "For PC",
    correct: "c",
},
{
  question: "Rom Stands For _________",
  a: "Hyper Text Markup Language",
  b: "html",
  c: "HTML",
  d: "Read Only Memory",
  correct: "d",
},
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>
         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})