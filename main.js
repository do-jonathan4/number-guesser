let num;
let attempts = 3
const userInput = document.getElementById('userInput')
const userForm = document.getElementById('userForm')
const prevGuess = document.getElementById('prevGuess')
const userHint = document.getElementById('userHint')

window.addEventListener('DOMContentLoaded', event => {
  num = Math.floor(Math.random() * 100);
});

userForm.addEventListener('submit', userSubmit)

function userSubmit(event) {
  event.preventDefault()
  let userNum = userInput.value
  if (isNaN(userNum)) return

  prevGuess.style.display = 'block'
  userHint.style.display = 'block'
  prevGuess.textContent = prevGuess.textContent + ' ' + userNum

  userClue(num, userNum)

  attempts--
  if (attempts === 0) userInput.disabled = true
  userForm.reset()
}

function userClue(num, userNum) {
  if (userNum < num) {
    userHint.textContent = 'Guess is too low'
  } else if (userNum > num) {
    userHint.textContent = 'Guess is too high'
  } else {
    userHint.textContent = 'Congratulations you win!'
  }
}
