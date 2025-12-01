const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;

let snake = [];
let direction = null;
let food;
let score = 0;
let record = localStorage.getItem("snakeRecord") || 0;
let speed = 120;
let gameInterval = null;
let moving = false;

// Mostrar récord
const recordSpan = document.getElementById("record");
recordSpan.textContent = record;

// Botones UI
const startBtn = document.getElementById("startBtn");
const speedBtn = document.getElementById("speedBtn");

startBtn.addEventListener("click", startGame);
speedBtn.addEventListener("click", changeSpeed);

window.addEventListener("keydown", handleInput);

function changeSpeed() {
    if (speed === 120) {
        speed = 90;
        speedBtn.textContent = "Velocidad: Rápido";
    } else if (speed === 90) {
        speed = 60;
        speedBtn.textContent = "Velocidad: Muy rápido";
    } else {
        speed = 120;
        speedBtn.textContent = "Velocidad: Normal";
    }

    if (moving) {
        clearInterval(gameInterval);
        gameInterval = setInterval(update, speed);
    }
}

function startGame() {
    snake = [{ x: 10 * box, y: 10 * box }];
    direction = null;
    score = 0;
    document.getElementById("score").textContent = score;
    food = randomFood();

    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(update, speed);
    moving = true;
}

function randomFood() {
    return {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
}

function handleInput(e) {
    if (!moving) return;
    if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    else if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    else if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    else if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function update() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar comida
    ctx.fillStyle = "#ff4444";
    ctx.fillRect(food.x, food.y, box, box);

    // Dibujar serpiente
    ctx.fillStyle = "#4ade80";
    snake.forEach((s) => ctx.fillRect(s.x, s.y, box, box));

    if (!direction) return; // No moverse hasta que el usuario presione una tecla

    let head = { ...snake[0] };
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;
    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;

    // Colisión con paredes
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return gameOver();
    }

    // Colisión consigo misma
    for (let s of snake) {
        if (head.x === s.x && head.y === s.y) return gameOver();
    }

    // Comer comida
    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById("score").textContent = score;
        if (score > record) {
            record = score;
            localStorage.setItem("snakeRecord", record);
            recordSpan.textContent = record;
        }
        food = randomFood();
    } else {
        snake.pop();
    }

    snake.unshift(head);
}

function gameOver() {
    clearInterval(gameInterval);
    moving = false;
    ctx.fillStyle = "white";
    ctx.font = "40px Arial";
    ctx.fillText("GAME OVER", canvas.width / 2 - 120, canvas.height / 2);
}