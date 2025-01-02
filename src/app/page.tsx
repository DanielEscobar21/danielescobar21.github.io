'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';
import { texts } from '../content/texts';
import { useState, useEffect } from 'react';

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

// Array con el orden de las secciones
const sections = ['inicio', 'sobre-mi', 'skills', 'educacion', 'experiencia', 'proyectos', 'contacto'];

// Mover la función scrollToSection fuera de los componentes
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

// Componente de navegación entre secciones
const SectionNavigation = ({ currentSection, language }: { currentSection: string, language: 'es' | 'en' }) => {
  const currentIndex = sections.indexOf(currentSection);
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
  const isHome = currentSection === 'inicio';

  const sectionNames: Record<'es' | 'en', Record<string, string>> = {
    es: {
      inicio: 'Inicio',
      'sobre-mi': 'Sobre Mí',
      skills: 'Habilidades',
      educacion: 'Formación',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      contacto: 'Contacto'
    },
    en: {
      inicio: 'Home',
      'sobre-mi': 'About',
      skills: 'Skills',
      educacion: 'Education',
      experiencia: 'Experience',
      proyectos: 'Projects',
      contacto: 'Contact'
    }
  };

  return (
    <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-8">
      {!isHome && prevSection && (
        <motion.button
          onClick={() => scrollToSection(prevSection)}
          className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
          whileHover={{ y: -3 }}
        >
          <svg 
            className="w-4 h-4 rotate-180"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {sectionNames[language][prevSection]}
        </motion.button>
      )}

      {nextSection && (
        <motion.button
          onClick={() => scrollToSection(nextSection)}
          className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
          whileHover={{ y: 3 }}
        >
          {sectionNames[language][nextSection]}
          <svg 
            className="w-4 h-4"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

// Función para scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Primero, actualizar el componente ScrollToTop para que coincida con el estilo del ScrollIndicator
const ScrollToTop = ({ language }: { language: string }) => (
  <motion.div
    className="absolute bottom-12 left-0 right-0 mx-auto flex flex-col items-center gap-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <motion.button
      onClick={scrollToTop}
      className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
      whileHover={{ y: -3 }}
    >
      {language === 'es' ? 'Volver arriba' : 'Back to top'}
      <div className="flex flex-col -space-y-1">
        <svg 
          className="w-4 h-4 rotate-180"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <svg 
          className="w-4 h-4 rotate-180"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </motion.button>
  </motion.div>
);

export default function Home() {
  const { language } = useTheme();
  const currentContent = texts[language];
  const [showNotification, setShowNotification] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [totalPages, setTotalPages] = useState(Math.ceil(currentContent.projects.cards.length / 2));
  const [autoPlay, setAutoPlay] = useState(true);
  const [openSkill, setOpenSkill] = useState<string | null>(null);
  const [openTechSkill, setOpenTechSkill] = useState<string>(currentContent.about.skills.technical.items[0].name);
  const [openSoftSkill, setOpenSoftSkill] = useState<string>(currentContent.about.skills.soft.items[0].name);
  const [openLanguageSkill, setOpenLanguageSkill] = useState<string>(currentContent.about.skills.languages.items[0].name);

  // Efecto para el autoplay del carrusel
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
      }, 10000); // Cambiado de 5000 a 8000 para que dure 8 segundos
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, totalPages]);

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

  // Funciones para el carrusel
  const nextPage = () => {
    setAutoPlay(false);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setAutoPlay(false);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToPage = (page: number) => {
    setAutoPlay(false);
    setCurrentPage(page);
  };

  // Funciones separadas para manejar cada tipo de skill
  const handleTechSkillClick = (skillName: string) => {
    setOpenTechSkill(openTechSkill === skillName ? skillName : skillName);
  };

  const handleSoftSkillClick = (skillName: string) => {
    setOpenSoftSkill(openSoftSkill === skillName ? skillName : skillName);
  };

  const handleLanguageSkillClick = (skillName: string) => {
    setOpenLanguageSkill(openLanguageSkill === skillName ? skillName : skillName);
  };

  // Efecto para manejar el responsive
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setTotalPages(Math.ceil(currentContent.projects.cards.length / (window.innerWidth >= 768 ? 2 : 1)));
    };

    // Comprobar inicialmente
    checkMobile();

    // Añadir listener para cambios de tamaño
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [currentContent.projects.cards.length]);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className={`${sectionClass} relative bg-gradient-to-b from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 overflow-hidden`}
      >
        {/* Background decorations - moved to the top */}
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-100/50 dark:to-neutral-900/50 pointer-events-none" />
        
        {/* Content container - added z-index */}
        <motion.div
          className="w-full max-w-4xl mx-auto text-center relative z-10"
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
            {currentContent.hero.welcome}
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

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* CV Button */}
            <motion.a
              href="/Daniel_Escobar_Resume_EN.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 
                        bg-neutral-900 dark:bg-neutral-100 
                        text-neutral-100 dark:text-neutral-900 
                        rounded-full gap-2 
                        hover:scale-105 
                        transition-all duration-200 
                        cursor-pointer
                        active:scale-95
                        z-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {currentContent.hero.buttons.resume}
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              href="https://www.linkedin.com/in/danielescobar00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 
                        border border-neutral-200/50 dark:border-neutral-800/50 
                        rounded-full gap-2
                        text-neutral-600 dark:text-neutral-400 
                        hover:text-neutral-900 dark:hover:text-neutral-100
                        hover:border-neutral-300 dark:hover:border-neutral-700
                        transition-all duration-200 
                        cursor-pointer
                        active:scale-95
                        z-20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              {currentContent.hero.buttons.linkedin}
            </motion.a>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-100/50 dark:to-neutral-900/50 pointer-events-none" />
        </motion.div>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <motion.button
            onClick={() => scrollToSection("sobre-mi")}
            className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
            whileHover={{ y: 3 }}
          >
            {language === "es" ? "Sobre Mí" : "About"}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {currentContent.about.description
                .split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
            </motion.div>

            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full"
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                <Image
                  src={currentContent.about.images[0].src}
                  alt={currentContent.about.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="absolute bottom-6 left-6 text-white text-lg font-light">
                    {currentContent.about.images[0].alt}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <SectionNavigation
          currentSection="sobre-mi"
          language={language}
        />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`${sectionClass} relative bg-gradient-to-tr from-light-base via-light-elevated to-light-base dark:from-dark-base dark:via-dark-elevated dark:to-dark-base overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="w-full max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={titleClass}>
            {language === "es" ? "Habilidades" : "Skills"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-8 text-neutral-900 dark:text-neutral-100">
                {currentContent.about.skills.technical.title}
              </h3>
              <div className="space-y-2">
                {currentContent.about.skills.technical.items.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${cardClass} overflow-hidden`}
                  >
                    <button
                      onClick={() => handleTechSkillClick(category.name)}
                      className="w-full flex items-center justify-between p-2.5 text-left"
                    >
                      <h4 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                        {category.name}
                      </h4>
                      <motion.svg
                        className="w-5 h-5 text-neutral-500"
                        animate={{ rotate: openTechSkill === category.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: openTechSkill === category.name ? "auto" : 0,
                        opacity: openTechSkill === category.name ? 1 : 0
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-2.5 pt-0">
                        <div className="flex flex-wrap gap-1.5">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 text-sm bg-light-subtle dark:bg-dark-subtle rounded-full 
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
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-light mb-8 text-neutral-900 dark:text-neutral-100">
                {currentContent.about.skills.soft.title}
              </h3>
              <div className="space-y-2">
                {currentContent.about.skills.soft.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${cardClass}`}
                  >
                    <button
                      onClick={() => handleSoftSkillClick(skill.name)}
                      className="w-full flex items-center justify-between p-2.5 text-left"
                    >
                      <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        {skill.name}
                      </h4>
                      <motion.svg
                        className="w-5 h-5 text-neutral-500"
                        animate={{ rotate: openSoftSkill === skill.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: openSoftSkill === skill.name ? "auto" : 0,
                        opacity: openSoftSkill === skill.name ? 1 : 0
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-2.5 pt-0">
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        <SectionNavigation
          currentSection="skills"
          language={language}
        />
      </section>

      {/* Education Section */}
      <section
        id="educacion"
        className={`${sectionClass} relative bg-gradient-to-tr from-light-base via-light-elevated to-light-base dark:from-dark-base dark:via-dark-elevated dark:to-dark-base overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="w-full max-w-5xl mx-auto py-20 px-4"
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
                <div className={`${cardClass} p-6 relative overflow-hidden group w-full`}>
                  {/* Decorative line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500/50 to-primary-600/50 dark:from-primary-400/30 dark:to-primary-500/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  
                  {/* Date badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1.5 text-base font-mono 
                                   bg-neutral-100 dark:bg-neutral-800/50 
                                   text-neutral-600 dark:text-neutral-400 
                                   rounded-full border border-neutral-200/10 dark:border-neutral-700/10">
                      {item.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pr-20 md:pr-28">
                    <h3 className="text-2xl font-medium mb-2 text-neutral-900 dark:text-neutral-100">
                      {item.degree}
                    </h3>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-3">
                      {item.institution}
                    </h4>
                    <p className="text-base text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 group/achievement"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500/50 dark:bg-primary-400/30 
                                           group-hover/achievement:bg-primary-500 dark:group-hover/achievement:bg-primary-400 
                                           transition-colors duration-300 shrink-0" />
                            <span className="text-xs leading-relaxed group-hover/achievement:text-neutral-900 dark:group-hover/achievement:text-neutral-100 transition-colors duration-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <SectionNavigation
          currentSection="educacion"
          language={language}
        />
      </section>

      {/* Experience Section */}
      <section
        id="experiencia"
        className={`${sectionClass} relative bg-gradient-to-bl from-light-subtle via-light-base to-light-subtle dark:from-dark-subtle dark:via-dark-base dark:to-dark-subtle overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none" />
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
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`${item.company} logo`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-2xl font-medium text-neutral-400">
                            {item.company.charAt(0)}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                          <span className="font-medium">{item.company}</span>
                          {item.location && (
                            <>
                              <span className="text-neutral-400">•</span>
                              <span className="text-sm text-neutral-500">
                                {item.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 text-sm font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 rounded-full">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-3 mb-6">
                      {item.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
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
        <SectionNavigation
          currentSection="experiencia"
          language={language}
        />
      </section>

      {/* Projects Section */}
      <section
        id="proyectos"
        className={`${sectionClass} relative bg-gradient-to-r from-light-base via-light-elevated to-light-base dark:from-dark-base dark:via-dark-elevated dark:to-dark-base overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />
        <motion.div
          className="max-w-7xl mx-auto py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={titleClass}>{currentContent.projects.title}</h2>

          {/* Projects Grid Container - Añadimos padding-x para los botones */}
          <div 
            className="relative px-8 md:px-16"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* Projects Grid */}
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={currentPage}
                transition={{ duration: 0.5 }}
              >
                {currentContent.projects.cards
                  .slice(currentPage * (isMobile ? 1 : 2), 
                         currentPage * (isMobile ? 1 : 2) + (isMobile ? 1 : 2))
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      className={`${cardClass} group/card overflow-hidden md:max-w-lg w-full h-full`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.4,
                        delay: index * 0.15,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        transition: {
                          duration: 0.2
                        }
                      }}
                    >
                      <motion.div 
                        className="p-4 md:p-6 flex flex-col h-full relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.15 + 0.2
                        }}
                      >
                        {/* Project Header */}
                        <div className="mb-6">
                          <h3 className="text-xl font-medium mb-3 text-neutral-900 dark:text-neutral-100 group-hover/card:text-neutral-800 dark:group-hover/card:text-white transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                              {project.type}
                            </span>
                            {project.company && (
                              <span className="text-sm text-neutral-500 dark:text-neutral-500">
                                @ {project.company}
                              </span>
                            )}
                          </div>
                          <p className="text-base text-neutral-600 dark:text-neutral-400">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm bg-light-subtle dark:bg-dark-subtle rounded-full 
                                       text-neutral-600 dark:text-neutral-400 
                                       border border-neutral-200/10 dark:border-neutral-700/10
                                       hover:text-neutral-900 dark:hover:text-neutral-100
                                       hover:border-neutral-300 dark:hover:border-neutral-600 
                                       transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Achievements */}
                        {project.achievements && project.achievements.length > 0 && (
                          <div className="flex-grow mb-6">
                            <h4 className="text-lg font-medium mb-4 text-neutral-900 dark:text-neutral-100">
                              {language === 'es' ? 'Logros' : 'Achievements'}
                            </h4>
                            <div className="space-y-3">
                              {project.achievements.map((achievement, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                                  <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Project Link */}
                        {project.url && (
                          <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 
                                     hover:text-neutral-900 dark:hover:text-neutral-100 
                                     transition-colors mt-auto group/link"
                            whileHover={{ x: 5 }}
                          >
                            {language === 'es' ? 'Ver proyecto' : 'View project'}
                            <svg
                              className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </motion.a>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                             ${index === currentPage ? 
                               'bg-neutral-900 dark:bg-neutral-100 w-4' : 
                               'bg-neutral-300 dark:bg-neutral-700'}`}
                  onClick={() => goToPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Ajustamos la posición */}
            {totalPages > 1 && (
              <>
                <button
                  className="absolute -left-4 top-1/2 -translate-y-1/2 
                             text-neutral-400 dark:text-neutral-600
                             hover:text-neutral-900 dark:hover:text-neutral-100
                             transition-colors duration-300
                             focus:outline-none"
                  onClick={prevPage}
                  aria-label="Previous page"
                >
                  <svg
                    className="w-6 h-6 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <button
                  className="absolute -right-4 top-1/2 -translate-y-1/2 
                             text-neutral-400 dark:text-neutral-600
                             hover:text-neutral-900 dark:hover:text-neutral-100
                             transition-colors duration-300
                             focus:outline-none"
                  onClick={nextPage}
                  aria-label="Next page"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </motion.div>
        <SectionNavigation
          currentSection="proyectos"
          language={language}
        />
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className={`${sectionClass} relative bg-gradient-dots from-light-subtle via-light-base to-light-subtle dark:from-dark-subtle dark:via-dark-base dark:to-dark-subtle overflow-hidden`}
      >
        <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03] pointer-events-none" />
        <motion.div
          className="max-w-3xl mx-auto py-20 text-center relative z-10"
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
                  y: showNotification ? 0 : 10,
                }}
                className="absolute top-full mt-4
                          bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 
                          px-6 py-3 rounded-full shadow-lg text-sm
                          pointer-events-none select-none text-center w-max"
              >
                {language === "es"
                  ? "Copiado, espero saber de ti pronto"
                  : "Copied, hope to hear from you soon"}
              </motion.div>
            </div>

            {/* Social media and CV buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 mt-8"
              animate={{
                y: showNotification ? 40 : 0,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
            >
              {/* CV Button */}
              <motion.a
                href="/Daniel_Escobar_Resume_EN.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 
                          bg-neutral-900 dark:bg-neutral-100 
                          text-neutral-100 dark:text-neutral-900 
                          rounded-full gap-2 
                          hover:scale-105 
                          transition-all duration-200 
                          cursor-pointer
                          active:scale-95
                          z-20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {currentContent.hero.buttons.resume}
              </motion.a>

              {/* LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/danielescobar00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 
                          border border-neutral-200/50 dark:border-neutral-800/50 
                          rounded-full gap-2
                          text-neutral-600 dark:text-neutral-400 
                          hover:text-neutral-900 dark:hover:text-neutral-100
                          hover:border-neutral-300 dark:hover:border-neutral-700
                          transition-all duration-200 
                          cursor-pointer
                          active:scale-95
                          z-20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                {currentContent.hero.buttons.linkedin}
              </motion.a>

              {/* GitHub Button */}
              <motion.a
                href="https://github.com/DanielEscobar21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 
                          border border-neutral-200/50 dark:border-neutral-800/50 
                          rounded-full gap-2
                          text-neutral-600 dark:text-neutral-400 
                          hover:text-neutral-900 dark:hover:text-neutral-100
                          hover:border-neutral-300 dark:hover:border-neutral-700
                          transition-all duration-200 
                          cursor-pointer
                          active:scale-95
                          z-20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
            </motion.div>
          </div>

          {/* Copyright y Built with */}
          <div className="flex flex-col items-center gap-4 mt-24">
            {/* Copyright */}
            <motion.p
              className="text-sm text-neutral-500 dark:text-neutral-500"
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

            {/* Built with */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                {language === "es" ? "Hecho con" : "Built with"}
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-neutral-400 dark:text-neutral-600 max-w-[280px] md:max-w-none">
                <span className="flex items-center">Next.js</span>
                <span className="hidden md:block">•</span>
                <span className="flex items-center">React</span>
                <span className="hidden md:block">•</span>
                <span className="flex items-center">TypeScript</span>
                <span className="hidden md:block">•</span>
                <span className="flex items-center">Tailwind</span>
                <span className="hidden md:block">•</span>
                <span className="flex items-center">Framer Motion</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navegación de sección y Back to top */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-8">
          <motion.button
            onClick={() => scrollToSection("proyectos")}
            className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
            whileHover={{ y: -3 }}
          >
            <svg
              className="w-4 h-4 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {language === "es" ? "Proyectos" : "Projects"}
          </motion.button>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group"
            whileHover={{ y: -3 }}
          >
            {language === "es" ? "Volver arriba" : "Back to top"}
            <div className="flex flex-col -space-y-1">
              <svg
                className="w-4 h-4 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                className="w-4 h-4 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </motion.button>
        </div>
      </section>
    </main>
  );
} 