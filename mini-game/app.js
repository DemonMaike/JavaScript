const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['red', 'blue', 'green', 'purple', 'yellow']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mousemove', ()=>{
        square.style.backgroundColor = getColor();
        square.style.boxShadow = `0 0 10px ${getColor()},
        0 0 10px ${getColor()}`;
    })

    square.addEventListener('mouseleave', ()=>{
        square.style.backgroundColor = '#1d1d1d';
        square.style.boxShadow = '0 0 10px #000';
    })

    board.append(square);
}

function getColor() {
    const indx = Math.floor(Math.random() * colors.length)
    return colors[indx]
}
