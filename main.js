var startBtn = document.querySelector('.start__btn');
var gameBlock = document.querySelector('#game');
var startBlock =  document.querySelector('#start');


startBtn.onclick = function() {
    start();
};


function start() {
    startBlock.style.display = 'none';
    game.style.display = 'block';
}

