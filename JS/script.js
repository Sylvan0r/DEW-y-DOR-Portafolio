/* Datos */
const misDatos = {
    personales: {
        nombre: "Adriano Martín Lorenzo",
        email: "adfor409@gmail.com",
        telefono: "621038879",
        bio: "¡Buenas! Soy Adriano Martín Lorenzo, un programador que le gusta afrontar nuevos retos y aprender cosas nuevas cada día. Me encanta la tecnología y todo lo relacionado con las tecnologías en general.",
        genero: "Masculino",
        nacionalidad: "Española",
        fechaNacimiento: "04/08/2005",
        direccion: "Calle Retamar Santa Cruz de la Palma, España",
        foto: "IMG/placeholderUser.jpg",
        habilidades: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
            "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            "https://pngimg.com/uploads/mysql/mysql_PNG9.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png"
        ]
    },

    estudios: [
        {
            titulo: "Técnico Superior en Desarrollo de Aplicaciones Web",
            centro: "IES Ejemplo",
            año: "2023"
        }
    ],

    experiencia: [
        {
            img: "https://media.licdn.com/dms/image/v2/C4D0BAQGgM2oQNJjAXQ/company-logo_200_200/company-logo_200_200/0/1639180183380?e=2147483647&v=beta&t=B5uPylE0aL6A-pCb-t8mI29ciay6xwXU_9s00-jBL3g",
            empresa: "Robootics",
            puesto: "Prácticas",
            fechaInicio: "Enero 2020",
            fechaFin: "Diciembre 2021",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java"]
        }
    ],

    proyectos: [
        {
            img: "",
            nombre: "Portafolio Personal",
            descripcion: "Desarrollé un portafolio personal para mostrar mis proyectos y habilidades como desarrollador web.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            enlace: "https://github.com/Sylvan0r/DEW-y-DOR-Portafolio"
        }        
    ]
};

/* Mostrar info dentro del html */
document.getElementById("portName").textContent = misDatos.personales.nombre;
document.getElementById("bio").textContent = misDatos.personales.bio;
document.getElementById("telf").textContent = "Teléfono: " + misDatos.personales.telefono;
document.getElementById("email").textContent = "Email: " + misDatos.personales.email;
document.getElementById("profilePic").src = misDatos.personales.foto;
document.getElementById("genero").textContent = "Género: " + misDatos.personales.genero;
document.getElementById("nacionalidad").textContent = "Nacionalidad: " + misDatos.personales.nacionalidad;
document.getElementById("fechaNacimiento").textContent = "Fecha de Nacimiento: " + misDatos.personales.fechaNacimiento;
document.getElementById("direccion").textContent = "Dirección: " + misDatos.personales.direccion;

/* Mostrar frameworks que se */
const skillsContainer = document.getElementById("skills");

misDatos.personales.habilidades.forEach(iconUrl => {
    const img = document.createElement("img");
    img.src = iconUrl;

    img.className =
        "w-10 h-10 object-contain transition-transform hover:scale-110 cursor-pointer";

    skillsContainer.appendChild(img);
});

/* Mostrar contenidos de parte de experiencia laboral */
const experienceList = document.getElementById("experienceList");

experienceList.innerHTML = misDatos.experiencia.map(exp => `
    <div class="flex items-center gap-4 experienceCard">
        <img src="${exp.img}" class="w-20 h-20 rounded-full border object-cover">
        <div>
            <p><strong>Empresa:</strong> ${exp.empresa}</p>
            <p><strong>Puesto:</strong> ${exp.puesto}</p>
            <p><strong>Periodo:</strong> ${exp.fechaInicio} - ${exp.fechaFin}</p>
            <p><strong>Tecnologías:</strong> ${exp.tecnologias.join(", ")}</p>
        </div>
    </div>
`).join("");

/* Mostrar contenidos de parte de proyectos */
const projectsList = document.getElementById("projectsList");
const placeholderProject = "IMG/placeholderProject.png";

projectsList.innerHTML = misDatos.proyectos.map(proj => `
    <div class="flex items-center gap-4 projectCard cursor-pointer">
        <img src="${proj.img || placeholderProject}" class="w-20 h-20 rounded-full border object-cover">

        <div>
            <p><strong>Nombre:</strong> ${proj.nombre}</p>
            <p><strong>Descripción:</strong> ${proj.descripcion}</p>
            <p><strong>Tecnologías:</strong> ${proj.tecnologias.join(", ")}</p>
            <p><strong>Enlace:</strong> ${proj.enlace || "No disponible"}</p>
        </div>
    </div>
`).join("");

/* Hacer mas grande tanto las experiencias como proyectos al pasar por encima */
document.querySelectorAll(".projectCard").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("scale-[1.02]", "transition-transform");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("scale-[1.02]");
    });
});

document.querySelectorAll(".experienceCard").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("scale-[1.02]", "transition-transform");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("scale-[1.02]");
    });
});

/* Al hacer click en un proyecto te manda al github de este */
document.querySelectorAll(".projectCard").forEach((card, index) => {
    card.addEventListener("click", () => {
        if(misDatos.proyectos[index].enlace == null) {
            alert("Has seleccionado el proyecto: " + misDatos.proyectos[index].nombre);
        }else{
            window.open(misDatos.proyectos[index].enlace, '_blank');
        }
    });
});
