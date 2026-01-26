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
 * - Paleta de colores oatmilk
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
   * Enlaces a redes sociales con colores personalizados
   */
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/cristian-contreras-9a4999343',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      href: 'https://github.com/chaustrexp',
      icon: 'fab fa-github',
      label: 'GitHub',
      color: 'hover:text-gray-600'
    },
    {
      href: 'mailto:cristianchaustre90@gmail.com',
      icon: 'fas fa-envelope',
      label: 'Email',
      color: 'hover:text-red-600'
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
    <footer className="bg-elegant-50 dark:bg-gray-800 border-t border-elegant-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal del footer */}
        <div className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Información personal */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gradient dark:text-gradient-dark">
              Cristian Contreras
            </h3>
            <p className="text-sm sm:text-base text-elegant-600 dark:text-gray-200 leading-relaxed">
              Desarrollador ADSO en formación, apasionado por crear soluciones 
              digitales innovadoras y comprometido con el aprendizaje continuo.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-elegant-600 dark:text-gray-400 ${link.color} transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg`}
                  aria-label={link.label}
                >
                  <i className={`${link.icon} text-sm sm:text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-elegant-900 dark:text-white">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm sm:text-base text-elegant-600 dark:text-gray-200 hover:text-elegant-600 dark:hover:text-elegant-300 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-elegant-900 dark:text-white">
              Contacto
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
                <i className="fas fa-map-marker-alt text-elegant-500 dark:text-elegant-300 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-elegant-600 dark:text-gray-200">
                  Cúcuta, Norte de Santander
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
                <i className="fas fa-phone text-elegant-600 dark:text-elegant-300 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-elegant-600 dark:text-gray-200">
                  +57 3229615724
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
                <i className="fas fa-envelope text-elegant-700 dark:text-elegant-300 text-sm sm:text-base"></i>
                <span className="text-sm sm:text-base text-elegant-600 dark:text-gray-200">
                  cristianchaustre90@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-elegant-200 dark:border-gray-700"></div>

        {/* Copyright y botón scroll to top */}
        <div className="py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm sm:text-base text-elegant-600 dark:text-gray-200">
              &copy; {currentYear} Cristian Contreras. Todos los derechos reservados.
            </p>
            <p className="text-xs sm:text-sm text-elegant-500 dark:text-gray-300 mt-1">
              Desarrollado con React y Tailwind CSS
            </p>
          </div>

          {/* Botón scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-elegant-600 hover:bg-elegant-700 rounded-full flex items-center justify-center text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Volver arriba"
          >
            <i className="fas fa-arrow-up text-sm sm:text-base"></i>
          </button>
        </div>
      </div>

      {/* Mensaje motivacional */}
      <div className="bg-elegant-600 dark:bg-elegant-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <p className="text-center text-white text-xs sm:text-sm">
            <i className="fas fa-heart text-red-300 mr-1 sm:mr-2"></i>
            "El código es poesía en movimiento, cada línea cuenta una historia de soluciones."
            <i className="fas fa-heart text-red-300 ml-1 sm:ml-2"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;