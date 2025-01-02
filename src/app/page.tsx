'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import { texts } from '../content/texts';
import { useState } from 'react';

// Estilo común para las secciones
const sectionClass = "min-h-screen flex flex-col justify-center items-center py-20 px-4";
const titleClass = "text-4xl md:text-5xl font-light mb-16 text-center text-neutral-900 dark:text-neutral-100 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-neutral-200 dark:after:bg-neutral-800 after:mx-auto after:mt-4";

// Estilo común para las cards
const cardClass = `
  bg-light-base dark:bg-dark-elevated 
  p-6 rounded-lg shadow-soft 
  hover:shadow-soft-lg 
  border border-neutral-200/10 dark:border-neutral-800/10 
  transition-all duration-300 
  hover:scale-[1.02] hover:-translate-y-1
  hover:bg-gradient-to-br hover:from-light-elevated hover:to-light-base
  dark:hover:from-dark-elevated dark:hover:to-dark-base
  relative group
`;

export default function Home() {
  const { language } = useTheme();
  const currentContent = texts[language];
  const [showNotification, setShowNotification] = useState(false);

  // Función para manejar el copiado
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(currentContent.contact.email);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Ocultar después de 3 segundos
    } catch (err) {
      console.error('Error al copiar el email:', err);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className={`${sectionClass} relative bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="w-full max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Welcome
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl font-extralight mb-6 text-neutral-900 dark:text-neutral-100 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {currentContent.hero.name}
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl font-extralight mb-8 bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {currentContent.hero.title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {currentContent.hero.subtitle}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-0 right-0 mx-auto flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-sm text-neutral-500 dark:text-neutral-400 tracking-wider">
              {language === "es" ? "Desliza para más" : "Scroll for more"}
            </span>
            <motion.div
              className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full p-1"
              initial={{ y: 0 }}
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
            </motion.div>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-100/50 dark:to-neutral-900/50 pointer-events-none" />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="sobre-mi"
        className={`${sectionClass} relative bg-gradient-radial from-light-base via-light-subtle to-light-base dark:from-dark-base dark:via-dark-subtle dark:to-dark-base overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="w-full max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={titleClass}>{currentContent.about.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                {currentContent.about.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full rounded-lg overflow-hidden"
            >
              <Image
                src={currentContent.about.images[0].src}
                alt={currentContent.about.images[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/30 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="absolute bottom-4 left-4 text-white text-sm font-light">
                  {currentContent.about.images[0].alt}
                </p>
              </div>
            </motion.div>
          </div>

          {/* About Section - Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-8 text-neutral-900 dark:text-neutral-100">
                {currentContent.about.skills.technical.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {currentContent.about.skills.technical.items.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cardClass}
                  >
                    <h4 className="text-lg font-medium mb-4 text-neutral-900 dark:text-neutral-100">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-light-subtle dark:bg-dark-subtle rounded-full 
                                   text-neutral-500 dark:text-neutral-400 
                                   border border-neutral-200/10 dark:border-neutral-700/10
                                   hover:text-neutral-900 dark:hover:text-neutral-100
                                   hover:border-neutral-300 dark:hover:border-neutral-600 
                                   transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-8 text-neutral-900 dark:text-neutral-100">
                {currentContent.about.skills.soft.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {currentContent.about.skills.soft.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cardClass}
                  >
                    <h4 className="text-lg font-medium mb-3 text-neutral-900 dark:text-neutral-100">
                      {skill.name}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section
        id="educacion"
        className={`${sectionClass} relative bg-gradient-to-tr from-light-base via-light-elevated to-light-base dark:from-dark-base dark:via-dark-elevated dark:to-dark-base overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="max-w-5xl mx-auto py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={titleClass}>{currentContent.education.title}</h2>
          <div className="space-y-8">
            {currentContent.education.timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`${cardClass} p-8 rounded-xl`}>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-mono text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 mb-4">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-medium mb-2 text-neutral-900 dark:text-neutral-100">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-4">
                    {item.institution}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  {item.achievements.length > 0 && (
                    <div className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experiencia"
        className={`${sectionClass} relative bg-gradient-to-bl from-light-subtle via-light-base to-light-subtle dark:from-dark-subtle dark:via-dark-base dark:to-dark-subtle overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="max-w-5xl mx-auto py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={titleClass}>{currentContent.experience.title}</h2>
          <div className="space-y-8">
            {currentContent.experience.timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`${cardClass} p-8`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 text-sm font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 rounded-full">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                        {item.role}
                      </h3>
                      <h4 className="text-lg text-neutral-600 dark:text-neutral-400">
                        {item.company}
                      </h4>
                    </div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-light-subtle dark:bg-dark-subtle rounded-full 
                                 text-neutral-500 dark:text-neutral-400 
                                 border border-neutral-200/10 dark:border-neutral-700/10
                                 hover:text-neutral-900 dark:hover:text-neutral-100
                                 hover:border-neutral-300 dark:hover:border-neutral-600 
                                 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="proyectos"
        className={`${sectionClass} relative bg-gradient-to-r from-light-base via-light-elevated to-light-base dark:from-dark-base dark:via-dark-elevated dark:to-dark-base overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="max-w-6xl mx-auto py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={titleClass}>{currentContent.projects.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.projects.cards.map((project, index) => (
              <motion.div
                key={index}
                className={`${cardClass} rounded-xl`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl mb-3 text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-light-subtle dark:bg-dark-subtle rounded-full 
                               text-neutral-600 dark:text-neutral-400 
                               border border-neutral-200 dark:border-neutral-700
                               hover:border-primary-300 dark:hover:border-primary-700 
                               hover:text-primary-600 dark:hover:text-primary-400
                               transition-colors duration-300"
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
        className={`${sectionClass} relative bg-gradient-dots from-light-subtle via-light-base to-light-subtle dark:from-dark-subtle dark:via-dark-base dark:to-dark-subtle overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="max-w-3xl mx-auto py-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={titleClass}>{currentContent.contact.title}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center">
            {currentContent.contact.subtitle}
          </p>

          <div className="flex flex-col items-center space-y-6">
            {/* Email button and notification container */}
            <div className="relative flex flex-col items-center mb-8">
              <motion.button
                onClick={handleCopyEmail}
                className="group relative px-8 py-3 border border-neutral-200/50 dark:border-neutral-800/50 
                         rounded-full text-neutral-600 dark:text-neutral-400 
                         hover:text-neutral-900 dark:hover:text-neutral-100
                         hover:border-neutral-300 dark:hover:border-neutral-700
                         transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentContent.contact.email}
              </motion.button>

              {/* Notification */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: showNotification ? 1 : 0,
                  y: showNotification ? 0 : 10
                }}
                className="absolute top-full mt-4
                          bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 
                          px-6 py-3 rounded-full shadow-lg text-sm
                          pointer-events-none select-none text-center w-max"
              >
                {language === 'es' ? 'Copiado, espero saber de ti pronto' : 'Copied, hope to hear from you soon'}
              </motion.div>
            </div>

            {/* Social media buttons with animation */}
            <motion.div 
              className="flex items-center space-x-6"
              animate={{ 
                y: showNotification ? 40 : 0,
                transition: { type: "spring", stiffness: 200, damping: 20 }
              }}
            >
              <motion.a
                href="https://github.com/descoba"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 
                         hover:border-neutral-300 dark:hover:border-neutral-700 
                         transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <svg
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/daniel-escobar-araujo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full border border-neutral-200/50 dark:border-neutral-800/50 
                         hover:border-neutral-300 dark:hover:border-neutral-700 
                         transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <svg
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          <motion.p
            className="mt-12 text-sm text-neutral-500 dark:text-neutral-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © {new Date().getFullYear()} Daniel Escobar.{" "}
            {language === "es"
              ? "Todos los derechos reservados"
              : "All rights reserved"}
            .
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
} 