# NOTWordle
This is definitely not a wordle clone. And it's just for fun, so don't sue me.

How To Play
---

There is a 5 letter word. Guess it.
Use the on screen keyboard, or your keyboard to enter a guess.
paint
If the letter is in the right spot, it'll be green.
If it's in in the puzzle, but in the wrong spot, it will be yellow.
Press or click Enter to make your guess.

If all the letters of a word aren't filled in, it won't submit.

If the word is not a word that is in my large word list, it won't submit.  At some point I might use an online dictionary to check, but for now, this is what you get. 


![image](images/game.png)

How It's Made
---

Just some plain JS and CSS (using bootstrap, although mostly just for the modals)

# Changelog

V 1.1.2
---
Fixed what I broke in 1.1.1, namely being able to submit words...

Added messages

Can now use Enter to trigger Play Again button on modals.

V 1.1.1
---
Added Settings Pane

Added "Wordiness" check.  It's on by default, so you can only guess real words. Not remembered between sessions, might do a cookie later.

Added in-app version number.

V 1.1.0
---
Fixed issue where when backspacing, the 4th letter would remain.  

Prevent submitting word before all letters have been filled.

Prevent interacting with the board after game ends, either because of win or loss. 

Now highlights the current letter.

