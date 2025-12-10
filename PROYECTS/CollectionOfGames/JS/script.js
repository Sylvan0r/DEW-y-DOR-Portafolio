const visor = document.getElementById("visor");

// Lista de juegos con icono y URL
const games = [
    { name: "Snake", url: "GAMES/Snake/index.html", icon: "🐍" },
    { name: "Memory Game", url: "GAMES/MemoryGame/index.html", icon: "🧠" },
    { name: "Space Invader", url: "GAMES/SpaceInvader/index.html", icon: "👾" }
];

// Función para mostrar pantalla de selección dentro del iframe
function showGameSelection() {
    let html = `
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Selecciona un juego</title>
            <style>
                body { 
                    background:#001100; 
                    color:#0f0; 
                    font-family:Courier New, monospace; 
                    display:flex; 
                    flex-direction:column; 
                    align-items:center; 
                    justify-content:center; 
                    height:100vh; 
                    margin:0; 
                }
                h1 { margin-bottom:20px; }
                .game-grid { display:flex; gap:20px; flex-wrap:wrap; justify-content:center; }
                .game-icon { 
                    width:80px; height:80px; 
                    border:2px solid #0f0; 
                    display:flex; justify-content:center; align-items:center; 
                    cursor:pointer; font-size:32px; 
                    border-radius:10px; 
                    transition:0.2s;
                    text-shadow: 0 0 5px #0f0;
                }
                .game-icon:hover { 
                    background:#003300; 
                    transform:scale(1.15); 
                    box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
                }
                .back-btn {
                    margin-top:20px;
                    padding:6px 12px;
                    border:1px solid #0f0;
                    background:#002800;
                    color:#0f0;
                    cursor:pointer;
                    border-radius:5px;
                    transition:0.2s;
                }
                .back-btn:hover {
                    background:#004400;
                    transform:scale(1.05);
                }
            </style>
        </head>
        <body>
            <h1>Selecciona un juego</h1>
            <div class="game-grid">
                ${games.map(g=>`<div class="game-icon" data-url="${g.url}" title="${g.name}">${g.icon}</div>`).join("")}
            </div>
            <script>
                const icons = document.querySelectorAll('.game-icon');
                const backBtn = document.querySelector('.back-btn');

                icons.forEach(icon => {
                    icon.addEventListener('click', () => {
                        window.location.href = icon.dataset.url;
                    });
                });

                backBtn.addEventListener('click', () => { location.reload(); });
            </script>
        </body>
        </html>
    `;
    visor.srcdoc = html;
}

// Inicialmente mostrar pantalla de selección
showGameSelection();

// Función para cargar un juego en el iframe
function loadGame(url) {
    visor.src = url;
}
