const datosUsuario = {
    nombre: "Adriano Martín Lorenzo",
    email: "adfor409@gmail.com",
    telefono: "621038879",
    bio: "¡Buenas! Soy Adriano Martín Lorenzo, un programador que le gusta afrontar nuevos retos y aprender cosas nuevas cada día. Me encanta la tecnología y todo lo relacionado con las tecnologías en general.",
    foto: "IMG/placeholderUser.jpg",
    habilidades: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
        "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
        "https://pngimg.com/uploads/mysql/mysql_PNG9.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png"
    ]
};

// Insertar datos del usuario
document.getElementById("portName").textContent = datosUsuario.nombre;
document.getElementById("bio").textContent = datosUsuario.bio;
document.getElementById("telf").textContent = "Teléfono: " + datosUsuario.telefono;
document.getElementById("email").textContent = "Email: " + datosUsuario.email;
document.getElementById("profilePic").src = datosUsuario.foto;

const skillsContainer = document.getElementById("skills");

datosUsuario.habilidades.forEach(habilidadUrl => {
    const img = document.createElement("img");
    img.src = habilidadUrl;
    img.className = "w-10 h-10 object-contain hover:scale-110 transition-transform";
    skillsContainer.appendChild(img);
});

/* ================================
   Experiencia laboral
================================ */
const experiencia = [
    {
        img: "https://media.licdn.com/dms/image/v2/C4D0BAQGgM2oQNJjAXQ/company-logo_200_200/company-logo_200_200/0/1639180183380?e=2147483647&v=beta&t=B5uPylE0aL6A-pCb-t8mI29ciay6xwXU_9s00-jBL3g",
        empresa: "Robootics",
        puesto: "Prácticas",
        fechaInicio: "Enero 2020",
        fechaFin: "Diciembre 2021",
        tecnologias: ["HTML", "CSS", "JavaScript", "Java"]
    }
];

// Pintar experiencia
const experienceList = document.getElementById("experienceList");

experienceList.innerHTML = experiencia.map(exp => `
        <div class="flex items-center gap-4">
            <img src="${exp.img}" class="w-30 h-30 rounded-full border object-cover" alt="${exp.empresa}">
            <div>
                <p><strong>Empresa:</strong> ${exp.empresa}</p>
                <p><strong>Puesto:</strong> ${exp.puesto}</p>
                <p><strong>Periodo:</strong> ${exp.fechaInicio} - ${exp.fechaFin}</p>
                <p><strong>Tecnologías:</strong> ${exp.tecnologias.join(", ")}</p>
            </div>
        </div>
`).join("");



/* ================================
   Proyectos
================================ */
const proyectos = [
    {
        img : "",
        nombre: "Portafolio Personal",
        descripcion: "Desarrollé un portafolio personal para mostrar mis proyectos y habilidades como desarrollador web.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        enlace: ""
    }
];

// Pintar proyectos
const projectsList = document.getElementById("projectsList");
const placeholder = "IMG/placeholderProject.png";

projectsList.innerHTML = proyectos.map(proj => `
    <div class="mb-6 flex items-center gap-4">
        <img src="${proj.img || placeholder}" class="w-28 h-28 rounded-full border object-cover">
        
        <div>
            <p><strong>Nombre:</strong> ${proj.nombre}</p>
            <p><strong>Descripción:</strong> ${proj.descripcion}</p>
            <p><strong>Tecnologías:</strong> ${proj.tecnologias.join(", ")}</p>
            <p><strong>Enlace:</strong> ${proj.enlace || "N/A"}</p>
        </div>
    </div>
`).join("");