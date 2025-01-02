'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../src/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { theme, toggleTheme, language, setLanguage } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Detectar sección activa durante el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'skills', 'educacion', 'experiencia', 'proyectos', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    es: {
      inicio: 'Inicio',
      sobreMi: 'Sobre Mí',
      skills: 'Habilidades',
      educacion: 'Formación',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      contacto: 'Contacto'
    },
    en: {
      inicio: 'Home',
      sobreMi: 'About',
      skills: 'Skills',
      educacion: 'Education',
      experiencia: 'Experience',
      proyectos: 'Projects',
      contacto: 'Contact'
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 w-full z-50 bg-light-base/80 dark:bg-dark-base/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            className="text-lg font-light cursor-pointer font-mono text-neutral-900 dark:text-neutral-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('inicio')}
          >
            descoba.dev
          </motion.span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(menuItems[language]).map(([key, value]) => {
              const sectionId = key === 'sobreMi' ? 'sobre-mi' : key;
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={key}
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-sm transition-colors relative ${
                    isActive 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {value}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              );
            })}
            
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {theme === 'light' ? '◐' : '◑'}
            </motion.button>

            <motion.select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
              className="bg-transparent text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </motion.select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? '◐' : '◑'}
            </motion.button>
            
            <motion.select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
              className="bg-transparent text-sm text-gray-600 dark:text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </motion.select>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-400 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? '×' : '≡'}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900"
          >
            <div className="px-4 py-2 space-y-1">
              {Object.entries(menuItems[language]).map(([key, value]) => {
                const sectionId = key === 'sobreMi' ? 'sobre-mi' : key;
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.button
                    key={key}
                    onClick={() => scrollToSection(sectionId)}
                    className={`block w-full text-left py-2 ${
                      isActive 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {value}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 