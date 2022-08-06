<<<<<<< HEAD
// игрок
player = document.querySelector("#player");
playerSkin = "skin_1";
countLifes = 5; // счетчик жизней
countScore = 0; //количество очков

SelectSkin1 = document.querySelector("#skin_1");
SelectSkin2 = document.querySelector("#skin_2");

SelectSkin1.onclick = function()// выбор skin1 игрока
{
   SelectSkin1.className = "selected";
   SelectSkin2.className = "";
   playerSkin = "skin_1"; 
}

SelectSkin2.onclick = function() // выбор skin2 игрока
{
   SelectSkin2.className = "selected";
   SelectSkin1.className = "";
   playerSkin = "skin_2"; 
}

function createLifes() // функция создания жизней игрока
{
    let LifesBlock = document.querySelector("#lifes");
        LifesBlock.innerHTML = ""; // очистка жизней
    let count = 0;                 // счетчик
    while (count < countLifes)     // создание жизней по циклу 
    {
        let span = document.createElement("span");
        LifesBlock.appendChild(span);

        count = count + 1;
    }    
}

function createScore(score) //функция подсчета очков
{
    let ScoreBlock = document.querySelector("#score");
    ScoreBlock.innerHTML = ""; // очистка очков
    countScore = countScore + score; //увеличение очков
    ScoreBlock.innerText = "Score: " + countScore; //отображение очков Number(text)
}


function die() // функция смерти игрока
{
    countLifes = countLifes - 1;
    if (countLifes <= 0) // если жизни кончились
    {   
       alert("Жизни кончились");
       EndGame();
    }
}

// При нажатии клавиш "a" (65) и "d" (68)
// передвижение игрока вверх   и   вниз
document.onkeydown = function(event)   
{
    // Если нажата 'a'(65)
    if (event.keyCode == 65 && player.offsetLeft > 25)
    {  //уменьшить смещение игорка на 50 пкс
        player.style.left = player.offsetLeft - 100 + "px";
    }

    // Если нажата 'd'(68)
    if (event.keyCode == 68 && player.offsetLeft < document.querySelector("body").clientWidth - 220) 
    {  //увеличить смещение игорка на 50 пкс
        player.style.left = player.offsetLeft + 100 + "px";
    }

}






=======
// игрок
player = document.querySelector("#player");
playerSkin = "skin_1";
countLifes = 5; // счетчик жизней
countScore = 0; //количество очков

SelectSkin1 = document.querySelector("#skin_1");
SelectSkin2 = document.querySelector("#skin_2");

SelectSkin1.onclick = function()// выбор skin1 игрока
{
   SelectSkin1.className = "selected";
   SelectSkin2.className = "";
   playerSkin = "skin_1"; 
}

SelectSkin2.onclick = function() // выбор skin2 игрока
{
   SelectSkin2.className = "selected";
   SelectSkin1.className = "";
   playerSkin = "skin_2"; 
}

function createLifes() // функция создания жизней игрока
{
    let LifesBlock = document.querySelector("#lifes");
        LifesBlock.innerHTML = ""; // очистка жизней
    let count = 0;                 // счетчик
    while (count < countLifes)     // создание жизней по циклу 
    {
        let span = document.createElement("span");
        LifesBlock.appendChild(span);

        count = count + 1;
    }    
}

function createScore(score) //функция подсчета очков
{
    let ScoreBlock = document.querySelector("#score");
    ScoreBlock.innerHTML = ""; // очистка очков
    countScore = countScore + score; //увеличение очков
    ScoreBlock.innerText = "Score: " + countScore; //отображение очков Number(text)
}


function die() // функция смерти игрока
{
    countLifes = countLifes - 1;
    if (countLifes <= 0) // если жизни кончились
    {   
       alert("Жизни кончились");
      //   EndGame();
    }
}

// При нажатии клавиш "a" (65) и "d" (68)
// передвижение игрока вверх   и   вниз
document.onkeydown = function(event)   
{
    // Если нажата 'a'(65)
    if (event.keyCode == 65 && player.offsetLeft > 25)
    {  //уменьшить смещение игорка на 50 пкс
        player.style.left = player.offsetLeft - 100 + "px";
    }

    // Если нажата 'd'(68)
    if (event.keyCode == 68 && player.offsetLeft < document.querySelector("body").clientWidth - 220) 
    {  //увеличить смещение игорка на 50 пкс
        player.style.left = player.offsetLeft + 100 + "px";
    }

}






>>>>>>> 6a544b0739b558a1bdfd7fd1f89c64e143e0bbc8
