const squares =  document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0 
let currentTime = timeLeft.textContent
console.log(currentTime)
let hitPosition




function randomSquare() {
    squares.forEach(square => {
      square.classList.remove('mole')
    })
  
    let index = Math.floor(Math.random() * 9)
    let randomPosition = squares[index]
    console.log(randomPosition)
    randomPosition.classList.add('mole')
  
    hitPosition = randomPosition.id
  }

squares.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timer= null
    timer = setInterval(randomSquare, 500);
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(timerCountDown)
        alert('GAME OVER')
    }
}


let timerCountDown = setInterval(countDown, 1000)