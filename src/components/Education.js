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
 * - Colores monocromáticos
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
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Técnico en Sistemas',
      institution: 'Institución Educativa Eustorgio Colmenares Baptista',
      period: '2022 - 2023',
      description: 'Fundamentos en hardware, software, redes y mantenimiento de equipos de cómputo.',
      icon: 'fas fa-desktop'
    },
    {
      title: 'Bachiller Académico',
      institution: 'Institución Educativa Eustorgio Colmenares Baptista',
      period: '2018 - 2023',
      description: 'Educación etapa primaria y secundaria completada.',
      icon: 'fas fa-graduation-cap'
    }
  ];

  return (
    <section id="formacion" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-neutral-950/20 backdrop-blur-3xl relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-neutral-300/10 dark:bg-neutral-600/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-black dark:text-white">
          Formación Académica
        </h2>

        <div ref={ref} className="relative">
          {/* Línea de tiempo vertical - oculta en móvil */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-black via-neutral-400 to-neutral-300 dark:from-white dark:via-neutral-500 dark:to-neutral-700 hidden sm:block rounded-full"></div>

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative sm:pl-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Marcador de timeline - solo visible en desktop */}
                <div className={`absolute left-4 sm:left-6 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full border-4 border-white dark:border-neutral-950 z-20 bg-black dark:bg-white hidden sm:block transform -translate-x-1`}>
                  <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-10"></div>
                </div>

                {/* Contenido */}
                <div className="glass-card p-5 sm:p-6 sm:ml-4 transform hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-black dark:bg-white flex-shrink-0 mx-auto sm:mx-0 shadow-lg">
                      <i className={`${item.icon} text-white dark:text-black text-lg sm:text-xl`}></i>
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-black dark:text-white font-bold mb-1 text-sm sm:text-base">
                        {item.institution}
                      </p>
                      <span className="text-xs sm:text-sm text-neutral-500 dark:text-gray-400 bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/5 px-2.5 py-1 rounded-md font-semibold inline-block mb-3">
                        {item.period}
                      </span>
                      <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 leading-relaxed font-medium">
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
        <div className={`mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6 sm:mb-8 text-center">
            Certificaciones y Cursos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-card p-5 sm:p-6 text-center transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-4 border border-neutral-200 dark:border-neutral-700">
                <i className="fab fa-html5 text-2xl text-black dark:text-white"></i>
              </div>
              <h4 className="font-bold text-black dark:text-white text-sm sm:text-base mb-1">HTML5 & CSS3</h4>
              <p className="text-xs text-neutral-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Desarrollo Web Frontend</p>
            </div>
            
            <div className="glass-card p-5 sm:p-6 text-center transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-4 border border-neutral-200 dark:border-neutral-700">
                <i className="fab fa-js-square text-2xl text-black dark:text-white"></i>
              </div>
              <h4 className="font-bold text-black dark:text-white text-sm sm:text-base mb-1">JavaScript</h4>
              <p className="text-xs text-neutral-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Programación Interactiva</p>
            </div>
            
            <div className="glass-card p-5 sm:p-6 text-center sm:col-span-2 lg:col-span-1 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-4 border border-neutral-200 dark:border-neutral-700">
                <i className="fab fa-git-alt text-2xl text-black dark:text-white"></i>
              </div>
              <h4 className="font-bold text-black dark:text-white text-sm sm:text-base mb-1">Git & GitHub</h4>
              <p className="text-xs text-neutral-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Control de Versiones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;