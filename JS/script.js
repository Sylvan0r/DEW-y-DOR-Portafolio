/* Datos personales */
const misDatos = {
    personales: {
        nombre: "Adriano Martín Lorenzo",
        email: "adfor409@gmail.com",
        telefono: "621 03 88 79",
        bio: {
            es: "¡Buenas! Soy Adriano Martín Lorenzo, un programador que le gusta afrontar nuevos retos y aprender nuevas cosas sobre la tecnología.",
            en: "Hi! I'm Adriano Martín Lorenzo, a programmer who loves challenges and learning new things in technology.",
            de: "Hallo! Ich bin Adriano Martín Lorenzo, ein Programmierer, der Herausforderungen liebt und gerne neue Dinge über Technologie lernt.",
            fr: "Salut ! Je suis Adriano Martín Lorenzo, un programmeur qui aime les défis et apprendre de nouvelles choses sur la technologie.",
            jp: "こんにちは！私はアドリアノ・マルティン・ロレンソです。挑戦が好きで、技術について新しいことを学ぶのが好きなプログラマーです。"
        },
        genero: { es: "Masculino", en: "Male", de: "Männlich", fr: "Masculin", jp: "男性" },
        nacionalidad: { es: "Española", en: "Spanish", de: "Spanisch", fr: "Espagnol", jp: "スペイン人" },
        fechaNacimiento: { es: "04/08/2005", en: "08/04/2005", de: "04.08.2005", fr: "04/08/2005", jp: "2005/08/04" },
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
            empresa: { es: "Robootics", en: "Robootics", de: "Robootics", fr: "Robootics", jp: "ロボティクス" },
            puesto: { es: "Prácticas", en: "Internship", de: "Praktikum", fr: "Stage", jp: "インターン" },
            fechaInicio: { es: "Mayo 2025", en: "May 2025", de: "Mai 2025", fr: "Mai 2025", jp: "2025年5月" },
            fechaFin: { es: "Junio 2025", en: "June 2025", de: "Juni 2025", fr: "Juin 2025", jp: "2025年6月" },
            tecnologias: ["Mysql", "Java"]
        }
    ],
    proyectos: [
        {
            img: "",
            nombre: { es: "Creador de Estructuras", en: "Structure Builder", de: "Struktur-Builder", fr: "Constructeur de Structures", jp: "構造ビルダー" },
            descripcion: {
                es: "Aplicación web para crear y gestionar estructuras de edificios, permitiendo añadir propietarios a puertas específicas y visualizar la distribución del edificio.",
                en: "Web application to create and manage building structures, allowing owners to be assigned to specific doors and visualize the building layout.",
                de: "Webanwendung zum Erstellen und Verwalten von Gebäudestrukturen, die es ermöglicht, Eigentümer bestimmten Türen zuzuweisen und die Gebäudeaufteilung zu visualisieren.",
                fr: "Application web pour créer et gérer des structures de bâtiments, permettant d'assigner des propriétaires à des portes spécifiques et de visualiser la disposition du bâtiment.",
                jp: "建物の構造を作成・管理するウェブアプリケーションで、特定のドアに所有者を割り当て、建物の配置を視覚化できます。"
            },
            tecnologias: ["HTML", "CSS", "JavaScript"],
            enlace: "PROYECTS/StructureManager/index.html"
        },
        {
            img: "https://i.pinimg.com/474x/e6/30/b1/e630b1373a0a0e06e1425ae533f424f4.jpg",
            nombre: { es: "Juego de Memoria", en: "Memory Game", de: "Memory-Spiel", fr: "Jeu de Mémoire", jp: "メモリーゲーム" },
            descripcion: {
                es: "Juego de memoria simple desarrollado con HTML, CSS y JavaScript donde los jugadores deben encontrar pares de cartas iguales.",
                en: "Simple memory game developed with HTML, CSS, and JavaScript where players must find matching card pairs.",
                de: "Ein einfaches Memory-Spiel entwickelt mit HTML, CSS und JavaScript, bei dem die Spieler passende Kartenpaare finden müssen.",
                fr: "Jeu de mémoire simple développé avec HTML, CSS et JavaScript où les joueurs doivent trouver des paires de cartes identiques.",
                jp: "HTML、CSS、JavaScriptで開発されたシンプルなメモリーゲームで、プレイヤーは同じカードのペアを見つける必要があります。"
            },
            tecnologias: ["HTML", "CSS", "JavaScript"],
            enlace: "PROYECTS/MemoryGame/index.html"
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/528/528105.png",
            nombre: { es: "Snake Game+", en: "Snake Game+", de: "Snake-Spiel+", fr: "Jeu Snake+", jp: "スネークゲーム+" },
            descripcion: {
                es: "Juego clásico de Snake desarrollado con HTML, CSS y JavaScript donde los jugadores controlan una serpiente para comer comida y crecer sin chocar contra las paredes o a sí mismos.",
                en: "Classic Snake game developed with HTML, CSS, and JavaScript where players control a snake to eat food and grow without crashing into walls or itself.",
                de: "Klassisches Snake-Spiel entwickelt mit HTML, CSS und JavaScript, bei dem die Spieler eine Schlange steuern, um Nahrung zu essen und zu wachsen, ohne gegen Wände oder sich selbst zu stoßen.",
                fr: "Jeu Snake classique développé avec HTML, CSS et JavaScript où les joueurs contrôlent un serpent pour manger et grandir sans heurter les murs ou eux-mêmes.",
                jp: "HTML、CSS、JavaScriptで開発されたクラシックなスネークゲームで、プレイヤーは壁や自分自身にぶつからずに食べ物を食べて成長させます。"
            },
            tecnologias: ["HTML", "CSS", "JavaScript"],
            enlace: "PROYECTS/Snake/index.html"
        },
        {
            img: "https://img.freepik.com/vector-premium/pixel-art-nave-espacial-contra-alienigenas-conjunto-iconos-blanco-negro-1-bit-diseno-juegos-aplicaciones-moviles-aislado_148553-843.jpg?semt=ais_hybrid&w=740&q=80",
            nombre: { es: "Space Invaders", en: "Space Invaders", de: "Space Invaders", fr: "Space Invaders", jp: "スペースインベーダー" },
            descripcion: {
                es: "Juego clásico de Space Invaders realizado con HTML, CSS y JavaScript.",
                en: "Classic Space Invaders game built with HTML, CSS, and JavaScript.",
                de: "Klassisches Space-Invaders-Spiel entwickelt mit HTML, CSS und JavaScript.",
                fr: "Jeu classique Space Invaders développé avec HTML, CSS et JavaScript.",
                jp: "HTML、CSS、JavaScriptで作られたクラシックなスペースインベーダーゲームです。"
            },
            tecnologias: ["HTML", "CSS", "JavaScript"],
            enlace: "PROYECTS/SpaceInvader/index.html"
        }
    ]
};

/* Textos extras del HTML */
const textos = {
    aboutMe: { es: "Sobre mí", en: "About Me", de: "Über mich", fr: "À propos de moi", ja: "自己紹介" },
    frameWorks: { es: "Frameworks en los que trabajo", en: "Frameworks I Work With", de: "Frameworks, mit denen ich arbeite", fr: "Frameworks sur lesquels je travaille", ja: "使用しているフレームワーク" },
    expTxt: { es: "Experiencia Laboral", en: "Work Experience", de: "Berufserfahrung", fr: "Expérience professionnelle", ja: "職務経験" },
    projTxt: { es: "Proyectos", en: "Projects", de: "Projekte", fr: "Projets", ja: "プロジェクト" }
};

/* Funcion de renderizado general */
function renderContent(lang) {
    const p = misDatos.personales;

    document.getElementById("aboutMe").textContent = textos.aboutMe[lang];
    document.getElementById("frameWorks").textContent = textos.frameWorks[lang];
    document.getElementById("expTxt").textContent = textos.expTxt[lang];
    document.getElementById("projTxt").textContent = textos.projTxt[lang];

    // Datos personales
    document.getElementById("portName").textContent = p.nombre;
    document.getElementById("bio").textContent = p.bio[lang];
    document.getElementById("telf").textContent = `${lang === 'es' ? 'Teléfono' : 'Phone'}: ${p.telefono}`;
    document.getElementById("email").textContent = `${lang === 'es' ? 'Email' : 'Email'}: ${p.email}`;
    document.getElementById("genero").textContent = `${lang === 'es' ? 'Género' : 'Gender'}: ${p.genero[lang]}`;
    document.getElementById("nacionalidad").textContent = `${lang === 'es' ? 'Nacionalidad' : 'Nationality'}: ${p.nacionalidad[lang]}`;
    document.getElementById("fechaNacimiento").textContent = `${lang === 'es' ? 'Fecha de Nacimiento' : 'Birthdate'}: ${p.fechaNacimiento[lang]}`;

    // Imagen de usuario
    const profilePic = document.getElementById("profilePic");
    profilePic.src = p.foto;
    profilePic.alt = p.nombre;

    // Frameworks
    const skillsContainer = document.getElementById("skills");
    skillsContainer.innerHTML = '';
    p.habilidades.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.className = "w-10 h-10 object-contain transition-transform hover:scale-110 cursor-pointer";
        skillsContainer.appendChild(img);
    });

    // Experiencia
    const experienceList = document.getElementById("experienceList");
    experienceList.innerHTML = misDatos.experiencia.map(exp => `
        <div class="flex items-center gap-4 experienceCard p-2 rounded-lg hover:scale-[1.02] transition-transform cursor-pointer">
            <img src="${exp.img}" class="w-20 h-20 rounded-full border object-cover">
            <div>
                <p><strong>${lang === 'es' ? 'Empresa' : 'Company'}:</strong> ${exp.empresa[lang]}</p>
                <p><strong>${lang === 'es' ? 'Puesto' : 'Role'}:</strong> ${exp.puesto[lang]}</p>
                <p><strong>${lang === 'es' ? 'Periodo' : 'Period'}:</strong> ${exp.fechaInicio[lang]} - ${exp.fechaFin[lang]}</p>
                <p><strong>${lang === 'es' ? 'Tecnologías' : 'Technologies'}:</strong> ${exp.tecnologias.join(", ")}</p>
            </div>
        </div>
    `).join("");

    // Proyectos
    const projectsList = document.getElementById("projectsList");
    const placeholderProject = "IMG/placeholderProject.png";
    projectsList.innerHTML = misDatos.proyectos.map(proj => `
        <div class="flex items-center gap-4 projectCard p-2 rounded-lg hover:scale-[1.02] transition-transform cursor-pointer">
            <img src="${proj.img || placeholderProject}" class="w-20 h-20 rounded-full border object-cover">
            <div>
                <p><strong>${lang === 'es' ? 'Nombre' : 'Name'}:</strong> ${proj.nombre[lang]}</p>
                <p><strong>${lang === 'es' ? 'Descripción' : 'Description'}:</strong> ${proj.descripcion[lang]}</p>
                <p><strong>${lang === 'es' ? 'Tecnologías' : 'Technologies'}:</strong> ${proj.tecnologias.join(", ")}</p>
            </div>
        </div>
    `).join("");

    // Click proyectos
    document.querySelectorAll(".projectCard").forEach((card, index) => {
        card.addEventListener("click", () => {
            const enlace = misDatos.proyectos[index].enlace;
            if (!enlace) alert(misDatos.proyectos[index].nombre[lang]);
            else window.open(enlace, "_blank");
        });
    });
}

/* Selector de idioma */
const savedLang = localStorage.getItem("lang") || "es";
document.getElementById("languageSelector").value = savedLang;
renderContent(savedLang);

document.getElementById("languageSelector").addEventListener("change", e => {
    const lang = e.target.value;
    localStorage.setItem("lang", lang);
    renderContent(lang);
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
        document.getElementById("languageSelector").style.backgroundColor = "#374151";
        document.getElementById("languageSelector").style.color = "#ffffffcc";
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
        document.getElementById("languageSelector").style.transition = "color 0.5s";
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
        document.getElementById("languageSelector").style.backgroundColor = "#ffffffcc";
        document.getElementById("languageSelector").style.color = "#374151";
    }
});