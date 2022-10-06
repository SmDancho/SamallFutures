const startBtn = document.querySelector('#start')
const screens  = document.querySelectorAll('.screen')
const timeList  = document.querySelector('#time-list')

const timeElement = document.querySelector('#time')
const board = document.querySelector('#board')


const colors = ['red','green','blue']

let time = 0
let score = 0


startBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})


timeList.addEventListener('click' , e => {
    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        time = parseInt(e.target.dataset.time)
       startGame(time)
       
    }
})

board.addEventListener('click' , (e) => {
   if( e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
   }
})

function startGame() {
    setInterval(decreaseTime,1000)
    createRandomCircle()
    setTime(time)

}

function decreaseTime() {
   if (time === 0) {
    finishGame()
   }
   else {
    let current = --time
    setTime(current)
   }
}

function setTime(value) {
    timeElement.innerHTML = value;
}

function finishGame() {
    timeElement.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Game over: ${score}</h1>`
}

function createRandomCircle() {
    
    const circle = document.createElement('div')
    const size = createRandomSize(10 , 60) 
    const random = createRandomSize(0 , 2) 

    console.log(random)

    const {width , height} = board.getBoundingClientRect()

    const x = createRandomSize(0, width - size);
    const y = createRandomSize(0, height - size);

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left =  `${x}px`
    circle.style.background = colors[random]
    board.append(circle)
}

function createRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


