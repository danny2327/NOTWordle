const wordsDOM = document.getElementById("words");
const wordsArray = document.getElementsByClassName('word'); 
const kb = document.getElementById('keyboard');



const wordList = [
"ABUSE",
"ADULT",
"AGENT",
"ANGER",
"APPLE",
"AWARD",
"BASIS",
"BEACH",
"BIRTH",
"BLOCK",
"BLOOD",
"BOARD",
"BRAIN",
"BREAD",
"BREAK",
"BROWN",
"BUYER",
"CAUSE",
"CHAIN",
"CHAIR",
"CHEST",
"CHIEF",
"CHILD",
"CLAIM",
"CLASS",
"CLOCK",
"COACH",
"COAST",
"COURT",
"COVER",
"CREAM",
"CRIME",
"CROSS",
"CROWD",
"CROWN",
"CYCLE",
"DANCE",
"DEATH",
"DEPTH",
"DOUBT",
"DRAFT",
"DRAMA",
"DREAM",
"DRESS",
"DRINK",
"DRIVE",
"EARTH",
"ENEMY",
"ENTRY",
"ERROR",
"EVENT",
"FAITH",
"FAULT",
"FIELD",
"FIGHT",
"FINAL",
"FLOOR",
"FOCUS",
"FORCE",
"FRAME",
"FRONT",
"FRUIT",
"GLASS",
"GRANT",
"GRASS",
"GREEN",
"GROUP",
"GUIDE",
"HEART",
"HORSE",
"HOTEL",
"HOUSE",
"IMAGE",
"INDEX",
"INPUT",
"ISSUE",
"JUDGE",
"KNIFE",
"LAYER",
"LEVEL",
"LIGHT",
"LIMIT",
"LUNCH",
"MAJOR",
"MARCH",
"MATCH",
"METAL",
"MODEL",
"MONEY",
"MONTH",
"MOTOR",
"MOUTH",
"MUSIC",
"NIGHT",
"NOISE",
"NORTH",
"NOVEL",
"NURSE",
"OFFER",
"ORDER",
"OTHER",
"OWNER",
"PANEL",
"PAPER",
"PARTY",
"PEACE",
"PHASE",
"PHONE",
"PIECE",
"PILOT",
"PITCH",
"PLACE",
"PLANE",
"PLANT",
"PLATE",
"POINT",
"POUND",
"POWER",
"PRESS",
"PRICE",
"PRIDE",
"PRIZE",
"PROOF",
"QUEEN",
"RADIO",
"RANGE",
"RATIO",
"REPLY",
"RIGHT",
"RIVER",
"ROUND",
"ROUTE",
"RUGBY",
"SCALE",
"SCENE",
"SCOPE",
"SCORE",
"SENSE",
"SHAPE",
"SHARE",
"SHEEP",
"SHEET",
"SHIFT",
"SHIRT",
"SHOCK",
"SIGHT",
"SKILL",
"SLEEP",
"SMILE",
"SMITH",
"SMOKE",
"SOUND",
"SOUTH",
"SPACE",
"SPEED",
"SPITE",
"SPORT",
"SQUAD",
"STAFF",
"STAGE",
"START",
"STATE",
"STEAM",
"STEEL",
"STOCK",
"STONE",
"STORE",
"STUDY",
"STUFF",
"STYLE",
"SUGAR",
"TABLE",
"TASTE",
"TERRY",
"THEME",
"THING",
"TITLE",
"TOTAL",
"TOUCH",
"TOWER",
"TRACK",
"TRADE",
"TRAIN",
"TREND",
"TRIAL",
"TRUST",
"TRUTH",
"UNCLE",
"UNION",
"UNITY",
"VALUE",
"VIDEO",
"VISIT",
"VOICE",
"WASTE",
"WATCH",
"WATER",
"WHILE",
"WHITE",
"WHOLE",
"WOMAN",
"WORLD",
"YOUTH"
]

let WORD = wordList[Math.round(Math.random()*wordList.length)]
console.log(WORD)

const words = 6;
const letters = 5;

let currentWord = 0;
let currentChar = 0;




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

  document.addEventListener('keyup', (e) => {
    console.log(e.key);
    if (e.keyCode > 64 && e.keyCode < 91) {
      enterLetter(e.key.toUpperCase())
    } else if (e.key === "Enter") {
      pressEnter()
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
   if (guess)
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

function win() {
  console.log("Holy shit you actually won");
}

function nextWord() {
  currentWord++
  currentChar = 0;
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
    let key = document.getElementById(guess[i])
    console.log(WORD.indexOf(guess[i]));
    if(WORD[i] === guess[i]) {
      console.log("match!");
      correct++;
      chars[i].classList.add('rightplace')
      key.classList.add('rightplace')
    } else if (WORD.indexOf(guess[i]) > -1) {
      console.log("wrong place");
      chars[i].classList.add('wrongplace')
      key.classList.add('wrongplace')
    } else {
      key.classList.add('guessed')
    }
  }
  return correct
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