# Frontend Mentor - Tic Tac Toe solution

This is a solution to the [Tic Tac Toe challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- **Bonus 1**: Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

### Screenshot

![screenshot mobile-menu](https://github.com/Lo-Deck/Tic-Tac-Toe-game/blob/main/screenshot/Tic%20Tac%20Toe-mobile-menu.png).
![screenshot mobile-game](https://github.com/Lo-Deck/Tic-Tac-Toe-game/blob/main/screenshot/Tic%20Tac%20Toe-mobile-game.png).
![screenshot mobile-win](https://github.com/Lo-Deck/Tic-Tac-Toe-game/blob/main/screenshot/Tic%20Tac%20Toe-mobile-win.png).
![screenshot desktop-menu](https://github.com/Lo-Deck/Tic-Tac-Toe-game/blob/main/screenshot/Tic%20Tac%20Toe-desktop-menu.png).
![screenshot desktop-game](https://github.com/Lo-Deck/Tic-Tac-Toe-game/blob/main/screenshot/Tic%20Tac%20Toe-desktop-game.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Tic-Tac-Toe-game).
- Live Site URL: [Website](https://lo-deck.github.io/Tic-Tac-Toe-game/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

The most of it was to create a CPU who can play more than randomly and be challenging when you play against.
Check all possibilities and take a decision following the result.

```js

if(i === k && priorityPlay === 2 && !array[memoriseIndex]){ //playing priority means cpu plays to win

     array[memoriseIndex] = cpu.mark;

     document.querySelectorAll('.mark')[memoriseIndex].innerHTML = `<img class="player-mark" src=${ cpu.mark === 'X' ? './assets/icon-x.svg' : './assets/icon-o.svg' } alt="">`;

      memoriseIndex = 0;

      priorityPlay = 0;

      return;

}

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
