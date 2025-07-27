// Translations object
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
            subtitle: "Data Engineer & Studente di Sistemi Complessi",
            cta: "Scopri i miei progetti",
            contact: "Contattami"
        },
        about: {
            title: "Chi sono",
            subtitle: "La mia storia e il mio percorso",
            description: "Mi chiamo Gabriele Rizzitiello e sono uno studente di Sistemi informatici complessi, attualmente sto conseguendo la laurea magistrale in Data Engineering presso l'Università Roma Tre. Sono appassionato di tecnologie innovative e dell'analisi dei dati.",
            projects: "Progetti completati",
            experience: "Anni di esperienza", 
            passion: "Passione per i dati"
        },
        skills: {
            title: "Competenze",
            subtitle: "Le tecnologie che utilizzo",
            programming: "Linguaggi di Programmazione",
            data: "Data Engineering",
            tools: "Tools & Frameworks"
        },
        projects: {
            title: "Progetti",
            subtitle: "I miei lavori più significativi",
            viewCode: "Vedi codice",
            dataIntegration: {
                title: "Data Integration Project",
                description: "Progetto di integrazione dati con focus sulla creazione di schemi mediati. L'obiettivo principale era unificare e rendere coerenti i dati provenienti da varie fonti."
            },
            claimsExtraction: {
                title: "Claims Extraction Project", 
                description: "Automazione dell'analisi di tabelle estratte da documenti scientifici utilizzando Large Language Models (LLM)."
            },
            variableStars: {
                title: "Variable Stars Classification",
                description: "Classificazione di stelle variabili utilizzando tecniche di machine learning su un dataset di osservazioni astronomiche."
            }
        },
        contact: {
            title: "Contattami",
            subtitle: "Sono sempre aperto a nuove opportunità",
            email: "Email",
            location: "Posizione",
            locationValue: "Roma, Italia"
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
            subtitle: "Data Engineer & Complex Systems Student",
            cta: "Discover my projects",
            contact: "Contact me"
        },
        about: {
            title: "About me",
            subtitle: "My story and journey",
            description: "My name is Gabriele Rizzitiello and I'm a Complex computer systems student, currently studying for my Master's degree at Roma Tre University in Data Engineering. I'm passionate about innovative technologies and data analysis.",
            projects: "Completed projects",
            experience: "Years of experience",
            passion: "Passion for data"
        },
        skills: {
            title: "Skills", 
            subtitle: "Technologies I use",
            programming: "Programming Languages",
            data: "Data Engineering",
            tools: "Tools & Frameworks"
        },
        projects: {
            title: "Projects",
            subtitle: "My most significant works",
            viewCode: "View code",
            dataIntegration: {
                title: "Data Integration Project",
                description: "Data integration project focusing on the creation of mediated schemas. The main goal was to unify and make consistent data from various sources."
            },
            claimsExtraction: {
                title: "Claims Extraction Project",
                description: "Automation of table analysis extracted from scientific papers using Large Language Models (LLM)."
            },
            variableStars: {
                title: "Variable Stars Classification", 
                description: "Classification of variable stars using machine learning techniques on a dataset of astronomical observations."
            }
        },
        contact: {
            title: "Contact me",
            subtitle: "I'm always open to new opportunities",
            email: "Email",
            location: "Location",
            locationValue: "Rome, Italy"
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
            subtitle: "Ingeniero de Datos y Estudiante de Sistemas Complejos",
            cta: "Descubre mis proyectos",
            contact: "Contáctame"
        },
        about: {
            title: "Sobre mí",
            subtitle: "Mi historia y trayectoria",
            description: "Me llamo Gabriele Rizzitiello y soy estudiante de Sistemas informáticos complejos, actualmente cursando mi maestría en Ingeniería de Datos en la Universidad Roma Tre. Me apasionan las tecnologías innovadoras y el análisis de datos.",
            projects: "Proyectos completados",
            experience: "Años de experiencia",
            passion: "Pasión por los datos"
        },
        skills: {
            title: "Habilidades",
            subtitle: "Tecnologías que uso",
            programming: "Lenguajes de Programación",
            data: "Ingeniería de Datos",
            tools: "Herramientas y Frameworks"
        },
        projects: {
            title: "Proyectos",
            subtitle: "Mis trabajos más significativos",
            viewCode: "Ver código",
            dataIntegration: {
                title: "Proyecto de Integración de Datos",
                description: "Proyecto de integración de datos centrado en la creación de esquemas mediados. El objetivo principal era unificar y hacer consistentes los datos de varias fuentes."
            },
            claimsExtraction: {
                title: "Proyecto de Extracción de Claims",
                description: "Automatización del análisis de tablas extraídas de documentos científicos utilizando Large Language Models (LLM)."
            },
            variableStars: {
                title: "Clasificación de Estrellas Variables",
                description: "Clasificación de estrellas variables utilizando técnicas de machine learning en un conjunto de datos de observaciones astronómicas."
            }
        },
        contact: {
            title: "Contáctame",
            subtitle: "Siempre estoy abierto a nuevas oportunidades",
            email: "Email",
            location: "Ubicación", 
            locationValue: "Roma, Italia"
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    }
};

// DOM Elements
const themeSwitch = document.getElementById('theme-switch');
const languageSelect = document.getElementById('language-select');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

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
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);
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

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Mobile Menu Management
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
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
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = `${getComputedStyle(document.documentElement).getPropertyValue('--bg-primary')}dd`;
        } else {
            header.style.background = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');
        }
        
        lastScrollY = currentScrollY;
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
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat, .contact-item, .social-link');
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
    
    // Language selector
    languageSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
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
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});