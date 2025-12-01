class Edificio {
    constructor(calle, numero, codigo_postal) {
        this.calle = calle;
        this.numero = numero;
        this.codigo_postal = codigo_postal;
        this.plantas_del_edificio = [];
        console.log(`Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigo_postal}.`);
    }

    agregarPlantasYPuertas(numero_plantas, numero_puertas) {
        for(let i=1;i<=numero_plantas;i++){
            for(let j=1;j<=numero_puertas;j++){
                if(this.plantas_del_edificio.find(p=>p.planta===i && p.puerta===j)) continue;
                this.plantas_del_edificio.push({planta:i, puerta:j, propietario:null});
            }
        }
    }

    agregarPropietario(nombre, planta, puerta){
        const propiedad = this.plantas_del_edificio.find(p => p.planta === planta && p.puerta === puerta);
        if(propiedad && !propiedad.propietario){
            propiedad.propietario = nombre;
        }
    }
}

const edificios = [];

// Función para renderizar todos los edificios
function renderEdificios() {
    const contenedor = document.getElementById("edificiosContainer");
    contenedor.innerHTML = ""; // limpiar antes de renderizar

    edificios.forEach((edificio, index) => {
        const divEdificio = document.createElement("div");
        divEdificio.className = "edificio";

        const titulo = document.createElement("h2");
        titulo.textContent = `${edificio.calle} ${edificio.numero}`;
        divEdificio.appendChild(titulo);

        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btnEliminar";
        btnEliminar.onclick = () => {
            edificios.splice(index, 1);
            renderEdificios();
        };
        divEdificio.appendChild(btnEliminar);

        // Botón editar
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "btnEditar";
        btnEditar.onclick = () => {
            const nuevaCalle = prompt("Nueva calle:", edificio.calle);
            const nuevoNumero = prompt("Nuevo número:", edificio.numero);
            const nuevoCP = prompt("Nuevo CP:", edificio.codigo_postal);
            if(nuevaCalle) edificio.calle = nuevaCalle;
            if(nuevoNumero) edificio.numero = nuevoNumero;
            if(nuevoCP) edificio.codigo_postal = nuevoCP;
            renderEdificios();
        };
        divEdificio.appendChild(btnEditar);

        // Renderizar plantas
        const plantas = [];
        edificio.plantas_del_edificio.forEach(p => {
            if(!plantas[p.planta]) plantas[p.planta] = [];
            plantas[p.planta].push(p);
        });

        plantas.forEach(planta => {
            if(!planta) return;
            const divPlanta = document.createElement("div");
            divPlanta.className = "planta";

            planta.forEach(puerta => {
                const divPuerta = document.createElement("div");
                divPuerta.className = "puerta";
                divPuerta.textContent = puerta.propietario ? puerta.propietario.split(" ")[0] : "";
                divPlanta.appendChild(divPuerta);
            });

            divEdificio.appendChild(divPlanta);
        });

        contenedor.appendChild(divEdificio);
    });
}

// Añadir nuevo edificio desde el formulario
document.getElementById("añadirEdificioBtn").addEventListener("click", () => {
    const calle = document.getElementById("calleInput").value;
    const numero = document.getElementById("numeroInput").value;
    const cp = document.getElementById("cpInput").value;

    if(calle && numero && cp){
        const nuevoEdificio = new Edificio(calle, numero, cp);
        edificios.push(nuevoEdificio);
        renderEdificios();
    } else {
        alert("Rellena todos los campos para añadir un edificio");
    }
});

renderEdificios();
