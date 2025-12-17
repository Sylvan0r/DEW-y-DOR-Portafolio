class Edificio {
    constructor(calle, numero, codigo_postal) {
        this.calle = calle;
        this.numero = numero;
        this.codigo_postal = codigo_postal;
        this.plantas_del_edificio = [];

        console.log(
            `Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigo_postal}.`
        );
    }

    agregarPlantasYPuertas(numPlantas, puertasPorPlanta) {
        let ultimaPlanta = 0;
        if (this.plantas_del_edificio.length > 0) {
            ultimaPlanta = Math.max(...this.plantas_del_edificio.map(p => p.planta));
        }

        for (let i = 1; i <= numPlantas; i++) {
            const plantaActual = ultimaPlanta + i;
            for (let j = 1; j <= puertasPorPlanta; j++) {
                this.plantas_del_edificio.push({
                    planta: plantaActual,
                    puerta: j,
                    propietario: null
                });
            }
        }
    }

    modificarNumero(numero) {
        this.numero = numero;
    }

    modificarCalle(calle) {
        this.calle = calle;
    }

    modificarCodigoPostal(codigo) {
        this.codigo_postal = codigo;
    }

    imprimeCalle() {
        return this.calle;
    }

    imprimeNumero() {
        return this.numero;
    }

    imprimeCodigoPostal() {
        return this.codigo_postal;
    }

    agregarPropietario(nombre, planta, puerta) {
        const piso = this.plantas_del_edificio.find(
            p => p.planta === planta && p.puerta === puerta
        );

        if (piso) {
            piso.propietario = nombre;
            console.log(
                `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`
            );
        } else {
            alert("Esa planta o puerta no existe");
        }
    }

    imprimePlantas() {
        const plantas = {};
        this.plantas_del_edificio.forEach(p => {
            if (!plantas[p.planta]) plantas[p.planta] = [];
            plantas[p.planta].push(p);
        });

        for (const numPlanta in plantas) {
            console.log(`Planta ${numPlanta}:`);
            plantas[numPlanta].forEach(p => {
                console.log(
                    `  Puerta ${p.puerta}: ${p.propietario ?? "Sin propietario"}`
                );
            });
        }
    }
}

const edificios = [];

/* ---------- RENDER ---------- */
function renderEdificios() {
    const contenedor = document.getElementById("edificiosContainer");
    contenedor.innerHTML = "";

    edificios.forEach((edificio, index) => {
        const div = document.createElement("div");
        div.className = "edificio";

        const titulo = document.createElement("h2");
        titulo.textContent = `${edificio.imprimeCalle()} ${edificio.imprimeNumero()}`;
        div.appendChild(titulo);

        // Editar
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "btnEditar";
        btnEditar.onclick = () => {
            const c = prompt("Nueva calle", edificio.imprimeCalle());
            const n = prompt("Nuevo número", edificio.imprimeNumero());
            const cp = prompt("Nuevo CP", edificio.imprimeCodigoPostal());
            if (c) edificio.modificarCalle(c);
            if (n) edificio.modificarNumero(n);
            if (cp) edificio.modificarCodigoPostal(cp);
            renderEdificios();
        };
        div.appendChild(btnEditar);

        // Eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btnEliminar";
        btnEliminar.onclick = () => {
            edificios.splice(index, 1);
            actualizarSelects();
            renderEdificios();
        };
        div.appendChild(btnEliminar);

        // Plantas
        const plantas = {};
        edificio.plantas_del_edificio.forEach(p => {
            if (!plantas[p.planta]) plantas[p.planta] = [];
            plantas[p.planta].push(p);
        });

        Object.keys(plantas).sort((a,b)=>b-a).forEach(plantaNum => {
            const divPlanta = document.createElement("div");
            divPlanta.className = "planta";

            plantas[plantaNum].forEach(puerta => {
                const divPuerta = document.createElement("div");
                divPuerta.className = "puerta";
                divPuerta.textContent = puerta.propietario
                    ? puerta.propietario.split(" ")[0]
                    : "";
                divPlanta.appendChild(divPuerta);
            });

            div.appendChild(divPlanta);
        });

        contenedor.appendChild(div);
    });
}

/* ---------- FORMULARIOS ---------- */

// Crear edificio
document.getElementById("añadirEdificioBtn").onclick = () => {
    const calle = calleInput.value;
    const numero = numeroInput.value;
    const cp = cpInput.value;

    if (calle && numero && cp) {
        edificios.push(new Edificio(calle, numero, cp));
        actualizarSelects();
        renderEdificios();
    }
};

// Añadir plantas
document.getElementById("añadirPlantasBtn").onclick = () => {
    const idx = edificioPlantasSelect.value;
    const plantas = +numPlantasInput.value;
    const puertas = +puertasInput.value;

    if (idx !== "" && plantas > 0 && puertas > 0) {
        edificios[idx].agregarPlantasYPuertas(plantas, puertas);
        renderEdificios();
    }
};

// Añadir propietario
document.getElementById("añadirPropietarioBtn").onclick = () => {
    const idx = edificioPropietarioSelect.value;
    const nombre = nombrePropietarioInput.value;
    const planta = +plantaPropietarioInput.value;
    const puerta = +puertaPropietarioInput.value;

    if (idx !== "" && nombre && planta && puerta) {
        edificios[idx].agregarPropietario(nombre, planta, puerta);
        renderEdificios();
    }
};

// Actualizar selects
function actualizarSelects() {
    edificioPlantasSelect.innerHTML = "";
    edificioPropietarioSelect.innerHTML = "";

    edificios.forEach((e, i) => {
        const option = `${e.imprimeCalle()} ${e.imprimeNumero()}`;
        edificioPlantasSelect.innerHTML += `<option value="${i}">${option}</option>`;
        edificioPropietarioSelect.innerHTML += `<option value="${i}">${option}</option>`;
    });
}

renderEdificios();
