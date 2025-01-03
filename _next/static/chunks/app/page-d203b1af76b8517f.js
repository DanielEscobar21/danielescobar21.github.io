(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 974:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9804));


/***/ }),

/***/ 9804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 233 modules
var proxy = __webpack_require__(7500);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./src/context/ThemeContext.tsx
var ThemeContext = __webpack_require__(2025);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(8614);
;// CONCATENATED MODULE: ./components/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0,react.useState)(false);
    const [activeSection, setActiveSection] = (0,react.useState)("inicio");
    const { theme, toggleTheme, language, setLanguage } = (0,ThemeContext/* useTheme */.F)();
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        element === null || element === void 0 ? void 0 : element.scrollIntoView({
            behavior: "smooth"
        });
        setIsMenuOpen(false);
    };
    // Detectar sección activa durante el scroll
    (0,react.useEffect)(()=>{
        const handleScroll = ()=>{
            const sections = [
                "inicio",
                "sobre-mi",
                "skills",
                "educacion",
                "experiencia",
                "proyectos",
                "contacto"
            ];
            const current = sections.find((section)=>{
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const menuItems = {
        es: {
            inicio: "Inicio",
            sobreMi: "Sobre M\xed",
            skills: "Habilidades",
            educacion: "Formaci\xf3n",
            experiencia: "Experiencia",
            proyectos: "Proyectos",
            contacto: "Contacto"
        },
        en: {
            inicio: "Home",
            sobreMi: "About",
            skills: "Skills",
            educacion: "Education",
            experiencia: "Experience",
            proyectos: "Projects",
            contacto: "Contact"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        },
        className: "fixed top-0 left-0 w-full z-50 bg-light-base/80 dark:bg-dark-base/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.span, {
                            className: "text-lg font-light cursor-pointer font-mono text-neutral-900 dark:text-neutral-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors",
                            whileHover: {
                                scale: 1.05
                            },
                            onClick: ()=>scrollToSection("inicio"),
                            children: "descoba.dev"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: [
                                Object.entries(menuItems[language]).map((param)=>{
                                    let [key, value] = param;
                                    const sectionId = key === "sobreMi" ? "sobre-mi" : key;
                                    const isActive = activeSection === sectionId;
                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.button, {
                                        onClick: ()=>scrollToSection(sectionId),
                                        className: "text-sm transition-colors relative ".concat(isActive ? "text-primary-600 dark:text-primary-400" : "text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: [
                                            value,
                                            isActive && /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                                className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400",
                                                layoutId: "underline"
                                            })
                                        ]
                                    }, key);
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.button, {
                                    onClick: toggleTheme,
                                    className: "p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 180
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17
                                    },
                                    children: theme === "light" ? "◐" : "◑"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.select, {
                                    value: language,
                                    onChange: (e)=>setLanguage(e.target.value),
                                    className: "bg-transparent text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none cursor-pointer",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                            value: "en",
                                            children: "EN"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                            value: "es",
                                            children: "ES"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "md:hidden flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.button, {
                                    onClick: toggleTheme,
                                    className: "p-2 text-gray-600 dark:text-gray-400",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 180
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    children: theme === "light" ? "◐" : "◑"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.select, {
                                    value: language,
                                    onChange: (e)=>setLanguage(e.target.value),
                                    className: "bg-transparent text-sm text-gray-600 dark:text-gray-400",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                            value: "en",
                                            children: "EN"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                            value: "es",
                                            children: "ES"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.button, {
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    className: "text-gray-600 dark:text-gray-400 text-2xl",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    children: isMenuOpen ? "\xd7" : "≡"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AnimatePresence/* AnimatePresence */.M, {
                children: isMenuOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                    },
                    className: "md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "px-4 py-2 space-y-1",
                        children: Object.entries(menuItems[language]).map((param)=>{
                            let [key, value] = param;
                            const sectionId = key === "sobreMi" ? "sobre-mi" : key;
                            const isActive = activeSection === sectionId;
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.button, {
                                onClick: ()=>scrollToSection(sectionId),
                                className: "block w-full text-left py-2 ".concat(isActive ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"),
                                whileHover: {
                                    x: 10
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                children: value
                            }, key);
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ var components_Navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(3145);
;// CONCATENATED MODULE: ./src/content/texts.ts
const texts = {
    es: {
        hero: {
            welcome: "Bienvenido",
            name: "Daniel Escobar Araujo",
            title: "Ingeniero de Software",
            subtitle: "Creando soluciones digitales innovadoras",
            scrollText: "Desliza para m\xe1s",
            buttons: {
                resume: "Descargar CV",
                linkedin: "Visitar LinkedIn"
            }
        },
        about: {
            title: "Sobre M\xed",
            description: "Soy un Ingeniero de Software Full Stack apasionado por crear soluciones digitales innovadoras y escalables. Con m\xe1s de 2 a\xf1os de experiencia, me especializo en el desarrollo de aplicaciones web y m\xf3viles utilizando tecnolog\xedas modernas.\n\n      Mi experiencia abarca desde el desarrollo frontend con React y TypeScript hasta la implementaci\xf3n de soluciones backend robustas con Django y Node.js. Me destaco en la integraci\xf3n de servicios cloud y la optimizaci\xf3n de rendimiento, siempre enfocado en crear experiencias de usuario excepcionales.\n\n      Disfruto especialmente trabajando en proyectos desafiantes que requieren pensamiento creativo y soluciones t\xe9cnicas innovadoras. Mi objetivo es seguir creciendo como desarrollador mientras contribuyo a proyectos que generen un impacto positivo.",
            skills: {
                technical: {
                    title: "Habilidades T\xe9cnicas",
                    items: [
                        {
                            name: "Lenguajes de Programaci\xf3n",
                            skills: [
                                "Python",
                                "Java",
                                "JavaScript",
                                "TypeScript",
                                "PHP",
                                "Swift",
                                "C#",
                                "Kotlin",
                                "HTML/CSS",
                                "SQL",
                                "Shell Scripting",
                                "y m\xe1s"
                            ]
                        },
                        {
                            name: "Frontend",
                            skills: [
                                "React.js",
                                "Angular",
                                "Vue.js",
                                "Redux",
                                "Next.js",
                                "Tailwind CSS",
                                "Material UI",
                                "Framer Motion",
                                "Bootstrap",
                                "Sass/LESS",
                                "Webpack",
                                "Vite",
                                "y m\xe1s"
                            ]
                        },
                        {
                            name: "Backend",
                            skills: [
                                "Django",
                                "Flask",
                                "Express.js",
                                "Laravel",
                                "ASP.NET",
                                "Node.js",
                                "GraphQL",
                                "REST APIs",
                                "Microservices",
                                "Socket.io",
                                "y m\xe1s"
                            ]
                        },
                        {
                            name: "Mobile",
                            skills: [
                                "Android SDK",
                                "iOS SDK",
                                "React Native",
                                "Kotlin",
                                "y m\xe1s"
                            ]
                        },
                        {
                            name: "Cloud & DevOps",
                            skills: [
                                "AWS",
                                "Docker",
                                "Kubernetes",
                                "Firebase",
                                "GIT",
                                "CI/CD",
                                "Jenkins",
                                "GitHub Actions",
                                "Terraform",
                                "Nginx",
                                "y m\xe1s"
                            ]
                        },
                        {
                            name: "Bases de Datos & APIs",
                            skills: [
                                "PostgreSQL",
                                "MongoDB",
                                "Redis",
                                "MySQL",
                                "OpenAI API",
                                "Stripe API",
                                "Websockets",
                                "Django Channels",
                                "y m\xe1s"
                            ]
                        }
                    ]
                },
                soft: {
                    title: "Habilidades Blandas",
                    items: [
                        {
                            name: "Idiomas",
                            description: "Espa\xf1ol: Nativo | Ingl\xe9s: Profesional"
                        },
                        {
                            name: "Liderazgo",
                            description: "Capacidad para dirigir equipos y proyectos de manera efectiva"
                        },
                        {
                            name: "Comunicaci\xf3n",
                            description: "Excelente comunicaci\xf3n verbal y escrita en entornos profesionales"
                        },
                        {
                            name: "Trabajo en Equipo",
                            description: "Colaboraci\xf3n efectiva y construcci\xf3n de relaciones positivas"
                        },
                        {
                            name: "Adaptabilidad",
                            description: "Flexibilidad para adaptarse a nuevos desaf\xedos y tecnolog\xedas"
                        },
                        {
                            name: "Pensamiento Cr\xedtico",
                            description: "An\xe1lisis profundo y resoluci\xf3n efectiva de problemas"
                        },
                        {
                            name: "Gesti\xf3n de Proyectos",
                            description: "Planificaci\xf3n, ejecuci\xf3n y seguimiento de proyectos"
                        }
                    ]
                },
                languages: {
                    title: "Idiomas",
                    items: [
                        {
                            name: "Espa\xf1ol",
                            level: "Nativo",
                            description: "Lengua materna"
                        },
                        {
                            name: "Ingl\xe9s",
                            level: "Profesional",
                            description: "Nivel profesional hablado y escrito"
                        }
                    ]
                }
            },
            images: [
                {
                    src: "/img/profile/profile1.jpg",
                    alt: "!Ese soy yo!"
                }
            ]
        },
        projects: {
            title: "Proyectos",
            summary: {
                title: "Resumen de Logros",
                points: [
                    "Desarrollo de aplicaciones m\xf3viles y web de alta calidad utilizando tecnolog\xedas modernas como React Native, React.js y Django.",
                    "Integraci\xf3n exitosa de servicios de IA y procesamiento de pagos, mejorando la experiencia del usuario y la funcionalidad del negocio.",
                    "Implementaci\xf3n de arquitecturas escalables y seguras, manejando datos sensibles y alto tr\xe1fico de usuarios.",
                    "Creaci\xf3n de interfaces intuitivas y responsivas, resultando en una alta satisfacci\xf3n del usuario y retenci\xf3n de clientes.",
                    "Gesti\xf3n eficiente de bases de datos y APIs, optimizando el rendimiento y la seguridad de las aplicaciones."
                ]
            },
            cards: [
                {
                    title: "Zplendid",
                    type: "Professional",
                    company: "Alluxi",
                    description: "Aplicaci\xf3n m\xf3vil y plataforma web para cl\xednica bari\xe1trica",
                    longDescription: "Desarrollo de una aplicaci\xf3n m\xf3vil completa para una cl\xednica bari\xe1trica que gestiona citas, pagos, progreso de pacientes y planes diet\xe9ticos. Incluye integraci\xf3n con IA y un panel de administraci\xf3n web.",
                    tech: [
                        "React.js",
                        "React Native",
                        "Redux",
                        "TypeScript",
                        "Django",
                        "Python",
                        "Firebase",
                        "OpenAI",
                        "Stripe",
                        "PostgreSQL"
                    ],
                    achievements: [
                        "Desarroll\xe9 una aplicaci\xf3n m\xf3vil con React Native, Redux y TypeScript para gesti\xf3n integral de pacientes.",
                        "Integr\xe9 modelos de OpenAI para brindar soporte impulsado por IA a los usuarios.",
                        "Cre\xe9 interfaces intuitivas con enfoque en UX y acceso basado en roles.",
                        "Constru\xed el backend con Django REST Framework, gestionando usuarios, roles, notificaciones, chat, cronjobs y pagos a trav\xe9s de Stripe.",
                        "Desarroll\xe9 dos sitios web con React: uno informativo y otro como panel de administraci\xf3n."
                    ]
                },
                {
                    title: "Kouchea",
                    type: "Professional",
                    company: "Alluxi",
                    description: "Plataforma de ense\xf1anza de matem\xe1ticas en l\xednea",
                    longDescription: "Desarrollo de una plataforma educativa para la ense\xf1anza de matem\xe1ticas con sistema de suscripciones, pagos y gesti\xf3n de contenido.",
                    url: "https://kouchea.com",
                    tech: [
                        "Laravel",
                        "PHP",
                        "Bootstrap",
                        "SASS",
                        "Stripe",
                        "MySQL"
                    ],
                    achievements: [
                        "Desarroll\xe9 una plataforma en l\xednea para ense\xf1anza de matem\xe1ticas usando Laravel.",
                        "Facilit\xe9 m\xe1s de 1,000 sesiones de aprendizaje con una plataforma Laravel responsive y segura.",
                        "Dise\xf1\xe9 la plataforma usando Bootstrap y Sass, asegurando un dise\xf1o responsive y atractivo.",
                        "Implement\xe9 control de acceso basado en roles y permisos usando Laravel."
                    ]
                },
                {
                    title: "Pideisa",
                    type: "Professional",
                    company: "Alluxi",
                    description: "Plataforma de medici\xf3n y calibraci\xf3n de temperaturas para metales",
                    longDescription: "Desarrollo de una plataforma especializada para la medici\xf3n y calibraci\xf3n precisa de temperaturas en procesos metal\xfargicos, facilitando el control de calidad y la documentaci\xf3n de procesos.",
                    tech: [
                        "Django",
                        "Vue.js",
                        "Python",
                        "PostgreSQL",
                        "Docker",
                        "Bootstrap",
                        "REST APIs",
                        "Celery"
                    ],
                    achievements: [
                        "Desarroll\xe9 una plataforma web completa para la medici\xf3n y calibraci\xf3n de temperaturas en procesos metal\xfargicos.",
                        "Implement\xe9 algoritmos de c\xe1lculo y validaci\xf3n para asegurar mediciones precisas.",
                        "Cre\xe9 un sistema de reportes automatizados para documentaci\xf3n y control de calidad.",
                        "Integr\xe9 funcionalidades de exportaci\xf3n de datos en m\xfaltiples formatos.",
                        "Dise\xf1\xe9 una interfaz intuitiva para la visualizaci\xf3n de datos y tendencias de temperatura."
                    ]
                },
                {
                    title: "Sistema de Gesti\xf3n Gubernamental",
                    type: "Professional",
                    company: "BIIDA Technology",
                    description: "Plataforma para la gesti\xf3n y administraci\xf3n de empresas y multas de cumplimiento gubernamental",
                    longDescription: "Desarrollo de un sistema integral para una entidad gubernamental que permite la gesti\xf3n, seguimiento y administraci\xf3n de empresas registradas, as\xed como el control y monitoreo de multas y cumplimiento normativo.",
                    tech: [
                        "Java",
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "MySQL",
                        "JQuery",
                        "Bootstrap",
                        "Apache Tomcat"
                    ],
                    achievements: [
                        "Desarroll\xe9 una plataforma web completa para la gesti\xf3n de registros empresariales y seguimiento de multas.",
                        "Implement\xe9 un sistema de autenticaci\xf3n y autorizaci\xf3n basado en roles para diferentes niveles de usuarios gubernamentales.",
                        "Dise\xf1\xe9 e implement\xe9 una base de datos relacional para el manejo eficiente de registros empresariales y multas.",
                        "Cre\xe9 interfaces intuitivas para la gesti\xf3n de documentos y seguimiento de casos.",
                        "Integr\xe9 funcionalidades de generaci\xf3n de reportes y estad\xedsticas para el an\xe1lisis de cumplimiento."
                    ]
                },
                {
                    title: "Farmacia Naturista Vida",
                    type: "Personal",
                    description: "Sistema de administraci\xf3n de medicamentos y recetas para farmacia naturista",
                    longDescription: "Desarrollo de una plataforma web para la gesti\xf3n integral de una farmacia naturista, incluyendo control de inventario de medicamentos, generaci\xf3n de recetas m\xe9dicas, sistema de impresi\xf3n y administraci\xf3n de usuarios con diferentes niveles de acceso.",
                    url: "https://github.com/DanielEscobar21/VIDAinfo.git",
                    tech: [
                        "Laravel",
                        "PHP",
                        "MySQL",
                        "JavaScript",
                        "Bootstrap",
                        "HTML",
                        "CSS",
                        "jQuery",
                        "DomPDF"
                    ],
                    achievements: [
                        "Desarroll\xe9 un sistema completo de gesti\xf3n de inventario para medicamentos naturistas.",
                        "Implement\xe9 un m\xf3dulo de generaci\xf3n e impresi\xf3n de recetas m\xe9dicas con PDF personalizado.",
                        "Cre\xe9 un sistema de autenticaci\xf3n y autorizaci\xf3n con diferentes roles de usuario.",
                        "Dise\xf1\xe9 una interfaz intuitiva para la gesti\xf3n de medicamentos y recetas.",
                        "Integr\xe9 funcionalidades de b\xfasqueda y filtrado avanzado de medicamentos."
                    ]
                },
                {
                    title: "Express Dating",
                    type: "Professional",
                    company: "Alluxi",
                    description: "Aplicaci\xf3n m\xf3vil de citas con videollamadas y mensajer\xeda en tiempo real",
                    longDescription: "Desarrollo de una aplicaci\xf3n m\xf3vil nativa de Android para citas que incluye funcionalidades de videollamadas, mensajer\xeda instant\xe1nea, matching de usuarios y perfiles personalizados.",
                    url: "https://play.google.com/store/apps/details?id=com.globalsoftm.gs_app_express_dating&pcampaignid=web_share",
                    tech: [
                        "Kotlin",
                        "Android SDK",
                        "Firebase",
                        "Sinch SDK",
                        "Cloud Firestore",
                        "Firebase Auth",
                        "Firebase Storage",
                        "Material Design",
                        "Google Maps API",
                        "Push Notifications"
                    ],
                    achievements: [
                        "Desarroll\xe9 una aplicaci\xf3n nativa de Android usando Kotlin y siguiendo los principios de Material Design.",
                        "Implement\xe9 un sistema de videollamadas en tiempo real utilizando el SDK de Sinch.",
                        "Integr\xe9 Firebase para la gesti\xf3n de usuarios, mensajer\xeda instant\xe1nea y almacenamiento de datos.",
                        "Dise\xf1\xe9 un algoritmo de matching basado en preferencias y ubicaci\xf3n de usuarios.",
                        "Implement\xe9 un sistema de notificaciones push para mantener a los usuarios actualizados."
                    ]
                }
            ]
        },
        contact: {
            title: "Contacto",
            subtitle: "\xbfTienes un proyecto en mente? \xa1Hablemos!",
            email: "danesc21@gmail.com"
        },
        experience: {
            title: "Experiencia",
            timeline: [
                {
                    date: "Mayo 2022 - Presente",
                    role: "Software Engineer",
                    company: "Alluxi",
                    logo: "/img/companies/alluxi.png",
                    location: "Remoto",
                    description: "Desarrollo full-stack y liderazgo t\xe9cnico de equipos en proyectos empresariales.",
                    tech: [
                        "JS",
                        "TS",
                        "Python",
                        "PHP",
                        "Node.js",
                        "React",
                        "Next.js",
                        "Django",
                        "Laravel",
                        "AWS",
                        "Docker",
                        "CI/CD",
                        "PostgreSQL",
                        "Redux",
                        "REST APIs",
                        "Git",
                        "Jira",
                        "Tailwind CSS"
                    ],
                    achievements: [
                        "Lider\xe9 equipos multifuncionales para implementar m\xe1s de 3 proyectos full-stack, reduciendo el tiempo de implementaci\xf3n en un 20%.",
                        "Optimic\xe9 implementaciones en AWS, logrando tiempos de carga 30% m\xe1s r\xe1pidos y mayor tiempo de actividad de las aplicaciones.",
                        "Desarroll\xe9 y mantuve aplicaciones multiplataforma utilizando frameworks modernos.",
                        "Apliqu\xe9 metodolog\xedas \xe1giles y herramientas como Jira para la gesti\xf3n de proyectos."
                    ]
                },
                {
                    date: "Enero 2022 - Mayo 2022",
                    role: "Software Developer",
                    company: "BIIDA Technology",
                    logo: "/img/companies/biida.png",
                    location: "Le\xf3n, Guanajuato",
                    description: "Desarrollo full-stack y optimizaci\xf3n de aplicaciones web empresariales.",
                    tech: [
                        "JS",
                        "TS",
                        "Java",
                        "PHP",
                        "Node.js",
                        "Angular",
                        "Express.js",
                        "Laravel",
                        "MySQL",
                        "HTML",
                        "CSS",
                        "Bootstrap",
                        "Git"
                    ],
                    achievements: [
                        "Dise\xf1\xe9 interfaces de usuario responsivas, mejorando la participaci\xf3n de usuarios en un 15%.",
                        "Optimic\xe9 integraciones de API, reduciendo tiempos de respuesta en un 25%.",
                        "Mejor\xe9 el rendimiento de bases de datos en un 20% mediante t\xe9cnicas de optimizaci\xf3n.",
                        "Contribu\xed al ciclo completo de desarrollo de software, colaborando en equipos \xe1giles."
                    ]
                }
            ]
        },
        education: {
            title: "Formaci\xf3n",
            timeline: [
                {
                    date: "2023",
                    degree: "Especialidad en Desarrollo de Aplicaciones Empresariales",
                    institution: "Instituto Tecnol\xf3gico Nacional de M\xe9xico",
                    description: "Especializaci\xf3n en arquitecturas empresariales y desarrollo de aplicaciones escalables.",
                    achievements: [
                        "Patrones de dise\xf1o empresariales",
                        "Arquitecturas distribuidas y microservicios",
                        "Integraci\xf3n de sistemas empresariales",
                        "Gesti\xf3n de proyectos de software"
                    ]
                },
                {
                    date: "2018 - 2023",
                    degree: "Ingenier\xeda en Sistemas Computacionales",
                    institution: "Instituto Tecnol\xf3gico Nacional de M\xe9xico",
                    description: "Especializaci\xf3n en desarrollo de software, bases de datos y computaci\xf3n en la nube.",
                    achievements: [
                        "Promedio General: 93/100",
                        "Cursos Relevantes: Estructuras de Datos (Java), Probabilidad y Estad\xedstica (Python)",
                        "Programaci\xf3n Orientada a Objetos (Java), Simulaci\xf3n (Python)",
                        "Bases de Datos Avanzadas (SQL), Ingenier\xeda de Software",
                        "Computaci\xf3n en la Nube (AWS), Ciencia de Datos"
                    ]
                },
                {
                    date: "2022",
                    degree: "AWS Cloud Practitioner Essentials",
                    institution: "Amazon Web Services",
                    description: "Certificaci\xf3n fundamental en servicios y conceptos de AWS Cloud.",
                    achievements: []
                }
            ]
        }
    },
    en: {
        hero: {
            welcome: "Welcome",
            name: "Daniel Escobar Araujo",
            title: "Software Engineer",
            subtitle: "Creating innovative digital solutions",
            scrollText: "Scroll for more",
            buttons: {
                resume: "Download Resume",
                linkedin: "Visit LinkedIn"
            }
        },
        about: {
            title: "About Me",
            description: "I am a Full Stack Software Engineer passionate about creating innovative and scalable digital solutions. With over 2 years of experience, I specialize in developing web and mobile applications using modern technologies.\n\n      My expertise ranges from frontend development with React and TypeScript to implementing robust backend solutions with Django and Node.js. I excel at cloud service integration and performance optimization, always focused on creating exceptional user experiences.\n\n      I particularly enjoy working on challenging projects that require creative thinking and innovative technical solutions. My goal is to continue growing as a developer while contributing to projects that make a positive impact.",
            skills: {
                technical: {
                    title: "Technical Skills",
                    items: [
                        {
                            name: "Programming Languages",
                            skills: [
                                "Python",
                                "Java",
                                "JavaScript",
                                "TypeScript",
                                "PHP",
                                "Swift",
                                "C#",
                                "Kotlin",
                                "HTML/CSS",
                                "SQL",
                                "Shell Scripting",
                                "and more"
                            ]
                        },
                        {
                            name: "Frontend",
                            skills: [
                                "React.js",
                                "Angular",
                                "Vue.js",
                                "Redux",
                                "Next.js",
                                "Tailwind CSS",
                                "Material UI",
                                "Framer Motion",
                                "Bootstrap",
                                "Sass/LESS",
                                "Webpack",
                                "and more"
                            ]
                        },
                        {
                            name: "Backend",
                            skills: [
                                "Django",
                                "Flask",
                                "Express.js",
                                "Laravel",
                                "ASP.NET",
                                "Node.js",
                                "GraphQL",
                                "REST APIs",
                                "Microservices",
                                "Socket.io",
                                "and more"
                            ]
                        },
                        {
                            name: "Mobile",
                            skills: [
                                "Android SDK",
                                "iOS SDK",
                                "React Native",
                                "Kotlin",
                                "and more"
                            ]
                        },
                        {
                            name: "Cloud & DevOps",
                            skills: [
                                "AWS",
                                "Docker",
                                "Kubernetes",
                                "Firebase",
                                "GIT",
                                "CI/CD",
                                "Jenkins",
                                "GitHub Actions",
                                "Terraform",
                                "Nginx",
                                "and more"
                            ]
                        },
                        {
                            name: "Databases & APIs",
                            skills: [
                                "PostgreSQL",
                                "MongoDB",
                                "Redis",
                                "MySQL",
                                "OpenAI API",
                                "Stripe API",
                                "Websockets",
                                "Django Channels",
                                "and more"
                            ]
                        }
                    ]
                },
                soft: {
                    title: "Soft Skills",
                    items: [
                        {
                            name: "Languages",
                            description: "Spanish: Native | English: Professional"
                        },
                        {
                            name: "Leadership",
                            description: "Ability to effectively lead teams and projects"
                        },
                        {
                            name: "Communication",
                            description: "Excellent verbal and written communication in professional settings"
                        },
                        {
                            name: "Teamwork",
                            description: "Effective collaboration and building positive relationships"
                        },
                        {
                            name: "Adaptability",
                            description: "Flexibility to adapt to new challenges and technologies"
                        },
                        {
                            name: "Critical Thinking",
                            description: "Deep analysis and effective problem solving"
                        },
                        {
                            name: "Project Management",
                            description: "Planning, execution, and tracking of projects"
                        }
                    ]
                },
                languages: {
                    title: "Languages",
                    items: [
                        {
                            name: "Spanish",
                            level: "Native",
                            description: "Native language"
                        },
                        {
                            name: "English",
                            level: "Professional",
                            description: "Professional working proficiency"
                        }
                    ]
                }
            },
            images: [
                {
                    src: "/img/profile/profile1.jpg",
                    alt: "Thats me!"
                }
            ]
        },
        projects: {
            title: "Projects",
            summary: {
                title: "Achievement Summary",
                points: [
                    "Development of high-quality mobile and web applications using modern technologies like React Native, React.js, and Django.",
                    "Successful integration of AI services and payment processing, enhancing user experience and business functionality.",
                    "Implementation of scalable and secure architectures, handling sensitive data and high user traffic.",
                    "Creation of intuitive and responsive interfaces, resulting in high user satisfaction and client retention.",
                    "Efficient management of databases and APIs, optimizing application performance and security."
                ]
            },
            cards: [
                {
                    title: "Zplendid",
                    type: "Professional",
                    company: "Alluxi",
                    description: "Mobile app and web platform for bariatric clinic",
                    longDescription: "Development of a comprehensive mobile app for a bariatric clinic managing appointments, payments, patient progress, and dietary plans. Includes AI integration and a web admin panel.",
                    tech: [
                        "React.js",
                        "React Native",
                        "Redux",
                        "TypeScript",
                        "Django",
                        "Python",
                        "Firebase",
                        "OpenAI",
                        "Stripe",
                        "PostgreSQL"
                    ],
                    achievements: [
                        "Developed a mobile app for a bariatric clinic to manage appointments, payments, patient progress, and dietary plans using React Native, Redux and TypeScript.",
                        "Integrated OpenAI models to provide AI-driven support for users.",
                        "Created user-friendly interfaces with a strong focus on UX and role-based access.",
                        "Built a backend with Django REST Framework, managing users, roles, notifications, chat, cronjobs, and payments through Stripe.",
                        "Developed two websites with React: one for app information and the other as an admin dashboard for managing content and users."
                    ]
                },
                {
                    title: "Kouchea",
                    type: "Professional",
                    company: "Alluxi",
                    description: "Online mathematics teaching platform",
                    longDescription: "Development of an educational platform for teaching mathematics with subscription system, payments, and content management.",
                    url: "https://kouchea.com",
                    tech: [
                        "Laravel",
                        "PHP",
                        "Bootstrap",
                        "SASS",
                        "Stripe",
                        "MySQL"
                    ],
                    achievements: [
                        "Developed an online platform for teaching mathematics using Laravel, with features for subscriptions, payments, discounts, and coupons managed through Stripe.",
                        "Facilitated over 1,000 learning sessions with a responsive and secure Laravel platform",
                        "Styled the platform using Bootstrap and Sass, ensuring a responsive and visually appealing design.",
                        "Implemented role-based access control and permissions using Laravel."
                    ]
                },
                {
                    title: "Pideisa",
                    type: "Professional",
                    company: "Alluxi",
                    description: "Metal temperature measurement and calibration platform",
                    longDescription: "Development of a specialized platform for precise temperature measurement and calibration in metallurgical processes, facilitating quality control and process documentation.",
                    tech: [
                        "Django",
                        "Vue.js",
                        "Python",
                        "PostgreSQL",
                        "Docker",
                        "Bootstrap",
                        "REST APIs",
                        "Celery"
                    ],
                    achievements: [
                        "Developed a complete web platform for temperature measurement and calibration in metallurgical processes.",
                        "Implemented calculation and validation algorithms to ensure accurate measurements.",
                        "Created an automated reporting system for documentation and quality control.",
                        "Integrated data export functionality in multiple formats.",
                        "Designed an intuitive interface for data visualization and temperature trends."
                    ]
                },
                {
                    title: "Government Management System",
                    type: "Professional",
                    company: "BIIDA Technology",
                    description: "Platform for business management and compliance fines administration",
                    longDescription: "Development of a comprehensive system for a government entity that enables the management, tracking, and administration of registered businesses, as well as control and monitoring of fines and regulatory compliance.",
                    tech: [
                        "Java",
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "MySQL",
                        "JQuery",
                        "Bootstrap",
                        "Apache Tomcat"
                    ],
                    achievements: [
                        "Developed a complete web platform for business registry management and fine tracking.",
                        "Implemented a role-based authentication and authorization system for different government user levels.",
                        "Designed and implemented a relational database for efficient handling of business records and fines.",
                        "Created intuitive interfaces for document management and case tracking.",
                        "Integrated reporting and statistics generation features for compliance analysis."
                    ]
                },
                {
                    title: "Vida Natural Pharmacy",
                    type: "Personal",
                    description: "Medication and prescription management system for natural pharmacy",
                    longDescription: "Development of a web platform for comprehensive management of a natural pharmacy, including medication inventory control, medical prescription generation, printing system, and user administration with different access levels.",
                    url: "https://github.com/DanielEscobar21/VIDAinfo.git",
                    tech: [
                        "Laravel",
                        "PHP",
                        "MySQL",
                        "JavaScript",
                        "Bootstrap",
                        "HTML",
                        "CSS",
                        "jQuery",
                        "DomPDF"
                    ],
                    achievements: [
                        "Developed a complete inventory management system for natural medicines.",
                        "Implemented a module for generating and printing medical prescriptions with custom PDF.",
                        "Created an authentication and authorization system with different user roles.",
                        "Designed an intuitive interface for medication and prescription management.",
                        "Integrated advanced search and filtering functionalities for medications."
                    ]
                },
                {
                    title: "Express Dating",
                    type: "Professional",
                    company: "Alluxi",
                    description: "Dating mobile app with video calls and real-time messaging",
                    longDescription: "Development of a native Android dating application featuring video calls, instant messaging, user matching, and customized profiles.",
                    url: "https://play.google.com/store/apps/details?id=com.globalsoftm.gs_app_express_dating&pcampaignid=web_share",
                    tech: [
                        "Kotlin",
                        "Android SDK",
                        "Firebase",
                        "Sinch SDK",
                        "Cloud Firestore",
                        "Firebase Auth",
                        "Firebase Storage",
                        "Material Design",
                        "Google Maps API",
                        "Push Notifications"
                    ],
                    achievements: [
                        "Developed a native Android application using Kotlin and following Material Design principles.",
                        "Implemented real-time video calling system using Sinch SDK.",
                        "Integrated Firebase for user management, instant messaging, and data storage.",
                        "Designed a matching algorithm based on user preferences and location.",
                        "Implemented push notification system to keep users updated."
                    ]
                }
            ]
        },
        contact: {
            title: "Contact",
            subtitle: "Have a project in mind? Let's talk!",
            email: "danesc21@gmail.com"
        },
        experience: {
            title: "Experience",
            timeline: [
                {
                    date: "May 2022 - Present",
                    role: "Software Engineer",
                    company: "Alluxi",
                    logo: "/img/companies/alluxi.png",
                    location: "Remote",
                    description: "Full-stack development and technical team leadership in enterprise projects.",
                    tech: [
                        "JS",
                        "TS",
                        "Python",
                        "PHP",
                        "Node.js",
                        "React",
                        "Next.js",
                        "Django",
                        "Laravel",
                        "AWS",
                        "Docker",
                        "CI/CD",
                        "PostgreSQL",
                        "MongoDB",
                        "Redux",
                        "REST APIs",
                        "Git",
                        "Jira",
                        "Tailwind CSS"
                    ],
                    achievements: [
                        "Led cross-functional teams to deploy 3+ full-stack projects, reducing deployment time by 20%.",
                        "Optimized AWS deployments, resulting in 30% faster load times and increased application uptime.",
                        "Developed and maintained cross-platform applications using modern frameworks.",
                        "Applied agile methodologies and tools like Jira for project management."
                    ]
                },
                {
                    date: "January 2022 - May 2022",
                    role: "Software Developer",
                    company: "BIIDA Technology",
                    logo: "/img/companies/biida.png",
                    location: "Le\xf3n, Guanajuato",
                    description: "Full-stack development and web application optimization.",
                    tech: [
                        "JS",
                        "TS",
                        "Java",
                        "PHP",
                        "Node.js",
                        "Angular",
                        "Express.js",
                        "Laravel",
                        "MySQL",
                        "HTML",
                        "CSS",
                        "Bootstrap",
                        "Git"
                    ],
                    achievements: [
                        "Designed responsive UIs, improving user engagement by 15%.",
                        "Streamlined API integrations, cutting response times by 25%.",
                        "Improved database performance by 20% through optimization techniques.",
                        "Contributed to the full software development lifecycle, collaborating in agile teams."
                    ]
                }
            ]
        },
        education: {
            title: "Education",
            timeline: [
                {
                    date: "2023",
                    degree: "Enterprise Application Development Specialization",
                    institution: "National Technological Institute of Mexico",
                    description: "Specialization in enterprise architectures and scalable application development.",
                    achievements: [
                        "Enterprise design patterns",
                        "Distributed architectures and microservices",
                        "Enterprise system integration",
                        "Software project management"
                    ]
                },
                {
                    date: "2018 - 2023",
                    degree: "Software Engineering",
                    institution: "National Technological Institute of Mexico",
                    description: "Specialized in software development, databases, and cloud computing.",
                    achievements: [
                        "GPA: 93/100",
                        "Relevant Coursework: Data Structures (Java), Prob & Stat (Python)",
                        "Object Oriented Programming (Java), Simulation (Python)",
                        "Advanced Databases (SQL), Software Engineering",
                        "Cloud Computing (AWS), Data Science"
                    ]
                },
                {
                    date: "2022",
                    degree: "AWS Cloud Practitioner Essentials",
                    institution: "Amazon Web Services",
                    description: "Fundamental certification in AWS Cloud services and concepts.",
                    achievements: []
                }
            ]
        }
    }
};

;// CONCATENATED MODULE: ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






// Estilo común para las secciones
const sectionClass = "min-h-screen flex flex-col justify-center items-center py-20 px-4";
const titleClass = "text-4xl md:text-5xl font-light mb-16 text-center text-neutral-900 dark:text-neutral-100 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-neutral-200 dark:after:bg-neutral-800 after:mx-auto after:mt-4";
// Estilo común para las cards
const cardClass = "\n  bg-light-base dark:bg-dark-elevated \n  p-6 rounded-lg shadow-soft \n  hover:shadow-soft-lg \n  border border-neutral-200/10 dark:border-neutral-800/10 \n  transition-all duration-300 \n  hover:scale-[1.02] hover:-translate-y-1\n  hover:bg-gradient-to-br hover:from-light-elevated hover:to-light-base\n  dark:hover:from-dark-elevated dark:hover:to-dark-base\n  relative group\n";
// Array con el orden de las secciones
const sections = [
    "inicio",
    "sobre-mi",
    "skills",
    "educacion",
    "experiencia",
    "proyectos",
    "contacto"
];
// Mover la función scrollToSection fuera de los componentes
const scrollToSection = (sectionId)=>{
    const element = document.getElementById(sectionId);
    element === null || element === void 0 ? void 0 : element.scrollIntoView({
        behavior: "smooth"
    });
};
// Componente de navegación entre secciones
const SectionNavigation = (param)=>{
    let { currentSection, language } = param;
    const currentIndex = sections.indexOf(currentSection);
    const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
    const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
    const isHome = currentSection === "inicio";
    const sectionNames = {
        es: {
            inicio: "Inicio",
            "sobre-mi": "Sobre M\xed",
            skills: "Habilidades",
            educacion: "Formaci\xf3n",
            experiencia: "Experiencia",
            proyectos: "Proyectos",
            contacto: "Contacto"
        },
        en: {
            inicio: "Home",
            "sobre-mi": "About",
            skills: "Skills",
            educacion: "Education",
            experiencia: "Experience",
            proyectos: "Projects",
            contacto: "Contact"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "absolute bottom-12 left-0 right-0 flex justify-center items-center gap-8",
        children: [
            !isHome && prevSection && /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.button, {
                onClick: ()=>scrollToSection(prevSection),
                className: "flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group",
                whileHover: {
                    y: -3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: "w-4 h-4 rotate-180",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        })
                    }),
                    sectionNames[language][prevSection]
                ]
            }),
            nextSection && /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.button, {
                onClick: ()=>scrollToSection(nextSection),
                className: "flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group",
                whileHover: {
                    y: 3
                },
                children: [
                    sectionNames[language][nextSection],
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        })
                    })
                ]
            })
        ]
    });
};
// Función para scroll to top
const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
// Primero, actualizar el componente ScrollToTop para que coincida con el estilo del ScrollIndicator
const ScrollToTop = (param)=>{
    let { language } = param;
    return /*#__PURE__*/ _jsx(motion.div, {
        className: "absolute bottom-12 left-0 right-0 mx-auto flex flex-col items-center gap-2",
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        children: /*#__PURE__*/ _jsxs(motion.button, {
            onClick: scrollToTop,
            className: "flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group",
            whileHover: {
                y: -3
            },
            children: [
                language === "es" ? "Volver arriba" : "Back to top",
                /*#__PURE__*/ _jsxs("div", {
                    className: "flex flex-col -space-y-1",
                    children: [
                        /*#__PURE__*/ _jsx("svg", {
                            className: "w-4 h-4 rotate-180",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ _jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7"
                            })
                        }),
                        /*#__PURE__*/ _jsx("svg", {
                            className: "w-4 h-4 rotate-180",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ _jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
function Home() {
    const { language } = (0,ThemeContext/* useTheme */.F)();
    const currentContent = texts[language];
    const [showNotification, setShowNotification] = (0,react.useState)(false);
    const [currentProject, setCurrentProject] = (0,react.useState)(0);
    const [currentPage, setCurrentPage] = (0,react.useState)(0);
    const [isMobile, setIsMobile] = (0,react.useState)(false);
    const [totalPages, setTotalPages] = (0,react.useState)(Math.ceil(currentContent.projects.cards.length / 2));
    const [autoPlay, setAutoPlay] = (0,react.useState)(true);
    const [openSkill, setOpenSkill] = (0,react.useState)(null);
    const [openTechSkill, setOpenTechSkill] = (0,react.useState)(currentContent.about.skills.technical.items[0].name);
    const [openSoftSkill, setOpenSoftSkill] = (0,react.useState)(currentContent.about.skills.soft.items[0].name);
    const [openLanguageSkill, setOpenLanguageSkill] = (0,react.useState)(currentContent.about.skills.languages.items[0].name);
    // Efecto para el autoplay del carrusel
    (0,react.useEffect)(()=>{
        let interval;
        if (autoPlay) {
            interval = setInterval(()=>{
                setCurrentPage((prev)=>prev === totalPages - 1 ? 0 : prev + 1);
            }, 10000); // Cambiado de 5000 a 8000 para que dure 8 segundos
        }
        return ()=>{
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [
        autoPlay,
        totalPages
    ]);
    // Función para manejar el copiado
    const handleCopyEmail = async ()=>{
        try {
            await navigator.clipboard.writeText(currentContent.contact.email);
            setShowNotification(true);
            setTimeout(()=>setShowNotification(false), 3000); // Ocultar después de 3 segundos
        } catch (err) {
            console.error("Error al copiar el email:", err);
        }
    };
    // Funciones para el carrusel
    const nextPage = ()=>{
        setAutoPlay(false);
        setCurrentPage((prev)=>prev === totalPages - 1 ? 0 : prev + 1);
    };
    const prevPage = ()=>{
        setAutoPlay(false);
        setCurrentPage((prev)=>prev === 0 ? totalPages - 1 : prev - 1);
    };
    const goToPage = (page)=>{
        setAutoPlay(false);
        setCurrentPage(page);
    };
    // Funciones separadas para manejar cada tipo de skill
    const handleTechSkillClick = (skillName)=>{
        setOpenTechSkill(openTechSkill === skillName ? skillName : skillName);
    };
    const handleSoftSkillClick = (skillName)=>{
        setOpenSoftSkill(openSoftSkill === skillName ? skillName : skillName);
    };
    const handleLanguageSkillClick = (skillName)=>{
        setOpenLanguageSkill(openLanguageSkill === skillName ? skillName : skillName);
    };
    // Efecto para manejar el responsive
    (0,react.useEffect)(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
            setTotalPages(Math.ceil(currentContent.projects.cards.length / (window.innerWidth >= 768 ? 2 : 1)));
        };
        // Comprobar inicialmente
        checkMobile();
        // Añadir listener para cambios de tamaño
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, [
        currentContent.projects.cards.length
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: "min-h-screen bg-white dark:bg-black",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "inicio",
                className: "".concat(sectionClass, " relative bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 overflow-hidden"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-100/50 dark:to-neutral-900/50 pointer-events-none"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        className: "w-full max-w-4xl mx-auto text-center relative z-10",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.span, {
                                className: "text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-6 block",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.1
                                },
                                children: currentContent.hero.welcome
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.h1, {
                                className: "text-5xl md:text-7xl font-extralight mb-6 text-neutral-900 dark:text-neutral-100 leading-tight",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.2
                                },
                                children: currentContent.hero.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.h2, {
                                className: "text-3xl md:text-4xl font-extralight mb-8 bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.3
                                },
                                children: currentContent.hero.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.p, {
                                className: "text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.4
                                },
                                children: currentContent.hero.subtitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-20",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.5
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.a, {
                                        href: "/Daniel_Escobar_Resume_EN.pdf",
                                        download: true,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center justify-center px-6 py-3  bg-neutral-900 dark:bg-neutral-100  text-neutral-100 dark:text-neutral-900  rounded-full gap-2  hover:scale-105  transition-all duration-200  cursor-pointer active:scale-95 z-20",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                })
                                            }),
                                            currentContent.hero.buttons.resume
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.a, {
                                        href: "https://www.linkedin.com/in/danielescobar00",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center justify-center px-6 py-3  border border-neutral-200/50 dark:border-neutral-800/50  rounded-full gap-2 text-neutral-600 dark:text-neutral-400  hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200  cursor-pointer active:scale-95 z-20",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                })
                                            }),
                                            currentContent.hero.buttons.linkedin
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-100/50 dark:to-neutral-900/50 pointer-events-none"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute bottom-12 left-0 right-0 flex justify-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.button, {
                            onClick: ()=>scrollToSection("sobre-mi"),
                            className: "flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group",
                            whileHover: {
                                y: 3
                            },
                            children: [
                                language === "es" ? "Sobre M\xed" : "About",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 9l-7 7-7-7"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "sobre-mi",
                className: "".concat(sectionClass, " relative bg-gradient-radial from-light-base via-light-subtle to-light-base dark:from-dark-base dark:via-dark-subtle dark:to-dark-base overflow-hidden"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        className: "w-full max-w-6xl mx-auto",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: titleClass,
                                children: currentContent.about.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                        initial: {
                                            x: -50
                                        },
                                        whileInView: {
                                            x: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "space-y-6",
                                        children: currentContent.about.description.split("\n\n").map((paragraph, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify",
                                                children: paragraph
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                        initial: {
                                            x: 50
                                        },
                                        whileInView: {
                                            x: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "relative aspect-square max-w-md mx-auto lg:max-w-none w-full",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "relative h-full w-full rounded-2xl overflow-hidden group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                                    src: currentContent.about.images[0].src,
                                                    alt: currentContent.about.images[0].alt,
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-500 group-hover:scale-110",
                                                    sizes: "(max-width: 768px) 100vw, 50vw",
                                                    priority: true
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "absolute bottom-6 left-6 text-white text-lg font-light",
                                                        children: currentContent.about.images[0].alt
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionNavigation, {
                        currentSection: "sobre-mi",
                        language: language
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "skills",
                className: "".concat(sectionClass, " relative bg-gradient-to-tr from-light-base via-light-elevated to-light-base dark:from-dark-base dark:via-dark-elevated dark:to-dark-base overflow-hidden"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        className: "w-full max-w-6xl mx-auto",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: titleClass,
                                children: language === "es" ? "Habilidades" : "Skills"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -50
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-2xl font-light mb-8 text-neutral-900 dark:text-neutral-100",
                                                children: currentContent.about.skills.technical.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "space-y-2",
                                                children: currentContent.about.skills.technical.items.map((category, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            delay: index * 0.1
                                                        },
                                                        className: "".concat(cardClass, " overflow-hidden"),
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                onClick: ()=>handleTechSkillClick(category.name),
                                                                className: "w-full flex items-center justify-between p-2.5 text-left",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                        className: "text-base font-medium text-neutral-900 dark:text-neutral-100",
                                                                        children: category.name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.svg, {
                                                                        className: "w-5 h-5 text-neutral-500",
                                                                        animate: {
                                                                            rotate: openTechSkill === category.name ? 180 : 0
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2
                                                                        },
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 9l-7 7-7-7"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                                                initial: false,
                                                                animate: {
                                                                    height: openTechSkill === category.name ? "auto" : 0,
                                                                    opacity: openTechSkill === category.name ? 1 : 0
                                                                },
                                                                transition: {
                                                                    duration: 0.3,
                                                                    ease: "easeInOut"
                                                                },
                                                                className: "overflow-hidden",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "p-2.5 pt-0",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "flex flex-wrap gap-1.5",
                                                                        children: category.skills.map((skill)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "px-2 py-0.5 text-sm bg-light-subtle dark:bg-dark-subtle rounded-full  text-neutral-500 dark:text-neutral-400  border border-neutral-200/10 dark:border-neutral-700/10 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-600  transition-colors duration-300",
                                                                                children: skill
                                                                            }, skill))
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }, category.name))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                        initial: {
                                            opacity: 0,
                                            x: 50
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-2xl font-light mb-8 text-neutral-900 dark:text-neutral-100",
                                                children: currentContent.about.skills.soft.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "space-y-2",
                                                children: currentContent.about.skills.soft.items.map((skill, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            delay: index * 0.1
                                                        },
                                                        className: "".concat(cardClass),
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                onClick: ()=>handleSoftSkillClick(skill.name),
                                                                className: "w-full flex items-center justify-between p-2.5 text-left",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                        className: "text-lg font-medium text-neutral-900 dark:text-neutral-100",
                                                                        children: skill.name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.svg, {
                                                                        className: "w-5 h-5 text-neutral-500",
                                                                        animate: {
                                                                            rotate: openSoftSkill === skill.name ? 180 : 0
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2
                                                                        },
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M19 9l-7 7-7-7"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                                                initial: false,
                                                                animate: {
                                                                    height: openSoftSkill === skill.name ? "auto" : 0,
                                                                    opacity: openSoftSkill === skill.name ? 1 : 0
                                                                },
                                                                transition: {
                                                                    duration: 0.3,
                                                                    ease: "easeInOut"
                                                                },
                                                                className: "overflow-hidden",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "p-2.5 pt-0",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-neutral-600 dark:text-neutral-400",
                                                                        children: skill.description
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }, skill.name))
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionNavigation, {
                        currentSection: "skills",
                        language: language
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "educacion",
                className: "".concat(sectionClass, " relative bg-gradient-to-tr from-light-base via-light-elevated to-light-base dark:from-dark-base dark:via-dark-elevated dark:to-dark-base overflow-hidden"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        className: "w-full max-w-5xl mx-auto py-20 px-4",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: titleClass,
                                children: currentContent.education.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "space-y-8",
                                children: currentContent.education.timeline.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                        className: "relative",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: index * 0.2
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "".concat(cardClass, " p-6 relative overflow-hidden group w-full"),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500/50 to-primary-600/50 dark:from-primary-400/30 dark:to-primary-500/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "absolute top-4 right-4",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "inline-block px-3 py-1.5 text-base font-mono  bg-neutral-100 dark:bg-neutral-800/50  text-neutral-600 dark:text-neutral-400  rounded-full border border-neutral-200/10 dark:border-neutral-700/10",
                                                        children: item.date
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "pr-20 md:pr-28",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "text-2xl font-medium mb-2 text-neutral-900 dark:text-neutral-100",
                                                            children: item.degree
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                            className: "text-lg text-primary-600 dark:text-primary-400 mb-3",
                                                            children: item.institution
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-base text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed",
                                                            children: item.description
                                                        }),
                                                        item.achievements && item.achievements.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "space-y-2",
                                                            children: item.achievements.map((achievement, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-start gap-2 text-neutral-600 dark:text-neutral-400 group/achievement",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500/50 dark:bg-primary-400/30  group-hover/achievement:bg-primary-500 dark:group-hover/achievement:bg-primary-400  transition-colors duration-300 shrink-0"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-xs leading-relaxed group-hover/achievement:text-neutral-900 dark:group-hover/achievement:text-neutral-100 transition-colors duration-300",
                                                                            children: achievement
                                                                        })
                                                                    ]
                                                                }, i))
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionNavigation, {
                        currentSection: "educacion",
                        language: language
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "experiencia",
                className: "".concat(sectionClass, " relative bg-gradient-to-bl from-light-subtle via-light-base to-light-subtle dark:from-dark-subtle dark:via-dark-base dark:to-dark-subtle overflow-hidden"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        className: "max-w-5xl mx-auto py-20",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: titleClass,
                                children: currentContent.experience.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "space-y-8",
                                children: currentContent.experience.timeline.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                        className: "relative",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: index * 0.2
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "".concat(cardClass, " p-8"),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-col md:flex-row md:items-center md:justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-4 mb-4 md:mb-0",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "relative w-12 h-12 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800",
                                                                    children: item.logo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                                                        src: item.logo,
                                                                        alt: "".concat(item.company, " logo"),
                                                                        fill: true,
                                                                        className: "object-cover"
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "text-2xl font-medium text-neutral-400",
                                                                        children: item.company.charAt(0)
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                            className: "text-xl font-medium text-neutral-900 dark:text-neutral-100",
                                                                            children: item.role
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "flex items-center gap-2 text-neutral-600 dark:text-neutral-400",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "font-medium",
                                                                                    children: item.company
                                                                                }),
                                                                                item.location && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                            className: "text-neutral-400",
                                                                                            children: "•"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                            className: "text-sm text-neutral-500",
                                                                                            children: item.location
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "inline-block px-3 py-1 text-sm font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 rounded-full",
                                                            children: item.date
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed",
                                                    children: item.description
                                                }),
                                                item.achievements && item.achievements.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "space-y-3 mb-6",
                                                    children: item.achievements.map((achievement, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-start gap-3 text-neutral-600 dark:text-neutral-400",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 shrink-0"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "text-sm leading-relaxed",
                                                                    children: achievement
                                                                })
                                                            ]
                                                        }, i))
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: item.tech.map((tech, techIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "px-3 py-1 text-sm bg-light-subtle dark:bg-dark-subtle rounded-full  text-neutral-500 dark:text-neutral-400  border border-neutral-200/10 dark:border-neutral-700/10 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-600  transition-colors duration-300",
                                                            children: tech
                                                        }, techIndex))
                                                })
                                            ]
                                        })
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionNavigation, {
                        currentSection: "experiencia",
                        language: language
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "proyectos",
                className: "".concat(sectionClass, " relative bg-gradient-to-r from-light-base via-light-elevated to-light-base dark:from-dark-base dark:via-dark-elevated dark:to-dark-base overflow-hidden"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        className: "max-w-7xl mx-auto py-20",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: titleClass,
                                children: currentContent.projects.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative px-8 md:px-16",
                                onMouseEnter: ()=>setAutoPlay(false),
                                onMouseLeave: ()=>setAutoPlay(true),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "max-w-5xl mx-auto",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.5
                                            },
                                            children: currentContent.projects.cards.slice(currentPage * (isMobile ? 1 : 2), currentPage * (isMobile ? 1 : 2) + (isMobile ? 1 : 2)).map((project, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                                    className: "".concat(cardClass, " group/card overflow-hidden md:max-w-lg w-full h-full"),
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        duration: 0.4,
                                                        delay: index * 0.15,
                                                        ease: "easeOut"
                                                    },
                                                    whileHover: {
                                                        transition: {
                                                            duration: 0.2
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                                        className: "p-4 md:p-6 flex flex-col h-full relative",
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        transition: {
                                                            duration: 0.3,
                                                            delay: index * 0.15 + 0.2
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                        className: "text-xl font-medium mb-3 text-neutral-900 dark:text-neutral-100 group-hover/card:text-neutral-800 dark:group-hover/card:text-white transition-colors",
                                                                        children: project.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "flex items-center gap-2 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400",
                                                                                children: project.type
                                                                            }),
                                                                            project.company && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                className: "text-sm text-neutral-500 dark:text-neutral-500",
                                                                                children: [
                                                                                    "@ ",
                                                                                    project.company
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                        className: "text-base text-neutral-600 dark:text-neutral-400",
                                                                        children: project.description
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "flex flex-wrap gap-2 mb-6",
                                                                children: project.tech.map((tech)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                        className: "px-3 py-1 text-sm bg-light-subtle dark:bg-dark-subtle rounded-full  text-neutral-600 dark:text-neutral-400  border border-neutral-200/10 dark:border-neutral-700/10 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-600  transition-colors duration-300",
                                                                        children: tech
                                                                    }, tech))
                                                            }),
                                                            project.achievements && project.achievements.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex-grow mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                        className: "text-lg font-medium mb-4 text-neutral-900 dark:text-neutral-100",
                                                                        children: language === "es" ? "Logros" : "Achievements"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: "space-y-3",
                                                                        children: project.achievements.map((achievement, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        className: "text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed",
                                                                                        children: achievement
                                                                                    })
                                                                                ]
                                                                            }, i))
                                                                    })
                                                                ]
                                                            }),
                                                            project.url && /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.a, {
                                                                href: project.url,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400  hover:text-neutral-900 dark:hover:text-neutral-100  transition-colors mt-auto group/link",
                                                                whileHover: {
                                                                    x: 5
                                                                },
                                                                children: [
                                                                    language === "es" ? "Ver proyecto" : "View project",
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                        className: "w-4 h-4 transform transition-transform group-hover/link:translate-x-1",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, index))
                                        }, currentPage)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex justify-center gap-2 mt-8",
                                        children: Array.from({
                                            length: totalPages
                                        }).map((_, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                className: "w-2 h-2 rounded-full transition-all duration-300 \n                             ".concat(index === currentPage ? "bg-neutral-900 dark:bg-neutral-100 w-4" : "bg-neutral-300 dark:bg-neutral-700"),
                                                onClick: ()=>goToPage(index),
                                                "aria-label": "Go to page ".concat(index + 1)
                                            }, index))
                                    }),
                                    totalPages > 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                className: "absolute -left-4 top-1/2 -translate-y-1/2  text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300 focus:outline-none",
                                                onClick: prevPage,
                                                "aria-label": "Previous page",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                    className: "w-6 h-6 rotate-180",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: 1.5,
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M9 5l7 7-7 7"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                className: "absolute -right-4 top-1/2 -translate-y-1/2  text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300 focus:outline-none",
                                                onClick: nextPage,
                                                "aria-label": "Next page",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: 1.5,
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M9 5l7 7-7 7"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionNavigation, {
                        currentSection: "proyectos",
                        language: language
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                id: "contacto",
                className: "".concat(sectionClass, " relative bg-gradient-dots from-light-subtle via-light-base to-light-subtle dark:from-dark-subtle dark:via-dark-base dark:to-dark-subtle overflow-hidden"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        className: "max-w-3xl mx-auto py-20 text-center relative z-10",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: titleClass,
                                children: currentContent.contact.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-neutral-600 dark:text-neutral-400 mb-8 text-center",
                                children: currentContent.contact.subtitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col items-center space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative flex flex-col items-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.button, {
                                                onClick: handleCopyEmail,
                                                className: "group relative px-8 py-3 border border-neutral-200/50 dark:border-neutral-800/50  rounded-full text-neutral-600 dark:text-neutral-400  hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300",
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                children: currentContent.contact.email
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: showNotification ? 1 : 0,
                                                    y: showNotification ? 0 : 10
                                                },
                                                className: "absolute top-full mt-4 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900  px-6 py-3 rounded-full shadow-lg text-sm pointer-events-none select-none text-center w-max",
                                                children: language === "es" ? "Copiado, espero saber de ti pronto" : "Copied, hope to hear from you soon"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                        className: "flex flex-col sm:flex-row items-center gap-4 mt-8",
                                        animate: {
                                            y: showNotification ? 40 : 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 20
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.a, {
                                                href: "/Daniel_Escobar_Resume_EN.pdf",
                                                download: true,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center justify-center px-6 py-3  bg-neutral-900 dark:bg-neutral-100  text-neutral-100 dark:text-neutral-900  rounded-full gap-2  hover:scale-105  transition-all duration-200  cursor-pointer active:scale-95 z-20",
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                        })
                                                    }),
                                                    currentContent.hero.buttons.resume
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.a, {
                                                href: "https://www.linkedin.com/in/danielescobar00",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center justify-center px-6 py-3  border border-neutral-200/50 dark:border-neutral-800/50  rounded-full gap-2 text-neutral-600 dark:text-neutral-400  hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200  cursor-pointer active:scale-95 z-20",
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                        })
                                                    }),
                                                    currentContent.hero.buttons.linkedin
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.a, {
                                                href: "https://github.com/DanielEscobar21",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center justify-center px-6 py-3  border border-neutral-200/50 dark:border-neutral-800/50  rounded-full gap-2 text-neutral-600 dark:text-neutral-400  hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200  cursor-pointer active:scale-95 z-20",
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                                        })
                                                    }),
                                                    "GitHub"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col items-center gap-4 mt-24",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.p, {
                                        className: "text-sm text-neutral-500 dark:text-neutral-500",
                                        initial: {
                                            opacity: 0
                                        },
                                        whileInView: {
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        children: [
                                            "\xa9 ",
                                            new Date().getFullYear(),
                                            " Daniel Escobar.",
                                            " ",
                                            language === "es" ? "Todos los derechos reservados" : "All rights reserved",
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                        className: "flex flex-col items-center gap-2",
                                        initial: {
                                            opacity: 0
                                        },
                                        whileInView: {
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: 0.3
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-xs text-neutral-500 dark:text-neutral-500",
                                                children: language === "es" ? "Hecho con" : "Built with"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex flex-wrap justify-center gap-2 text-xs text-neutral-400 dark:text-neutral-600 max-w-[280px] md:max-w-none",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "flex items-center",
                                                        children: "Next.js"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "hidden md:block",
                                                        children: "•"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "flex items-center",
                                                        children: "React"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "hidden md:block",
                                                        children: "•"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "flex items-center",
                                                        children: "TypeScript"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "hidden md:block",
                                                        children: "•"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "flex items-center",
                                                        children: "Tailwind"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "hidden md:block",
                                                        children: "•"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "flex items-center",
                                                        children: "Framer Motion"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute bottom-12 left-0 right-0 flex justify-center items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.button, {
                                onClick: ()=>scrollToSection("proyectos"),
                                className: "flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group",
                                whileHover: {
                                    y: -3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        className: "w-4 h-4 rotate-180",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        })
                                    }),
                                    language === "es" ? "Proyectos" : "Projects"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.button, {
                                onClick: scrollToTop,
                                className: "flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group",
                                whileHover: {
                                    y: -3
                                },
                                children: [
                                    language === "es" ? "Volver arriba" : "Back to top",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col -space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                className: "w-4 h-4 rotate-180",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 9l-7 7-7-7"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                className: "w-4 h-4 rotate-180",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 9l-7 7-7-7"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ useTheme; },
/* harmony export */   ThemeProvider: function() { return /* binding */ ThemeProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ ThemeProvider,useTheme auto */ 

const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function ThemeProvider(param) {
    let { children } = param;
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("en");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedTheme = localStorage.getItem("theme");
        const savedLanguage = localStorage.getItem("language");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            document.documentElement.classList.add("dark");
        }
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [
        theme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("language", language);
    }, [
        language
    ]);
    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            language,
            setLanguage
        },
        children: children
    });
}
function useTheme() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [745,971,117,744], function() { return __webpack_exec__(974); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);