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

startBtn.onclick = function() {
    startBlock.style.display = 'none';
    gameBlock.style.display = 'block';
    start();
};

function start() {
    countLifes = 5; // счетчик жизней
    countScore = 0; //количество очков
    player.className = playerSkin; // skin игрока
    createLifes(); // создание жизней игрока
    createScore(countScore); // обновить очки

    createItem(1, 7, 100)   // кидаем предметы
};

/*/ функция создания жизней игрока
function createLifes() {
    let LifesBlock = document.querySelector("#lifes");
    console.dir(LifesBlock);

        LifesBlock.innerHTML = "";      // очистка жизней
    let count = 0;                 
    while (count < countLifes) {        // создание жизней по циклу 

        let span = document.createElement("span");
        LifesBlock.appendChild(span);
        count++;
    }    
};

// функция смерти игрока 
function die() {
    countLifes--;

    if (countLifes <= 0)            // если жизни кончились
    {   
        gameBlock.style.display = 'none';
        endBlock.style.display = 'block';
        scoreEnd.innerHTML = scorePoints;
        EndGame();
    }
}
restartBtn.onclick = function() {
    location.reload();
};

//выбор скина для персонажа 
document.querySelectorAll("#select-player span img").forEach(
    el => el.onclick = function(e) {
        let selected = document.querySelector('.selected');
        selected.className = "";
        this.parentElement.className = "selected";

        if(this.parentElement.className == "selected") {
            player.className = this.parentElement.id;
        }
    }
);

// движуха персонажа 
document.onkeydown = function(event) {
    if(event.code == "KeyA" && player.offsetLeft > 20) {
        player.style.left = player.offsetLeft - 100 +"px";
    } else if(event.code == "KeyD" && player.offsetLeft < event.target.clientWidth - 218) {
        player.style.left = player.offsetLeft + 100 +"px";
    }
};
*/


/* создание предмета */
function createItem(min, max, time) {
    items.innerHTML = "";
    let rand = random(min, max);
    let item = document.createElement("img");
    item.setAttribute("src", "images/items/item_"+ rand +".png");
    items.appendChild(item);
    
    item.style.top = "-80px";
    item.style.left = random(214, window.innerWidth - 115) +"px";
    //let scorePoints = 0;

    fallItem(item, time);
}

/* падение предмета. */
function fallItem(item, time) {
    let intID = setInterval(() => {
        item.style.top = item.offsetTop + 15 +'px';
        
        if(item.offsetTop > window.outerHeight) {       // если не впоймал
            item.remove();
            clearInterval(intID);
            die();
            createLifes();
            createItem(1, 7, 100);        // кидаем предметы снова
        }
        cacheItem(item);
    }, time);
}

/* ловим предмет */
function cacheItem(item) {
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
}