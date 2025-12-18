class Edificio {
    constructor(calle, numero, codigo_postal) {
        this.calle = calle;
        this.numero = numero;
        this.codigo_postal = codigo_postal;
        this.plantas_del_edificio = [];
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

    modificarNumero(n) { this.numero = n; }
    modificarCalle(c) { this.calle = c; }
    modificarCodigoPostal(cp) { this.codigo_postal = cp; }

    imprimeCalle() { return this.calle; }
    imprimeNumero() { return this.numero; }
    imprimeCodigoPostal() { return this.codigo_postal; }

    agregarPropietario(nombre, planta, puerta) {
        const piso = this.plantas_del_edificio.find(
            p => p.planta === planta && p.puerta === puerta
        );
        if (piso) piso.propietario = nombre;
        else alert("Esa planta o puerta no existe");
    }
}

const edificios = [];

/* Mostrar / ocultar formularios */
function controlarFormularios() {
    const mostrar = edificios.length > 0;
    formularioPlantas.style.display = mostrar ? "flex" : "none";
    formularioPropietario.style.display = mostrar ? "flex" : "none";
}

/* Render */
function renderEdificios() {
    edificiosContainer.innerHTML = "";

    edificios.forEach((edificio, index) => {
        const div = document.createElement("div");
        div.className = "edificio";

        div.innerHTML = `
            <h2>${edificio.imprimeCalle()} ${edificio.imprimeNumero()}</h2>
            <button class="btnEditar">Editar</button>
            <button class="btnEliminar">Eliminar</button>
        `;

        div.querySelector(".btnEditar").onclick = () => {
            edificio.modificarCalle(prompt("Calle", edificio.imprimeCalle()));
            edificio.modificarNumero(prompt("Número", edificio.imprimeNumero()));
            edificio.modificarCodigoPostal(prompt("CP", edificio.imprimeCodigoPostal()));
            renderEdificios();
            actualizarSelects();
        };

        div.querySelector(".btnEliminar").onclick = () => {
            edificios.splice(index, 1);
            actualizarSelects();
            renderEdificios();
            controlarFormularios();
        };

        const plantas = {};
        edificio.plantas_del_edificio.forEach(p => {
            if (!plantas[p.planta]) plantas[p.planta] = [];
            plantas[p.planta].push(p);
        });

        Object.keys(plantas).sort((a, b) => b - a).forEach(planta => {
            const divPlanta = document.createElement("div");
            divPlanta.className = "planta";

            plantas[planta].forEach(p => {
                const divPuerta = document.createElement("div");
                divPuerta.className = "puerta";
                divPuerta.textContent = p.propietario ? p.propietario.split(" ")[0] : "";
                divPlanta.appendChild(divPuerta);
            });

            div.appendChild(divPlanta);
        });

        edificiosContainer.appendChild(div);
    });
}

/* Formularios */
añadirEdificioBtn.onclick = () => {
    if (calleInput.value && numeroInput.value && cpInput.value) {
        edificios.push(new Edificio(calleInput.value, numeroInput.value, cpInput.value));
        actualizarSelects();
        renderEdificios();
        controlarFormularios();
    }
};

añadirPlantasBtn.onclick = () => {
    edificios[edificioPlantasSelect.value]
        .agregarPlantasYPuertas(+numPlantasInput.value, +puertasInput.value);
    renderEdificios();
};

añadirPropietarioBtn.onclick = () => {
    edificios[edificioPropietarioSelect.value]
        .agregarPropietario(
            nombrePropietarioInput.value,
            +plantaPropietarioInput.value,
            +puertaPropietarioInput.value
        );
    renderEdificios();
};

function actualizarSelects() {
    edificioPlantasSelect.innerHTML = "";
    edificioPropietarioSelect.innerHTML = "";

    edificios.forEach((e, i) => {
        const txt = `${e.imprimeCalle()} ${e.imprimeNumero()}`;
        edificioPlantasSelect.innerHTML += `<option value="${i}">${txt}</option>`;
        edificioPropietarioSelect.innerHTML += `<option value="${i}">${txt}</option>`;
    });
}

renderEdificios();
controlarFormularios();