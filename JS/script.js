/* Datos */
const misDatos = {
    personales: {
        nombre: "Adriano Martín Lorenzo",
        email: "adfor409@gmail.com",
        telefono: "621 03 88 79",
        bio: "¡Buenas! Soy Adriano Martín Lorenzo, un programador que le gusta afrontar nuevos retos y aprender nuevas cosas sobre la tecnología.",
        genero: "Masculino",
        nacionalidad: "Española",
        fechaNacimiento: "04/08/2005",
        foto: "IMG/placeholderUser.jpg",
        habilidades: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
            "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            "https://pngimg.com/uploads/mysql/mysql_PNG9.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1154px-Laravel.svg.png"
        ]
    },
    experiencia: [
        {
            img: "https://media.licdn.com/dms/image/v2/C4D0BAQGgM2oQNJjAXQ/company-logo_200_200/company-logo_200_200/0/1639180183380?e=2147483647&v=beta&t=B5uPylE0aL6A-pCb-t8mI29ciay6xwXU_9s00-jBL3g",
            empresa: "Robootics",
            puesto: "Prácticas",
            fechaInicio: "Mayo 2025",
            fechaFin: "Junio 2025",
            tecnologias: ["Mysql", "Java"]
        }
    ],
    proyectos: [
        {
            img: "",
            nombre: "Portafolio Personal",
            descripcion: "Desarrollé un portafolio personal para mostrar mis proyectos y habilidades como desarrollador web.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            enlace: "https://github.com/Sylvan0r/DEW-y-DOR-Portafolio"
        },
        {
            img: "https://i.pinimg.com/474x/e6/30/b1/e630b1373a0a0e06e1425ae533f424f4.jpg",
            nombre: "Juego de Memoria",
            descripcion: "Juego de memoria simple desarrollado con HTML, CSS y JavaScript donde los jugadores deben encontrar pares de cartas iguales.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            enlace: "PROYECTS/MemoryGame/index.html"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/528/528105.png",
            nombre: "Snake Game+",
            descripcion: "Juego clásico de Snake desarrollado con HTML, CSS y JavaScript donde los jugadores controlan una serpiente para comer comida y crecer sin chocar contra las paredes o a sí mismos.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            enlace: "PROYECTS/Snake/index.html"
        }
    ]
};

/* Mostrar info */
document.getElementById("portName").textContent = misDatos.personales.nombre;
document.getElementById("bio").textContent = misDatos.personales.bio;
document.getElementById("telf").textContent = "Teléfono: " + misDatos.personales.telefono;
document.getElementById("email").textContent = "Email: " + misDatos.personales.email;
document.getElementById("profilePic").src = misDatos.personales.foto;
document.getElementById("genero").textContent = "Género: " + misDatos.personales.genero;
document.getElementById("nacionalidad").textContent = "Nacionalidad: " + misDatos.personales.nacionalidad;
document.getElementById("fechaNacimiento").textContent = "Fecha de Nacimiento: " + misDatos.personales.fechaNacimiento;

/* Frameworks */
const skillsContainer = document.getElementById("skills");
misDatos.personales.habilidades.forEach(iconUrl => {
    const img = document.createElement("img");
    img.src = iconUrl;
    img.className = "w-10 h-10 object-contain transition-transform hover:scale-110 cursor-pointer";
    skillsContainer.appendChild(img);
});

/* Experiencia */
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

/* Proyectos */
const projectsList = document.getElementById("projectsList");
const placeholderProject = "IMG/placeholderProject.png";
projectsList.innerHTML = misDatos.proyectos.map(proj => `
    <div class="flex items-center gap-4 projectCard cursor-pointer">
        <img src="${proj.img || placeholderProject}" class="w-20 h-20 rounded-full border object-cover">
        <div>
            <p><strong>Nombre:</strong> ${proj.nombre}</p>
            <p><strong>Descripción:</strong> ${proj.descripcion}</p>
            <p><strong>Tecnologías:</strong> ${proj.tecnologias.join(", ")}</p>
        </div>
    </div>
`).join("");

// Hover
document.querySelectorAll(".projectCard, .experienceCard").forEach(card => {
    card.addEventListener("mouseenter", () => card.classList.add("scale-[1.02]", "transition-transform"));
    card.addEventListener("mouseleave", () => card.classList.remove("scale-[1.02]"));
});

// Click proyectos
document.querySelectorAll(".projectCard").forEach((card, index) => {
    card.addEventListener("click", () => {
        const enlace = misDatos.proyectos[index].enlace;
        if(!enlace) alert("Has seleccionado el proyecto: " + misDatos.proyectos[index].nombre);
        else window.open(enlace, '_blank');
    });
});

/* Toggle Dark Mode */
const themeToggleBtn = document.getElementById("themeToggle");
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    
    // Cambiar estilo de todo
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");

    if(document.body.classList.contains("dark")){
        themeToggleBtn.textContent = "☀︎";
        document.body.style.background = "linear-gradient(to bottom, #1f2937, #374151, #4b5563)";
        document.body.style.transition = "background 0.5s";
        sidebar.style.backgroundColor = "#1f2937";
        sidebar.style.transition = "background-color 0.5s";
        document.getElementById("expTxt").style.color = "#1f2937";
        document.getElementById("projTxt").style.color = "#1f2937";
        document.getElementById("aboutMe").style.color = "#ffffffcc";
        document.getElementById("frameWorks").style.color = "#ffffffcc";
        document.getElementById("portName").style.color = "#ffffffcc";
        document.getElementById("bio").style.color = "#ffffffcc";
        document.getElementById("email").style.color = "#ffffffcc";
        document.getElementById("telf").style.color = "#ffffffcc";
        document.getElementById("genero").style.color = "#ffffffcc";
        document.getElementById("nacionalidad").style.color = "#ffffffcc";
        document.getElementById("fechaNacimiento").style.color = "#ffffffcc";
        document.getElementById("themeToggle").style.backgroundColor = "#374151";
        document.getElementById("themeToggle").style.color = "#ffffffcc";
        document.getElementById("bio").style.transition = "color 0.5s";
        document.getElementById("email").style.transition = "color 0.5s";
        document.getElementById("telf").style.transition = "color 0.5s";
        document.getElementById("genero").style.transition = "color 0.5s";
        document.getElementById("nacionalidad").style.transition = "color 0.5s";
        document.getElementById("fechaNacimiento").style.transition = "color 0.5s";
        document.getElementById("aboutMe").style.transition = "color 0.5s";
        document.getElementById("frameWorks").style.transition = "color 0.5s";
        document.getElementById("portName").style.transition = "color 0.5s";
        document.getElementById("expTxt").style.transition = "color 0.5s";
        document.getElementById("projTxt").style.transition = "color 0.5s";
    } else {
        themeToggleBtn.textContent = "☽";
        document.body.style.background = "linear-gradient(to bottom, oklch(82.8% 0.111 230.318), oklch(80.9% 0.105 251.813), oklch(45.7% 0.24 277.023))";
        sidebar.style.backgroundColor = "#f9fafb";
        document.getElementById("bio").style.color = "#000000ff";
        document.getElementById("email").style.color = "#000000ff";
        document.getElementById("telf").style.color = "#000000ff";
        document.getElementById("genero").style.color = "#000000ff";
        document.getElementById("nacionalidad").style.color = "#000000ff";
        document.getElementById("fechaNacimiento").style.color = "#000000ff";     
        document.getElementById("aboutMe").style.color = "#000000ff";
        document.getElementById("frameWorks").style.color = "#000000ff";
        document.getElementById("portName").style.color = "oklch(54.6% 0.245 262.881)";
        document.getElementById("expTxt").style.color = "oklch(54.6% 0.245 262.881)";
        document.getElementById("projTxt").style.color = "oklch(54.6% 0.245 262.881)";
        document.getElementById("themeToggle").style.backgroundColor = "#ffffffcc";
        document.getElementById("themeToggle").style.color = "#374151";
    }
});
