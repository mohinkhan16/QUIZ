

const quizData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    id: 3,
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  },
  {
    id: 4,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
  },
  {
    id: 5,
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22"
  },
  {
    id: 6,
    question: "Which method is used to fetch API data?",
    options: ["getData()", "fetch()", "request()", "apiCall()"],
    answer: "fetch()"
  },
  {
    id: 7,
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  },
  {
    id: 8,
    question: "Which keyword is used to declare a variable in JS?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    id: 9,
    question: "What is DOM?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Output Mode",
      "Desktop Oriented Mode"
    ],
    answer: "Document Object Model"
  },
  {
    id: 10,
    question: "Which HTML tag is used for images?",
    options: ["img", "image", "pic", "src"],
    answer: "img"
  }
];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const timeEl = document.getElementById("time");
const nextBtn = document.getElementById("nextBtn");
const numberE1=document.getElementById("number")

let timer;
let currentQuestion = 0;
let timeLeft = 30;
 
function showQuestion() {
  clearInterval(timer);
  timeLeft = 30;

  timeEl.textContent = timeLeft;

  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  choicesEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click",()=>{
      nextQuestion();
    })

    btn.onclick = () => {
      clearInterval(timer);
      Array.from(choicesEl.children).forEach(b => b.disabled = true);
    };

    choicesEl.appendChild(btn);
  });

  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Finished";
    choicesEl.innerHTML = "";
    timeEl.textContent = "";
  }
};

nextBtn.addEventListener("click", nextQuestion);

showQuestion();



