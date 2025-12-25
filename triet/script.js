let allQuestions = [];
let currentQuestions = [];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const backButton = document.getElementById('back-btn');
const chapterSelect = document.getElementById('chapter-select');
const startButton = document.getElementById('start-btn');
const chapterSelectionDiv = document.getElementById('chapter-selection');
const quizAreaDiv = document.getElementById('quiz-area');

// Fetch data from JSON file
fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        allQuestions = data;
        populateChapters();
    })
    .catch(error => console.error('Error loading data:', error));

function populateChapters() {
    // Get unique chapters
    const chapters = [...new Set(allQuestions.map(q => q.chapter))];
    
    // Sort chapters naturally (Chương 1, Chương 2, ..., Chương 10)
    chapters.sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, '')) || 0;
        const numB = parseInt(b.replace(/\D/g, '')) || 0;
        return numA - numB;
    });
    
    chapters.forEach(chapter => {
        const option = document.createElement('option');
        option.value = chapter;
        option.textContent = chapter;
        chapterSelect.appendChild(option);
    });
}

startButton.addEventListener('click', () => {
    const selectedChapter = chapterSelect.value;
    if (!selectedChapter) {
        alert('Vui lòng chọn một chương!');
        return;
    }
    
    currentQuestions = allQuestions.filter(q => q.chapter === selectedChapter);
    startQuiz();
});

function startQuiz() {
    chapterSelectionDiv.style.display = 'none';
    quizAreaDiv.style.display = 'block';
    buildQuiz();
    resultsContainer.innerHTML = '';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
}

function buildQuiz() {
    const output = [];

    currentQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        currentQuestion.options.forEach((option, index) => {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${option.replace(/"/g, '&quot;')}">
                    ${option}
                </label>`
            );
        });

        output.push(
            `<div class="question-block">
                <div class="question">
                    <span>${questionNumber + 1}. ${currentQuestion.question}</span>
                    <button class="show-answer-btn" data-index="${questionNumber}">Xem đáp án</button>
                </div>
                <div class="answers">${answers.join('')}</div>
                <div class="explanation" id="explanation-${questionNumber}" style="display:none; margin-top: 10px; padding: 10px; background-color: #e8f5e9; border-left: 5px solid #4caf50;">
                    <strong>Đáp án đúng:</strong> ${currentQuestion.answer}
                </div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
    
    // Add event listeners for "Show Answer" buttons
    document.querySelectorAll('.show-answer-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            const explanationDiv = document.getElementById(`explanation-${index}`);
            if (explanationDiv.style.display === 'none') {
                explanationDiv.style.display = 'block';
                e.target.textContent = 'Ẩn đáp án';
            } else {
                explanationDiv.style.display = 'none';
                e.target.textContent = 'Xem đáp án';
            }
        });
    });
    
    // Add event listeners for instant feedback on answer selection
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const questionNumber = parseInt(e.target.name.replace('question', ''));
            const userAnswer = e.target.value;
            const correctAnswer = currentQuestions[questionNumber].answer;
            const answerContainer = e.target.closest('.answers');
            const explanationDiv = document.getElementById(`explanation-${questionNumber}`);
            
            if (userAnswer === correctAnswer) {
                answerContainer.style.color = 'green';
                answerContainer.style.fontWeight = 'bold';
            } else {
                answerContainer.style.color = 'red';
                answerContainer.style.fontWeight = 'bold';
            }
            
            // Show explanation when answer is selected
            explanationDiv.style.display = 'block';
        });
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    currentQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        const explanationDiv = document.getElementById(`explanation-${questionNumber}`);

        if (userAnswer === currentQuestion.answer) {
            numCorrect++;
            answerContainer.style.color = 'green';
        } else {
            answerContainer.style.color = 'red';
        }
        // Show explanation
        explanationDiv.style.display = 'block';
        
        // Hide the "Show Answer" button since we are showing results
        const btn = quizContainer.querySelector(`.show-answer-btn[data-index="${questionNumber}"]`);
        if(btn) btn.style.display = 'none';
    });

    resultsContainer.innerHTML = `<h3>Kết quả: ${numCorrect} trên ${currentQuestions.length}</h3>`;
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    
    // Scroll to top or results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

submitButton.addEventListener('click', showResults);

retryButton.addEventListener('click', () => {
    startQuiz();
});

backButton.addEventListener('click', () => {
    quizAreaDiv.style.display = 'none';
    chapterSelectionDiv.style.display = 'block';
    chapterSelect.value = "";
});

// Music Player Functionality
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        musicToggle.classList.remove('playing');
        isPlaying = false;
    } else {
        backgroundMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
});
