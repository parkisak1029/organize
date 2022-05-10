const canvas = document.getElementById('myCanvas');
canvas.style.backgroundColor = "white";
const context = canvas.getContext('2d');

const rockImg = document.getElementById("img1")
const scissorsImg = document.getElementById("img2")
const paperImg = document.getElementById("img3")



const tileWidth = 50; 
const tileHeight = 50;


let tiles;   
let tilePosX = canvas.width / 2 - tileWidth / 2;
let tilePosY = canvas.height - tileHeight;
let tileColumn = 10;
let tileRow = 10;
let tileMoveSpeed = 10;
let gameState = 0;
let arcPosX = 0;
let arcPosY = 0;
const arcRadius = 20;

let arc = arcPosX.left  

let TileColor = ["gold", "silver", "red", "aqua", "violet"]

document.addEventListener('keydown', keyDownEventHandler);

function keyDownEventHandler(e) {
    if (e.key == "ArrowRight" && gameState == 0)
    {
        console.log("ArrowRight")
        if(arcPosX + tileWidth < canvas.width)
        {
            arcPosX+=tileWidth;
        }
    }
    else if (e.key == "ArrowLeft" && gameState == 0)
    {
        console.log("ArrowLeft")
        if(arcPosX > 0)
        {
            arcPosX-=tileWidth;
        }
    }
    else if (e.key == "ArrowUp" && gameState == 0)
    {
        console.log("ArrowUp")

        if(arcPosY + tileHeight > 50)
        {
            arcPosY-=tileHeight;
        }
    }
    else if (e.key == "ArrowDown" && gameState == 0)
    {
        console.log("ArrowDown")
        if(arcPosY + tileHeight < canvas.height - 100)
        {
            arcPosY+=tileHeight;
        }
    }

    arcPosX.left = tilePosX;
    arcPosX.right = tilePosX;
    arcPosY.top = tilePosY;
    arcPosY.bottom = tilePosY
    monsterA()
    games()
}

function drawArc() {

    context.beginPath();

    context.arc(arcPosX + 25, arcPosY + 25, arcRadius, 0, 2*Math.PI);
    context.fillStyle = "skyblue";
    context.fill();

    context.closePath();

}

class Tile {
    constructor(left, top, right, bottom, Tcolor, monster) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.Tcolor = Tcolor;
        this.monster= monster;
    }
}

class TileArc {
    constructor(left, top, right, bottom, Tcolor) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.Tcolor = Tcolor;
    }
}

class MoneyHp {
    constructor(hp, gold, plushp) {
        this.hp = hp;
        this.gold =gold;
        this.plushp
    }
}

function lose() {
    if(moneyStamina.hp == 0)
    {
        flag = false;
        (setTimeout(() => {
            alert("game over")
            window.location.reload();
        }, 10))
    }

}

// class Monster {
//     constructor(left, top, right, bottom, monster) {
//         this.left = left;
//         this.top = top;
//         this.right = right;
//         this.bottom = bottom;
//         this.monster = monster;
//     }
// }

let moneyStamina;

function moneyHp() {
    moneyStamina = new MoneyHp (
        50,0,50
    )
}
moneyHp()

function hp() {
    context.font = '15px godig';
    context.fillText(`Stamina : `, 0, 550);
    context.fillText(`${moneyStamina.hp}`, 70, 550);
}
function gold() {
    context.font = '15px godig';
    context.fillText(`GOLD : `, 0, 570);
    context.fillText(`${moneyStamina.gold}`, 55, 570);
}

let exit;

function games() {
    let userRCP;
    let monsterRCP = Math.round(Math.random() * 2)
    if(gameState == 1)
    {
        rockImg.onclick = () => {
            userRCP = 1;
            gameRound(userRCP, monsterRCP)
            console.log("주먹")
        }
        scissorsImg.onclick = () => {
            userRCP = 0;
            gameRound(userRCP, monsterRCP)
            console.log("가위")
        }
        paperImg.onclick = () => {
            userRCP = 2;
            gameRound(userRCP, monsterRCP)
            console.log("보")
        }
    }
}
let plusGold;
// 가위 = 0 / 바위 = 1 / 보 = 2
// ((a - b) + 2) % 3 -> 0 이김 1 패배 2 비김
function gameRound(use, mons) {
    console.log(use,mons)
    plusGold = Math.round(Math.random() * 100)
    let result = ((use - mons) + 2) % 3;
    if(result == 0)
    {
        moneyStamina.gold += plusGold;
        gameState = 0;
        tiles[arcPosX / 50][arcPosY / 50].monster = false;
        alert("승")
    }
    if(result == 1)
    {
        moneyStamina.hp -= 10;
        gameState = 0;
        tiles[arcPosX / 50][arcPosY / 50].monster = false;
        alert("패")
    }
    if(result == 2)
    {
        gameState = 0;
        tiles[arcPosX / 50][arcPosY / 50].monster = false;
        alert("무")
    }
}

function draw(){
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height);

    // monster();
    

    drawTiles();
    hp()
    gold()
    drawArc();

    exits()
    market()
    // games()
    // clear()
    // marketPlace()

    lose()
}

function setTiles()
{
    tiles = [];
    for(let i = 0; i < tileColumn; i++)
    {
        tiles[i] = [];
        for(let j = 0; j < tileRow; j++)
        {
            if(i == 0 && j == 0)
            {
                tiles[i][j] = new Tile(
                    j * (tileWidth),
                    i * (tileHeight),
                    j * (tileWidth),
                    i * (tileHeight),
                    Math.round(Math.random() * 4),
                    false
                )
            } else {
                    tiles[i][j] = new Tile(
                    j * (tileWidth),
                    i * (tileHeight),
                    j * (tileWidth),
                    i * (tileHeight),
                    Math.round(Math.random() * 4),
                    Math.round(Math.random())
                )
            }
            
        }
    }
}

function monsterA() {
    if(tiles[arcPosX/50][arcPosY/50].monster) {
            alert("몬스터")
            gameState = 1;
            games()
    } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

let randomExit1 = Math.round(Math.random() * (tileRow -1))
let randomExit2 = Math.round(Math.random() * (tileColumn - 1))
let randomMarket1 = Math.round(Math.random() * (tileRow - 1))
let randomMarket2 = Math.round(Math.random() * (tileColumn - 1))
if(randomExit1 == 0) randomExit1 += 1;
// // if(randomExit1 == 11) randomExit1 -= 1;
if(randomExit2 == 0) randomExit2 += 1;
// // if(randomExit2 == 11) randomExit2 -= 1;
if(randomMarket1 == 0) randomMarket1 += 1;
// // if(randomMarket1 == 11) randomMarket1 -= 1;
if(randomMarket2 == 0) randomMarket2 += 1;
// if(randomMarket2 == 11) randomMarket2 -= 1;
let exitarc;

if(randomMarket1 == randomExit1 && randomMarket2 ==randomExit2)
{
    randomMarket1 = Math.round(Math.random() * (tileRow - 1))
    randomMarket2 = Math.round(Math.random() * (tileColumn - 1))
}

function exits()
{
    
    exit = new TileArc(tiles[randomExit1][randomExit2].left, tiles[randomExit1][randomExit2].top, tiles[randomExit1][randomExit2].right, tiles[randomExit1][randomExit2].bottom, "black")
    
    context.beginPath();
    context.arc(exit.left + arcRadius + 5, exit.top + arcRadius + 5, arcRadius, 0, 2*Math.PI);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    clear()
}

let marketHp

function market()
{    
    marketHp = new TileArc(tiles[randomMarket1][randomMarket2].left, tiles[randomMarket1][randomMarket2].top, tiles[randomMarket1][randomMarket2].right, tiles[randomMarket1][randomMarket2].bottom, "white")

    context.beginPath();
    context.arc(marketHp.left + arcRadius + 5, marketHp.top + arcRadius + 5, arcRadius, 0, 2*Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.closePath();

    marketPlace()
}

function marketPlace()
{
    if(arcPosX == marketHp.left && arcPosY == marketHp.top)
    {
        if(moneyStamina.gold >= 50){
            moneyStamina.gold -= 50;
            moneyStamina.hp += 50;
            console.log("상점구매")
        }
        console.log("상점진입")
    }
}

function clear()
{
    if(arcPosX == exit.left && arcPosY == exit.top)
    {
        flag = false;
        (setTimeout(() => {
            //게임 클리어
            alert("게임 클리어")
            window.location.reload();
        }, 10))
    }
}

function drawTiles()
{
    for(let i = 0; i < tileColumn; i++)
    {

        for(let j = 0; j < tileRow; j++)
        {
            context.beginPath();
            context.rect(tiles[i][j].left, tiles[i][j].top, tileWidth, tileHeight);
            context.fillStyle = TileColor[tiles[i][j].Tcolor];
            context.fill();
            context.closePath();            
        }
    }
}

setTiles();

// drawTiles()


flag = true;
setInterval(() => {
    if (flag)
    draw()}
    , 10);



