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
    {
        question: 'Which river is the longest in the world?',
        answer: [
            { text: 'Amazon', correct: false },
            { text: 'Nile', correct: false },
            { text: 'Mississippi', correct: true },
            { text: 'Yangtze', correct: false },
        ],
    },
    {
        question: 'Which is the largest continent by area?',
        answer: [
            { text: 'Africa', correct: false },
            { text: 'Asia', correct: false },
            { text: 'Europe', correct: true },
            { text: 'Antarctica', correct: false },
        ],
    },
];

const questionElement = document.querySelector('#question');
const answerBtn = document.querySelector('#options');
const nextBtn = document.querySelector('#nextBtn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        options.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}
function resetState() {
    nextBtn.style.display = 'none';
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerBtn.children).forEach((button) => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
