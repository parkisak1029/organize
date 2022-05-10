/* 
    클래스(class)

    함수 생성자.
    prototype 공부.
*/

//let brick = {
//  left:0, right:0, top:0, bottom:0,
//  column:0, row:0
//}

// 벽돌 left, top, right, bottom, column, row, pos + 움직이는 기능


// function Brick(left, top, right, bottom) {
//     this.left = left,
//     this.top = top,
//     this.right = right,
//     this.bottom = bottom
// }

// Brick.prototype.movingAction = function () {this.left++; console.log('내가 움직이고 있다능?') } 

// for(let i = 0; i < 20; i++)
// {

//     let tempBrick = new Brick(0, 0, 10, 10);
//     tempBrick.movingAction();
    
// }

//클래스로 객체의 설계도를 만든다.
//명사로 지칭되는 객체를 설계한다. 자동차(속성과 기능), 책(속성과 기능), 몬스터(속성과 기능), 사람...
class Brick {
    constructor(left, top, right, bottom, color) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.isAlive = true;
        this.color = color;
    }

    draw() {
        if(this.isAlive)
        {   
            context.rect(this.left, this.top, brickWidth, brickHeight);
            context.fillStyle = this.color;
            context.fill();
        }
    }
}

class MovingBrick{
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    movingAction() {
        this.left++;
    }
}

// class MovingBrick extends Brick {
//     movingAction() {
//         this.left++;
//     }
// }


const canvas = document.getElementById('myCanvas');
canvas.style.backgroundColor = "navy";
const context = canvas.getContext('2d');

//게임 진행
let deadBricksCount = 0;

//무조건 막히는 벽
const barW = 55;
const barH = 40;


//벽돌
const brickWidth = 50;  // 간격 10
const brickHeight = 25; // 간격 5
const brickColumn = 1;  //열
const brickRow = 1;     //행
let bricks;             //전체 배열

// 볼
let arcPosX = canvas.width / 2 + 40;
let arcPosY = canvas.height / 2;
let rectPosX = canvas.width / 2 - 50;
let rectPosY = canvas.height - 20;

const arcRadius = 20;
let moveDir = true;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpeed = 3;

let barMoveDirX = -1;
let outSider = 10;

let ball = {
    left:0, right:0, top:0, bottom:0,
}

// let brick = {
//     left:0, right:0, top:0, bottom:0,
//     column:0, row:0,
// }

const barWidth = 100;
const barHeight = 20;
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;
let barStopX = canvas.width / 2 - barWidth / 2;
let barStopY= canvas.height / 2 + 50;
let barMoveSpeed = 100;
let bars = {
    left:barStopX, right:barStopX + 100, top:barStopY, bottom:barStopY +30,
}
let paddle = {
    left:0, right:0, top:0, bottom:0,
}

// 키 처리 함수 추가
document.addEventListener('keydown', keyDownEventHandler);
document.addEventListener('keyup', keyUpEventHandler);

// 함수 모음
function keyDownEventHandler(e) {
    if (e.key == "ArrowRight")
    {
        // 바를 오른쪽으로 이동
        if(barPosX + barWidth < canvas.width)
        {
            barPosX+=barMoveSpeed;
        }
    }
    else if (e.key == "ArrowLeft")
    {
        // 바를 왼쪽으로 이동
        if(barPosX > 0)
        {
            barPosX-=barMoveSpeed;
        }
    }

    paddle.left = barPosX;
    paddle.right = barPosX + barWidth;
    paddle.top = barPosY;
    paddle.bottom = barPosY + barWidth;
}

function keyUpEventHandler(e) {
}

async function update() {
    // 게임 클리어, 오버 확인
    await checkToWin("게임 클리어", 3000)
    
    // 데이터 수정 (도형의 위치 이동)
    if (arcPosX - arcRadius < 0) 
    {
        arcMoveDirX = 1;
    }
    else if (arcPosX + arcRadius > canvas.width)
    {
        arcMoveDirX = -1;
    } 
    if (arcPosY - arcRadius < 0 )
    {
        arcMoveDirY = 1;
    }
    else if (arcPosY + arcRadius > canvas.width)
    {
        arcMoveDirY = -1;
    } 

    if(barStopX < 0 || barStopX > 350)
    {
        barMoveDirX *= -1 
    }

    barStopX += barMoveDirX * outSider; 
    arcPosX += arcMoveDirX * arcMoveSpeed;
    arcPosY += arcMoveDirY * arcMoveSpeed;

    ball.left = arcPosX - (arcRadius);
    ball.right = arcPosX + (arcRadius);
    ball.top = arcPosY - (arcRadius);
    ball.bottom = arcPosY + (arcRadius);


    // 충돌확인
    if(isCollisionRectToRect(ball, paddle))
    {
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
    }

    if(isCollisionRectToRect(ball, bars))
    {
        arcMoveDirY *= -1;
    }
    
    for(let i = 0; i < brickRow; i++){
        for(let j = 0; j < brickColumn; j++) {
            if(bricks[i][j].isAlive && isCollisionRectToRect(ball, bricks[i][j])) {
                //벽돌 안보이게, 위치를 바뀌던지 볼 방향변경
                // console.log("i: ", i , "j:", j);  
                bricks[i][j].isAlive = false;
                arcMoveDirY = -arcMoveDirY;
                deadBricksCount++;
                
                break;
            }
        }
    }
}

async function checkToWin(clear, timeout)
{
    //1. bricks배열에 있는 정보로 처리
    // let bricks = [];
    // bricks[0] = [];
    // bricks[1] = [];
    // bricks[2] = [];

    // let flatBricks = bricks.flat();
    // console.log(flatBricks);

    let deadBricks = bricks.flat().filter(brick => brick.isAlive == false);
    if(deadBricks.length == brickRow * brickColumn)
    {
        setTimeout(() => {
            //게임 클리어
            alert(clear)
        }, timeout)
    }
    //2. 카운트를 세는 변수를 만들어 처리
    // if (deadBricksCount == brickRow * brickColumn)
    // {
    //     //게임 클리어
    // }
}

function isCollisionRectToRect(rectA, rectB)
{
    // a의 왼쪽과 b의 오른쪽
    // a의 오른쪽과 b의 왼쪽
    // a의 아래쪽과 b의 위쪽
    // a의 위쪽과 b의 아래쪽

    if(rectA.left > rectB.right ||
        rectA.right < rectB.left ||
        rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top)
    {
        return false;
    }

    return true;
}

function isCollisionBallToBar(rectA, rectB)
{
    // a의 왼쪽과 b의 오른쪽
    // a의 오른쪽과 b의 왼쪽
    // a의 아래쪽과 b의 위쪽
    // a의 위쪽과 b의 아래쪽

    if(rectA.left > rectB.right ||
        rectA.right < rectB.left ||
        rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top)
    {
        return false;
    }

    return true;
}

function draw(){
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 다른 도형 그리기
    drawBricks();
    drawRect();
    drawArc();
    drawBar();
    
}

function drawArc() {

    context.beginPath();

    // 중점 기준으로 그림
    context.arc(arcPosX, arcPosY, arcRadius, 0, 2*Math.PI);
    context.fillStyle = "aqua";
    context.fill();

    context.closePath();
}

function drawBar() {
    context.beginPath();

    context.rect(barStopX, barStopY, 100, 30);
    context.fillStyle = "white"
    context.fill();
    context.closePath(); 
}

function drawRect() {

    context.beginPath();

    // context.arc()
    // 좌상단 기준으로 그림
    context.rect(barPosX, barPosY, 100, 100); //그리기
    context.fillStyle = "red";
    context.fill();

    context.closePath();
}


function setBricks()
{
    bricks = [];
    for(let i = 0; i < brickRow; i++)
    {
        bricks[i] = [];
        for(let j = 0; j < brickColumn; j++)
        {
            //TODO : right : left + 50
            // bricks[i][j] = {
            //     left: 55 + j * (brickWidth + 10),
            //     right: 55 + j * (brickWidth + 10) + 45,
            //     top:30 + i * (brickHeight + 5),
            //     bottom:30 + i * (brickHeight + 5) + 25,
            //     column:i, row:j, 
            //     isAlive:true,
            // };
            bricks[i][j] = new Brick(
                55 + j * (brickWidth + 10),
                30 + i * (brickHeight + 5),
                55 + j * (brickWidth + 10) + 45,
                30 + i * (brickHeight + 5) + 25,
                "blue"
                )

        }
    }    
}

function drawBricks()
{
    
    for(let i = 0; i < brickRow; i++)
    {
        
        for(let j = 0; j < brickColumn; j++)
        {
            console.log(bricks[i][j].color)
            context.beginPath();
            bricks[i][j].draw();
            context.closePath();
        }
        
    }
    
    
}

// class Block{
//     constructor(blockOne){
//         this.blockOne = blockOne;
//     }
//     blocks() {
//         return this.blockOne;
//     }
// }

// let bricksa



// function blackBricks()
// {

//     context.beginPath();

//     // 중점 기준으로 그림
//     context.arc(arcPosX, arcPosY, arcRadius, 0, 0);
//     context.fillStyle = "black";
//     context.fill();

//     context.closePath(); 
// }

// let blocke = new Block( function(){
//         return blackBricks
//     }
// )
// console.log(blocke.blocks())


setBricks();
setInterval(draw, 10);

setInterval(update, 10);