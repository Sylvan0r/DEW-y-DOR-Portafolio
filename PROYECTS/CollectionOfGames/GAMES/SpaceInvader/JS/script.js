const gameContainer = document.getElementById('gameContainer');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const backBtn = document.getElementById("back-btn");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let playerPos = 129; // centrado para ancho 280px
let bullets = [];
let enemies = [];
let score = 0;
let level = 1;
let enemyDirection = 1;
let gameOver = false;
let gameStarted = false;

// Botón volver al iframe principal
backBtn.addEventListener("click", () => {
    if(window.parent && window.parent.showGameSelection){
        window.parent.showGameSelection();
    }
});

// Crear jugador
const player = document.createElement('div');
player.id = 'player';
player.style.left = playerPos + 'px';
gameContainer.appendChild(player);

// Crear enemigos
function createEnemies() {
    // Limpiar enemigos existentes
    enemies.forEach(e => { if(gameContainer.contains(e)) gameContainer.removeChild(e); });
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

// Reiniciar juego
function resetGame() {
    // Limpiar balas
    bullets.forEach(b => { if(gameContainer.contains(b)) gameContainer.removeChild(b); });
    bullets = [];

    // Limpiar mensaje
    const msg = document.querySelector('#gameContainer div.msg');
    if(msg) gameContainer.removeChild(msg);

    playerPos = 129;
    player.style.left = playerPos + 'px';
    score = 0;
    level = 1;
    enemyDirection = 1;
    gameOver = false;
    scoreElement.textContent = score;
    levelElement.textContent = level;
    createEnemies();
}

// Botón iniciar
startBtn.addEventListener("click", () => {
    if(!gameStarted){
        gameStarted = true;
        resetGame();
        gameLoop();
    }
});

// Botón reiniciar
restartBtn.addEventListener("click", () => {
    resetGame();
    if(!gameStarted){
        gameStarted = true;
        gameLoop();
    }
});

// Movimiento jugador y disparo
document.addEventListener('keydown', e => {
    if(!gameStarted || gameOver) return;
    if(e.key === 'ArrowLeft') {
        playerPos -= 10;
        if(playerPos < 0) playerPos = 0;
    }
    if(e.key === 'ArrowRight') {
        playerPos += 10;
        if(playerPos > 258) playerPos = 258; // ancho juego - jugador
    }
    player.style.left = playerPos + 'px';
    if(e.key === ' ') shootBullet();
});

// Disparar bala
function shootBullet() {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = playerPos + 9 + 'px';
    bullet.style.top = '304px';
    gameContainer.appendChild(bullet);
    bullets.push(bullet);
}

// Loop principal
function gameLoop() {
    if(!gameStarted || gameOver) return;

    // Mover enemigos
    let shiftDown = false;
    enemies.forEach(enemy => {
        let left = parseInt(enemy.style.left);
        left += enemyDirection * (1 + level * 0.3);
        enemy.style.left = left + 'px';
        if(left >= 258 || left <= 0) shiftDown = true;
    });

    if(shiftDown) {
        enemyDirection *= -1;
        enemies.forEach(enemy => {
            let top = parseInt(enemy.style.top) + 20;
            enemy.style.top = top + 'px';
            if(top + 16 >= 304) endGame(false);
        });
    }

    // Mover balas y detectar colisiones
    bullets.forEach((bullet, i) => {
        let top = parseInt(bullet.style.top);
        top -= 5;
        bullet.style.top = top + 'px';

        enemies.forEach((enemy, j) => {
            let ex = parseInt(enemy.style.left);
            let ey = parseInt(enemy.style.top);
            if(top <= ey + 16 && top >= ey &&
               parseInt(bullet.style.left) >= ex &&
               parseInt(bullet.style.left) <= ex + 22) {
                gameContainer.removeChild(enemy);
                enemies.splice(j,1);
                gameContainer.removeChild(bullet);
                bullets.splice(i,1);
                score += 10;
                scoreElement.textContent = score;
            }
        });

        if(top < 0) {
            if(gameContainer.contains(bullet)) gameContainer.removeChild(bullet);
            bullets.splice(i,1);
        }
    });

    // Nivel siguiente
    if(enemies.length === 0) {
        level++;
        levelElement.textContent = level;
        createEnemies();
    }

    requestAnimationFrame(gameLoop);
}

// Terminar juego
function endGame(win) {
    gameOver = true;
    const msg = document.createElement('div');
    msg.classList.add('msg');
    msg.style.position = 'absolute';
    msg.style.top = '50%';
    msg.style.left = '50%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.color = 'yellow';
    msg.style.fontSize = '14px';
    msg.style.textAlign = 'center';
    msg.textContent = win ? '¡Victoria!' : '¡Derrota!';
    gameContainer.appendChild(msg);
}
