let num;
let userInput = document.getElementById('userInput')
const userForm = document.getElementById('userForm')
const prevGuess = document.getElementById('prevGuess')

window.addEventListener('DOMContentLoaded', event => {
  num = Math.floor(Math.random() * 100);
  console.log(num);
});

userForm.addEventListener('submit', event => {
  event.preventDefault()
  let userNum = userInput.value

  if (isNaN(userNum)) return
  prevGuess.textContent = prevGuess.textContent + ' ' + userNum
  userNum = ''
})
