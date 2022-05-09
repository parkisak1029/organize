/*
    캔버스 설정
    document
    context
*/
const canvas = document.getElementById('myCanvas');
canvas.style.backgroundColor = "navy";
const context = canvas.getContext('2d');

let arcPosX = canvas.width / 2 + 40;
let arcPosY = canvas.height / 2;
let rectPosX = canvas.width / 2 - 50;
let rectPosY = canvas.height - 20;

const arcRadius = 20;
let moveDir = true;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpeed = 15;

let ball = {
    left:0, right:0, top:0, bottom:0,
}

const barWidth = 100;
const barHeight = 20;
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;
let barMoveSpeed = 15;

let paddle = {
    left:0, right:0, top:0, bottom:0,
}

document.addEventListener('keydown', keyDownEventHandler);
document.addEventListener('keyup', keyUpEventHandler);

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
    drawRect();
    drawArc();
}

function drawArc() {

    context.beginPath();

    // 중점 기준으로 그림
    context.arc(arcPosX, arcPosY, arcRadius, 0, 2*Math.PI);
    context.fillStyle = "green";
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

setInterval(draw, 10);
setInterval(update, 10);