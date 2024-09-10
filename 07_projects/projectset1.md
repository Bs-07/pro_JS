# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.target)
    // if (e.target.id == 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id == 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    const bgColor = e.target.id;
    switch (bgColor) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});


```

## project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  // console.log(height, weight);

  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please enter valid height';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please enter valid weight';
  } else {
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    console.log(bmi);
    result.innerHTML = `<span> Yore BMI is ${bmi}</span>`;
    // const res = document.createElement('div');
    // res.textContent = `Your BMI is ${bmi}`;
    // result.replaceWith(res);
    
    if (bmi < 18.6) {
      const res = document.createElement('span');
      res.innerHTML = `<p> Under Weight</p>`;
      result.appendChild(res);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      const res = document.createElement('span');
      res.innerHTML = `<p> Norma; Weight</p>`;
      result.appendChild(res);
    } else {
      const res = document.createElement('span');
      res.innerHTML = `<p> Over Weight</p>`;
      result.appendChild(res);
    }
  }
});

```

## project 3

```javascript
setInterval(()=>{
  const date = new Date();
  const clock = document.querySelector('#clock');
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4

```javascript
let random_num = Math.round(Math.random() * 100 + 1);
console.log(random_num);

const submit_btn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (guess == '' || guess < 1 || guess > 100 || isNaN(guess)) {
    alert(`Please enter a valid guess`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuesss(guess);
      displayMessage(`Game over. Random was ${random_num} :(`);
      endGame();
    } else {
      displayGuesss(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random_num) {
    displayMessage(`You guessed it right :)`);
    endGame();
  } else if (guess < random_num) {
    displayMessage(`too low guess`);
  } else if (guess > random_num) {
    displayMessage(`too high guess`);
  }
}

function displayGuesss(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id=newGame> Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const new_Game = document.querySelector('#newGame');
  new_Game.addEventListener('click', (e) => {
    random_num = Math.round(Math.random() * 100 + 1);
    prevGuess.length = 0;
    numGuess = 1;
    guessSlot.innerHTML = ``;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    lowOrHi.innerHTML = `<h2></h2>`;
    startOver.removeChild(p);

    playGame = true;
  });
}


```