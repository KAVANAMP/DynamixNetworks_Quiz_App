// script.js

// Level order and friendly names
const LEVELS = [
  { key: "easy", label: "Level 1 • Easy", rewardText: "Excellent!" },
  { key: "medium", label: "Level 2 • Medium", rewardText: "Great job!" },
  { key: "hard", label: "Level 3 • Hard", rewardText: "Outstanding!" },
  { key: "expert", label: "Level 4 • Expert", rewardText: "Brilliant!" },
  { key: "master", label: "Level 5 • Master", rewardText: "Master!!" }
];

const QUESTIONS_PER_LEVEL = 10;

// DOM refs
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const levelCompleteScreen = document.getElementById("level-complete-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const categorySelect = document.getElementById("category-select");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");
const levelIndicator = document.getElementById("level-indicator");
const scoreValue = document.getElementById("score-value");

const nextBtn = document.getElementById("next-btn");
const skipBtn = document.getElementById("skip-btn");

const continueBtn = document.getElementById("continue-btn");
const finishBtn = document.getElementById("finish-btn");
const levelCompleteTitle = document.getElementById("level-complete-title");
const levelRewardText = document.getElementById("level-reward-text");
const goldAnimation = document.getElementById("gold-animation");

const finalScoreText = document.getElementById("final-score-text");
const finalRewards = document.getElementById("final-rewards");

const restartBtn = document.getElementById("restart-btn");

// State
let category = "webdev";
let currentLevelIndex = 0;
let currentLevelQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let totalScore = 0; // cumulative
let levelScore = 0;

// Helpers
function shuffleArray(arr){
  // Fisher-Yates shuffle:
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickQuestionsForLevel(cat, levelKey){
  // Access QUESTIONS global from questions.js
  const pool = (QUESTIONS[cat] && QUESTIONS[cat][levelKey]) || [];
  // If pool has >= QUESTIONS_PER_LEVEL use shuffled slice, otherwise repeat and slice
  const copy = pool.slice();
  if(copy.length < QUESTIONS_PER_LEVEL){
    // duplicate until enough
    while(copy.length < QUESTIONS_PER_LEVEL){
      copy.push(...pool.slice());
    }
  }
  const chosen = shuffleArray(copy).slice(0, QUESTIONS_PER_LEVEL).map(q => {
    // clone object to avoid mutation
    return { q: q.q, options: q.options.slice(), answer: q.answer };
  });
  return chosen;
}

function startGame(){
  category = categorySelect.value;
  currentLevelIndex = 0;
  totalScore = 0;
  scoreValue.textContent = totalScore;
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  showLevel(currentLevelIndex);
}

function showLevel(index){
  // prepare level data
  const level = LEVELS[index];
  levelIndicator.textContent = level.label;
  currentLevelQuestions = pickQuestionsForLevel(category, level.key);
  currentQuestionIndex = 0;
  levelScore = 0;
  // shuffle options per question
  currentLevelQuestions.forEach(q => {
    // zip options with original indices so we know which is correct after shuffle
    const zipped = q.options.map((opt, i) => ({ text: opt, idx: i }));
    shuffleArray(zipped);
    q._shuffledOptions = zipped;
    // find new index of correct option
    q._shuffledAnswerIndex = zipped.findIndex(o => o.idx === q.answer);
  });
  // show quiz screen
  levelCompleteScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
  updateProgressBar();
}

function loadQuestion(){
  const q = currentLevelQuestions[currentQuestionIndex];
  questionText.textContent = `Q${currentQuestionIndex + 1}. ${q.q}`;
  optionsContainer.innerHTML = "";
  selectedAnswer = null;
  nextBtn.classList.add("hidden");
  // render options
  q._shuffledOptions.forEach((optObj, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optObj.text;
    btn.dataset.index = idx;
    btn.onclick = () => selectOption(idx);
    optionsContainer.appendChild(btn);
  });
  updateProgressBar();
}

function selectOption(index){
  const q = currentLevelQuestions[currentQuestionIndex];
  // disable options
  [...optionsContainer.children].forEach(b => b.classList.add("disabled"), b => b.disabled = true);
  selectedAnswer = index;
  const correctIndex = q._shuffledAnswerIndex;
  const btns = [...optionsContainer.children];
  // mark chosen and correct
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if(i === correctIndex){
      btn.classList.add("correct");
    }
    if(i === index && i !== correctIndex){
      btn.classList.add("wrong");
    }
  });
  // scoring
  if(index === correctIndex){
    levelScore += 1;
    totalScore += 1;
    scoreValue.textContent = totalScore;
  }
  nextBtn.classList.remove("hidden");
}

function updateProgressBar(){
  // progress inside the level: percent of questions answered or position
  const percent = Math.round(((currentQuestionIndex) / QUESTIONS_PER_LEVEL) * 100);
  progressBar.style.width = percent + "%";
}

function goNext(){
  // if user hasn't selected an option, allow skip: treat as wrong
  if(selectedAnswer === null){
    // mark as disabled and show correct
    const q = currentLevelQuestions[currentQuestionIndex];
    const correctIndex = q._shuffledAnswerIndex;
    const btns = [...optionsContainer.children];
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if(i === correctIndex) btn.classList.add("correct");
    });
  }

  currentQuestionIndex++;
  if(currentQuestionIndex < QUESTIONS_PER_LEVEL){
    // next question
    loadQuestion();
  } else {
    // level finished
    showLevelComplete();
  }
}

function showLevelComplete(){
  quizScreen.classList.add("hidden");
  levelCompleteScreen.classList.remove("hidden");
  const level = LEVELS[currentLevelIndex];
  levelCompleteTitle.textContent = `Level ${currentLevelIndex + 1} Complete`;
  levelRewardText.textContent = `${level.rewardText} You scored ${levelScore} / ${QUESTIONS_PER_LEVEL} in this level.`;
  // show gold animation and confetti
  playGoldAnimation();
  // if last level then show Finish button else Continue
  if(currentLevelIndex === LEVELS.length - 1){
    continueBtn.classList.add("hidden");
    finishBtn.classList.remove("hidden");
  } else {
    continueBtn.classList.remove("hidden");
    finishBtn.classList.add("hidden");
  }
}

function playGoldAnimation(){
  // show animated background and confetti elements
  goldAnimation.classList.add("show");
  goldAnimation.innerHTML = ""; // remove existing confetti
  // create multiple small confetti pieces
  for(let i = 0; i < 22; i++){
    const c = document.createElement("div");
    c.className = "confetti";
    // randomize size and position
    c.style.left = (10 + Math.random() * 200) + "px";
    c.style.background = (["#FFD700","#FFC107","#FFEA00","#FFB300"])[Math.floor(Math.random()*4)];
    c.style.transform = `rotate(${Math.random()*360}deg)`;
    // small delay to spread them out
    c.style.animationDelay = (Math.random() * 400) + "ms";
    goldAnimation.appendChild(c);
  }
  goldAnimation.classList.remove("hidden");
  // hide animation after a while
  setTimeout(() => {
    goldAnimation.classList.remove("show");
    goldAnimation.classList.add("hidden");
    goldAnimation.innerHTML = "";
  }, 1800);
}

function continueToNextLevel(){
  currentLevelIndex++;
  if(currentLevelIndex < LEVELS.length){
    showLevel(currentLevelIndex);
  } else {
    showFinalResult();
  }
}

function finishQuiz(){
  // user finished last level on the level complete screen
  showFinalResult();
}

function showFinalResult(){
  levelCompleteScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  // compute additional reward message based on totalScore
  const maxPossible = LEVELS.length * QUESTIONS_PER_LEVEL;
  finalScoreText.textContent = `You scored ${totalScore} out of ${maxPossible}.`;

  // friendly summary of performance
  const pct = Math.round((totalScore / maxPossible) * 100);
  let remark = "";
  if(pct >= 90) remark = "Exceptional! You are a true master.";
  else if(pct >= 75) remark = "Excellent! Great job.";
  else if(pct >= 50) remark = "Good job! Keep practicing.";
  else remark = "Keep trying — practice makes perfect.";

  finalRewards.textContent = remark;
}

// Event listeners
startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", goNext);
skipBtn.addEventListener("click", () => {
  // treat skip as wrong and proceed
  goNext();
});
continueBtn.addEventListener("click", continueToNextLevel);
finishBtn.addEventListener("click", finishQuiz);
restartBtn.addEventListener("click", () => {
  // reload initial state
  totalScore = 0;
  scoreValue.textContent = totalScore;
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  levelCompleteScreen.classList.add("hidden");
});

// Allow keyboard Enter to proceed when Next visible
document.addEventListener("keydown", e => {
  if(e.key === "Enter"){
    if(!nextBtn.classList.contains("hidden")){
      goNext();
    } else if(startScreen.classList.contains("hidden") && quizScreen.classList.contains("hidden") && levelCompleteScreen.classList.contains("hidden")){
      // nothing
    }
  }
});
