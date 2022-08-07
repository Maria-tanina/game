<<<<<<< HEAD
var startBtn = document.querySelector('.start__btn');
var gameBlock = document.querySelector('#game');
var startBlock = document.querySelector('#start');
const player = document.getElementById('player');
let countLifes = 3; // счетчик жизней
var items = document.querySelector('.items');
let scorePoints = score.lastElementChild.innerText;
let endGame = document.querySelector('#end');
let scoreEnd = document.querySelector('#end h3 span');
let restartBtn = document.querySelector('.restart__btn');
let audioplayer = document.querySelector('audio');
let source = document.querySelector('audio source');
let soundBtn = document.querySelector('#sound img');
let boom = document.querySelector('.boom img');
=======
let script = document.createElement('script');
script.src = "player.js";
document.head.append(script);

startBtn = document.querySelector('.start__btn');
gameBlock = document.querySelector('#game');
startBlock =  document.querySelector('#start');
scoreBlock = document.querySelector("#score");

// player = document.getElementById('player');
// let countLifes = 3;     // счетчик жизней

items = document.querySelector('.items');
// let scorePoints = score.lastElementChild.innerText;
bird = document.querySelector("#options .bairactar");       //байрактар
bird.style.width = "0";
endBlock = document.querySelector('#end');
scoreEnd = document.querySelector('#end h3 span');
restartBtn = document.querySelector('.restart__btn');

audioplayer = document.querySelector('audio');
source = document.querySelector('audio source');
soundBtn = document.querySelector('#sound img');
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de


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

<<<<<<< HEAD
startBtn.onclick = function () {
=======
startBtn.onclick = function() {
    startBlock.style.display = 'none';
    gameBlock.style.display = 'block';
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de
    start();
};

function start() {
<<<<<<< HEAD
    startBlock.style.display = 'none';
    game.style.display = 'block';
    createLifes();

    createItem(1, 7, 200); // кидаем предметы
=======
    countLifes = 5; // счетчик жизней
    countScore = 0; //количество очков
    player.className = playerSkin; // skin игрока
    createLifes(); // создание жизней игрока
    createScore(countScore); // обновить очки

    createItem(1, 7, 100)   // кидаем предметы
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de
};

/*/ функция создания жизней игрока
function createLifes() {
    let LifesBlock = document.querySelector("#lifes");
<<<<<<< HEAD
    LifesBlock.innerHTML = ""; // очистка жизней
    let count = 0;
    while (count < countLifes) { // создание жизней по циклу 
=======
    console.dir(LifesBlock);

        LifesBlock.innerHTML = "";      // очистка жизней
    let count = 0;                 
    while (count < countLifes) {        // создание жизней по циклу 
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de

        let span = document.createElement("span");
        LifesBlock.appendChild(span);
        count++;
    }
};

// функция смерти игрока 
function die() {
    countLifes--;

    if (countLifes <= 0) // если жизни кончились
    {
        gameBlock.style.display = 'none';
        endBlock.style.display = 'block';
        scoreEnd.innerHTML = scorePoints;
<<<<<<< HEAD
        //   EndGame();
=======
        EndGame();
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de
    }
}
restartBtn.onclick = function () {
    location.reload();
};

//выбор скина для персонажа 
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

<<<<<<< HEAD
/* движуха персонажа */
document.onkeydown = function (event) {
    if (event.code == "KeyA" && player.offsetLeft > 20) {
        player.style.left = player.offsetLeft - 35 + "px";
    } else if (event.code == "KeyD" && player.offsetLeft < event.target.clientWidth - 218) {
        player.style.left = player.offsetLeft + 35 + "px";
=======
// движуха персонажа 
document.onkeydown = function(event) {
    if(event.code == "KeyA" && player.offsetLeft > 20) {
        player.style.left = player.offsetLeft - 100 +"px";
    } else if(event.code == "KeyD" && player.offsetLeft < event.target.clientWidth - 218) {
        player.style.left = player.offsetLeft + 100 +"px";
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de
    }
};
*/


/* создание предмета */

function createItem(min, max, time) {
    items.innerHTML = "";
    let rand = random(min, max);
    let item = document.createElement("img");
    item.setAttribute("src", "images/items/item_" + rand + ".png");
    console.log(rand);
    if (rand == 8 || rand == 9) {
        item.setAttribute('class', 'bomb');
        console.dir(item);
    }
    items.appendChild(item);

    item.style.top = "-80px";
<<<<<<< HEAD
    item.style.left = random(214, window.innerWidth - 115) + "px";
    let scorePoints = 0;
=======
    item.style.left = random(214, window.innerWidth - 115) +"px";
    //let scorePoints = 0;
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de

    fallItem(item, time);
}
// создание boom 
function createBoom(top, left) {
    var boom = document.createElement('div');
    boom.className = 'boom';
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

        if (item.offsetTop > window.outerHeight) { // если не впоймал
            item.remove();
            clearInterval(intID);
<<<<<<< HEAD
            if (item.className !== 'bomb') {
                die();
                createLifes();
            }
            createItem(1, 9, 200); // кидаем предметы снова

=======
            die();
            createLifes();
            createItem(1, 7, 100);        // кидаем предметы снова
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de
        }
        cacheItem(item);
    }, time);
}

/* ловим предмет */
function cacheItem(item) {
<<<<<<< HEAD
    if (player.className == "skin_1" && // если скин 1
        player.offsetTop + 180 < item.offsetTop + (item.height / 2) &&
        item.offsetTop + (item.height / 2) < player.offsetTop + 195) {

        if (player.offsetLeft + 52 < item.offsetLeft + (item.width / 2) &&
            item.offsetLeft + (item.width / 2) < player.offsetLeft + 152 && item.className == '') {
            score.lastElementChild.innerText = Number(scorePoints) + 1;
            createItem(1, 9, 200);
        } else if (player.offsetLeft + 52 < item.offsetLeft + (item.width / 2) && //если ловим бомбу
            item.offsetLeft + (item.width / 2) < player.offsetLeft + 152 && item.className == 'bomb') {
            createBoom(item.offsetTop - 100, item.offsetLeft - 50);
            die();
            createLifes();
            createItem(1, 9, 200);

        }

    } else if (player.className == "skin_2" && // если скин 2
        player.offsetTop + 124 < item.offsetTop + (item.height / 2) &&
        item.offsetTop + (item.height / 2) < player.offsetTop + 190) {
        if (player.offsetLeft + 115 < item.offsetLeft + (item.width / 2) &&
            item.offsetLeft + (item.width / 2) < player.offsetLeft + 213) {

            score.lastElementChild.innerText = Number(scorePoints) + 1;
            createItem(1, 9, 200);
        }
    }
    scorePoints = score.lastElementChild.innerText;
=======
    console.dir(item.offsetTop);
    console.dir(item.offsetLeft);

    if(player.className == "skin_1" &&                                      // если скин 1
       player.offsetTop + 180 < item.offsetTop + (item.height / 2) &&
       item.offsetTop + (item.height / 2) < player.offsetTop + 195)
    {
        if(player.offsetLeft + 52 < item.offsetLeft +  (item.width / 2) &&
           item.offsetLeft +  (item.width / 2) < player.offsetLeft + 152) {
            createScore(10);

            bildPlain();
            createBoom(item.offsetLeft, item.offsetTop);
            createItem(1, 7, 100)
        }  
    } else if(player.className == "skin_2" &&                               // если скин 2
              player.offsetTop + 124 < item.offsetTop + (item.height / 2) &&
              item.offsetTop + (item.height / 2) < player.offsetTop + 190)
    {                
                if(player.offsetLeft + 115 < item.offsetLeft + (item.width / 2) &&
                   item.offsetLeft + (item.width / 2) < player.offsetLeft + 213) {
                    createScore(10);

                    bildPlain();
                    createBoom(item.offsetLeft, item.offsetTop);
                    createItem(1, 7, 100)
        }
    }
}

/* строим байрактар */
function bildPlain() {
    if(bird.offsetWidth >= 85) {
        score.lastElementChild.innerText = Number(scorePoints) + 1;
        scorePoints = score.lastElementChild.innerText;
        bird.style.width = "0"
    } else {
        bird.style.width = bird.offsetWidth + 10 +'px'
    }
}


//конец игры
function EndGame()
{
   scoreBlock.innerText = countScore + " очков";
   endBlock.style.display = "block";

   gameBlock.innerHTML = "" ; // обнуление окна игры

   let restartButton = document.querySelector("#end button");
   restartButton.onclick = restart;
}

function restart()
{
   location.reload() ;
>>>>>>> ba12df351bd7eab08e7c7b79ad3b1d192ec1e5de
}