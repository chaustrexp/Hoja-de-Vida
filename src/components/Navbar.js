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
          ? 'bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl shadow-lg border-b border-neutral-200 dark:border-white/5 py-1' 
          : 'bg-transparent py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo mejorado */}
            <div className="flex-shrink-0 group">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-2 border-neutral-200 dark:border-white/15">
                  <img 
                    src="/img/Foto de perfil.jpeg" 
                    alt="Cristian Contreras"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMTUiIHI9IjUiIGZpbGw9IiM5QjlCQTMiLz4KPHN0eWxlPi5zdDB7ZmlsbDojOUI5QkEzO308L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAsMzBjMC0zLjMsMi43LTYsNi02aDhjMy4zLDAsNiwyLjcsNiw2djJIMTBWMzB6Ii8+Cjwvc3ZnPgo=';
                    }}
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                    Cristian Contreras
                  </h1>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 font-bold tracking-widest uppercase">
                    Desarrollador ADSO
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Diseño moderno con pills */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1 xl:space-x-2 bg-neutral-100/60 dark:bg-neutral-800/30 rounded-2xl p-1.5 backdrop-blur-md border border-neutral-200 dark:border-white/5 shadow-inner">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`group relative px-3 xl:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-md scale-105'
                        : 'text-neutral-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-700/40'
                    }`}
                  >
                    <i className={`${item.icon} text-sm transition-transform duration-300 ${
                      activeSection === item.href.substring(1) ? 'scale-110' : 'group-hover:scale-110'
                    }`}></i>
                    <span className="hidden xl:block">{item.label}</span>
                    
                    {/* Indicador activo mejorado */}
                    {activeSection === item.href.substring(1) && (
                      <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-black dark:bg-white rounded-full"></div>
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
                className="relative p-2 sm:p-2.5 rounded-xl bg-neutral-100/60 dark:bg-neutral-800/40 border border-neutral-200 dark:border-white/10 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/60 shadow-sm transition-all duration-300 group overflow-hidden"
                aria-label="Toggle theme"
              >
                <div className="relative z-10">
                  <i className={`fas ${isDark ? 'fa-sun text-white' : 'fa-moon text-black'} text-base sm:text-lg transition-transform duration-500 group-hover:rotate-45`}></i>
                </div>
              </button>

              {/* Botón CTA - Solo desktop */}
              <div className="hidden md:block">
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="px-4 lg:px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 text-sm lg:text-base"
                >
                  <i className="fas fa-paper-plane text-sm"></i>
                  <span>Contáctame</span>
                </button>
              </div>

              {/* Mobile menu button mejorado */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-2 rounded-xl bg-neutral-100/60 dark:bg-neutral-800/40 border border-neutral-200 dark:border-white/10 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/60 transition-all duration-300 group"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-5 h-5 flex flex-col justify-center items-center">
                    <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-full ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                    }`}></span>
                    <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-full my-0.5 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                    <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-full ${
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
          <div className="mx-3 sm:mx-4 mb-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-200 dark:border-white/10">
            <div className="p-3 sm:p-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-2.5 rounded-xl text-left transition-all duration-300 transform hover:translate-x-1 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                      : 'text-neutral-700 dark:text-gray-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/40'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeSection === item.href.substring(1)
                      ? 'bg-white/20 dark:bg-black/20'
                      : 'bg-neutral-100 dark:bg-neutral-800'
                  }`}>
                    <i className={`${item.icon} text-sm sm:text-base`}></i>
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                  <i className="fas fa-chevron-right text-xs opacity-50"></i>
                </button>
              ))}
              
              {/* CTA móvil */}
              <div className="pt-3 border-t border-neutral-200 dark:border-white/5">
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="w-full px-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold shadow-lg flex items-center justify-center space-x-2 text-sm transition-all duration-300"
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