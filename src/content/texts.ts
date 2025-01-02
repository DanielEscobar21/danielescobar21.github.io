export const texts = {
  es: {
    hero: {
      welcome: "Bienvenido",
      name: "Daniel Escobar Araujo",
      title: "Ingeniero de Software",
      subtitle: "Creando soluciones digitales innovadoras",
      scrollText: "Desliza para más",
      buttons: {
        resume: "Descargar CV",
        linkedin: "Visitar LinkedIn",
      },
    },
    about: {
      title: "Sobre Mí",
      description: `Soy un Ingeniero de Software Full Stack apasionado por crear soluciones digitales innovadoras y escalables. Con más de 2 años de experiencia, me especializo en el desarrollo de aplicaciones web y móviles utilizando tecnologías modernas.

      Mi experiencia abarca desde el desarrollo frontend con React y TypeScript hasta la implementación de soluciones backend robustas con Django y Node.js. Me destaco en la integración de servicios cloud y la optimización de rendimiento, siempre enfocado en crear experiencias de usuario excepcionales.

      Disfruto especialmente trabajando en proyectos desafiantes que requieren pensamiento creativo y soluciones técnicas innovadoras. Mi objetivo es seguir creciendo como desarrollador mientras contribuyo a proyectos que generen un impacto positivo.`,
      skills: {
        technical: {
          title: "Habilidades Técnicas",
          items: [
            {
              name: "Lenguajes de Programación",
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
                "y más",
              ],
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
                "y más",
              ],
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
                "y más",
              ],
            },
            {
              name: "Mobile",
              skills: [
                "Android SDK",
                "iOS SDK",
                "React Native",
                "Kotlin",
                "y más",
              ],
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
                "y más",
              ],
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
                "y más",
              ],
            },
          ],
        },
        soft: {
          title: "Habilidades Blandas",
          items: [
            {
              name: "Idiomas",
              description: "Español: Nativo | Inglés: Profesional",
            },
            {
              name: "Liderazgo",
              description:
                "Capacidad para dirigir equipos y proyectos de manera efectiva",
            },
            {
              name: "Comunicación",
              description:
                "Excelente comunicación verbal y escrita en entornos profesionales",
            },
            {
              name: "Trabajo en Equipo",
              description:
                "Colaboración efectiva y construcción de relaciones positivas",
            },
            {
              name: "Adaptabilidad",
              description:
                "Flexibilidad para adaptarse a nuevos desafíos y tecnologías",
            },
            {
              name: "Pensamiento Crítico",
              description:
                "Análisis profundo y resolución efectiva de problemas",
            },
            {
              name: "Gestión de Proyectos",
              description:
                "Planificación, ejecución y seguimiento de proyectos",
            },
          ],
        },
        languages: {
          title: "Idiomas",
          items: [
            {
              name: "Español",
              level: "Nativo",
              description: "Lengua materna",
            },
            {
              name: "Inglés",
              level: "Profesional",
              description: "Nivel profesional hablado y escrito",
            },
          ],
        },
      },
      images: [
        {
          src: "/img/profile/profile1.jpg",
          alt: "!Ese soy yo!",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      summary: {
        title: "Resumen de Logros",
        points: [
          "Desarrollo de aplicaciones móviles y web de alta calidad utilizando tecnologías modernas como React Native, React.js y Django.",
          "Integración exitosa de servicios de IA y procesamiento de pagos, mejorando la experiencia del usuario y la funcionalidad del negocio.",
          "Implementación de arquitecturas escalables y seguras, manejando datos sensibles y alto tráfico de usuarios.",
          "Creación de interfaces intuitivas y responsivas, resultando en una alta satisfacción del usuario y retención de clientes.",
          "Gestión eficiente de bases de datos y APIs, optimizando el rendimiento y la seguridad de las aplicaciones.",
        ],
      },
      cards: [
        {
          title: "Zplendid",
          type: "Professional",
          company: "Alluxi",
          description:
            "Aplicación móvil y plataforma web para clínica bariátrica",
          longDescription:
            "Desarrollo de una aplicación móvil completa para una clínica bariátrica que gestiona citas, pagos, progreso de pacientes y planes dietéticos. Incluye integración con IA y un panel de administración web.",
          url: "https://zplendid.com",
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
            "PostgreSQL",
          ],
          achievements: [
            "Desarrollé una aplicación móvil con React Native, Redux y TypeScript para gestión integral de pacientes.",
            "Integré modelos de OpenAI para brindar soporte impulsado por IA a los usuarios.",
            "Creé interfaces intuitivas con enfoque en UX y acceso basado en roles.",
            "Construí el backend con Django REST Framework, gestionando usuarios, roles, notificaciones, chat, cronjobs y pagos a través de Stripe.",
            "Desarrollé dos sitios web con React: uno informativo y otro como panel de administración.",
          ],
        },
        {
          title: "Kouchea",
          type: "Professional",
          company: "Alluxi",
          description: "Plataforma de enseñanza de matemáticas en línea",
          longDescription:
            "Desarrollo de una plataforma educativa para la enseñanza de matemáticas con sistema de suscripciones, pagos y gestión de contenido.",
          url: "https://kouchea.com",
          tech: ["Laravel", "PHP", "Bootstrap", "SASS", "Stripe", "MySQL"],
          achievements: [
            "Desarrollé una plataforma en línea para enseñanza de matemáticas usando Laravel.",
            "Facilité más de 1,000 sesiones de aprendizaje con una plataforma Laravel responsive y segura.",
            "Diseñé la plataforma usando Bootstrap y Sass, asegurando un diseño responsive y atractivo.",
            "Implementé control de acceso basado en roles y permisos usando Laravel.",
          ],
        },
        {
          title: "Pideisa",
          type: "Professional",
          company: "Alluxi",
          description:
            "Plataforma de medición y calibración de temperaturas para metales",
          longDescription:
            "Desarrollo de una plataforma especializada para la medición y calibración precisa de temperaturas en procesos metalúrgicos, facilitando el control de calidad y la documentación de procesos.",
          tech: [
            "Django",
            "Vue.js",
            "Python",
            "PostgreSQL",
            "Docker",
            "Bootstrap",
            "REST APIs",
            "Celery",
          ],
          achievements: [
            "Desarrollé una plataforma web completa para la medición y calibración de temperaturas en procesos metalúrgicos.",
            "Implementé algoritmos de cálculo y validación para asegurar mediciones precisas.",
            "Creé un sistema de reportes automatizados para documentación y control de calidad.",
            "Integré funcionalidades de exportación de datos en múltiples formatos.",
            "Diseñé una interfaz intuitiva para la visualización de datos y tendencias de temperatura.",
          ],
        },
        {
          title: "Sistema de Gestión Gubernamental",
          type: "Professional",
          company: "BIIDA Technology",
          description:
            "Plataforma para la gestión y administración de empresas y multas de cumplimiento gubernamental",
          longDescription:
            "Desarrollo de un sistema integral para una entidad gubernamental que permite la gestión, seguimiento y administración de empresas registradas, así como el control y monitoreo de multas y cumplimiento normativo.",
          tech: [
            "Java",
            "JavaScript",
            "HTML",
            "CSS",
            "MySQL",
            "JQuery",
            "Bootstrap",
            "Apache Tomcat",
          ],
          achievements: [
            "Desarrollé una plataforma web completa para la gestión de registros empresariales y seguimiento de multas.",
            "Implementé un sistema de autenticación y autorización basado en roles para diferentes niveles de usuarios gubernamentales.",
            "Diseñé e implementé una base de datos relacional para el manejo eficiente de registros empresariales y multas.",
            "Creé interfaces intuitivas para la gestión de documentos y seguimiento de casos.",
            "Integré funcionalidades de generación de reportes y estadísticas para el análisis de cumplimiento.",
          ],
        },
        {
          title: "Farmacia Naturista Vida",
          type: "Personal",
          description:
            "Sistema de administración de medicamentos y recetas para farmacia naturista",
          longDescription:
            "Desarrollo de una plataforma web para la gestión integral de una farmacia naturista, incluyendo control de inventario de medicamentos, generación de recetas médicas, sistema de impresión y administración de usuarios con diferentes niveles de acceso.",
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
            "DomPDF",
          ],
          achievements: [
            "Desarrollé un sistema completo de gestión de inventario para medicamentos naturistas.",
            "Implementé un módulo de generación e impresión de recetas médicas con PDF personalizado.",
            "Creé un sistema de autenticación y autorización con diferentes roles de usuario.",
            "Diseñé una interfaz intuitiva para la gestión de medicamentos y recetas.",
            "Integré funcionalidades de búsqueda y filtrado avanzado de medicamentos.",
          ],
        },
        {
          title: "Express Dating",
          type: "Professional",
          company: "Alluxi",
          description:
            "Aplicación móvil de citas con videollamadas y mensajería en tiempo real",
          longDescription:
            "Desarrollo de una aplicación móvil nativa de Android para citas que incluye funcionalidades de videollamadas, mensajería instantánea, matching de usuarios y perfiles personalizados.",
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
            "Push Notifications",
          ],
          achievements: [
            "Desarrollé una aplicación nativa de Android usando Kotlin y siguiendo los principios de Material Design.",
            "Implementé un sistema de videollamadas en tiempo real utilizando el SDK de Sinch.",
            "Integré Firebase para la gestión de usuarios, mensajería instantánea y almacenamiento de datos.",
            "Diseñé un algoritmo de matching basado en preferencias y ubicación de usuarios.",
            "Implementé un sistema de notificaciones push para mantener a los usuarios actualizados.",
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
      email: "danesc21@gmail.com",
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
          description:
            "Desarrollo full-stack y liderazgo técnico de equipos en proyectos empresariales.",
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
            "Tailwind CSS",
          ],
          achievements: [
            "Lideré equipos multifuncionales para implementar más de 3 proyectos full-stack, reduciendo el tiempo de implementación en un 20%.",
            "Optimicé implementaciones en AWS, logrando tiempos de carga 30% más rápidos y mayor tiempo de actividad de las aplicaciones.",
            "Desarrollé y mantuve aplicaciones multiplataforma utilizando frameworks modernos.",
            "Apliqué metodologías ágiles y herramientas como Jira para la gestión de proyectos.",
          ],
        },
        {
          date: "Enero 2022 - Mayo 2022",
          role: "Software Developer",
          company: "BIIDA Technology",
          logo: "/img/companies/biida.png",
          location: "León, Guanajuato",
          description:
            "Desarrollo full-stack y optimización de aplicaciones web empresariales.",
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
            "Git",
          ],
          achievements: [
            "Diseñé interfaces de usuario responsivas, mejorando la participación de usuarios en un 15%.",
            "Optimicé integraciones de API, reduciendo tiempos de respuesta en un 25%.",
            "Mejoré el rendimiento de bases de datos en un 20% mediante técnicas de optimización.",
            "Contribuí al ciclo completo de desarrollo de software, colaborando en equipos ágiles.",
          ],
        },
      ],
    },
    education: {
      title: "Formación",
      timeline: [
        {
          date: "2023",
          degree: "Especialidad en Desarrollo de Aplicaciones Empresariales",
          institution: "Instituto Tecnológico Nacional de México",
          description:
            "Especialización en arquitecturas empresariales y desarrollo de aplicaciones escalables.",
          achievements: [
            "Patrones de diseño empresariales",
            "Arquitecturas distribuidas y microservicios",
            "Integración de sistemas empresariales",
            "Gestión de proyectos de software",
          ],
        },
        {
          date: "2018 - 2023",
          degree: "Ingeniería en Sistemas Computacionales",
          institution: "Instituto Tecnológico Nacional de México",
          description:
            "Especialización en desarrollo de software, bases de datos y computación en la nube.",
          achievements: [
            "Promedio General: 93/100",
            "Cursos Relevantes: Estructuras de Datos (Java), Probabilidad y Estadística (Python)",
            "Programación Orientada a Objetos (Java), Simulación (Python)",
            "Bases de Datos Avanzadas (SQL), Ingeniería de Software",
            "Computación en la Nube (AWS), Ciencia de Datos",
          ],
        },
        {
          date: "2022",
          degree: "AWS Cloud Practitioner Essentials",
          institution: "Amazon Web Services",
          description:
            "Certificación fundamental en servicios y conceptos de AWS Cloud.",
          achievements: [],
        },
      ],
    },
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
        linkedin: "Visit LinkedIn",
      },
    },
    about: {
      title: "About Me",
      description: `I am a Full Stack Software Engineer passionate about creating innovative and scalable digital solutions. With over 2 years of experience, I specialize in developing web and mobile applications using modern technologies.

      My expertise ranges from frontend development with React and TypeScript to implementing robust backend solutions with Django and Node.js. I excel at cloud service integration and performance optimization, always focused on creating exceptional user experiences.

      I particularly enjoy working on challenging projects that require creative thinking and innovative technical solutions. My goal is to continue growing as a developer while contributing to projects that make a positive impact.`,
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
                "and more",
              ],
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
                "and more",
              ],
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
                "and more",
              ],
            },
            {
              name: "Mobile",
              skills: [
                "Android SDK",
                "iOS SDK",
                "React Native",
                "Kotlin",
                "and more",
              ],
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
                "and more",
              ],
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
                "and more",
              ],
            },
          ],
        },
        soft: {
          title: "Soft Skills",
          items: [
            {
              name: "Languages",
              description: "Spanish: Native | English: Professional",
            },
            {
              name: "Leadership",
              description: "Ability to effectively lead teams and projects",
            },
            {
              name: "Communication",
              description:
                "Excellent verbal and written communication in professional settings",
            },
            {
              name: "Teamwork",
              description:
                "Effective collaboration and building positive relationships",
            },
            {
              name: "Adaptability",
              description:
                "Flexibility to adapt to new challenges and technologies",
            },
            {
              name: "Critical Thinking",
              description: "Deep analysis and effective problem solving",
            },
            {
              name: "Project Management",
              description: "Planning, execution, and tracking of projects",
            },
          ],
        },
        languages: {
          title: "Languages",
          items: [
            {
              name: "Spanish",
              level: "Native",
              description: "Native language",
            },
            {
              name: "English",
              level: "Professional",
              description: "Professional working proficiency",
            },
          ],
        },
      },
      images: [
        {
          src: "/img/profile/profile1.jpg",
          alt: "Thats me!",
        },
      ],
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
          "Efficient management of databases and APIs, optimizing application performance and security.",
        ],
      },
      cards: [
        {
          title: "Zplendid",
          type: "Professional",
          company: "Alluxi",
          description: "Mobile app and web platform for bariatric clinic",
          longDescription:
            "Development of a comprehensive mobile app for a bariatric clinic managing appointments, payments, patient progress, and dietary plans. Includes AI integration and a web admin panel.",
          url: "https://zplendid.com",
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
            "PostgreSQL",
          ],
          achievements: [
            "Developed a mobile app for a bariatric clinic to manage appointments, payments, patient progress, and dietary plans using React Native, Redux and TypeScript.",
            "Integrated OpenAI models to provide AI-driven support for users.",
            "Created user-friendly interfaces with a strong focus on UX and role-based access.",
            "Built a backend with Django REST Framework, managing users, roles, notifications, chat, cronjobs, and payments through Stripe.",
            "Developed two websites with React: one for app information and the other as an admin dashboard for managing content and users.",
          ],
        },
        {
          title: "Kouchea",
          type: "Professional",
          company: "Alluxi",
          description: "Online mathematics teaching platform",
          longDescription:
            "Development of an educational platform for teaching mathematics with subscription system, payments, and content management.",
          url: "https://kouchea.com",
          tech: ["Laravel", "PHP", "Bootstrap", "SASS", "Stripe", "MySQL"],
          achievements: [
            "Developed an online platform for teaching mathematics using Laravel, with features for subscriptions, payments, discounts, and coupons managed through Stripe.",
            "Facilitated over 1,000 learning sessions with a responsive and secure Laravel platform",
            "Styled the platform using Bootstrap and Sass, ensuring a responsive and visually appealing design.",
            "Implemented role-based access control and permissions using Laravel.",
          ],
        },
        {
          title: "Pideisa",
          type: "Professional",
          company: "Alluxi",
          description: "Metal temperature measurement and calibration platform",
          longDescription:
            "Development of a specialized platform for precise temperature measurement and calibration in metallurgical processes, facilitating quality control and process documentation.",
          tech: [
            "Django",
            "Vue.js",
            "Python",
            "PostgreSQL",
            "Docker",
            "Bootstrap",
            "REST APIs",
            "Celery",
          ],
          achievements: [
            "Developed a complete web platform for temperature measurement and calibration in metallurgical processes.",
            "Implemented calculation and validation algorithms to ensure accurate measurements.",
            "Created an automated reporting system for documentation and quality control.",
            "Integrated data export functionality in multiple formats.",
            "Designed an intuitive interface for data visualization and temperature trends.",
          ],
        },
        {
          title: "Government Management System",
          type: "Professional",
          company: "BIIDA Technology",
          description:
            "Platform for business management and compliance fines administration",
          longDescription:
            "Development of a comprehensive system for a government entity that enables the management, tracking, and administration of registered businesses, as well as control and monitoring of fines and regulatory compliance.",
          tech: [
            "Java",
            "JavaScript",
            "HTML",
            "CSS",
            "MySQL",
            "JQuery",
            "Bootstrap",
            "Apache Tomcat",
          ],
          achievements: [
            "Developed a complete web platform for business registry management and fine tracking.",
            "Implemented a role-based authentication and authorization system for different government user levels.",
            "Designed and implemented a relational database for efficient handling of business records and fines.",
            "Created intuitive interfaces for document management and case tracking.",
            "Integrated reporting and statistics generation features for compliance analysis.",
          ],
        },
        {
          title: "Vida Natural Pharmacy",
          type: "Personal",
          description:
            "Medication and prescription management system for natural pharmacy",
          longDescription:
            "Development of a web platform for comprehensive management of a natural pharmacy, including medication inventory control, medical prescription generation, printing system, and user administration with different access levels.",
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
            "DomPDF",
          ],
          achievements: [
            "Developed a complete inventory management system for natural medicines.",
            "Implemented a module for generating and printing medical prescriptions with custom PDF.",
            "Created an authentication and authorization system with different user roles.",
            "Designed an intuitive interface for medication and prescription management.",
            "Integrated advanced search and filtering functionalities for medications.",
          ],
        },
        {
          title: "Express Dating",
          type: "Professional",
          company: "Alluxi",
          description:
            "Dating mobile app with video calls and real-time messaging",
          longDescription:
            "Development of a native Android dating application featuring video calls, instant messaging, user matching, and customized profiles.",
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
            "Push Notifications",
          ],
          achievements: [
            "Developed a native Android application using Kotlin and following Material Design principles.",
            "Implemented real-time video calling system using Sinch SDK.",
            "Integrated Firebase for user management, instant messaging, and data storage.",
            "Designed a matching algorithm based on user preferences and location.",
            "Implemented push notification system to keep users updated.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      email: "danesc21@gmail.com",
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
          description:
            "Full-stack development and technical team leadership in enterprise projects.",
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
            "Tailwind CSS",
          ],
          achievements: [
            "Led cross-functional teams to deploy 3+ full-stack projects, reducing deployment time by 20%.",
            "Optimized AWS deployments, resulting in 30% faster load times and increased application uptime.",
            "Developed and maintained cross-platform applications using modern frameworks.",
            "Applied agile methodologies and tools like Jira for project management.",
          ],
        },
        {
          date: "January 2022 - May 2022",
          role: "Software Developer",
          company: "BIIDA Technology",
          logo: "/img/companies/biida.png",
          location: "León, Guanajuato",
          description:
            "Full-stack development and web application optimization.",
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
            "Git",
          ],
          achievements: [
            "Designed responsive UIs, improving user engagement by 15%.",
            "Streamlined API integrations, cutting response times by 25%.",
            "Improved database performance by 20% through optimization techniques.",
            "Contributed to the full software development lifecycle, collaborating in agile teams.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      timeline: [
        {
          date: "2023",
          degree: "Enterprise Application Development Specialization",
          institution: "National Technological Institute of Mexico",
          description:
            "Specialization in enterprise architectures and scalable application development.",
          achievements: [
            "Enterprise design patterns",
            "Distributed architectures and microservices",
            "Enterprise system integration",
            "Software project management",
          ],
        },
        {
          date: "2018 - 2023",
          degree: "Software Engineering",
          institution: "National Technological Institute of Mexico",
          description:
            "Specialized in software development, databases, and cloud computing.",
          achievements: [
            "GPA: 93/100",
            "Relevant Coursework: Data Structures (Java), Prob & Stat (Python)",
            "Object Oriented Programming (Java), Simulation (Python)",
            "Advanced Databases (SQL), Software Engineering",
            "Cloud Computing (AWS), Data Science",
          ],
        },
        {
          date: "2022",
          degree: "AWS Cloud Practitioner Essentials",
          institution: "Amazon Web Services",
          description:
            "Fundamental certification in AWS Cloud services and concepts.",
          achievements: [],
        },
      ],
    },
  },
};