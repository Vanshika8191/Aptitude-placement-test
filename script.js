
const quizData = {
    quant: [
        ["What is 25% of 240?", ["40", "50", "60", "80"], 2],
        ["An item marked at Rs 1000 has a 20% discount. If sold at Rs 800 with 20% profit, what is its cost price?", ["Rs 600", "Rs 666.67", "Rs 700", "Rs 750"], 1],
        ["A train travels at 54 km/h. How far does it travel in 20 seconds?", ["200 m", "250 m", "300 m", "150 m"], 2],
        ["A completes a job in 20 days and B in 30 days. How long together?", ["10 days", "12 days", "15 days", "25 days"], 1],
        ["If 40% of a number is 120, what is the number?", ["200", "250", "300", "400"], 2],
        ["Find the simple interest on Rs 2000 at 5% per annum for 3 years.", ["Rs 200", "Rs 250", "Rs 300", "Rs 350"], 2],
        ["The ratio of 24 to 36 in simplest form is:", ["2:3", "3:2", "4:5", "1:3"], 0],
        ["The average of 10, 20, 30, 40 and 50 is:", ["25", "30", "35", "40"], 1],
        ["A product bought for Rs 500 is sold for Rs 600. Find the profit percentage.", ["10%", "15%", "20%", "25%"], 2],
        ["What is the square root of 1764?", ["38", "40", "42", "44"], 2],
        ["A car covers 150 km in 3 hours. Find its average speed.", ["40 km/h", "45 km/h", "50 km/h", "60 km/h"], 2],
        ["If x + 7 = 19, find x.", ["10", "11", "12", "13"], 2],
        ["Find the LCM of 12 and 18.", ["24", "30", "36", "48"], 2],
        ["A number increases from 80 to 100. Find the percentage increase.", ["20%", "25%", "30%", "35%"], 1],
        ["What is 3/4 of 200?", ["100", "125", "150", "175"], 2],
        ["A pipe fills a tank in 6 hours. What fraction is filled in 2 hours?", ["1/2", "1/3", "1/4", "2/3"], 1],
        ["If 5 pens cost Rs 75, what do 8 pens cost at the same rate?", ["Rs 100", "Rs 110", "Rs 120", "Rs 125"], 2],
        ["Find the next number: 2, 6, 12, 20, 30, ?", ["36", "40", "42", "44"], 2],
        ["What is 15% of 600?", ["60", "75", "90", "120"], 2],
        ["A father is 40 years old and his son is 10. What will their age ratio be after 10 years?", ["2:1", "3:1", "4:1", "5:2"], 1]
    ],

    reasoning: [
        ["All pens are pencils. Some pencils are erasers. Which conclusion definitely follows?", ["Some pens are erasers", "No pen is an eraser", "All erasers are pens", "No definite conclusion about pens and erasers"], 3],
        ["A is north of B. C is east of B. D is south of C. In which direction is A from D?", ["North-West", "North-East", "South-West", "West"], 0],
        ["Find the next number: 2, 4, 8, 16, ?", ["20", "24", "30", "32"], 3],
        ["Find the odd one out.", ["Apple", "Mango", "Carrot", "Banana"], 2],
        ["If CAT is coded as DBU, how is DOG coded?", ["EPH", "EOG", "DPH", "FPH"], 0],
        ["Ravi is taller than Amit. Amit is taller than Neha. Who is shortest?", ["Ravi", "Amit", "Neha", "Cannot say"], 2],
        ["Complete the series: A, C, E, G, ?", ["H", "I", "J", "K"], 1],
        ["A person faces north and turns right. Which direction is he facing?", ["West", "South", "East", "North"], 2],
        ["If yesterday was Monday, what day is tomorrow?", ["Tuesday", "Wednesday", "Thursday", "Sunday"], 1],
        ["Book is to Reading as Fork is to:", ["Writing", "Eating", "Drawing", "Sleeping"], 1],
        ["Find the missing number: 5, 10, 20, 40, ?", ["60", "70", "80", "100"], 2],
        ["If A = 1, B = 2, C = 3, what is the value of CAB?", ["312", "321", "123", "213"], 0],
        ["Your mother's brother is your:", ["Paternal uncle", "Maternal uncle", "Cousin", "Nephew"], 1],
        ["Which number does not belong: 3, 5, 7, 9, 11?", ["3", "5", "9", "11"], 2],
        ["All roses are flowers. All flowers are plants. Therefore:", ["All plants are roses", "All roses are plants", "No rose is a plant", "Some plants are not flowers"], 1],
        ["Complete the series: Z, X, V, T, ?", ["R", "S", "Q", "P"], 0],
        ["If 8 people shake hands with each other exactly once, how many handshakes occur?", ["16", "24", "28", "32"], 2],
        ["Arrange in ascending order: 0.5, 0.05, 0.55, 0.15.", ["0.05, 0.15, 0.5, 0.55", "0.5, 0.05, 0.15, 0.55", "0.15, 0.05, 0.55, 0.5", "0.05, 0.5, 0.15, 0.55"], 0],
        ["If SOUTH is written as HTUOS, how is NORTH written in reverse?", ["HTRON", "NROTH", "HTNOR", "NORTH"], 0],
        ["P is older than Q, and Q is older than R. Who is the oldest?", ["P", "Q", "R", "Cannot say"], 0]
    ],

    verbal: [
        ["Choose the synonym of 'Abundant'.", ["Scarce", "Plentiful", "Rare", "Tiny"], 1],
        ["Choose the correct spelling.", ["Accomodation", "Accommodation", "Acommodation", "Accomodasion"], 1],
        ["Choose the antonym of 'Ancient'.", ["Old", "Historic", "Modern", "Past"], 2],
        ["She _____ to college every day.", ["go", "goes", "going", "gone"], 1],
        ["Choose the correct sentence.", ["He do his work.", "He does his work.", "He doing his work.", "He done his work."], 1],
        ["What is the plural of 'Child'?", ["Childs", "Childes", "Children", "Childrens"], 2],
        ["Choose the synonym of 'Rapid'.", ["Slow", "Quick", "Weak", "Late"], 1],
        ["Fill in the blank: He is good _____ mathematics.", ["in", "on", "at", "for"], 2],
        ["Choose the antonym of 'Expand'.", ["Increase", "Enlarge", "Contract", "Extend"], 2],
        ["Identify the noun in this sentence: 'Honesty is the best policy.'", ["Best", "Honesty", "Is", "The"], 1],
        ["Choose the correct article: She ate _____ apple.", ["a", "an", "the", "no article"], 1],
        ["What is the past tense of 'Write'?", ["Writed", "Written", "Wrote", "Writing"], 2],
        ["Choose the synonym of 'Brave'.", ["Cowardly", "Courageous", "Careless", "Fearful"], 1],
        ["Choose the correctly punctuated sentence.", ["Where are you going.", "Where are you going!", "Where are you going?", "Where, are you going"], 2],
        ["Fill in the blank: Neither Ram nor Shyam _____ present.", ["are", "were", "is", "have"], 2],
        ["Choose the antonym of 'Generous'.", ["Kind", "Helpful", "Selfish", "Giving"], 2],
        ["What does 'Benevolent' mean?", ["Kind and helpful", "Angry", "Careless", "Dishonest"], 0],
        ["Change to passive voice: 'She wrote a letter.'", ["A letter is written by her.", "A letter was written by her.", "A letter wrote her.", "A letter has write by her."], 1],
        ["Choose the correct word: Their team _____ the match yesterday.", ["win", "wins", "won", "winning"], 2],
        ["Choose the synonym of 'Diligent'.", ["Lazy", "Hardworking", "Weak", "Slow"], 1]
    ]
};

// Convert question arrays into objects.
Object.keys(quizData).forEach(category => {
    quizData[category] = quizData[category].map(item => ({
        q: item[0],
        opts: item[1],
        ans: item[2]
    }));
});


const homeSection = document.getElementById("home");
const testsSection = document.getElementById("tests");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const aboutSection = document.getElementById("about");

const quizCategoryEl = document.getElementById("quiz-category");
const timerEl = document.getElementById("timer");
const currentQEl = document.getElementById("current-q");
const totalQEl = document.getElementById("total-q");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");
const quizForm = document.getElementById("quiz-form");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

let currentCategory = "";
let questions = [];
let currentIndex = 0;
let userAnswers = [];
let timer = 0;
let timerInterval = null;
let testFinished = false;


document.getElementById("start-practice").addEventListener("click", () => {
    document.getElementById("tests").scrollIntoView({ behavior: "smooth" });
});


document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {
        startQuiz(button.dataset.category);
    });
});

function startQuiz(category) {
    clearInterval(timerInterval);

    currentCategory = category;
    questions = quizData[category];
    currentIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    testFinished = false;

    timer = (category === "verbal" ? 20 : 30) * 60;

    const categoryNames = {
        quant: "Quantitative Aptitude",
        reasoning: "Logical Reasoning",
        verbal: "Verbal Ability"
    };

    quizCategoryEl.textContent = categoryNames[category];
    totalQEl.textContent = questions.length;

    homeSection.hidden = true;
    testsSection.hidden = true;
    aboutSection.hidden = true;
    resultSection.hidden = true;
    quizSection.hidden = false;

    document.getElementById("review-section").hidden = true;
    document.getElementById("review-list").innerHTML = "";
    document.getElementById("score-circle").style.borderColor = "#13c9a0";

    showQuestion();
    updateTimerDisplay();
    startTimer();

    quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// DISPLAY QUESTION
function showQuestion() {
    const question = questions[currentIndex];

    currentQEl.textContent = currentIndex + 1;
    document.getElementById("question-number").textContent =
        `QUESTION ${String(currentIndex + 1).padStart(2, "0")}`;

    questionTextEl.textContent = question.q;
    progressBar.style.width =
        `${((currentIndex + 1) / questions.length) * 100}%`;

    optionsContainer.innerHTML = "";

    question.opts.forEach((option, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "option-item";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.id = `option-${index}`;
        radio.value = index;
        radio.checked = userAnswers[currentIndex] === index;

        const label = document.createElement("label");
        label.htmlFor = radio.id;

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.textContent = option;

        label.append(letter, text);
        wrapper.append(radio, label);
        optionsContainer.appendChild(wrapper);

        radio.addEventListener("change", () => {
            userAnswers[currentIndex] = index;
            updateAnsweredCount();
        });
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.hidden = currentIndex === questions.length - 1;
    submitBtn.hidden = currentIndex !== questions.length - 1;

    updateAnsweredCount();
}

function updateAnsweredCount() {
    const answered = userAnswers.filter(answer => answer !== null).length;
    document.getElementById("answered-count").textContent =
        `${answered} of ${questions.length} answered`;
}
nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
    }
});


function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (testFinished) {
            clearInterval(timerInterval);
            return;
        }

        timer--;
        updateTimerDisplay();

        if (timer <= 0) {
            clearInterval(timerInterval);
            finishQuiz(true);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    timerEl.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timerEl.classList.toggle("warning", timer < 60);
}

// SUBMIT TEST
quizForm.addEventListener("submit", event => {
    event.preventDefault();
    finishQuiz(false);
});

function finishQuiz(timeUp = false) {
    if (testFinished) return;

    testFinished = true;
    clearInterval(timerInterval);

    let score = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === null) {
            unanswered++;
        } else if (userAnswers[index] === question.ans) {
            score++;
        }
    });

    const wrong = questions.length - score - unanswered;
    const percentage = Math.round((score / questions.length) * 100);

    quizSection.hidden = true;
    resultSection.hidden = false;

    document.getElementById("score").textContent = score;
    document.getElementById("total-score").textContent = questions.length;
    document.getElementById("result-category").textContent =
        quizCategoryEl.textContent;

    document.getElementById("correct-count").textContent = score;
    document.getElementById("wrong-count").textContent = wrong;
    document.getElementById("unanswered-count").textContent = unanswered;
    document.getElementById("result-percentage").textContent =
        `You scored ${percentage}%`;

    document.getElementById("score-circle").style.borderColor =
        percentage >= 70 ? "#13e5c2" :
        percentage >= 40 ? "#fbbf24" : "#fb7185";

    let message;

    if (percentage === 100) {
        message = "🔥 Perfect score! You are a topper!";
    } else if (percentage >= 70) {
        message = "🎉 Excellent work! Keep it up!";
    } else if (percentage >= 40) {
        message = "💪 Good effort! You are making progress.";
    } else {
        message = "📚 Keep practising. You will improve!";
    }

    if (timeUp) {
        message += " Time is up!";
    }

    document.getElementById("result-message").textContent = message;

    buildAnswerReview();

    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}


function buildAnswerReview() {
    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";

    questions.forEach((question, index) => {
        const selected = userAnswers[index];
        const isCorrect = selected === question.ans;

        const item = document.createElement("article");
        item.className = "review-item";

        const heading = document.createElement("h4");
        heading.textContent = `${index + 1}. ${question.q}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.className = isCorrect ? "correct-text" : "wrong-text";
        yourAnswer.textContent = selected === null
            ? "Your answer: Not answered"
            : `Your answer: ${question.opts[selected]}`;

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "correct-text";
        correctAnswer.textContent =
            `Correct answer: ${question.opts[question.ans]}`;

        item.append(heading, yourAnswer, correctAnswer);
        reviewList.appendChild(item);
    });
}

document.getElementById("review-btn").addEventListener("click", () => {
    const reviewSection = document.getElementById("review-section");
    reviewSection.hidden = !reviewSection.hidden;

    document.getElementById("review-btn").textContent =
        reviewSection.hidden ? "Review Answers" : "Hide Review";

    if (!reviewSection.hidden) {
        reviewSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});


document.getElementById("restart-btn").addEventListener("click", () => {
    startQuiz(currentCategory);
});
document.getElementById("home-btn").addEventListener("click", () => {
    clearInterval(timerInterval);
    testFinished = true;

    quizSection.hidden = true;
    resultSection.hidden = true;
    homeSection.hidden = false;
    testsSection.hidden = false;
    aboutSection.hidden = false;

    timerEl.classList.remove("warning");

    window.scrollTo({ top: 0, behavior: "smooth" });
});
