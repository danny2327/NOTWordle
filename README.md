# NOTWordle
This is definitely not a wordle clone. And it's just for fun, so don't sue me.

How To Play
---

There is a 5 letter word. Guess it.
Use the on screen keyboard, or your keyboard to enter a guess.
paint
If the letter is in the right spot, it'll be green.
If it's in in the puzzle, but in the wrong spot, it will be yellow.
Press Enter or Submit to make your guess.

If all the letters of a word aren't filled in, it won't submit.

![image](images/game.png)

How It's Made
---

Just some plain JS and CSS (using bootstrap, although mostly just for the modals)

V 1.1.0
---
**Changelog**
Fixed issue where when backspacing, the 4th letter would remain.  

Prevent submitting word before all letters have been filled.

Prevent interacting with the board after game ends, either because of win or loss. 

Now highlights the current letter.

