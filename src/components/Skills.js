/**
 * SKILLS COMPONENT
 * ================
 * 
 * Componente de habilidades técnicas y blandas con barras de progreso animadas.
 * Muestra las competencias del aprendiz ADSO de forma visual e interactiva.
 * 
 * Características:
 * - Barras de progreso animadas con paleta monocromática
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
const Skills = ({ selectedSkill, setSelectedSkill }) => {
  // ===== HOOKS =====
  const [ref, isVisible] = useScrollAnimation(); // Hook para animaciones al scroll
  const [animateSkills, setAnimateSkills] = useState(false); // Estado para animar barras de progreso

  // ===== DATOS DE HABILIDADES =====
  /**
   * Habilidades técnicas con niveles de competencia
   * Usa gradientes monocromáticos
   */
  const technicalSkills = [
    { name: 'HTML & CSS', level: 85, icon: 'fab fa-html5', color: 'from-neutral-600 to-black dark:from-neutral-300 dark:to-white', iconColor: 'text-black dark:text-white', filterTag: 'CSS' },
    { name: 'JavaScript', level: 75, icon: 'fab fa-js-square', color: 'from-neutral-500 to-neutral-800 dark:from-neutral-400 dark:to-neutral-100', iconColor: 'text-black dark:text-white', filterTag: 'JavaScript' },
    { name: 'React', level: 70, icon: 'fab fa-react', color: 'from-neutral-600 to-black dark:from-neutral-300 dark:to-white', iconColor: 'text-black dark:text-white', filterTag: 'React' },
    { name: 'PHP', level: 80, icon: 'fab fa-php', color: 'from-neutral-500 to-neutral-800 dark:from-neutral-400 dark:to-neutral-100', iconColor: 'text-black dark:text-white', filterTag: 'PHP' },
    { name: 'Laravel', level: 75, icon: 'fab fa-laravel', color: 'from-neutral-600 to-black dark:from-neutral-300 dark:to-white', iconColor: 'text-black dark:text-white', filterTag: 'Laravel' },
    { name: 'MySQL', level: 80, icon: 'fas fa-database', color: 'from-neutral-500 to-neutral-800 dark:from-neutral-400 dark:to-neutral-100', iconColor: 'text-black dark:text-white', filterTag: 'MySQL' },
    { name: 'PostgreSQL', level: 50, icon: 'fas fa-database', color: 'from-neutral-600 to-black dark:from-neutral-300 dark:to-white', iconColor: 'text-black dark:text-white', filterTag: 'PostgreSQL' },
    { name: 'Git & GitHub', level: 80, icon: 'fab fa-git-alt', color: 'from-neutral-500 to-neutral-800 dark:from-neutral-400 dark:to-neutral-100', iconColor: 'text-black dark:text-white', filterTag: 'Git' },
    { name: 'Diseño Web', level: 70, icon: 'fas fa-palette', color: 'from-neutral-600 to-black dark:from-neutral-300 dark:to-white', iconColor: 'text-black dark:text-white', filterTag: 'Tailwind CSS' },
    { name: 'Herramientas Ofimáticas', level: 90, icon: 'fas fa-file-alt', color: 'from-neutral-500 to-neutral-800 dark:from-neutral-400 dark:to-neutral-100', iconColor: 'text-black dark:text-white', filterTag: 'Ofimáticas' }
  ];

  /**
   * Habilidades blandas con iconos y colores
   */
  const softSkills = [
    { name: 'Trabajo en Equipo', icon: 'fas fa-users', color: 'text-black dark:text-white' },
    { name: 'Puntualidad', icon: 'fas fa-clock', color: 'text-black dark:text-white' },
    { name: 'Responsabilidad', icon: 'fas fa-handshake', color: 'text-black dark:text-white' },
    { name: 'Comunicación', icon: 'fas fa-comments', color: 'text-black dark:text-white' },
    { name: 'Aprendizaje Continuo', icon: 'fas fa-graduation-cap', color: 'text-black dark:text-white' },
    { name: 'Creatividad', icon: 'fas fa-lightbulb', color: 'text-black dark:text-white' }
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
  const SkillBar = ({ skill, index }) => {
    const isSelected = selectedSkill === skill.filterTag;
    
    const handleSkillClick = () => {
      if (isSelected) {
        setSelectedSkill(null); // Deseleccionar
      } else {
        setSelectedSkill(skill.filterTag); // Filtrar por esta habilidad
        // Scroll suave a la sección de proyectos para ver el resultado
        setTimeout(() => {
          const element = document.querySelector('#proyectos');
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
        }, 200);
      }
    };

    return (
      <div
        onClick={handleSkillClick}
        className={`glass-card p-4 sm:p-5 cursor-pointer relative group overflow-hidden ${
          isSelected 
            ? 'border-black/60 dark:border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.1)] ring-1 ring-black/20 dark:ring-white/20 scale-[1.03]' 
            : 'hover:scale-[1.02]'
        } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {/* Glow de fondo */}
        <div className={`absolute -right-6 -bottom-6 w-16 h-16 rounded-full bg-gradient-to-tr ${skill.color} opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-300`}></div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
              <i className={`${skill.icon} text-lg ${skill.iconColor}`}></i>
            </div>
            <div>
              <span className="font-bold text-black dark:text-white text-sm sm:text-base block">{skill.name}</span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                {isSelected ? '✓ Filtrando proyectos' : 'Clic para filtrar proyectos'}
              </span>
            </div>
          </div>
          <span className="text-black dark:text-white font-black text-sm sm:text-base">{skill.level}%</span>
        </div>
        <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2 overflow-hidden shadow-inner">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
            style={{
              width: animateSkills ? `${skill.level}%` : '0%'
            }}
          ></div>
        </div>
      </div>
    );
  };

  /**
   * Componente de tarjeta de habilidad blanda
   * @param {Object} skill - Datos de la habilidad
   * @param {number} index - Índice para animación escalonada
   */
  const SoftSkillCard = ({ skill, index }) => (
    <div
      className={`glass-card p-4 sm:p-5 text-center group hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-neutral-200 dark:border-white/5 shadow-sm">
        <i className={`${skill.icon} text-xl text-black dark:text-white`}></i>
      </div>
      <h3 className="font-bold text-black dark:text-white text-xs sm:text-sm">{skill.name}</h3>
    </div>
  );

  return (
    <section id="habilidades" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-black dark:text-white">
          Habilidades
        </h2>

        <div ref={ref} className="flex flex-col gap-12 lg:gap-16">
          {/* Habilidades Técnicas */}
          <div>
            <div className="text-center mb-6 sm:mb-8">
              <h3 className={`text-xl sm:text-2xl font-bold text-black dark:text-gray-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Habilidades Técnicas
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-gray-400 mt-1 font-medium">
                Haz clic en cualquier habilidad para ver mis proyectos desarrollados en ella
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Habilidades Blandas */}
          <div>
            <h3 className={`text-xl sm:text-2xl font-bold text-black dark:text-gray-200 mb-6 sm:mb-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Habilidades Blandas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Tecnologías adicionales */}
        <div className={`mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6 sm:mb-8 text-center">
            Tecnologías y Herramientas
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { name: 'HTML5', icon: 'fab fa-html5' },
              { name: 'CSS3', icon: 'fab fa-css3-alt' },
              { name: 'JavaScript', icon: 'fab fa-js-square' },
              { name: 'React', icon: 'fab fa-react' },
              { name: 'PHP', icon: 'fab fa-php' },
              { name: 'Laravel', icon: 'fab fa-laravel' },
              { name: 'MySQL', icon: 'fas fa-database' },
              { name: 'PostgreSQL', icon: 'fas fa-database' },
              { name: 'Git', icon: 'fab fa-git-alt' },
              { name: 'GitHub', icon: 'fab fa-github' },
              { name: 'VS Code', icon: 'fas fa-code' },
              { name: 'Figma', icon: 'fab fa-figma' },
              { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
              { name: 'Antigravity IDE', icon: 'fas fa-terminal' },
              { name: 'Stitch AI', icon: 'fas fa-brain' },
              { name: 'Canva', icon: 'fas fa-paint-brush' },
              { name: 'Documentos Google', icon: 'fas fa-file-alt' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center space-x-2 bg-white/40 dark:bg-neutral-800/40 backdrop-blur-sm px-3.5 py-2 rounded-full hover:scale-105 hover:border-black/30 dark:hover:border-white/30 hover:shadow-md transition-all duration-300 border border-neutral-200 dark:border-white/10"
              >
                <i className={`${tech.icon} text-black dark:text-white text-sm sm:text-base`}></i>
                <span className="text-xs sm:text-sm font-semibold text-black dark:text-gray-200">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;