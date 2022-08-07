// игрок
player = document.querySelector("#player");
playerSkin = "skin_1";
countLifes = 5; // счетчик жизней
count = 0; //количество очков

SelectSkin1 = document.querySelector("#skin_1");
SelectSkin2 = document.querySelector("#skin_2");

LifesBlock = document.querySelector("#lifes");

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
    scoreBlock.innerHTML = ""; // очистка очков
    countScore = countScore + score; //увеличение очков
    scoreBlock.innerText = "Score: " + countScore; //отображение очков Number(text)
}


function die() // функция смерти игрока
{
    countLifes = countLifes - 1;
    if (countLifes <= 0) // если жизни кончились
    {   
    //    alert("Жизни кончились");
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


function createBoom (Left, Top) //функция создания boom
{
     let Boom = document.createElement("div");
     Boom.className = "boom"; // имя класса boom
 
     // установить смещение как текущие координаты 
     Boom.style.left = Left - 150 + "px";
     Boom.style.top = Top - 100 + "px";
     
     gameBlock.appendChild(Boom);  // добавить boom на игровое поле

    let timerBoom = setTimeout // таймер через опр. время 
    (
       function() 
        {
           Boom.remove(); //удалить boom
           clearTimeout(timerBoom);// остановить таймер boom
         }, 1000
     );

}

