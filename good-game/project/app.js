const startBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

const timesBtn = document.querySelector('#timeslist');

const timeEl = document.querySelector('#time');

const board = document.querySelector('#board');

let time = 0;
let score = 0;

const color = ['yellow','green','blue','purple','red'];

startBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    screens[0].classList.add('up');
})

timesBtn.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();

    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')){
        score ++;
        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle(); 
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
    let current = --time;
    if (current < 10) {
        current = `0${current}`;
    }
    setTime(current);
}}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const {width, height} = board.getBoundingClientRect();
    const size  = getRandomNumber(10, 60);
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px `;

    circle.style.background = `${color[getRandomNumber(1, color.length - 1)]}`;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function finishGame() {
    board.innerHTML = `<h1>Cчёт: <span class='primary'>${score}</span></h1>`;
    timeEl.parentNode.classList.add('hide');
}