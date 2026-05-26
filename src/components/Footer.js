/**
 * FOOTER COMPONENT
 * ================
 * 
 * Componente de pie de página con información completa y navegación.
 * Cierra la hoja de vida con información de contacto y enlaces útiles.
 * 
 * Características:
 * - Información personal y profesional
 * - Enlaces rápidos de navegación
 * - Información de contacto
 * - Enlaces a redes sociales
 * - Botón scroll to top
 * - Mensaje motivacional
 * - Diseño completamente responsive
 * - Paleta monocromática blanco y negro
 * 
 * @author Cristian Contreras
 * @version 2.0.0
 * @since 2024-12-29
 */

import React from 'react';

/**
 * Componente Footer - Pie de página completo
 * 
 * Renderiza el footer con toda la información de contacto y navegación
 * 
 * @returns {JSX.Element} Footer completo
 */
const Footer = () => {
  // ===== DATOS =====
  const currentYear = new Date().getFullYear(); // Año actual dinámico

  /**
   * Enlaces a redes sociales
   */
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/cristian-contreras-9a4999343',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/chaustrexp',
      icon: 'fab fa-github',
      label: 'GitHub'
    },
    {
      href: 'mailto:cristianchaustre90@gmail.com',
      icon: 'fas fa-envelope',
      label: 'Email'
    }
  ];

  /**
   * Enlaces rápidos de navegación interna
   */
  const quickLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#perfil', label: 'Perfil' },
    { href: '#formacion', label: 'Formación' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' }
  ];

  // ===== FUNCIONES DE NAVEGACIÓN =====
  /**
   * Navega suavemente a una sección específica
   * @param {string} href - Selector de la sección destino
   */
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  /**
   * Navega suavemente al inicio de la página
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white/40 dark:bg-neutral-950/40 backdrop-blur-2xl border-t border-neutral-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal del footer */}
        <div className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Información personal */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
              Cristian Contreras
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 leading-relaxed font-semibold">
              Desarrollador ADSO en formación, apasionado por crear soluciones 
              digitales innovadoras y comprometido con el aprendizaje continuo.
            </p>
            <div className="flex space-x-3 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 shadow-sm transform hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.label}
                >
                  <i className={`${link.icon} text-sm sm:text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-black dark:text-white uppercase tracking-wider text-xs">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm sm:text-base text-neutral-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 font-semibold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-black dark:text-white uppercase tracking-wider text-xs">
              Contacto
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
                <i className="fas fa-map-marker-alt text-black dark:text-white text-sm"></i>
                <span className="text-sm text-neutral-600 dark:text-gray-300 font-semibold">
                  Cúcuta, Norte de Santander
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
                <i className="fas fa-phone text-black dark:text-white text-sm"></i>
                <span className="text-sm text-neutral-600 dark:text-gray-300 font-semibold">
                  +57 3229615724
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
                <i className="fas fa-envelope text-black dark:text-white text-sm"></i>
                <span className="text-sm text-neutral-600 dark:text-gray-300 font-semibold">
                  cristianchaustre90@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-neutral-200 dark:border-white/5"></div>

        {/* Copyright y botón scroll to top */}
        <div className="py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-600 dark:text-gray-300 font-medium">
              &copy; {currentYear} Cristian Contreras. Todos los derechos reservados.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 font-bold mt-1 uppercase tracking-wide">
              Desarrollado con React y Tailwind CSS
            </p>
          </div>

          {/* Botón scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <i className="fas fa-arrow-up text-sm sm:text-base"></i>
          </button>
        </div>
      </div>

      {/* Mensaje motivacional */}
      <div className="bg-black dark:bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] dark:bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-10">
          <p className="text-center text-white dark:text-black text-xs sm:text-sm font-bold tracking-wide">
            <i className="fas fa-heart mr-1 sm:mr-2 animate-pulse"></i>
            "El código es poesía en movimiento, cada línea cuenta una historia de soluciones."
            <i className="fas fa-heart ml-1 sm:mr-2 animate-pulse"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;