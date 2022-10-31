const btns = document.querySelectorAll('.player>button')

let playerChoice = document.querySelector('#playerChoose')
let compChoice = document.querySelector('#computerChoose')
let playerScore = document.querySelector('#playerScore')
let compScore = document.querySelector('#computerScore')
let cScore = 0
let pScore = 0

btns.forEach(e => {
  e.addEventListener("click",(el)=>{
    let pC = el.path[0].id.substring(6)
    let cC = computerChoice()

    playerChoice.textContent = pC
    compChoice.textContent = cC
    pickWinner(pC, cC)
  })
});


const computerChoice = () => {
  let random = Math.random()*100
  let objectReturn
  if (random<33.3) objectReturn = 'Rock'
  else if (random<66.6) objectReturn = 'Paper'
  else objectReturn = 'Scisors'

  return objectReturn
}

const pickWinner = (player, comp) => {
  if(player==comp) {
    console.log('Tie!')
    return
  }
  if (player == 'Rock') {
    if (comp == 'Paper') {
      console.log('Player lost')
      cScore ++
      compScore.textContent = cScore
    }else{
      console.log('Player win')
      pScore ++
      playerScore.textContent = pScore
    }
  }else if (player == 'Paper'){

  }else {

  }
}