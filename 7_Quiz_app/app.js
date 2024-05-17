const questions = [
    {
        question: 'Which is the largest animal in the world?',
        answer: [
            { text: 'Shark', correct: false },
            { text: 'Blue whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
        ],
    },
    {
        question: 'What is the boiling point of water at sea level?',
        answer: [
            { text: '50°C', correct: false },
            { text: '75°C', correct: false },
            { text: '100°C', correct: true },
            { text: '125°C', correct: false },
        ],
    },
    {
        question:
            'Which gas do plants absorb from the atmosphere for photosynthesis?',
        answer: [
            { text: 'Oxygen', correct: false },
            { text: 'Nitrogen', correct: false },
            { text: 'Carbon Dioxide', correct: true },
            { text: 'Hydrogen', correct: false },
        ],
    },
];

const questionElement = document.querySelector('#question');
const answerBtn = document.querySelector('#options');
const nextBtn = document.querySelector('#nextBtn');

// questionElement.innerHTML = questions[0].question;

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
}
