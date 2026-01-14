/**
 * HERO COMPONENT
 * ==============
 * 
 * Componente principal de presentación de la hoja de vida.
 * Incluye información personal, botones de acción y tarjeta de perfil.
 * 
 * Características:
 * - Diseño hero con grid responsive
 * - Botones de descarga de CV y contacto
 * - Enlaces a redes sociales
 * - Tarjeta de perfil con estadísticas
 * - Animaciones de entrada
 * - Gradientes y efectos visuales
 * 
 * @author Cristian Contreras
 * @version 1.0.0
 * @since 2024-12-29
 */

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Componente Hero - Sección principal de presentación
 * 
 * Renderiza la información personal, botones de acción y perfil
 * 
 * @returns {JSX.Element} Sección hero completa
 */
const Hero = () => {
  // ===== HOOKS =====
  const [ref, isVisible] = useScrollAnimation(); // Hook para animaciones al scroll

  // ===== FUNCIONES DE INTERACCIÓN =====
  /**
   * Maneja la descarga del CV
   * Actualmente simula la descarga, puede implementarse con jsPDF o enlace directo
   */
  const handleDownloadCV = () => {
    // Simulación de descarga de CV
    console.log('Descargando CV...');
    // TODO: Implementar descarga real del PDF
    // Ejemplo: window.open('/assets/Cristian_Contreras_CV.pdf', '_blank');
  };

  /**
   * Scroll suave a la sección de contacto
   */
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset para navbar fijo
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-elegant-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto w-full">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className={`space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-elegant-900 dark:text-white">
                Hola, soy{' '}
                <span className="text-gradient block sm:inline">
                  Cristian Contreras
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-elegant-700 dark:text-gray-300 font-medium">
                Aprendiz Tecnólogo en Análisis y Desarrollo de Software - SENA
              </p>
              <p className="text-base sm:text-lg text-elegant-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Desarrollador web en formación, apasionado por crear soluciones digitales innovadoras 
                y comprometido con el aprendizaje continuo en tecnologías modernas.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadCV}
                className="btn-primary w-full sm:w-auto"
              >
                <i className="fas fa-download"></i>
                Descargar CV
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary w-full sm:w-auto"
              >
                <i className="fas fa-envelope"></i>
                Contactar
              </button>
            </div>

            {/* Enlaces sociales */}
            <div className="flex space-x-4 sm:space-x-6 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/cristian-contreras-9a4999343"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-elegant-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-elegant-600 dark:text-gray-400 hover:text-elegant-700 dark:hover:text-elegant-400 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-elegant-200 dark:border-gray-700"
              >
                <i className="fab fa-linkedin text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://github.com/chaustrexp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-elegant-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-elegant-600 dark:text-gray-400 hover:text-elegant-700 dark:hover:text-elegant-400 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-elegant-200 dark:border-gray-700"
              >
                <i className="fab fa-github text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://portfolio.cristian-contreras.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-elegant-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-elegant-600 dark:text-gray-400 hover:text-elegant-700 dark:hover:text-elegant-400 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-elegant-200 dark:border-gray-700"
              >
                <i className="fas fa-briefcase text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>

          {/* Tarjeta de perfil */}
          <div className={`flex justify-center order-1 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="card p-6 sm:p-8 w-full max-w-xs sm:max-w-sm text-center transform hover:scale-105 transition-all duration-500">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 shadow-lg rounded-full overflow-hidden border-4 border-elegant-200 dark:border-gray-600">
                <img 
                  src="/img/Foto de Perfil.jpeg" 
                  alt="Cristian Contreras - Desarrollador ADSO"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-elegant-900 dark:text-white">
                    Cristian Contreras
                  </h3>
                  <p className="text-sm sm:text-base text-elegant-600 dark:text-gray-400">
                    Desarrollador ADSO
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-elegant-500 dark:text-gray-400">
                  <i className="fas fa-map-marker-alt text-sm"></i>
                  <span className="text-xs sm:text-sm">Cúcuta, Norte de Santander</span>
                </div>
                
                {/* Estadísticas rápidas */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-elegant-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-elegant-600 dark:text-elegant-400">2+</div>
                    <div className="text-xs text-elegant-500 dark:text-gray-400">Años</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-elegant-600 dark:text-elegant-400">10+</div>
                    <div className="text-xs text-elegant-500 dark:text-gray-400">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-elegant-600 dark:text-elegant-400">5+</div>
                    <div className="text-xs text-elegant-500 dark:text-gray-400">Tecnologías</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;