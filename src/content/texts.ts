export const texts = {
  es: {
    hero: {
      welcome: 'Bienvenido',
      name: "Daniel Escobar Araujo",
      title: "Ingeniero de Software",
      subtitle: "Creando soluciones digitales innovadoras",
      scrollText: 'Desliza para más',
      buttons: {
        resume: 'Descargar CV',
        linkedin: 'Visitar LinkedIn'
      }
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
              name: "Lenguajes",
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
              ],
            },
            {
              name: "Frontend",
              skills: [
                "React.js",
                "Angular",
                "Vue.js",
                "Redux",
                "Bootstrap",
                "Sass/LESS",
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
              ],
            },
            {
              name: "Mobile",
              skills: ["Android SDK", "iOS SDK", "React Native", "Kotlin"],
            },
            {
              name: "Cloud & DevOps",
              skills: ["AWS", "Docker", "Firebase", "GIT", "CI/CD"],
            },
            {
              name: "Bases de Datos & APIs",
              skills: [
                "PostgreSQL",
                "OpenAI API",
                "Stripe API",
                "Websockets",
                "Django Channels",
              ],
            },
          ],
        },
        soft: {
          title: "Habilidades Blandas",
          items: [
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
      cards: [
        {
          title: "Proyecto 1",
          description: "Aplicación web moderna con Next.js y TypeScript",
          tech: ["Next.js", "TypeScript", "Tailwind"],
        },
        {
          title: "Proyecto 2",
          description: "Sistema de gestión empresarial",
          tech: ["React", "Node.js", "MongoDB"],
        },
        {
          title: "Proyecto 3",
          description: "Plataforma de comercio electrónico",
          tech: ["Next.js", "Prisma", "PostgreSQL"],
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
          description: "Desarrollo full-stack y liderazgo técnico de equipos en proyectos empresariales.",
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
            "Lideré equipos multifuncionales para implementar más de 3 proyectos full-stack, reduciendo el tiempo de implementación en un 20%.",
            "Optimicé implementaciones en AWS, logrando tiempos de carga 30% más rápidos y mayor tiempo de actividad de las aplicaciones.",
            "Desarrollé y mantuve aplicaciones multiplataforma utilizando frameworks modernos.",
            "Apliqué metodologías ágiles y herramientas como Jira para la gestión de proyectos.",
          ]
        },
        {
          date: "Enero 2022 - Mayo 2022",
          role: "Software Developer",
          company: "BIIDA Technology",
          logo: "/img/companies/biida.png",
          location: "León, Guanajuato",
          description: "Desarrollo full-stack y optimización de aplicaciones web empresariales.",
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
            "Diseñé interfaces de usuario responsivas, mejorando la participación de usuarios en un 15%.",
            "Optimicé integraciones de API, reduciendo tiempos de respuesta en un 25%.",
            "Mejoré el rendimiento de bases de datos en un 20% mediante técnicas de optimización.",
            "Contribuí al ciclo completo de desarrollo de software, colaborando en equipos ágiles.",
          ]
        }
      ]
    },
    education: {
      title: "Formación",
      timeline: [
        {
          date: "2019 - 2023",
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
      welcome: 'Welcome',
      name: "Daniel Escobar Araujo",
      title: "Software Engineer",
      subtitle: "Creating innovative digital solutions",
      scrollText: 'Scroll for more',
      buttons: {
        resume: 'Download Resume',
        linkedin: 'Visit LinkedIn'
      }
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
              name: "Languages",
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
              ],
            },
            {
              name: "Frontend",
              skills: [
                "React.js",
                "Angular",
                "Vue.js",
                "Redux",
                "Bootstrap",
                "Sass/LESS",
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
              ],
            },
            {
              name: "Mobile",
              skills: ["Android SDK", "iOS SDK", "React Native", "Kotlin"],
            },
            {
              name: "Cloud & DevOps",
              skills: ["AWS", "Docker", "Firebase", "GIT", "CI/CD"],
            },
            {
              name: "Databases & APIs",
              skills: [
                "PostgreSQL",
                "OpenAI API",
                "Stripe API",
                "Websockets",
                "Django Channels",
              ],
            },
          ],
        },
        soft: {
          title: "Soft Skills",
          items: [
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
      cards: [
        {
          title: "Project 1",
          description: "Modern web application with Next.js and TypeScript",
          tech: ["Next.js", "TypeScript", "Tailwind"],
        },
        {
          title: "Project 2",
          description: "Business management system",
          tech: ["React", "Node.js", "MongoDB"],
        },
        {
          title: "Project 3",
          description: "E-commerce platform",
          tech: ["Next.js", "Prisma", "PostgreSQL"],
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
            "Applied agile methodologies and tools like Jira for project management.",
          ]
        },
        {
          date: "January 2022 - May 2022",
          role: "Software Developer",
          company: "BIIDA Technology",
          logo: "/img/companies/biida.png",
          location: "León, Guanajuato",
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
            "Git",
          ],
          achievements: [
            "Designed responsive UIs, improving user engagement by 15%.",
            "Streamlined API integrations, cutting response times by 25%.",
            "Improved database performance by 20% through optimization techniques.",
            "Contributed to the full software development lifecycle, collaborating in agile teams.",
          ]
        }
      ]
    },
    education: {
      title: "Education",
      timeline: [
        {
          date: "2019 - 2023",
          degree: "Computer Systems Engineer",
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