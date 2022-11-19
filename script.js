const btns = document.querySelectorAll('.player>button')
const resetBtn = document.querySelector('#resetBtn')

let playerChoice = document.querySelector('#playerChoose')
let compChoice = document.querySelector('#computerChoose')
let playerScore = document.querySelector('#playerScore')
let compScore = document.querySelector('#computerScore')

let actionImage = document.querySelector('#chosenImg')

let cScore = 0
let pScore = 0

btns.forEach(e => {
  e.addEventListener("click", (el) => {
    let pC = el.path[0].id.substring(6)
    let cC = computerChoice()
    pickWinner(pC, cC)
    showChoices(pC, cC)
  })
});

const resetGame = () => {
  cScore = 0
  pScore = 0
  playerScore.textContent = pScore
  compScore.textContent = cScore
  showChoices('xxx', 'xxx')
  actionImage.src = `./images/StartGif.gif`
}

resetBtn.addEventListener('click', resetGame)

const computerChoice = () => {
  let random = Math.random() * 100
  let choose
  if (random < 33.3) choose = 'Rock'
  else if (random < 66.6) choose = 'Paper'
  else choose = 'Scisors'
  return choose
}

const showChoices = (pC, cC) => {
  playerChoice.textContent = pC
  compChoice.textContent = cC
  imageSetter(pC, cC)
}

const imageSetter = (pC, cC) => {
  actionImage.classList.remove('reverseClass')
  if (pC == 'Scisors' || pC == cC || (pC == 'Rock' && cC == 'Paper')) {
    actionImage.src = `./images/${pC}${cC}.gif`
  } else {
    actionImage.src = `./images/${cC}${pC}.gif`
    actionImage.classList.add('reverseClass')
  }
}

const pickWinner = (player, comp) => {
  if (player == comp) return
  if (player == 'Rock') {
    comp == 'Paper' ? increaseScore('comp') : increaseScore('player')
  } else if (player == 'Paper') {
    comp == 'Rock' ? increaseScore('player') : increaseScore('comp')
  } else {
    comp == 'Rock' ? increaseScore('comp') : increaseScore('player')
  }
}

const increaseScore = (whoWin) => {
  if (whoWin == 'player') {
    pScore++
    playerScore.textContent = pScore
  } else {
    cScore++
    compScore.textContent = cScore
  }
}