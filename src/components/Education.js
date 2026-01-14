/**
 * EDUCATION COMPONENT
 * ===================
 * 
 * Componente de formación académica con timeline y certificaciones.
 * Muestra la trayectoria educativa del aprendiz ADSO de forma visual.
 * 
 * Características:
 * - Timeline vertical con marcadores
 * - Cards de formación con iconos
 * - Sección de certificaciones
 * - Colores diferenciados por nivel
 * - Animaciones de entrada escalonadas
 * 
 * @author Cristian Contreras
 * @version 1.0.0
 * @since 2024-12-29
 */

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Componente Education - Sección de formación académica
 * 
 * Renderiza el timeline educativo y certificaciones
 * 
 * @returns {JSX.Element} Sección de educación completa
 */
const Education = () => {
  // ===== HOOKS =====
  const [ref, isVisible] = useScrollAnimation(); // Hook para animaciones al scroll

  // ===== DATOS DE EDUCACIÓN =====
  /**
   * Datos de formación académica
   * Incluye información completa de cada nivel educativo
   */
  const educationData = [
    {
      title: 'Tecnólogo en Análisis y Desarrollo de Software',
      institution: 'SENA - Servicio Nacional de Aprendizaje',
      period: '2024 - 2027 (En formación)',
      description: 'Formación integral en desarrollo de software, bases de datos, programación web, metodologías ágiles y gestión de proyectos tecnológicos.',
      icon: 'fas fa-laptop-code',
      color: 'primary'
    },
    {
      title: 'Técnico en Sistemas',
      institution: 'Institución Educativa Eustorgio Colmenares Baptista',
      period: '2022 - 2023',
      description: 'Fundamentos en hardware, software, redes y mantenimiento de equipos de cómputo.',
      icon: 'fas fa-desktop',
      color: 'secondary'
    },
    {
      title: 'Bachiller Académico',
      institution: 'Institución Educativa Eustorgio Colmenares Baptista',
      period: '2018 - 2023',
      description: 'Educación etapa primaria y secundaria completada.',
      icon: 'fas fa-graduation-cap',
      color: 'accent'
    }
  ];

  // ===== FUNCIONES AUXILIARES =====
  /**
   * Obtiene las clases CSS para los colores según el tipo con paleta de grises
   * @param {string} color - Tipo de color (primary, secondary, accent)
   * @returns {string} Clases CSS correspondientes
   */
  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-elegant-600 border-elegant-600',
      secondary: 'bg-elegant-500 border-elegant-500',
      accent: 'bg-elegant-700 border-elegant-700'
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="formacion" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Formación Académica
        </h2>

        <div ref={ref} className="relative">
          {/* Línea de tiempo vertical - oculta en móvil */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-elegant-400 to-elegant-600 dark:from-elegant-500 dark:to-elegant-400 hidden sm:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative sm:pl-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Marcador de timeline - solo visible en desktop */}
                <div className={`absolute left-4 sm:left-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-3 sm:border-4 border-white dark:border-gray-800 ${getColorClasses(item.color)} hidden sm:block`}></div>

                {/* Contenido */}
                <div className="card p-4 sm:p-6 sm:ml-4 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center ${getColorClasses(item.color)} flex-shrink-0 mx-auto sm:mx-0`}>
                      <i className={`${item.icon} text-white text-lg sm:text-xl`}></i>
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-elegant-900 dark:text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-elegant-600 dark:text-elegant-400 font-medium mb-1 text-sm sm:text-base">
                        {item.institution}
                      </p>
                      <p className="text-xs sm:text-sm text-elegant-500 dark:text-gray-400 mb-3">
                        {item.period}
                      </p>
                      <p className="text-sm sm:text-base text-elegant-700 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones adicionales */}
        <div className={`mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl sm:text-2xl font-semibold text-elegant-900 dark:text-white mb-6 sm:mb-8 text-center">
            Certificaciones y Cursos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="card p-4 sm:p-6 text-center">
              <i className="fab fa-html5 text-2xl sm:text-3xl text-orange-500 mb-3"></i>
              <h4 className="font-semibold text-elegant-900 dark:text-white text-sm sm:text-base">HTML5 & CSS3</h4>
              <p className="text-xs sm:text-sm text-elegant-600 dark:text-gray-400">Desarrollo Web Frontend</p>
            </div>
            <div className="card p-4 sm:p-6 text-center">
              <i className="fab fa-js-square text-2xl sm:text-3xl text-yellow-500 mb-3"></i>
              <h4 className="font-semibold text-elegant-900 dark:text-white text-sm sm:text-base">JavaScript</h4>
              <p className="text-xs sm:text-sm text-elegant-600 dark:text-gray-400">Programación Interactiva</p>
            </div>
            <div className="card p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <i className="fab fa-git-alt text-2xl sm:text-3xl text-red-500 mb-3"></i>
              <h4 className="font-semibold text-elegant-900 dark:text-white text-sm sm:text-base">Git & GitHub</h4>
              <p className="text-xs sm:text-sm text-elegant-600 dark:text-gray-400">Control de Versiones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;