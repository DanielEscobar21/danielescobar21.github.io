'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { language } = useTheme();

  const content = {
    es: {
      hero: {
        name: 'Daniel Escobar Araujo',
        title: 'Ingeniero de Software',
        subtitle: 'Creando soluciones digitales innovadoras'
      },
      about: {
        title: 'Sobre Mí',
        description: 'Soy un Ingeniero de Software apasionado por crear soluciones tecnológicas que impacten positivamente en la vida de las personas. Me especializo en el desarrollo de aplicaciones web modernas y escalables.',
        skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'AWS']
      },
      projects: {
        title: 'Proyectos',
        cards: [
          {
            title: 'Proyecto 1',
            description: 'Aplicación web moderna con Next.js y TypeScript',
            tech: ['Next.js', 'TypeScript', 'Tailwind'],
          },
          {
            title: 'Proyecto 2',
            description: 'Sistema de gestión empresarial',
            tech: ['React', 'Node.js', 'MongoDB'],
          },
          {
            title: 'Proyecto 3',
            description: 'Plataforma de comercio electrónico',
            tech: ['Next.js', 'Prisma', 'PostgreSQL'],
          }
        ]
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Hablemos sobre tu próximo proyecto',
        email: 'contacto@tudominio.com'
      },
      experience: {
        title: 'Experiencia',
        timeline: [
          {
            date: '2023 - Presente',
            role: 'Senior Software Engineer',
            company: 'Empresa Actual',
            description: 'Desarrollo de soluciones escalables utilizando Next.js y AWS. Liderazgo técnico de equipo.',
            tech: ['Next.js', 'AWS', 'TypeScript']
          },
          {
            date: '2021 - 2023',
            role: 'Software Engineer',
            company: 'Empresa Anterior',
            description: 'Desarrollo full-stack de aplicaciones web empresariales.',
            tech: ['React', 'Node.js', 'PostgreSQL']
          },
          {
            date: '2019 - 2021',
            role: 'Junior Developer',
            company: 'Primera Empresa',
            description: 'Desarrollo frontend y mantenimiento de aplicaciones web.',
            tech: ['React', 'JavaScript', 'CSS']
          }
        ]
      }
    },
    en: {
      hero: {
        name: 'Daniel Escobar Araujo',
        title: 'Software Engineer',
        subtitle: 'Creating innovative digital solutions'
      },
      about: {
        title: 'About Me',
        description: 'I am a Software Engineer passionate about creating technological solutions that positively impact people\'s lives. I specialize in developing modern and scalable web applications.',
        skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'AWS']
      },
      projects: {
        title: 'Projects',
        cards: [
          {
            title: 'Project 1',
            description: 'Modern web application with Next.js and TypeScript',
            tech: ['Next.js', 'TypeScript', 'Tailwind'],
          },
          {
            title: 'Project 2',
            description: 'Business management system',
            tech: ['React', 'Node.js', 'MongoDB'],
          },
          {
            title: 'Project 3',
            description: 'E-commerce platform',
            tech: ['Next.js', 'Prisma', 'PostgreSQL'],
          }
        ]
      },
      contact: {
        title: 'Contact',
        subtitle: "Let's talk about your next project",
        email: 'contact@yourdomain.com'
      },
      experience: {
        title: 'Experience',
        timeline: [
          {
            date: '2023 - Present',
            role: 'Senior Software Engineer',
            company: 'Current Company',
            description: 'Development of scalable solutions using Next.js and AWS. Technical team leadership.',
            tech: ['Next.js', 'AWS', 'TypeScript']
          },
          {
            date: '2021 - 2023',
            role: 'Software Engineer',
            company: 'Previous Company',
            description: 'Full-stack development of enterprise web applications.',
            tech: ['React', 'Node.js', 'PostgreSQL']
          },
          {
            date: '2019 - 2021',
            role: 'Junior Developer',
            company: 'First Company',
            description: 'Frontend development and web application maintenance.',
            tech: ['React', 'JavaScript', 'CSS']
          }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className="h-screen flex items-center justify-center px-4"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-4 text-gray-900 dark:text-white"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {currentContent.hero.name}
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-4 text-gray-800 dark:text-gray-200"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {currentContent.hero.title}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {currentContent.hero.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="sobre-mi"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light mb-8 text-gray-900 dark:text-white">
            {currentContent.about.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {currentContent.about.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {currentContent.about.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm border border-gray-200 dark:border-gray-800 rounded-full text-gray-600 dark:text-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experiencia"
        className="py-20 px-4"
      >
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light mb-16 text-center text-gray-900 dark:text-white">
            {currentContent.experience.title}
          </h2>
          <div className="relative">
            {/* Línea vertical con gradiente */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-purple-500/20 dark:from-blue-400/20 dark:via-blue-400/50 dark:to-purple-400/20" />

            {/* Timeline items */}
            {currentContent.experience.timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16 md:ml-auto" : "md:pl-16"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                {/* Punto en la línea con animación */}
                <motion.div
                  className={`absolute top-0 ${
                    index % 2 === 0
                      ? "left-0 md:-left-[9px]"
                      : "left-0 md:-left-[9px]"
                  } w-[18px] h-[18px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transform -translate-x-1/2 z-10`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="absolute inset-[3px] rounded-full bg-white dark:bg-black" />
                </motion.div>

                {/* Línea conectora horizontal */}
                <div
                  className={`absolute top-[9px] ${
                    index % 2 === 0
                      ? "left-0 md:-left-[9px] w-8 md:w-16"
                      : "left-0 md:-left-[9px] w-8 md:w-16"
                  } h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transform -translate-x-1/2`}
                />

                {/* Contenido con mejor diseño */}
                <motion.div
                  className="bg-white dark:bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                  whileHover={{ y: -5 }}
                >
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 mb-4">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.role}
                  </h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                    {item.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 text-sm bg-gray-50 dark:bg-gray-800/50 rounded-full text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="proyectos"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light mb-12 text-gray-900 dark:text-white">
            {currentContent.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.projects.cards.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-black p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-20 px-4"
      >
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light mb-4 text-gray-900 dark:text-white">
            {currentContent.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {currentContent.contact.subtitle}
          </p>
          <a
            href={`mailto:${currentContent.contact.email}`}
            className="inline-block px-8 py-3 border border-gray-200 dark:border-gray-800 rounded-full text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            {currentContent.contact.email}
          </a>
        </motion.div>
      </section>
    </main>
  );
} 