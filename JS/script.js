const datosUsuario = {
    nombre: "Adriano Martín Lorenzo",
    email: "adfor409@gmail.com",
    telefono: "621038879",
    bio: "¡Buenas! Soy Adriano Martín Lorenzo, un programador que le gusta afrontar nuevos retos y aprender cosas nuevas cada día. Me encanta la tecnología y todo lo relacionado con las tecnologías en general.",
    foto: "IMG/placeholder.jpg",
    habilidades: ["HTML", "CSS", "JavaScript", "Mysql", "Java"]
};

// Insertar datos del usuario
document.getElementById("portName").textContent = datosUsuario.nombre;
document.getElementById("bio").textContent = datosUsuario.bio;
document.getElementById("profilePic").src = datosUsuario.foto;


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
        nombre: "Portafolio Personal",
        descripcion: "Desarrollé un portafolio personal para mostrar mis proyectos y habilidades como desarrollador web.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        enlace: ""
    }
];

// Pintar proyectos
const projectsList = document.getElementById("projectsList");

projectsList.innerHTML = proyectos.map(proj => `
    <div class="mb-6">
        <p><strong>Nombre:</strong> ${proj.nombre}</p>
        <p><strong>Descripción:</strong> ${proj.descripcion}</p>
        <p><strong>Tecnologías:</strong> ${proj.tecnologias.join(", ")}</p>
        <p><strong>Enlace:</strong> ${proj.enlace || "N/A"}</p>
    </div>
`).join("");
