let num;
let attempts = 3
const userInput = document.getElementById('userInput')
const userForm = document.getElementById('userForm')
const prevGuess = document.getElementById('prevGuess')
const userHint = document.getElementById('userHint')
const endGame = document.getElementById('endGame')
const userLose = document.getElementById('userLose')
const userWin = document.getElementById('userWin')
const restartGame = document.getElementById('restartGame')

window.addEventListener('DOMContentLoaded', genNum);
userForm.addEventListener('submit', userSubmit)

function genNum() {
  num = Math.floor(Math.random() * 100);
}

function userSubmit(event) {
  event.preventDefault()
  let userNum = userInput.value
  if (isNaN(userNum) || userNum === '') {
    userForm.reset()
    return
  }

  prevGuess.style.display = 'block'
  userHint.style.display = 'block'
  prevGuess.textContent = prevGuess.textContent + ' ' + userNum
  userClue(num, userNum)

  attempts--
  if (attempts === 0) gameLoss()
  userForm.reset()
}

function userClue(num, userNum) {
  if (userNum < num) {
    userHint.textContent = 'Guess is too low'
  } else if (userNum > num) {
    userHint.textContent = 'Guess is too high'
  } else {
    userHint.style.display = 'none'
  }
}

function gameLoss() {
  userInput.disabled = true
  endGame.style.display = 'block'
  userWin.style.display = 'none'
}
