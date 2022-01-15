const wordsDOM = document.getElementById("words");
const wordsArray = document.getElementsByClassName('word'); 
const kb = document.getElementById('keyboard');



const wordList = [
"AUGHT","OUGHT","THERE","THINE","WHERE","WHICH","WHOSE","YOURS","ADMIT","ADOPT","AGREE","ALLOW","ALTER","APPLY","ARGUE","ARISE","AVOID","BEGIN","BLAME","BREAK","BRING","BUILD","BURST","CARRY","CATCH","CAUSE","CHECK","CLAIM","CLEAN","CLEAR","CLIMB","CLOSE","COUNT","COVER","CROSS","DANCE","DOUBT","DRINK","DRIVE","ENJOY","ENTER","EXIST","FIGHT","FOCUS","FORCE","GUESS","IMPLY","ISSUE","JUDGE","LAUGH","LEARN","LEAVE","LET’S","LIMIT","MARRY","MATCH","OCCUR","OFFER","ORDER","PHONE","PLACE","POINT","PRESS","PROVE","RAISE","REACH","REFER","RELAX","SERVE","SHALL","SHARE","SHIFT","SHOOT","SLEEP","SOLVE","SOUND","SPEAK","SPEND","SPLIT","STAND","START","STATE","STICK","STUDY","TEACH","THANK","THINK","THROW","TOUCH","TRAIN","TREAT","TRUST","VISIT","VOICE","WASTE","WATCH","WORRY","WOULD","WRITE","ABOVE","ACUTE","ALIVE","ALONE","ANGRY","AWARE","AWFUL","BASIC","BLACK","BLIND","BRAVE","BRIEF","BROAD","BROWN","CHEAP","CHIEF","CIVIL","CLEAN","CLEAR","CLOSE","CRAZY","DAILY","DIRTY","EARLY","EMPTY","EQUAL","EXACT","EXTRA","FAINT","FALSE","FIFTH","FINAL","FIRST","FRESH","FRONT","FUNNY","GIANT","GRAND","GREAT","GREEN","GROSS","HAPPY","HARSH","HEAVY","HUMAN","IDEAL","INNER","JOINT","LARGE","LEGAL","LEVEL","LIGHT","LOCAL","LOOSE","LUCKY","MAGIC","MAJOR","MINOR","MORAL","NAKED","NASTY","NAVAL","OTHER","OUTER","PLAIN","PRIME","PRIOR","PROUD","QUICK","QUIET","RAPID","READY","RIGHT","ROMAN","ROUGH","ROUND","ROYAL","RURAL","SHARP","SHEER","SHORT","SILLY","SIXTH","SMALL","SMART","SOLID","SORRY","SPARE","STEEP","STILL","SUPER","SWEET","THICK","THIRD","TIGHT","TOTAL","TOUGH","UPPER","UPSET","URBAN","USUAL","VAGUE","VALID","VITAL","WHITE","WHOLE","WRONG","YOUNG","AFTER","OTHER","SINCE","SLASH","UNTIL","WHERE","WHILE","AFOUL","AFTER","AGAIN","AGAPE","AGOGO","AGONE","AHEAD","AHULL","ALIFE","ALIKE","ALINE","ALOFT","ALONE","ALONG","ALOOF","ALOUD","AMISS","AMPLY","AMUCK","APACE","APART","APTLY","AREAR","ASIDE","ASKEW","AWFUL","BADLY","BALLY","BELOW","CANNY","CHEAP","CLEAN","CLEAR","COYLY","DAILY","DIMLY","DIRTY","DITTO","DRILY","DRYLY","DULLY","EARLY","EXTRA","FALSE","FATLY","FEYLY","FIRST","FITLY","FORTE","FORTH","FRESH","FULLY","FUNNY","GAILY","GAYLY","GODLY","GREAT","HAPLY","HEAVY","HELLA","HENCE","HOTLY","ICILY","INFRA","INTL.","JILDI","JOLLY","LAXLY","LENTO","LIGHT","LOWLY","MADLY","MAYBE","NEVER","NEWLY","NOBLY","ODDLY","OFTEN","OTHER","OUGHT","PARTY","PIANO","PLAIN","PLONK","PLUMB","PRIOR","QUEER","QUICK","QUITE","RAMEN","RAPID","REDLY","RIGHT","ROUGH","ROUND","SADLY","SECUS","SELLY","SHARP","SHEER","SHILY","SHORT","SHYLY","SILLY","SINCE","SLEEK","SLYLY","SMALL","SO-SO","SOUND","SPANG","SRSLY","STARK","STILL","STONE","STOUR","SUPER","TALLY","TANTO","THERE","THICK","TIGHT","TODAY","TOMOZ","TRULY","TWICE","UNDER","UTTER","VERRY","WANLY","WETLY","WHERE","WRONG","WRYLY","ABOUT","ABOVE","AFTER","ALONG","ALOOF","AMONG","BELOW","CIRCA","CROSS","FURTH","MINUS","NEATH","ROUND","SINCE","SPITE","UNDER","UNTIL","ABUSE","ADULT","AGENT","ANGER","APPLE","AWARD","BASIS","BEACH","BIRTH","BLOCK","BLOOD","BOARD","BRAIN","BREAD","BREAK","BROWN","BUYER","CAUSE","CHAIN","CHAIR","CHEST","CHIEF","CHILD","CLAIM","CLASS","CLOCK","COACH","COAST","COURT","COVER","CREAM","CRIME","CROSS","CROWD","CROWN","CYCLE","DANCE","DEATH","DEPTH","DOUBT","DRAFT","DRAMA","DREAM","DRESS","DRINK","DRIVE","EARTH","ENEMY","ENTRY","ERROR","EVENT","FAITH","FAULT","FIELD","FIGHT","FINAL","FLOOR","FOCUS","FORCE","FRAME","FRONT","FRUIT","GLASS","GRANT","GRASS","GREEN","GROUP","GUIDE","HEART","HORSE","HOTEL","HOUSE","IMAGE","INDEX","INPUT","ISSUE","JUDGE","KNIFE","LAYER","LEVEL","LIGHT","LIMIT","LUNCH","MAJOR","MARCH","MATCH","METAL","MODEL","MONEY","MONTH","MOTOR","MOUTH","MUSIC","NIGHT","NOISE","NORTH","NOVEL","NURSE","OFFER","ORDER","OTHER","OWNER","PANEL","PAPER","PARTY","PEACE","PHASE","PHONE","PIECE","PILOT","PITCH","PLACE","PLANE","PLANT","PLATE","POINT","POUND","POWER","PRESS","PRICE","PRIDE","PRIZE","PROOF","QUEEN","RADIO","RANGE","RATIO","REPLY","RIGHT","RIVER","ROUND","ROUTE","RUGBY","SCALE","SCENE","SCOPE","SCORE","SENSE","SHAPE","SHARE","SHEEP","SHEET","SHIFT","SHIRT","SHOCK","SIGHT","SKILL","SLEEP","SMILE","SMITH","SMOKE","SOUND","SOUTH","SPACE","SPEED","SPITE","SPORT","SQUAD","STAFF","STAGE","START","STATE","STEAM","STEEL","STOCK","STONE","STORE","STUDY","STUFF","STYLE","SUGAR","TABLE","TASTE","TERRY","THEME","THING","TITLE","TOTAL","TOUCH","TOWER","TRACK","TRADE","TRAIN","TREND","TRIAL","TRUST","TRUTH","UNCLE","UNION","UNITY","VALUE","VIDEO","VISIT","VOICE","WASTE","WATCH","WATER","WHILE","WHITE","WHOLE","WOMAN","WORLD","YOUTH"
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
    if (e.keyCode > 64 && e.keyCode < 91) {
      enterLetter(e.key.toUpperCase())
    } else if (e.key === "Enter") {
      pressEnter()
    } else if (e.key === "Backspace") {
      deleteLastLetter()
    }
  })
}

function deleteLastLetter() {



  console.log(currentChar);  
  const chars = wordsArray[currentWord].getElementsByClassName('letterbox')  
  if(currentChar > 0 && currentChar < letters - 1) {
    currentChar--
    console.log(currentChar);  
    chars[currentChar].textContent = '';
  }  else if (currentChar = letters - 1) {
    console.log(currentChar);  
    chars[currentChar].textContent = '';
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
  //  if (guess in wordList)
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