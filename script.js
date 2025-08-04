// Translations object with updated keys
const translations = {
    it: {
        title: "Il Mio Portfolio",
        nav: {
            about: "Chi sono",
            skills: "Competenze", 
            projects: "Progetti",
            contact: "Contatti"
        },
        hero: {
            greeting: "Ciao, sono",
            subtitle: "Data Engineer & Complex Computer Systems student",
            contact: "Contattami",
            downloadCV: "Scarica CV (eng)"
        },
        about: {
            title: "Chi sono",
            subtitle: "La mia storia e il mio percorso",
            description: "Mi chiamo Gabriele Rizzitiello e sono uno studente di Ingegneria Informatica, attualmente sto conseguendo la laurea magistrale in Data Engineering presso l'Università degli Studi di Roma Tre. Sono particolarmente appassionato a contesti di studio legati a Big Data, analisi dei dati e Deep Learning. In questa pagina cerco di raccogliere i principali progetti realizzati durante gli anni di studio, ogni progetto ha rappresentato un'opportunità per applicare le mie competenze e imparare nuove tecnologie.",
            projects: "Progetti completati",
            experience: "Anni di esperienza", 
            passion: "Passione per i dati"
        },
        skills: {
            title: "Competenze",
            subtitle: "Tech Stack",
            programming: "Linguaggi di Programmazione",
            web: "Frontend & Web",
            bigdata: "Big Data & Data Engineering",
            ml: "Machine Learning & AI",
            tools: "Framework & Tools"
        },
        projects: {
            title: "Progetti",
            subtitle: "I miei lavori più significativi",
            explore: "Esplora",
            viewCode: "Vedi dettaglio",
            dataIntegration: {
                title: "Data Integration Project",
                description: "Progetto di integrazione dati con focus sulla creazione di schemi mediati. L'obiettivo principale era unificare e rendere coerenti i dati provenienti da varie fonti.",
                fullDescription: "Questo progetto documenta il processo di integrazione dei dati, concentrandosi sulla creazione di uno schema mediato. L'obiettivo principale era unificare e rendere coerenti i dati provenienti da varie fonti. Il progetto ha coinvolto l'analisi di diverse tecniche di blocking e matching per l'identificazione di record duplicati.",
                context: "Sviluppato durante il corso di Data Integration all'Università Roma Tre, questo progetto rappresenta un approccio sistematico alla risoluzione di problemi reali di integrazione dati."
            },
            claimsExtraction: {
                title: "Claims Extraction Project",
                description: "Automazione dell'analisi di tabelle estratte da documenti scientifici utilizzando Large Language Models (LLM).",
                fullDescription: "Il progetto mira ad automatizzare l'analisi di tabelle estratte da documenti scientifici utilizzando Large Language Models (LLM). Specificamente, la prima fase del progetto si è basata sull'estrazione di claims da tabelle di performance di modelli di machine learning.",
                context: "Progetto sviluppato nell'ambito della ricerca in Natural Language Processing, focalizzato sull'estrazione automatica di informazioni strutturate da documenti scientifici."
            },
            variableStars: {
                title: "Variable Stars Classification",
                description: "Classificazione di stelle variabili utilizzando tecniche di machine learning su un dataset di osservazioni astronomiche.",
                fullDescription: "Le stelle variabili rappresentano un fenomeno affascinante in astronomia. Questo progetto mira a sviluppare un modello capace di classificare diversi tipi di stelle variabili basandosi sulle loro caratteristiche osservative. Il progetto utilizza tecniche di machine learning avanzate per l'analisi di dati astronomici.",
                context: "Progetto interdisciplinare che combina astronomia e data science, sviluppato per esplorare l'applicazione del machine learning nel campo dell'astrofisica."
            },
            chernoffFaces: {
                title: "Chernoff Faces Visualizer",
                description: "Visualizzazione di dati multivariati utilizzando le facce di Chernoff.",
                fullDescription: "Questo progetto si concentra sulla visualizzazione di dati multivariati attraverso l'uso delle facce di Chernoff, una tecnica che mappa le caratteristiche dei dati su volti umani stilizzati. L'obiettivo è facilitare l'interpretazione dei dati complessi in modo intuitivo.",
                context: "Sviluppato come parte di un corso di data visualization, questo progetto esplora l'intersezione tra arte e scienza nella rappresentazione dei dati."
            },
            ECHOgraph: {
                title: "ECHOgraph",
                description: "Esplorazione interattiva di dati multivariati attraverso un diagramma a corde.",
                fullDescription: "Il progetto permette di esplorare in modo interattivo i punti di vista dei personaggi attraverso un diagramma a corde e un grafo basato su dati JSON, offrendo funzioni di selezione, tooltip informativi e filtri per stagione.",
                context: "Sviluppato come parte di un corso di data visualization, questo progetto combina tecniche di visualizzazione avanzate con un'interfaccia utente interattiva."
            },
            cpQueryTranslate: {
                title: "Caso di studio sulla geometria computazionale",
                description: "Argomento: Ricerca della coppia più vicina in una query traslata",
                fullDescription: "Questo report è stato realizzato per il corso Algoritmi per Big Data e riassume uno studio di ricerca molto interessante presentato nel paper Searching for the closest-pair in a query translate di Jie Xue, Yuan Li, Saladi Rahul e Ravi Janardan.",
                context: "Sviluppato come parte di un corso di ingegneria dei dati"
            }
        },
        contact: {
            title: "Contattami",
            subtitle: "Sono sempre aperto a nuove opportunità",
            email: "Email",
            location: "Posizione",
            locationValue: "Roma, Italia",
            social: "Social Media",
            timezone: "Fuso orario: UTC+1",
            sendEmail: "Invia Email",
            cta: {
                title: "Hai un progetto in mente?",
                description: "Sono sempre interessato a collaborazioni innovative e sfide nel campo del Data Engineering.",
                email: "Scrivimi una email",
                linkedin: "Contattami su LinkedIn"
            }
        },
        footer: {
            rights: "Tutti i diritti riservati."
        }
    },
    en: {
        title: "My Portfolio",
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects", 
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            subtitle: "Data Engineer & Complex Computer Systems student",
            contact: "Contact me",
            downloadCV: "Download CV (eng)"
        },
        about: {
            title: "About me",
            subtitle: "My story and journey",
            description: "My name is Gabriele Rizzitiello, and I am a Computer Engineering student currently pursuing a Master's degree in Data Engineering at Roma Tre University. I am particularly passionate about topics related to Big Data, data analysis, and Deep Learning. On this page, I aim to collect the main projects I have worked on during my years of study. Each project has represented an opportunity to apply my skills and learn new technologies.",
            projects: "Completed projects",
            experience: "Years of experience",
            passion: "Passion for data"
        },
        skills: {
            title: "Skills", 
            subtitle: "Tech Stack",
            programming: "Programming Languages",
            web: "Frontend & Web",
            bigdata: "Big Data & Data Engineering",
            ml: "Machine Learning & AI",
            tools: "Framework & Tools"
        },
        projects: {
            title: "Projects",
            subtitle: "My most significant works",
            explore: "Explore",
            viewCode: "View detail",
            dataIntegration: {
                title: "Data Integration Project",
                description: "Data integration project focusing on the creation of mediated schemas. The main goal was to unify and make consistent data from various sources.",
                fullDescription: "This project documents the data integration process, focusing on the creation of a mediated schema. The main goal was to unify and make consistent data from various sources. The project involved analyzing different blocking and matching techniques for duplicate record identification.",
                context: "Developed during the Data Integration course at Roma Tre University, this project represents a systematic approach to solving real-world data integration problems."
            },
            claimsExtraction: {
                title: "Claims Extraction Project",
                description: "Automation of table analysis extracted from scientific papers using Large Language Models (LLM).",
                fullDescription: "The project aims to automate the analysis of tables extracted from scientific papers using Large Language Models (LLM). Specifically, the first phase of the project was based on extracting claims from machine learning model performance tables.",
                context: "Project developed in the field of Natural Language Processing research, focused on automatic extraction of structured information from scientific documents."
            },
            variableStars: {
                title: "Variable Stars Classification", 
                description: "Classification of variable stars using machine learning techniques on a dataset of astronomical observations.",
                fullDescription: "Variable stars are a fascinating phenomenon in astronomy. This project aims to develop a model capable of classifying different types of variable stars based on their observational characteristics. The project uses advanced machine learning techniques for astronomical data analysis.",
                context: "Interdisciplinary project combining astronomy and data science, developed to explore machine learning applications in astrophysics."
            },
            chernoffFaces: {
                title: "Chernoff Faces Visualizer",
                description: "Visualization of multivariate data using Chernoff faces.",
                fullDescription: "This project focuses on visualizing multivariate data through the use of Chernoff faces, a technique that maps data features onto stylized human faces. The goal is to facilitate the intuitive interpretation of complex data.",
                context: "Developed as part of a data visualization course, this project explores the intersection of art and science in data representation."
            },
            ECHOgraph: {
                title: "ECHOgraph",
                description: "Interactive exploration of multivariate data through a chord diagram.",
                fullDescription: "The project allows interactive exploration of characters' points of view through a chord diagram and a graph based on JSON data, offering selection functions, informative tooltips, and season filters.",
                context: "Developed as part of a data visualization course, this project combines advanced visualization techniques with an interactive user interface."
            },
            cpQueryTranslate: {
                title: "Case study about computational geometry",
                description: "Topic: Searching for the closest-pair in a query translate",
                fullDescription: "This report was created for the course Algorithms for Big Data and summarizes a very interesting research study presented in the paper Searching for the closest-pair in a query translate by Jie Xue, Yuan Li, Saladi Rahul, and Ravi Janardan.",
                context: "Developed as part of a data engineering course"
            }
        },
        contact: {
            title: "Contact me",
            subtitle: "I'm always open to new opportunities",
            email: "Email",
            location: "Location",
            locationValue: "Rome, Italy",
            social: "Social Media",
            timezone: "Timezone: UTC+1",
            sendEmail: "Send Email",
            cta: {
                title: "Have a project in mind?",
                description: "I'm always interested in innovative collaborations and challenges in the Data Engineering field.",
                email: "Send me an email",
                linkedin: "Contact me on LinkedIn"
            }
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    es: {
        title: "Mi Portafolio",
        nav: {
            about: "Sobre mí",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            greeting: "Hola, soy",
            subtitle: "Data Engineer & Complex Computer Systems student",
            contact: "Contáctame",
            downloadCV: "Descargar CV (eng)"
        },
        about: {
            title: "Sobre mí",
            subtitle: "Mi historia y trayectoria",
            description: "Me llamo Gabriele Rizzitiello y soy estudiante de Ingeniería Informática. Actualmente estoy cursando el máster en Ingeniería de Datos en la Universidad de Roma Tre. Me apasionan especialmente los temas relacionados con Big Data, análisis de datos y Deep Learning. En esta página intento recopilar los principales proyectos realizados durante mis años de estudio. Cada proyecto ha sido una oportunidad para aplicar mis habilidades y aprender nuevas tecnologías.",
            projects: "Proyectos completados",
            experience: "Años de experiencia",
            passion: "Pasión por los datos"
        },
        skills: {
            title: "Habilidades",
            subtitle: "Tech Stack",
            programming: "Lenguajes de Programación",
            web: "Frontend & Web",
            bigdata: "Big Data e Ingeniería de Datos",
            ml: "Machine Learning e IA",
            tools: "Frameworks y Herramientas"
        },
        projects: {
            title: "Proyectos",
            subtitle: "Mis trabajos más significativos",
            explore: "Explorar",
            viewCode: "Ver detalle",
            dataIntegration: {
                title: "Proyecto de Integración de Datos",
                description: "Proyecto de integración de datos centrado en la creación de esquemas mediados. El objetivo principal era unificar y hacer consistentes los datos de varias fuentes.",
                fullDescription: "Este proyecto documenta el proceso de integración de datos, centrándose en la creación de un esquema mediado. El objetivo principal era unificar y hacer consistentes los datos de varias fuentes. El proyecto involucró el análisis de diferentes técnicas de blocking y matching para la identificación de registros duplicados.",
                context: "Desarrollado durante el curso de Integración de Datos en la Universidad Roma Tre, este proyecto representa un enfoque sistemático para resolver problemas reales de integración de datos."
            },
            claimsExtraction: {
                title: "Proyecto de Extracción de Claims",
                description: "Automatización del análisis de tablas extraídas de documentos científicos utilizando Large Language Models (LLM).",
                fullDescription: "El proyecto tiene como objetivo automatizar el análisis de tablas extraídas de documentos científicos utilizando Large Language Models (LLM). Específicamente, la primera fase del proyecto se basó en la extracción de claims de tablas de rendimiento de modelos de machine learning.",
                context: "Proyecto desarrollado en el ámbito de la investigación en Procesamiento de Lenguaje Natural, enfocado en la extracción automática de información estructurada de documentos científicos."
            },
            variableStars: {
                title: "Clasificación de Estrellas Variables",
                description: "Clasificación de estrellas variables utilizando técnicas de machine learning en un conjunto de datos de observaciones astronómicas.",
                fullDescription: "Las estrellas variables son un fenómeno fascinante en astronomía. Este proyecto tiene como objetivo desarrollar un modelo capaz de clasificar diferentes tipos de estrellas variables basándose en sus características observacionales. El proyecto utiliza técnicas avanzadas de machine learning para el análisis de datos astronómicos.",
                context: "Proyecto interdisciplinario que combina astronomía y ciencia de datos, desarrollado para explorar aplicaciones de machine learning en astrofísica."
            },
            chernoffFaces: {
                title: "Visualizador de Caras de Chernoff",
                description: "Visualización de datos multivariantes utilizando las caras de Chernoff.",
                fullDescription: "Este proyecto se centra en la visualización de datos multivariantes mediante el uso de las caras de Chernoff, una técnica que asigna las características de los datos a rostros humanos estilizados. El objetivo es facilitar la interpretación intuitiva de datos complejos.",
                context: "Desarrollado como parte de un curso de visualización de datos, este proyecto explora la intersección entre el arte y la ciencia en la representación de datos."
            },
            ECHOgraph: {
                title: "ECHOgraph",
                description: "Exploración interactiva de datos multivariados a través de un diagrama de cuerdas.",
                fullDescription: "El proyecto permite explorar de forma interactiva los puntos de vista de los personajes a través de un diagrama de cuerdas y un grafo basado en datos JSON, ofreciendo funciones de selección, tooltips informativos y filtros por temporada.",
                context: "Desarrollado como parte de un curso de visualización de datos, este proyecto combina técnicas avanzadas de visualización con una interfaz de usuario interactiva."
            },
            cpQueryTranslate: {
                title: "Estudio de caso sobre geometría computacional",
                description: "Tema: Búsqueda del par más cercano en una consulta trasladada",
                fullDescription: "Este informe fue realizado para el curso Algoritmos para Big Data y resume un estudio de investigación muy interesante presentado en el artículo Searching for the closest-pair in a query translate de Jie Xue, Yuan Li, Saladi Rahul y Ravi Janardan.",
                context: "Desarrollado como parte de un curso de ingeniería de datos"
            }
        },
        contact: {
            title: "Contáctame",
            subtitle: "Siempre estoy abierto a nuevas oportunidades",
            email: "Email",
            location: "Ubicación", 
            locationValue: "Roma, Italia",
            social: "Redes Sociales",
            timezone: "Zona horaria: UTC+1",
            sendEmail: "Enviar Email",
            cta: {
                title: "¿Tienes un proyecto en mente?",
                description: "Siempre estoy interesado en colaboraciones innovadoras y desafíos en el campo de la Ingeniería de Datos.",
                email: "Envíame un email",
                linkedin: "Contáctame en LinkedIn"
            }
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    }
};

// Project data for modals
const projectData = {
    'data-integration': {
        icon: 'fas fa-database',
        technologies: ['Python', 'Pandas', 'Data Integration', 'Schema Mediation', 'Record Linkage'],
        links: [
            { url: 'https://github.com/gabrulele/Data_Integration', text: 'View on GitHub', icon: 'fab fa-github' }
        ]
    },
    'claims-extraction': {
        icon: 'fas fa-brain',
        technologies: ['Python', 'LLM', 'NLP', 'Machine Learning', 'Scientific Data Processing'],
        links: [
            { url: 'https://github.com/gabrulele/Claims_Extraction', text: 'View on GitHub', icon: 'fab fa-github' }
        ]
    },
    'variable-stars': {
        icon: 'fas fa-star',
        technologies: ['Python', 'Scikit-learn', 'Astronomy', 'Machine Learning', 'Data Analysis'],
        links: [
            { url: 'https://github.com/gabrulele/Variables_Stars_Classification', text: 'View on GitHub', icon: 'fab fa-github' }
        ]
    },
    'chernoff-faces': {
        icon: 'fas fa-smile',
        technologies: ['D3.js', 'JavaScript', 'HTML & CSS'],
        links: [
            { url: 'https://github.com/gabrulele/E', text: 'View on GitHub', icon: 'fab fa-github' }
        ]
    },
    'echograph': {
        icon: 'fas fa-waveform',
        technologies: ['Python', 'D3.js', 'Data Visualization'],
        links: [
            { url: 'https://github.com/ilTrabba/ECHOgraph', text: 'View on GitHub', icon: 'fab fa-github' }
        ]
    },
    'cpquerytranslate': {
        icon: 'fas fa-code',
        technologies: ['Algorithms', 'Computational Geometry'],
        links: [
            { url: 'https://arxiv.org/abs/1807.09498', text: 'View paper', icon: 'fab fa-github' }
        ]
    }
};

// Language flags mapping
const languageFlags = {
    'it': '🇮🇹',
    'en': '🇺🇸',
    'es': '🇪🇸'
};

// DOM Elements
const themeSwitch = document.getElementById('theme-switch');
const languageBtn = document.getElementById('language-btn');
const languageOptions = document.getElementById('language-options');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const projectModal = document.getElementById('project-modal');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'dark';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Language Management
function initLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'it';
    updateLanguage(savedLanguage);
    updateLanguageButton(savedLanguage);
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update document title
    document.title = translations[lang].title;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    localStorage.setItem('language', lang);
}

function updateLanguageButton(lang) {
    const flag = languageBtn.querySelector('.flag');
    const langCode = languageBtn.querySelector('.lang-code');
    
    flag.textContent = languageFlags[lang];
    langCode.textContent = lang.toUpperCase();
    
    // Update active state in options
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Language Dropdown Management
function toggleLanguageDropdown() {
    const dropdown = languageBtn.closest('.language-dropdown');
    dropdown.classList.toggle('active');
}

function closeLanguageDropdown() {
    const dropdown = languageBtn.closest('.language-dropdown');
    dropdown.classList.remove('active');
}

// Mobile Menu Management
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Project Modal Management
function openProjectModal(projectId) {
    const currentLang = localStorage.getItem('language') || 'it';
    const project = translations[currentLang].projects[projectId];
    const projectInfo = projectData[projectId];
    
    if (!project || !projectInfo) return;
    
    const modalBody = document.getElementById('modal-body');
    
    // Get context label based on language
    const contextLabel = currentLang === 'it' ? 'Contesto del Progetto' : 
                        currentLang === 'en' ? 'Project Context' : 
                        'Contexto del Proyecto';
    
    const techLabel = currentLang === 'it' ? 'Tecnologie Utilizzate' : 
                     currentLang === 'en' ? 'Technologies Used' : 
                     'Tecnologías Utilizadas';
    
    const linksLabel = currentLang === 'it' ? 'Link Utili' : 
                      currentLang === 'en' ? 'Useful Links' : 
                      'Enlaces Útiles';
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <i class="${projectInfo.icon} modal-icon"></i>
            <h2 class="modal-title">${project.title}</h2>
        </div>
        
        <div class="modal-description">
            <p>${project.fullDescription}</p>
        </div>
        
        <div class="modal-section">
            <h4>${contextLabel}</h4>
            <p>${project.context}</p>
        </div>
        
        <div class="modal-section">
            <h4>${techLabel}</h4>
            <div class="modal-tech">
                ${projectInfo.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h4>${linksLabel}</h4>
            <div class="modal-links">
                ${projectInfo.links.map(link => 
                    `<a href="${link.url}" target="_blank" class="modal-link">
                        <i class="${link.icon}"></i>
                        ${link.text}
                    </a>`
                ).join('')}
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Scroll to target with offset for fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = `${getComputedStyle(document.documentElement).getPropertyValue('--bg-primary')}dd`;
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');
            header.style.backdropFilter = 'blur(10px)';
        }
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const nameElement = document.querySelector('.name-highlight');
    if (nameElement) {
        const text = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                nameElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// CV Download functionality
function downloadCV() {
    // You can replace this with the actual path to your CV
    const cvUrl = './cv/Gabriele_Rizzitiello_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Gabriele_Rizzitiello_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show toast notification
    const currentLang = localStorage.getItem('language') || 'it';
    const message = currentLang === 'it' ? 'Download CV avviato!' : 
                   currentLang === 'en' ? 'CV download started!' : 
                   '¡Descarga de CV iniciada!';
    showToast(message);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initScrollAnimations();
    initTypingEffect();
    
    // Theme toggle
    themeSwitch.addEventListener('change', toggleTheme);
    
    // Language dropdown
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLanguageDropdown();
    });
    
    // Language options
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            updateLanguage(lang);
            updateLanguageButton(lang);
            closeLanguageDropdown();
        });
    });
    
    // Close language dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !languageOptions.contains(e.target)) {
            closeLanguageDropdown();
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    // Modal close events
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
});

// Global functions for modal (called from HTML)
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.downloadCV = downloadCV;

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        closeLanguageDropdown();
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Email copying functionality
function copyEmail() {
    const email = 'gab.rizzitiello@stud.uniroma3.it';
    navigator.clipboard.writeText(email).then(() => {
        const currentLang = localStorage.getItem('language') || 'it';
        const message = currentLang === 'it' ? 'Email copiata negli appunti!' : 
                       currentLang === 'en' ? 'Email copied to clipboard!' : 
                       '¡Email copiado al portapapeles!';
        showToast(message);
    });
}

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--accent-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: var(--shadow-large);
        z-index: 3000;
        opacity: 0;
        transform: translateY(20px);
        transition: var(--transition);
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images have data-src
document.addEventListener('DOMContentLoaded', () => {
    initLazyLoading();
});