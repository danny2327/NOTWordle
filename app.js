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
      console.log('deleted!');
    }
    else if(e.target.id === 'enter') { 
      console.log('submitted!');
    } else {
      // e.target.id
      if(!e.target.id.startsWith('row') && e.target.id !== 'keyboard') {
        console.log(e.target.id);
        enterLetter(e.target.id);
      }
    }
  })
}


function enterLetter(letter) {
  //if word not full
  let word = wordsArray[currentWord];
  let chars = word.getElementsByClassName('letterbox')
  let char = chars[currentChar]
  char.textContent = letter
  console.log(char);
  console.log(chars[currentChar+1]);
  
  if(currentChar < letters-1) {
    currentChar++;
  }
}





function setup() {
  drawWords();
  createEventListeners();
} 


setup();