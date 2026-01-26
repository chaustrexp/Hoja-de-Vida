/**
 * SKILLS COMPONENT
 * ================
 * 
 * Componente de habilidades técnicas y blandas con barras de progreso animadas.
 * Muestra las competencias del aprendiz ADSO de forma visual e interactiva.
 * 
 * Características:
 * - Barras de progreso animadas con paleta oatmilk
 * - Habilidades técnicas con porcentajes
 * - Habilidades blandas con iconos
 * - Tecnologías y herramientas
 * - Diseño completamente responsive
 * - Animaciones escalonadas
 * 
 * @author Cristian Contreras
 * @version 2.0.0
 * @since 2024-12-29
 */

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Componente Skills - Sección de habilidades técnicas y blandas
 * 
 * Renderiza las habilidades con barras de progreso y cards interactivas
 * 
 * @returns {JSX.Element} Sección de habilidades completa
 */
const Skills = () => {
  // ===== HOOKS =====
  const [ref, isVisible] = useScrollAnimation(); // Hook para animaciones al scroll
  const [animateSkills, setAnimateSkills] = useState(false); // Estado para animar barras de progreso

  // ===== DATOS DE HABILIDADES =====
  /**
   * Habilidades técnicas con niveles de competencia
   * Usa gradientes de la paleta de grises
   */
  const technicalSkills = [
    { name: 'HTML & CSS', level: 85, icon: 'fab fa-html5', color: 'from-elegant-500 to-elegant-700' },
    { name: 'JavaScript', level: 75, icon: 'fab fa-js-square', color: 'from-elegant-400 to-elegant-600' },
    { name: 'Git & GitHub', level: 80, icon: 'fab fa-git-alt', color: 'from-elegant-600 to-elegant-800' },
    { name: 'Diseño Web', level: 70, icon: 'fas fa-palette', color: 'from-elegant-300 to-elegant-500' },
    { name: 'Herramientas Ofimáticas', level: 90, icon: 'fas fa-file-alt', color: 'from-elegant-500 to-elegant-700' }
  ];

  /**
   * Habilidades blandas con iconos y colores
   * Mantiene colores diversos para diferenciación
   */
  const softSkills = [
    { name: 'Trabajo en Equipo', icon: 'fas fa-users', color: 'text-elegant-600 dark:text-elegant-300' },
    { name: 'Puntualidad', icon: 'fas fa-clock', color: 'text-elegant-700 dark:text-elegant-200' },
    { name: 'Responsabilidad', icon: 'fas fa-handshake', color: 'text-elegant-500 dark:text-elegant-400' },
    { name: 'Comunicación', icon: 'fas fa-comments', color: 'text-elegant-800 dark:text-elegant-100' },
    { name: 'Aprendizaje Continuo', icon: 'fas fa-graduation-cap', color: 'text-elegant-600 dark:text-elegant-300' },
    { name: 'Creatividad', icon: 'fas fa-lightbulb', color: 'text-elegant-700 dark:text-elegant-200' }
  ];

  // ===== EFECTOS =====
  /**
   * Efecto para activar animación de barras de progreso
   * Se ejecuta cuando el componente se hace visible
   */
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimateSkills(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // ===== COMPONENTES AUXILIARES =====
  /**
   * Componente de barra de habilidad técnica
   * @param {Object} skill - Datos de la habilidad
   * @param {number} index - Índice para animación escalonada
   */
  const SkillBar = ({ skill, index }) => (
    <div
      className={`card p-4 sm:p-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <i className={`${skill.icon} text-lg sm:text-xl text-elegant-600 dark:text-elegant-400`}></i>
          <span className="font-semibold text-elegant-900 dark:text-white text-sm sm:text-base">{skill.name}</span>
        </div>
        <span className="text-elegant-600 dark:text-elegant-400 font-bold text-sm sm:text-base">{skill.level}%</span>
      </div>
      <div className="w-full bg-elegant-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: animateSkills ? `${skill.level}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  );

  /**
   * Componente de tarjeta de habilidad blanda
   * @param {Object} skill - Datos de la habilidad
   * @param {number} index - Índice para animación escalonada
   */
  const SoftSkillCard = ({ skill, index }) => (
    <div
      className={`card p-4 sm:p-6 text-center group hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-elegant-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <i className={`${skill.icon} text-xl sm:text-2xl ${skill.color}`}></i>
      </div>
      <h3 className="font-semibold text-elegant-900 dark:text-white text-sm sm:text-base">{skill.name}</h3>
    </div>
  );

  return (
    <section id="habilidades" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-elegant-900 dark:text-white">
          Habilidades
        </h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Habilidades Técnicas */}
          <div>
            <h3 className={`text-xl sm:text-2xl font-semibold text-elegant-600 dark:text-elegant-400 mb-6 sm:mb-8 text-center lg:text-left ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Habilidades Técnicas
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Habilidades Blandas */}
          <div>
            <h3 className={`text-xl sm:text-2xl font-semibold text-elegant-600 dark:text-elegant-400 mb-6 sm:mb-8 text-center lg:text-left ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Habilidades Blandas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologías adicionales */}
        <div className={`mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-xl sm:text-2xl font-semibold text-elegant-900 dark:text-white mb-6 sm:mb-8 text-center">
            Tecnologías y Herramientas
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500 dark:text-orange-400' },
              { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500 dark:text-blue-400' },
              { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-500 dark:text-yellow-400' },
              { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500 dark:text-red-400' },
              { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-700 dark:text-gray-200' },
              { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-600 dark:text-blue-400' },
              { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-500 dark:text-purple-400' },
              { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-600 dark:text-purple-400' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center space-x-2 bg-elegant-100 dark:bg-gray-700 px-3 sm:px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200 border border-elegant-200 dark:border-gray-600"
              >
                <i className={`${tech.icon} ${tech.color} text-sm sm:text-base`}></i>
                <span className="text-xs sm:text-sm font-medium text-elegant-700 dark:text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;