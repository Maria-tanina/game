var startBtn = document.querySelector('.start__btn');
var gameBlock = document.querySelector('#game');
var startBlock = document.querySelector('#start');

const player = document.getElementById('player');
let countLifes = 3; // счетчик жизней

var items = document.querySelector('.items');
let scorePoints = score.lastElementChild.innerText;
let bird = document.querySelector("#options .bairactar");       //байрактар
bird.style.width = "0";
let endGame = document.querySelector('#end');
let scoreEnd = document.querySelector('#end h3 span');
let restartBtn = document.querySelector('.restart__btn');

let audioplayer = document.querySelector('audio');
let source = document.querySelector('audio source');
let soundBtn = document.querySelector('#sound img');
let boom = document.querySelector('.boom img');


var sound = 'off';
soundBtn.onclick = function () {
    if (sound == 'on') {
        soundBtn.src = 'images/mute_sound.png';
        sound = 'off';
        audioplayer.pause();
    } else {
        soundBtn.src = 'images/sound.png';
        sound = 'on';
        audioplayer.play();
    }
};

function random(min, max) {
    let rand;
    rand = Math.random() * (max - min + 1) + min;
    return Math.floor(rand);
};

startBtn.onclick = function () {
    start();
};

function start() {
    startBlock.style.display = 'none';
    game.style.display = 'block';
    createLifes();

    createItem(1, 9, 200); // кидаем предметы
};

// функция создания жизней игрока
function createLifes() {
    let LifesBlock = document.querySelector("#lifes");
    LifesBlock.innerHTML = ""; // очистка жизней
    let count = 0;
    while (count < countLifes) { // создание жизней по циклу 

        let span = document.createElement("span");
        LifesBlock.appendChild(span);
        count++;
    }
};

/* функция смерти игрока */
function die() {
    countLifes--;

    if (countLifes <= 0) // если жизни кончились
    {
        gameBlock.style.display = 'none';
        endGame.style.display = 'block';
        scoreEnd.innerHTML = scorePoints;
        //   EndGame();
    }
}
restartBtn.onclick = function () {
    location.reload();
};

/* выбор скина для персонажа */
document.querySelectorAll("#select-player span img").forEach(
    el => el.onclick = function (e) {
        let selected = document.querySelector('.selected');
        selected.className = "";
        this.parentElement.className = "selected";

        if (this.parentElement.className == "selected") {
            player.className = this.parentElement.id;
        }
    }
);

/* движуха персонажа */
document.onkeydown = function (event) {
    if (event.code == "KeyA" && player.offsetLeft > 20) {
        player.style.left = player.offsetLeft - 35 + "px";
    } else if (event.code == "KeyD" && player.offsetLeft < event.target.clientWidth - 218) {
        player.style.left = player.offsetLeft + 35 + "px";
    }
};

/* создание предмета */
function createItem(min, max, time) {
    items.innerHTML = "";
    let rand = random(min, max);
    let item = document.createElement("img");
    item.setAttribute("src", "images/items/item_" + rand + ".png");
    items.appendChild(item);
    if (rand == 8 || rand == 9) {
        item.setAttribute('class', 'bomb');
        console.dir(item);
    } else  if(rand == 7) {
        item.setAttribute('class', 'addlife');
    }

   
    item.style.top = "-80px";
    item.style.left = random(214, window.innerWidth - 115) + "px";

    fallItem(item, time);
}

// создание boom 
function createBoom(top, left, isBoom) {
    var boom = document.createElement('div');
    if(isBoom == "boom") {
        boom.className = 'boom';
    } else {
        boom.className = 'pshik';
    }
    boom.style.top = top + 'px';
    boom.style.left = left + 'px';
    gameBlock.appendChild(boom);
    setTimeout(function () {
        boom.remove();
    }, 700);
}

/* падение предмета. */
function fallItem(item, time) {
    let intID = setInterval(() => {
        item.style.top = item.offsetTop + 15 + 'px';

        if (item.offsetTop > window.outerHeight) {      // если не впоймал
            item.remove();
            clearInterval(intID);
            if (item.className !== 'bomb') {
                die();
                createLifes();
            }
            createItem(1, 9, 200); // кидаем предметы снова

        }
        cacheItem(item);
    }, time);
}

/* ловим предмет */
function cacheItem(item) {
    if (player.className == "skin_1" &&     // если скин 1
        player.offsetTop + 175 < item.offsetTop + (item.height / 2) &&
        item.offsetTop + (item.height / 2) < player.offsetTop + 190) {

        if (player.offsetLeft + 52 < item.offsetLeft + (item.width / 2) &&
            item.offsetLeft + (item.width / 2) < player.offsetLeft + 152 && item.className == '') {
            createBoom(item.offsetTop - 100, item.offsetLeft - 70);
            bildPlain();
            createItem(1, 9, 200);
        } else if (player.offsetLeft + 52 < item.offsetLeft + (item.width / 2) &&   //если ловим бомбу
            item.offsetLeft + (item.width / 2) < player.offsetLeft + 152 && item.className == 'bomb') {
            createBoom(item.offsetTop - 100, item.offsetLeft - 50, "boom");
            die();
            createLifes();
            createItem(1, 9, 200);
        } else if (player.offsetLeft + 52 < item.offsetLeft + (item.width / 2) &&
        item.offsetLeft + (item.width / 2) < player.offsetLeft + 152 && item.className == 'addlife') {
            countLifes++;
            createLifes();
            createItem(1, 9, 200);
        }

    } else if (player.className == "skin_2" &&                          // если скин 2
        player.offsetTop + 124 < item.offsetTop + (item.height / 2) &&
        item.offsetTop + (item.height / 2) < player.offsetTop + 190) {
        if (player.offsetLeft + 115 < item.offsetLeft + (item.width / 2) &&
            item.offsetLeft + (item.width / 2) < player.offsetLeft + 213 && item.className != 'bomb' && item.className != 'addlife') {
            createBoom(item.offsetTop - 100, item.offsetLeft - 70);
            bildPlain();
            createItem(1, 9, 200)
        } else if (player.offsetLeft + 115 < item.offsetLeft + (item.width / 2) &&      //если ловим бомбу
            item.offsetLeft + (item.width / 2) < player.offsetLeft + 213 && item.className == 'bomb') {
            createBoom(item.offsetTop - 100, item.offsetLeft - 50, "boom");
            die();
            createLifes();
            createItem(1, 9, 200);
        } else if (player.offsetLeft + 115 < item.offsetLeft + (item.width / 2) &&
        item.offsetLeft + (item.width / 2) < player.offsetLeft + 213 && item.className == 'addlife') {
            countLifes++;
            createLifes();
            createItem(1, 9, 200);
        }
    }
}

/* строим байрактар */
function bildPlain() {
    if(bird.offsetWidth >= 85) {
        score.lastElementChild.innerText = Number(scorePoints) + 1;
        scorePoints = score.lastElementChild.innerText;
        bird.style.width = "0";
    } else {
        bird.style.width = bird.offsetWidth + 10 +'px'
    }
}