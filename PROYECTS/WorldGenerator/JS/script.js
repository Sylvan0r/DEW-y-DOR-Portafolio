document.getElementById("generate").addEventListener("click", function(event){
    event.preventDefault();
    generate();
});

function generate() {
    const mapSize = parseInt(document.getElementById("mapSize").value);
    const maxOccupiedArea = parseFloat(document.getElementById("maxOcupedArea").value);

    const natMinZones = parseInt(document.getElementById("natMinZones").value);
    const natMaxZones = parseInt(document.getElementById("natMaxZones").value);
    const natMaxSize = parseInt(document.getElementById("natMaxSize").value);
    const natTotalMaxSize = parseInt(document.getElementById("natTotalMaxSize").value);

    const urbMinZones = parseInt(document.getElementById("urbMinZones").value);
    const urbMaxZones = parseInt(document.getElementById("urbMaxZones").value);
    const urbMaxSize = parseInt(document.getElementById("urbMaxSize").value);
    const urbTotalMaxSize = parseInt(document.getElementById("urbTotalMaxSize").value);

    const comMinZones = parseInt(document.getElementById("comMinZones").value);
    const comMaxZones = parseInt(document.getElementById("comMaxZones").value);
    const comMaxSize = parseInt(document.getElementById("comMaxSize").value);
    const comTotalMaxSize = parseInt(document.getElementById("comTotalMaxSize").value);

    createWorld(mapSize, maxOccupiedArea, 
        {min: natMinZones, max: natMaxZones, zoneMax: natMaxSize, totalMax: natTotalMaxSize, type: "N"},
        {min: urbMinZones, max: urbMaxZones, zoneMax: urbMaxSize, totalMax: urbTotalMaxSize, type: "U"},
        {min: comMinZones, max: comMaxZones, zoneMax: comMaxSize, totalMax: comTotalMaxSize, type: "C"});
}

/* Creador de mundo */
function createWorld(mapSize, maxOccupiedArea, nature, urban, comercial) {
    const map = [];
    for (let y = 0; y < mapSize; y++) {
        map[y] = [];
        for (let x = 0; x < mapSize; x++) map[y][x] = null;
    }

    // Crear isla con forma orgánica
    const totalCells = mapSize * mapSize;
    const islandSize = Math.floor(totalCells * maxOccupiedArea / 100);
    generateOrganicIsland(map, mapSize, islandSize);

    // Pintar zonas según parámetros
    paintZones(map, mapSize, nature);
    paintZones(map, mapSize, urban);
    paintZones(map, mapSize, comercial);

    // Rellenar resto con Naturaleza
    for(let y=0;y<mapSize;y++)
        for(let x=0;x<mapSize;x++)
            if(map[y][x]===null) map[y][x]="N";

    renderMapCanvas(map, mapSize);
}

/* Generar isla */
function generateOrganicIsland(map, mapSize, islandSize) {
    const center = {x: Math.floor(mapSize/2), y: Math.floor(mapSize/2)};
    const island = [center];
    const queue = [center];
    const visited = new Set([center.x+","+center.y]);

    while(island.length < islandSize && queue.length > 0){
        const cell = queue.shift();
        const dirs = shuffleArray([[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]);
        for(const [dx,dy] of dirs){
            const nx = cell.x + dx, ny = cell.y + dy;
            const key = nx+","+ny;
            if(nx>=0 && nx<mapSize && ny>=0 && ny<mapSize && !visited.has(key)){
                // Probabilidad para bordes más irregulares
                const distX = Math.abs(nx - center.x);
                const distY = Math.abs(ny - center.y);
                const distanceFactor = Math.sqrt(distX*distX + distY*distY) / (mapSize/2);
                if(Math.random() < (1 - distanceFactor)){ 
                    visited.add(key);
                    const node = {x:nx, y:ny};
                    island.push(node);
                    queue.push(node);
                    map[ny][nx] = "T"; // terreno base
                    if(island.length >= islandSize) break;
                }
            }
        }
    }
}

/* Pintar zonas */
function paintZones(map, mapSize, config){
    const zoneCount = getRandomInt(config.min, config.max);
    let totalPainted = 0;

    for(let z=0; z<zoneCount && totalPainted < config.totalMax; z++){
        const maxSize = Math.min(config.zoneMax, config.totalMax - totalPainted);
        const seed = findRandomTile(map, "T");
        if(!seed) break;

        let painted = 0;
        const queue = [seed];
        map[seed.y][seed.x] = config.type;
        painted++; totalPainted++;

        while(queue.length > 0 && painted < maxSize){
            const cell = queue.shift();
            const dirs = shuffleArray([[1,0],[-1,0],[0,1],[0,-1]]);
            for(const [dx,dy] of dirs){
                const nx = cell.x + dx, ny = cell.y + dy;
                if(nx>=0 && nx<mapSize && ny>=0 && ny<mapSize && map[ny][nx]==="T"){
                    map[ny][nx] = config.type;
                    painted++; totalPainted++;
                    queue.push({x:nx, y:ny});
                    if(painted >= maxSize) break;
                }
            }
        }
    }
}

function findRandomTile(map, value){
    const candidates=[];
    for(let y=0;y<map.length;y++)
        for(let x=0;x<map.length;x++)
            if(map[y][x]===value) candidates.push({x,y});
    if(candidates.length===0) return null;
    return candidates[Math.floor(Math.random()*candidates.length)];
}

function getRandomInt(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }

function shuffleArray(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]];} return arr;}

/* Renderizar */
function renderMapCanvas(map, mapSize){
    const canvas = document.getElementById("world");
    const container = document.getElementById("worldContainer");
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    const ctx = canvas.getContext("2d");
    const cellWidth = canvas.width / mapSize;
    const cellHeight = canvas.height / mapSize;

    for(let y=0;y<mapSize;y++){
        for(let x=0;x<mapSize;x++){
            switch(map[y][x]){
                case "N": ctx.fillStyle="white"; break;
                case "U": ctx.fillStyle="gray"; break;
                case "C": ctx.fillStyle="yellow"; break;
                case "T": ctx.fillStyle="green"; break;
                default: ctx.fillStyle="white"; break;
            }
            ctx.fillRect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        }
    }
}
