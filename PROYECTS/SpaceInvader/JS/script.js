const gameContainer = document.getElementById('gameContainer');
const player = document.getElementById('player');
const scoreElement = document.getElementById('score');
const message = document.getElementById('message');

let playerPos = 180;
let bullets = [];
let enemies = [];
let score = 0;
let enemyDirection = 1; // 1 = derecha, -1 = izquierda
let gameOver = false;

// Crear enemigos
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.style.left = `${i * 60 + 30}px`;
        enemy.style.top = `${j * 40 + 30}px`;
        gameContainer.appendChild(enemy);
        enemies.push(enemy);
    }
}

// Movimiento del jugador
document.addEventListener('keydown', (e) => {
    if (gameOver) return;
    if (e.key === 'ArrowLeft') playerPos -= 20;
    if (e.key === 'ArrowRight') playerPos += 20;
    if (playerPos < 0) playerPos = 0;
    if (playerPos > 360) playerPos = 360;
    player.style.left = playerPos + 'px';
    if (e.key === ' ') shootBullet();
});

// Disparar bala
function shootBullet() {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = playerPos + 18 + 'px';
    bullet.style.top = '580px';
    gameContainer.appendChild(bullet);
    bullets.push(bullet);
}

// Game loop
function gameLoop() {
    if (gameOver) return;

    // Mover enemigos
    let shiftDown = false;
    enemies.forEach(enemy => {
        let currentLeft = parseInt(enemy.style.left);
        currentLeft += enemyDirection * 2;
        enemy.style.left = currentLeft + 'px';
        if (currentLeft >= 370 || currentLeft <= 0) shiftDown = true;
    });

    if (shiftDown) {
        enemyDirection *= -1;
        enemies.forEach(enemy => {
            enemy.style.top = parseInt(enemy.style.top) + 20 + 'px';
            // Verificar derrota
            if (parseInt(enemy.style.top) + 20 >= 580) endGame(false);
        });
    }

    // Mover balas
    bullets.forEach((bullet, index) => {
        let top = parseInt(bullet.style.top);
        top -= 5;
        bullet.style.top = top + 'px';

        // Colisión con enemigos
        enemies.forEach((enemy, eIndex) => {
            if (
                top < parseInt(enemy.style.top) + 20 &&
                top > parseInt(enemy.style.top) &&
                parseInt(bullet.style.left) > parseInt(enemy.style.left) - 5 &&
                parseInt(bullet.style.left) < parseInt(enemy.style.left) + 30
            ) {
                gameContainer.removeChild(enemy);
                enemies.splice(eIndex, 1);
                gameContainer.removeChild(bullet);
                bullets.splice(index, 1);
                score += 10;
                scoreElement.textContent = score;
            }
        });

        // Eliminar balas fuera de pantalla
        if (top < 0) {
            gameContainer.removeChild(bullet);
            bullets.splice(index, 1);
        }
    });

    // Verificar victoria
    if (enemies.length === 0) endGame(true);

    requestAnimationFrame(gameLoop);
}

// Terminar juego
function endGame(win) {
    gameOver = true;
    message.textContent = win ? '¡Victoria!' : '¡Derrota!';
    message.classList.remove('hidden');
}

gameLoop();