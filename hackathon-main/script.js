const words = [
  "they don't know me son", 
  "they don't know me son",
  "they don't know me son",
  "they don't know me son",
  "wwwwhhhhhoooo'ssss",
  "gooonnnnnaaaaa",
  "caaarrrrrryy",
  "theeeee",
  "boaaaats",
  "anddd",
  "the logssss",
  "WHO'S GONNA CARRY THE BOATS"
];
// Array of words for the game

const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const errorMessage = document.getElementById('error-message');
const healthProgress = document.getElementById('health-progress');
const lostMessage = document.getElementById('lost-message');
const tryAgainButton = document.getElementById('try-again-button');

let currentWordIndex = 0;
let currentWord = words[currentWordIndex];
let health = 100;
let isGameOver = false;

// Concatenate the words to form the complete text
const completeText = words.join(' ');

// Display the complete text
wordDisplay.textContent = completeText;
updateHealthBar();

// Event listener for user input
userInput.addEventListener('input', function() {
  if (isGameOver) return;

  const arrayWord = wordDisplay.querySelectorAll('span');
  const arrayInput = userInput.value.split('');

  let correct = true;
  arrayWord.forEach((characterSpan, index) => {
    const character = arrayInput[index];
    if (character == null) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('incorrect');
    } else {
      characterSpan.classList.remove('correct');
      characterSpan.classList.add('incorrect');
      correct = false;
    }
  });

  if (correct && userInput.value.length === currentWord.length) {
    // Clear the user input
    userInput.value = '';

    // Increment the current word index
    currentWordIndex++;

    // Check if there are more words
    if (currentWordIndex < 12) {
      currentWord = words[currentWordIndex];
      renderWords();
      errorMessage.textContent = '';
      if (currentWordIndex == 1) {
      const audio = new Audio('17.mp3');
      audio.play();
      setTimeout(function(){
        x += 100; 
        y -= 95;
      }, 3000)}
      if (currentWordIndex == 2) {
        const audio = new Audio('18.mp3');
        audio.play();
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 1200)}
      if (currentWordIndex == 3) {
        const audio = new Audio('19.mp3');
        audio.play();
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 2000)}
      if (currentWordIndex == 4) {
        const audio = new Audio('20.mp3');
        audio.play();
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 1500)}    
      if (currentWordIndex == 5) {
        const audio = new Audio('21.mp3');
        audio.play();
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 700)}    
      if (currentWordIndex == 6) {
        const audio = new Audio('22.mp3');
        audio.play();
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 3000)}    
      if (currentWordIndex == 7) {
        const audio = new Audio('23.mp3');
        audio.play();
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 3000)}    
      if (currentWordIndex == 8) {
        const audio = new Audio('24.mp3');
        audio.play();
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 2700)}    
      if (currentWordIndex == 9) {
        const audio = new Audio('25.mp3');
        audio.play();
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 6500)}
      if (currentWordIndex == 10) {
      setTimeout(function(){
        x += 100; 
        y -= 95;
      }, 3000)}
      if (currentWordIndex == 11) {
        setTimeout(function(){
          x += 100; 
          y -= 95;
        }, 3000)}
      
    
  



      
      



    } else {
      // Display game completion message
      wordDisplay.textContent = 'YOU DID IT!!!';
      errorMessage.textContent = '';
      isGameOver = true;
      switchMap();
      
    }
  } else if (userInput.value.length === currentWord.length) {
    // Display error message
    errorMessage.textContent = 'Incorrect! Try again.';
    decreaseHealth(10);
  }
});

renderWords(); // Render words at the beginning

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


const CANVAS_WIDTH = canvas.width = 1200;
const CANVAS_HEIGHT = canvas.height = 1200;

let x = 1;
let y = 1000;

let img = new Image();   // Create new img element
img.src = 'balapanchick.png'; // Set source path


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(img, x, y, 100, 100);

  if (isGameOver) return;

  requestAnimationFrame(animate);
}


// Set the animation interval for faster animation
const animationInterval = 250; // Adjust the interval value for desired speed
animate();


function decreaseHealth(amount) {
  health -= amount;
  if (health <= 0) {
    health = 0;
    isGameOver = true;
    showTryAgainButton();
    userInput.disabled = true;
  }
  updateHealthBar();
}

function updateHealthBar() {
  healthProgress.style.width = `${health}%`;
}

function showTryAgainButton() {
  tryAgainButton.hidden = false;
}

function hideTryAgainButton() {
  tryAgainButton.hidden = true;
}

function switchMap() {
  const canvas1 = document.getElementById('canvas1')
  const bossfight1 = document.getElementById('bossfight1')

  canvas1.style.display = 'none';
  bossfight1.style.display = 'block'

  const ctx1 = bossfight1.getContext('2d');
  let x=20;
  let y=80;
  ctx1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx1.drawImage(img, x, y, 25, 20);
}

function playAudio(self) {
  audio.play(self);
}

function resetGame() {
  currentWordIndex = 0;
  currentWord = words[currentWordIndex];
  health = 100;
  isGameOver = false;
  renderWords()
  updateHealthBar();
  userInput.value = '';
  userInput.disabled = false;
  errorMessage.textContent = '';
  x = 0;
  y = 1000;
  animate();
  hideTryAgainButton();
}

tryAgainButton.addEventListener('click', function () {
  resetGame();
});

function renderWords() {
  wordDisplay.innerHTML = ''; // Clear the current display

  // Create a span for each character in the array of words
  currentWord.split('').forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    wordDisplay.appendChild(characterSpan);
  });

  userInput.value = '';
}