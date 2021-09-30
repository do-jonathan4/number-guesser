let num;
let attempts = 10
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
restartGame.addEventListener('click', gameReset)

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
  prevGuess.textContent = prevGuess.textContent + ' ' + userNum
  userClue(num, userNum)

  attempts--
  if (attempts === 0) gameLoss()
  if (userNum == num) gameWin()
  userForm.reset()
}

function userClue(num, userNum) {
  userHint.style.display = 'block'
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

function gameWin() {
  userInput.disabled = true
  endGame.style.display = 'block'
  userLose.style.display = 'none'
}

function gameReset() {
  endGame.style.display = 'none'
  userHint.style.display = 'none'
  prevGuess.style.display = 'none'
  prevGuess.textContent = 'Guesses: '
  userInput.disabled = false
  genNum()
}
