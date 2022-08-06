<<<<<<< HEAD
var startBtn = document.querySelector('.start__btn');
var gameBlock = document.querySelector('#game');
var startBlock =  document.querySelector('#start');
const player = document.getElementById('player');
let countLifes = 3; // счетчик жизней
var items = document.querySelector('.items');
let scorePoints = score.lastElementChild.innerText;


function random(min, max) {
    let rand;
    rand = Math.random() * (max - min + 1) + min
    return Math.floor(rand)
};

startBtn.onclick = function() {
    start();
};

function start() {
    startBlock.style.display = 'none';
    game.style.display = 'block';
    createLifes();
    
    createItem(1, 7, 200)   // кидаем предметы
};

// функция создания жизней игрока
function createLifes() {
    let LifesBlock = document.querySelector("#lifes");
        LifesBlock.innerHTML = "";      // очистка жизней
    let count = 0;                 
    while (count < countLifes) {        // создание жизней по циклу 

        let span = document.createElement("span");
        LifesBlock.appendChild(span);
        count++;
    }    
};

/* функция смерти игрока */
function die() {
    countLifes--;

    if (countLifes <= 0)            // если жизни кончились
    {   
       alert("Жизни кончились");
      //   EndGame();
    }
}

/* выбор скина для персонажа */
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

/* движуха персонажа */
document.onkeydown = function(event) {
    if(event.code == "KeyA" && player.offsetLeft > 20) {
        player.style.left = player.offsetLeft - 16 +"px";
    } else if(event.code == "KeyD" && player.offsetLeft < event.target.clientWidth - 218) {
        player.style.left = player.offsetLeft + 16 +"px";
    }
};

/* создание предмета */
function createItem(min, max, time) {
    items.innerHTML = "";
    let rand = random(min, max);
    let item = document.createElement("img");
    item.setAttribute("src", "images/items/item_"+ rand +".png");
    items.appendChild(item);
    
    item.style.top = "-80px";
    item.style.left = random(214, window.innerWidth - 115) +"px";
    let scorePoints = 0;

    fallItem(item, time);
};

/* падение предмета. */
function fallItem(item, time) {
    let intID = setInterval(() => {
        item.style.top = item.offsetTop + 15 +'px';
        
        if(item.offsetTop > window.outerHeight) {       // если не впоймал
            item.remove();
            clearInterval(intID);
            die();
            createLifes();
            createItem(1, 7, 200);        // кидаем предметы снова
        }
        cacheItem(item)
    }, time)
};

/* ловим предмет */
function cacheItem(item) {
    if(player.className == "skin_1" &&                                      // если скин 1
       player.offsetTop + 180 < item.offsetTop + (item.height / 2) &&
       item.offsetTop + (item.height / 2) < player.offsetTop + 195)
    {
        if(player.offsetLeft + 52 < item.offsetLeft +  (item.width / 2) &&
           item.offsetLeft +  (item.width / 2) < player.offsetLeft + 152) {
            
            score.lastElementChild.innerText = Number(scorePoints) + 1;
            createItem(1, 7, 200)
        }  
    } else if(player.className == "skin_2" &&                               // если скин 2
              player.offsetTop + 124 < item.offsetTop + (item.height / 2) &&
              item.offsetTop + (item.height / 2) < player.offsetTop + 190)
    {                
                if(player.offsetLeft + 115 < item.offsetLeft + (item.width / 2) &&
                   item.offsetLeft + (item.width / 2) < player.offsetLeft + 213) {
                    
                    score.lastElementChild.innerText = Number(scorePoints) + 1;
                    createItem(1, 7, 200)
        }
    };
    scorePoints = score.lastElementChild.innerText;
};

=======

var startBtn = document.querySelector('.start__btn');
var gameBlock = document.querySelector('#game');
var startBlock =  document.querySelector('#start');
const player = document.getElementById('player');
var items = document.querySelector('.items');
let scorePoints = score.lastElementChild.innerText;


function random(min, max) {
    let rand;
    rand = Math.random() * (max - min + 1) + min
    return Math.floor(rand)
};

startBtn.onclick = function() {
    start();
};

function start() {
    startBlock.style.display = 'none';
    game.style.display = 'block';
    
    createItem(1, 7, 200)   // кидаем предметы
};

/* выбор скина для персонажа */
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

/* движуха персонажа */
document.onkeydown = function(event) {
    if(event.code == "KeyA" && player.offsetLeft > 20) {
        player.style.left = player.offsetLeft - 16 +"px";
    } else if(event.code == "KeyD" && player.offsetLeft < event.target.clientWidth - 218) {
        player.style.left = player.offsetLeft + 16 +"px";
    }
};

/* создание предмета */
function createItem(min, max, time) {
    items.innerHTML = "";
    let rand = random(min, max);
    let item = document.createElement("img");
    item.setAttribute("src", "images/items/item_"+ rand +".png");
    items.appendChild(item);
    
    item.style.top = "-80px";
    item.style.left = random(214, window.innerWidth - 115) +"px";
    let scorePoints = 0;

    fallItem(item, time);
};

/* падение предмета. */
function fallItem(item, time) {
    let intID = setInterval(() => {
        item.style.top = item.offsetTop + 15 +'px';
        
        if(item.offsetTop > window.outerHeight) {       // если не впоймал
            item.remove();
            clearInterval(intID);
            createItem(1, 7, 200);        // кидаем предметы снова
        }
        cacheItem(item)
    }, time)
};

/* ловим предмет */
function cacheItem(item) {
    if(player.className == "skin_1" &&                                      // если скин 1
       player.offsetTop + 180 < item.offsetTop + (item.height / 2) &&
       item.offsetTop + (item.height / 2) < player.offsetTop + 195)
    {
        if(player.offsetLeft + 52 < item.offsetLeft +  (item.width / 2) &&
           item.offsetLeft +  (item.width / 2) < player.offsetLeft + 152) {
            
            score.lastElementChild.innerText = Number(scorePoints) + 1;
            createItem(1, 7, 200)
        }  
    } else if(player.className == "skin_2" &&                               // если скин 2
              player.offsetTop + 124 < item.offsetTop + (item.height / 2) &&
              item.offsetTop + (item.height / 2) < player.offsetTop + 190)
    {                
                if(player.offsetLeft + 115 < item.offsetLeft + (item.width / 2) &&
                   item.offsetLeft + (item.width / 2) < player.offsetLeft + 213) {
                    
                    score.lastElementChild.innerText = Number(scorePoints) + 1;
                    createItem(1, 7, 200)
        }
    };
    scorePoints = score.lastElementChild.innerText;
};
>>>>>>> 2cbe7099a2be8de32b7dc53c31fc8d4eb69fbd4c
