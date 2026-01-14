/**
 * NAVBAR COMPONENT
 * ================
 * 
 * Componente de navegación principal de la hoja de vida digital.
 * Incluye navegación responsive, modo claro/oscuro, y efectos de scroll.
 * 
 * Características:
 * - Navegación fija con efectos de backdrop blur
 * - Logo con avatar personalizado y gradientes
 * - Menú desktop tipo "pills" con iconos
 * - Menú móvil con animaciones
 * - Botón de cambio de tema
 * - Botón CTA para contacto
 * - Indicadores de sección activa
 * - Scroll suave entre secciones
 * 
 * @author Cristian Contreras
 * @version 2.0.0
 * @since 2024-12-29
 */

import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useActiveSection } from '../hooks/useScrollAnimation';

/**
 * Componente Navbar - Barra de navegación principal
 * 
 * Maneja la navegación entre secciones, cambio de tema y menú móvil
 * 
 * @returns {JSX.Element} Componente de navegación
 */
const Navbar = () => {
  // ===== HOOKS Y ESTADO =====
  const { isDark, toggleTheme } = useTheme(); // Hook para manejo del tema
  const [isScrolled, setIsScrolled] = useState(false); // Estado para detectar scroll
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado del menú móvil
  const activeSection = useActiveSection(); // Hook para detectar sección activa

  // ===== CONFIGURACIÓN DE NAVEGACIÓN =====
  /**
   * Elementos de navegación con iconos y enlaces
   * Cada item incluye href, label e icono de Font Awesome
   */
  const navItems = [
    { href: '#inicio', label: 'Inicio', icon: 'fas fa-home' },
    { href: '#perfil', label: 'Perfil', icon: 'fas fa-user' },
    { href: '#formacion', label: 'Formación', icon: 'fas fa-graduation-cap' },
    { href: '#habilidades', label: 'Habilidades', icon: 'fas fa-code' },
    { href: '#proyectos', label: 'Proyectos', icon: 'fas fa-folder-open' },
    { href: '#contacto', label: 'Contacto', icon: 'fas fa-envelope' }
  ];

  // ===== EFECTOS =====
  /**
   * Effect para detectar scroll y cambiar estilos del navbar
   * Añade efectos visuales cuando el usuario hace scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ===== FUNCIONES =====
  /**
   * Función para scroll suave a una sección específica
   * @param {string} href - Selector de la sección destino
   */
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset para navbar fijo
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Cerrar menú móvil después de navegar
  };

  return (
    <>
      {/* Navbar principal */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-elegant-200/20 dark:border-gray-700/20' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo mejorado */}
            <div className="flex-shrink-0 group">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-2 border-elegant-200 dark:border-gray-600">
                  <img 
                    src="/img/Foto de Perfil.jpeg" 
                    alt="Cristian Contreras"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-bold text-gradient">
                    Cristian Contreras
                  </h1>
                  <p className="text-xs text-elegant-500 dark:text-gray-400 font-medium">
                    Desarrollador ADSO
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Diseño moderno con pills */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1 xl:space-x-2 bg-elegant-100/80 dark:bg-gray-800/80 rounded-2xl p-2 backdrop-blur-sm border border-elegant-200/50 dark:border-gray-700/50">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`group relative px-3 xl:px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-white dark:bg-gray-700 text-elegant-700 dark:text-elegant-300 shadow-lg scale-105 border border-elegant-200 dark:border-gray-600'
                        : 'text-elegant-600 dark:text-gray-300 hover:text-elegant-700 dark:hover:text-elegant-400 hover:bg-white/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <i className={`${item.icon} text-sm transition-transform duration-300 ${
                      activeSection === item.href.substring(1) ? 'scale-110' : 'group-hover:scale-110'
                    }`}></i>
                    <span className="hidden xl:block">{item.label}</span>
                    
                    {/* Indicador activo mejorado */}
                    {activeSection === item.href.substring(1) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-elegant-600 dark:bg-elegant-400 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Controles de la derecha */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              {/* Botón de tema mejorado */}
              <button
                onClick={toggleTheme}
                className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-elegant-100 dark:bg-gray-800 hover:bg-elegant-200 dark:hover:bg-gray-700 transition-all duration-300 group overflow-hidden"
                aria-label="Toggle theme"
              >
                <div className="relative z-10">
                  <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-base sm:text-lg text-elegant-600 dark:text-gray-300 group-hover:text-elegant-700 dark:group-hover:text-elegant-400 transition-colors duration-300`}></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-elegant-400 to-elegant-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>

              {/* Botón CTA - Solo desktop */}
              <div className="hidden md:block">
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="px-4 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-elegant-500 to-elegant-600 hover:from-elegant-600 hover:to-elegant-700 text-white rounded-lg lg:rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 text-sm lg:text-base"
                >
                  <i className="fas fa-paper-plane text-sm"></i>
                  <span className="hidden lg:block">Contáctame</span>
                  <span className="lg:hidden">Contacto</span>
                </button>
              </div>

              {/* Mobile menu button mejorado */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-elegant-100 dark:bg-gray-800 hover:bg-elegant-200 dark:hover:bg-gray-700 transition-all duration-300 group"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                    <span className={`bg-elegant-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-full ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                    }`}></span>
                    <span className={`bg-elegant-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-full ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                    <span className={`bg-elegant-600 dark:bg-gray-300 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-full ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                    }`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation mejorado */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="mx-3 sm:mx-4 mb-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-elegant-200/20 dark:border-gray-700/20">
            <div className="p-3 sm:p-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-elegant-500 to-elegant-600 text-white shadow-lg'
                      : 'text-elegant-700 dark:text-gray-300 hover:bg-elegant-100 dark:hover:bg-gray-700'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                    activeSection === item.href.substring(1)
                      ? 'bg-white/20'
                      : 'bg-elegant-100 dark:bg-gray-600'
                  }`}>
                    <i className={`${item.icon} text-base sm:text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-sm sm:text-base">{item.label}</span>
                  </div>
                  <i className="fas fa-chevron-right text-xs sm:text-sm opacity-50"></i>
                </button>
              ))}
              
              {/* CTA móvil */}
              <div className="pt-3 sm:pt-4 border-t border-elegant-200 dark:border-gray-700">
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="w-full px-3 sm:px-4 py-3 bg-gradient-to-r from-elegant-500 to-elegant-600 hover:from-elegant-600 hover:to-elegant-700 text-white rounded-xl font-medium shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base transition-all duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                  <span>Contáctame Ahora</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Espaciador para el navbar fijo */}
      <div className="h-16 sm:h-18 lg:h-20"></div>
    </>
  );
};

export default Navbar;