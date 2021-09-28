let num;
const userInput = document.getElementById('userInput')
const userForm = document.getElementById('userForm')
const prevGuess = document.getElementById('prevGuess')

window.addEventListener('DOMContentLoaded', event => {
  num = Math.floor(Math.random() * 100);
});

userForm.addEventListener('submit', userSubmit)

function userSubmit(event) {
  event.preventDefault()
  let userNum = userInput.value

  if (isNaN(userNum)) return

  prevGuess.textContent = prevGuess.textContent + ' ' + userNum
  userForm.reset()
}
