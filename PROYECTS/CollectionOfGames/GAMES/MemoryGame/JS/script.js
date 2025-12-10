let score = 0;
let firstPick = null;
let secondPick = null;
const totalPairs = 6; // 6 parejas
let lockBoard = false;

// Botón volver
const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", () => {
    window.location.href = "about:blank";
    parent.showGameSelection(); // función en la página principal
});

window.addEventListener("load", () => {
    resetGame();
});

function updateScore() {
    document.getElementById("score").innerHTML = `Puntuación: ${score}`;
}

function resetGame() {
    score = 0;
    firstPick = null;
    secondPick = null;
    lockBoard = false;
    hideWinScreen();
    updateScore();
    initializeBoard();
}

function initializeBoard() {
    const images = [
        "https://i.pinimg.com/originals/51/56/25/5156259e1f30dece1376dc5695a9a1d4.png",
        "https://static.vecteezy.com/system/resources/previews/001/198/363/non_2x/diamond-poker-card-png.png",
        "https://i.pinimg.com/originals/45/a0/89/45a089218c85a2587f5a056b9c226ea1.png",
        "https://www.kindpng.com/picc/m/8-86459_cartas-de-poker-as-de-pica-png-download.png",
        "https://i.pinimg.com/originals/35/fd/31/35fd31636faeafb4fe35ed3ced374f9e.png",
        "https://i.pinimg.com/736x/1b/f3/45/1bf345371069447ff760bfcfd7cf91ba.jpg"
    ];

    let pool = [...images, ...images]; // duplicar para parejas
    pool.sort(() => Math.random() - 0.5);

    const board = document.getElementById("game-board");
    board.innerHTML = "";

    pool.forEach(image => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;
        card.addEventListener("click", revealCard);
        board.appendChild(card);
    });
}

function revealCard(event) {
    const card = event.currentTarget;

    if (lockBoard) return;
    if (card.classList.contains("matched")) return;
    if (card === firstPick) return;
    if (card.classList.contains("flipped")) return;

    card.style.backgroundImage = `url(${card.dataset.image})`;
    card.classList.add("flipped");

    if (!firstPick) {
        firstPick = card;
        return;
    }

    secondPick = card;

    if (firstPick.dataset.image === secondPick.dataset.image) {
        firstPick.classList.add("matched");
        secondPick.classList.add("matched");

        firstPick = null;
        secondPick = null;

        score++;
        updateScore();

        if (score === totalPairs) {
            showWinScreen();
        }

    } else {
        lockBoard = true;
        setTimeout(() => {
            if (firstPick) {
                firstPick.style.backgroundImage = "";
                firstPick.classList.remove("flipped");
            }
            if (secondPick) {
                secondPick.style.backgroundImage = "";
                secondPick.classList.remove("flipped");
            }

            firstPick = null;
            secondPick = null;
            lockBoard = false;
        }, 700);
    }
}

function showWinScreen() {
    const win = document.getElementById("win-screen");
    if (win) win.classList.remove("win-hidden");
}

function hideWinScreen() {
    const win = document.getElementById("win-screen");
    if (win) win.classList.add("win-hidden");
}

const restartBtn = document.getElementById("restart-btn");
if (restartBtn) restartBtn.addEventListener("click", resetGame);
