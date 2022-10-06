const board = document.querySelector('#board');
const colors = ['#e74c3c','#8e44ad', '#3498db' , '#e67e22','#2ecc71']
const SQUARES_NUMBER = 500;



for (let i = 0; i < SQUARES_NUMBER; i++) {
    const element = i[SQUARES_NUMBER];
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square);
}


function setColor(element) {
    let getRandomValue = Math.floor(Math.random() * 5)
    element.style.backgroundColor = colors[getRandomValue]
    element.style.boxShadow  = `0  0 2px ${colors[getRandomValue]},0 0 10px ${colors[getRandomValue]}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow  = "0  0 2px #000"
}