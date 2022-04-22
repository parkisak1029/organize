/*
    배열 Array
*/

// let testArray = [1, '2', Boolean, [10, 20, 30], 5];
/* let testArray = [1, 2, 3, 4, 5];
let testArray2 = new Array(5);

testArray[0] = 100;

for(let i = 0; i < testArray.length; i++)
{
    testArray[i]
}

testArray.forEach(function (number, index, arr) 
    {
        console.log("1. number : ", number,"index : ", index, "arr : ", arr);    
    }
) */

// testArray.push(30);
// testArray.forEach(function (number, index, arr) 
//     {
//         console.log("2. number : ", number,"index : ", index, "arr : ", arr);    
//     }
// )

// testArray.pop()
// testArray.forEach(function (number, index, arr) 
//     {
//         console.log("3. number : ", number,"index : ", index, "arr : ", arr);    
//     }
// )

// testArray.unshift(300)
// testArray.forEach(function (number, index, arr) 
//     {
//         console.log("4. number : ", number,"index : ", index, "arr : ", arr);    
//     }
// )

// testArray.shift()
// testArray.forEach(function (number, index, arr) 
//     {
//         console.log("5. number : ", number,"index : ", index, "arr : ", arr);    
//     }
// )

// let arrayMultiple = testArray.map(x => x * 2); //배열의 요소들을 x에 담아서 하ㅏ하나 다 곱해준다.
// arrayMultiple.forEach(function(number, index, arr){
//     console.log("6. number:" , number, "index",  index, "arr:", arr);
// })


const canvas = document.getElementById('myCanvas');
canvas.style.backgroundColor = "navy";
const context = canvas.getContext('2d');

//벽돌
const brickWidth = 50; // 간격 10
const brickHeight = 25; // 간격 5
const brickColumn = 5; //열
const brickRow = 4; //행
let bricks = [];

// 볼
let arcPosX = canvas.width / 2 + 40;
let arcPosY = canvas.height / 2;
let rectPosX = canvas.width / 2 - 50;
let rectPosY = canvas.height - 20;

const arcRadius = 20;
let moveDir = true;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpeed = 60;

let ball = {
    left:0, right:0, top:0, bottom:0,
}

let brick = {
    left:0, right:0, top:0, bottom:0,
    column:0, row:0,
}

const barWidth = 100;
const barHeight = 20;
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;
let barMoveSpeed = 15;

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

function update() {
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
    for(let i = 0; i < brickRow; i++){
        for(let j = 0; j < brickColumn; j++) {
            if(bricks[i][j].isAlive && isCollisionRectToRect(ball, bricks[i][j])) {
                //벽돌 안보이게, 위치를 바뀌던지 볼 방향변경
                console.log("i: ", i , "j:", j);            
                bricks[i][j].isAlive = false;

                arcMoveDirY = -arcMoveDirY;
                break;
            }
        }
    }
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

function draw(){
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 다른 도형 그리기
    drawBricks();
    drawRect();
    drawArc();
}

function drawArc() {

    context.beginPath();

    // 중점 기준으로 그림
    context.arc(arcPosX, arcPosY, arcRadius, 0, 2*Math.PI);
    context.fillStyle = "aqua";
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
    for(let i = 0; i < brickRow; i++)
    {
        bricks[i] = [];
        for(let j = 0; j < brickColumn; j++)
        {
            //TODO : right : left + 50
            bricks[i][j] = {
                left: 55 + j * (brickWidth + 10), 
                right: 55 + j * (brickWidth + 10) + 45, 
                top:30 + i * (brickHeight + 5), 
                bottom:30 + i * (brickHeight + 5) + 25,
                column:i, row:j, isAlive:true,
            }
        }
    }    
}

function drawBricks()
{
    context.beginPath();
    for(let i = 0; i < brickRow; i++)
    {
        for(let j = 0; j < brickColumn; j++)
        {
            if(bricks[i][j].isAlive)
            {
                context.rect(bricks[i][j].left, bricks[i][j].top, brickWidth, brickHeight);
                context.fillstyle = 'white';
                context.fill();
            }
        }
    }
    context.closePath();
}

setBricks();
setInterval(draw, 10);
setInterval(update, 10);