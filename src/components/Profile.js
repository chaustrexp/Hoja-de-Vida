/**
 * PROFILE COMPONENT
 * =================
 * 
 * Componente de perfil profesional con descripción personal y estadísticas.
 * Muestra información sobre el aprendiz ADSO y sus características destacadas.
 * 
 * Características:
 * - Descripción profesional enfocada en ADSO
 * - Características destacadas con iconos
 * - Estadísticas de formación y proyectos
 * - Diseño responsive con animaciones
 * 
 * @author Cristian Contreras
 * @version 1.0.0
 * @since 2024-12-29
 */

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Componente Profile - Sección de perfil profesional
 * 
 * Renderiza la descripción personal, características y estadísticas
 * 
 * @returns {JSX.Element} Sección de perfil completa
 */
const Profile = () => {
  // ===== HOOKS =====
  const [ref, isVisible] = useScrollAnimation(); // Hook para animaciones al scroll

  // ===== DATOS DE ESTADÍSTICAS =====
  /**
   * Estadísticas del perfil profesional
   * Muestra métricas relevantes para un aprendiz ADSO
   */
  const stats = [
    { number: '2+', label: 'Años de Formación' },
    { number: '10+', label: 'Proyectos Académicos' },
    { number: '5+', label: 'Tecnologías' }
  ];

  return (
    <section id="perfil" className="py-12 sm:py-16 lg:py-20 bg-elegant-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Perfil Profesional
        </h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Contenido de texto */}
          <div className={`lg:col-span-2 space-y-4 sm:space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-base sm:text-lg text-elegant-700 dark:text-gray-300 leading-relaxed">
              Aprendiz del programa Tecnólogo en Análisis y Desarrollo de Software del SENA, 
              con sólidos conocimientos en desarrollo web frontend y backend. Me caracterizo 
              por mi responsabilidad, puntualidad y capacidad de trabajo en equipo.
            </p>
            <p className="text-base sm:text-lg text-elegant-700 dark:text-gray-300 leading-relaxed">
              Busco una oportunidad de contrato de aprendizaje donde pueda aplicar mis 
              conocimientos técnicos, contribuir al crecimiento de la empresa y continuar 
              mi formación profesional en el desarrollo de soluciones digitales innovadoras.
            </p>
            
            {/* Características destacadas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-elegant-200 dark:bg-elegant-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-graduation-cap text-elegant-600 dark:text-elegant-400 text-sm sm:text-base"></i>
                </div>
                <span className="text-sm sm:text-base text-elegant-800 dark:text-gray-300">Formación SENA</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-elegant-200 dark:bg-elegant-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-code text-elegant-600 dark:text-elegant-400 text-sm sm:text-base"></i>
                </div>
                <span className="text-sm sm:text-base text-elegant-800 dark:text-gray-300">Desarrollo Web</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-elegant-200 dark:bg-elegant-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-users text-elegant-600 dark:text-elegant-400 text-sm sm:text-base"></i>
                </div>
                <span className="text-sm sm:text-base text-elegant-800 dark:text-gray-300">Trabajo en Equipo</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-elegant-200 dark:bg-elegant-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-lightbulb text-elegant-600 dark:text-elegant-400 text-sm sm:text-base"></i>
                </div>
                <span className="text-sm sm:text-base text-elegant-800 dark:text-gray-300">Innovación</span>
              </div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className={`grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 lg:space-y-0 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-elegant-600 dark:text-elegant-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-elegant-500 dark:text-gray-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;