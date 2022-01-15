const wordsDOM = document.getElementById("words");
const wordsArray = document.getElementsByClassName('word'); 
const kb = document.getElementById('keyboard');

const words = 6;
const letters = 5;

let currentWord = 0;
let currentChar = 0;



const WORD = 'COUGH'

function drawWords() {
  for (let i = 0; i < words; i++) {
    let word = document.createElement("div"); 
    word.className = "word"
    for (let k = 0; k < letters; k++) {
      let letter = document.createElement("span");
      letter.className = "letterbox";
      word.appendChild(letter);
      wordsDOM.appendChild(word);
    }
    wordsDOM.appendChild(document.createElement('p'))
  }
}

function createEventListeners() {
  kb.addEventListener('click', (e) => {
    
    if(e.target.id === 'back') { 
      deleteLastLetter();
    }
    else if(e.target.id === 'enter') { 
      pressEnter();
    } else {
      // e.target.id
      if(!e.target.id.startsWith('row') && e.target.id !== 'keyboard') {
        enterLetter(e.target.id);
      }
    }
  })
}

function deleteLastLetter() {
  console.log(currentChar);  
  const chars = wordsArray[currentWord].getElementsByClassName('letterbox')  
  chars[currentChar].textContent = '';
  if(currentChar > 0) {
    currentChar--
  }  
}


function pressEnter() {
  if(currentChar == letters-1) {
    submitWord();
  }
}

function submitWord() {
   guess = readWord()
   correct = showLetters(guess);
   if(correct === letters) { 
     win()
   } else {
     currentWord === words-1 ? gameOver() : nextWord();
   }

}

function gameOver() {
  console.log("Game Over");
}

function readWord() {
  let guess = ''
  let word = wordsArray[currentWord];
  let chars = word.getElementsByClassName('letterbox')
  for (let c = 0; c < chars.length; c++) {
    const char = chars[c];
    console.log(char, char.textContent);
    guess += char.textContent;    
  }  
  return guess;
}

function showLetters(guess) {
  let chars = wordsArray[currentWord].getElementsByClassName('letterbox')
  let correct = 0;
  for (let i = 0; i < letters; i++) {
    console.log(WORD.indexOf(guess[i]));
    if(WORD[i] === guess[i]) {
      console.log("match!");
      correct++;
      chars[i].classList.add('rightplace')
    } else if (WORD.indexOf(guess[i]) > -1) {
      chars[i].classList.add('wrongplace')
    }
    return correct
  }
}


function enterLetter(letter) {
  //if word not full
  let chars = wordsArray[currentWord].getElementsByClassName('letterbox')
  chars[currentChar].textContent = letter  
  if(currentChar < letters-1) {
    currentChar++;
  }
}

function setup() {
  drawWords();
  createEventListeners();
} 


setup();