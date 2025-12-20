const gameContainer = document.getElementById('gameContainer');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const backBtn = document.getElementById("back-btn");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let playerPos = 129;
let bullets = [];
let enemies = [];
let score = 0;
let level = 1;
let enemyDirection = 1;
let gameOver = false;
let gameStarted = false;

let lastTime = 0;

// Velocidad enemigos (controlada)
const BASE_ENEMY_SPEED = 35;   // px/seg
const SPEED_PER_LEVEL = 8;
const MAX_ENEMY_SPEED = 80;

// Volver
backBtn.addEventListener("click", () => {
    if (window.parent && window.parent.showGameSelection) {
        window.parent.showGameSelection();
    }
});

// Jugador
const player = document.createElement('div');
player.id = 'player';
player.style.left = playerPos + 'px';
gameContainer.appendChild(player);

// Crear enemigos
function createEnemies() {
    enemies.forEach(e => gameContainer.contains(e) && gameContainer.removeChild(e));
    enemies = [];

    const rows = 3;
    const cols = 5;
    const spacingX = 45;
    const spacingY = 40;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const enemy = document.createElement('div');
            enemy.classList.add('enemy');
            enemy.style.left = (c * spacingX + 10) + 'px';
            enemy.style.top = (r * spacingY + 10) + 'px';
            gameContainer.appendChild(enemy);
            enemies.push(enemy);
        }
    }
}

// Reset
function resetGame() {
    bullets.forEach(b => gameContainer.contains(b) && gameContainer.removeChild(b));
    bullets = [];

    const msg = document.querySelector('#gameContainer .msg');
    if (msg) gameContainer.removeChild(msg);

    playerPos = 129;
    player.style.left = playerPos + 'px';
    score = 0;
    level = 1;
    enemyDirection = 1;
    gameOver = false;
    lastTime = 0;

    scoreElement.textContent = score;
    levelElement.textContent = level;
    createEnemies();
}

// Start
startBtn.addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted = true;
        resetGame();
        requestAnimationFrame(gameLoop);
    }
});

restartBtn.addEventListener("click", () => {
    resetGame();
    if (!gameStarted) {
        gameStarted = true;
        requestAnimationFrame(gameLoop);
    }
});

// Controles
document.addEventListener('keydown', e => {
    if (!gameStarted || gameOver) return;

    if (e.key === 'ArrowLeft') playerPos = Math.max(0, playerPos - 10);
    if (e.key === 'ArrowRight') playerPos = Math.min(258, playerPos + 10);

    player.style.left = playerPos + 'px';

    if (e.key === ' ') shootBullet();
});

// Bala
function shootBullet() {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = playerPos + 9 + 'px';
    bullet.style.top = '304px';
    gameContainer.appendChild(bullet);
    bullets.push(bullet);
}

// Loop
function gameLoop(timestamp) {
    if (!gameStarted || gameOver) return;

    if (!lastTime) lastTime = timestamp;
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    let enemySpeed = BASE_ENEMY_SPEED + level * SPEED_PER_LEVEL;
    enemySpeed = Math.min(enemySpeed, MAX_ENEMY_SPEED);

    // Detectar bordes del grupo
    let minX = Infinity;
    let maxX = -Infinity;

    enemies.forEach(enemy => {
        const x = parseFloat(enemy.style.left);
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x + 22);
    });

    const hitLeft = minX <= 0;
    const hitRight = maxX >= 280;

    if (hitLeft || hitRight) {
        enemyDirection *= -1;

        // Corrección exacta para evitar desbordes
        const correction = hitLeft ? -minX : 280 - maxX;

        enemies.forEach(enemy => {
            let left = parseFloat(enemy.style.left) + correction;
            enemy.style.left = left + 'px';

            let top = parseFloat(enemy.style.top) + 20;
            enemy.style.top = top + 'px';

            if (top + 16 >= 304) endGame(false);
        });
    }

    // Movimiento horizontal
    enemies.forEach(enemy => {
        let left = parseFloat(enemy.style.left);
        left += enemyDirection * enemySpeed * deltaTime;
        enemy.style.left = left + 'px';
    });

    // Balas
    bullets.forEach((bullet, i) => {
        let top = parseFloat(bullet.style.top);
        top -= 300 * deltaTime;
        bullet.style.top = top + 'px';

        enemies.forEach((enemy, j) => {
            const ex = parseFloat(enemy.style.left);
            const ey = parseFloat(enemy.style.top);
            const bx = parseFloat(bullet.style.left);

            if (
                top <= ey + 16 &&
                top >= ey &&
                bx >= ex &&
                bx <= ex + 22
            ) {
                gameContainer.removeChild(enemy);
                enemies.splice(j, 1);
                gameContainer.removeChild(bullet);
                bullets.splice(i, 1);
                score += 10;
                scoreElement.textContent = score;
            }
        });

        if (top < 0) {
            gameContainer.contains(bullet) && gameContainer.removeChild(bullet);
            bullets.splice(i, 1);
        }
    });

    // ---- PROGRESIÓN / VICTORIA ----
    if (enemies.length === 0) {

        // Victoria SOLO al terminar el nivel 5
        if (level === 5) {
            endGame(true);
            return;
        }

        level++;
        levelElement.textContent = level;
        createEnemies();
    }

    requestAnimationFrame(gameLoop);
}

// Fin del juego
function endGame(win) {
    gameOver = true;
    const msg = document.createElement('div');
    msg.classList.add('msg');
    msg.textContent = win ? '¡GANASTE!' : '¡DERROTA!';
    msg.style.position = 'absolute';
    msg.style.top = '50%';
    msg.style.left = '50%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.color = 'yellow';
    msg.style.fontSize = '16px';
    msg.style.textAlign = 'center';
    gameContainer.appendChild(msg);
}