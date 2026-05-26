/**
 * PROJECTS COMPONENT
 * ==================
 * 
 * Componente de proyectos y experiencia académica con cards interactivas.
 * Muestra los proyectos formativos del aprendiz ADSO de forma atractiva.
 * 
 * Características:
 * - Cards de proyectos con iconos y diseño monocromático
 * - Lista de características por proyecto
 * - Tecnologías utilizadas
 * - Sección de experiencia académica
 * - Estadísticas de formación
 * - Diseño completamente responsive
 * - Call to action integrado
 * 
 * @author Cristian Contreras
 * @version 2.0.0
 * @since 2024-12-29
 */

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Componente Projects - Sección de proyectos y experiencia
 * 
 * Renderiza los proyectos académicos y experiencia formativa
 * 
 * @returns {JSX.Element} Sección de proyectos completa
 */
const Projects = ({ selectedSkill, setSelectedSkill }) => {
  // ===== HOOKS =====
  const [ref, isVisible] = useScrollAnimation(); // Hook para animaciones al scroll

  // ===== DATOS DE PROYECTOS =====
  /**
   * Proyectos académicos y formativos
   * Incluye información completa con diseño monocromático
   */
  const projects = [
    {
      title: 'HighMed System',
      description: 'Plataforma médica digital con sistema de autenticación y gestión de pacientes. Aplicación web para servicios de salud con interfaz profesional y segura.',
      icon: 'fas fa-heartbeat',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
      features: [
        'Sistema de autenticación',
        'Gestión de pacientes',
        'Historial médico',
        'Interfaz profesional'
      ],
      link: 'https://highmed.vercel.app',
      isExternal: true
    },
    {
      title: 'Sistema de Panadería',
      description: 'Sistema de gestión integral para panaderías con control de inventarios, ventas y administración de productos clave. Optimizado para uso comercial.',
      icon: 'fas fa-bread-slice',
      technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
      features: [
        'Gestión de productos',
        'Control de inventario',
        'Sistema de ventas',
        'Interfaz intuitiva'
      ],
      link: 'https://sistema-panaderia.vercel.app/',
      isExternal: true
    },
    {
      title: 'Banco Express',
      description: 'Aplicación de banca digital con transacciones seguras, gestión de ahorros y un dashboard financiero interactivo con gráficas dinámicas.',
      icon: 'fas fa-university',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
      features: [
        'Dashboard financiero',
        'Gestión de ahorros',
        'Transferencias seguras',
        'Control de perfil'
      ],
      link: 'https://banco-express.vercel.app',
      isExternal: true
    },
    {
      title: 'Gestión Fármaco',
      description: 'Diseño integral para control estricto de inventarios farmacéuticos, alertas de vencimientos y dispensación segura de medicamentos.',
      icon: 'fas fa-pills',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
      features: [
        'Control de inventario',
        'Avisos de vencimiento',
        'Autenticación segura',
        'Reportes dinámicos'
      ],
      link: 'https://gestion-farmaco-xtsf.vercel.app/auth',
      isExternal: true
    },
    {
      title: 'Portafolio Personal',
      description: 'Portafolio interactivo minimalista rediseñado con React y Tailwind CSS, impulsado por herramientas avanzadas de IA para presentar mi trayectoria profesional.',
      icon: 'fas fa-laptop-code',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel', 'Stitch AI', 'Antigravity'],
      features: [
        'Diseño responsivo',
        'Modo claro/oscuro',
        'Animaciones CSS',
        'Optimización UI/UX'
      ],
      link: 'https://portafolio-nuevo-hazel.vercel.app/',
      isExternal: true
    }
  ];

  // ===== FILTER LOGIC =====
  const filteredProjects = selectedSkill 
    ? projects.filter(p => 
        p.technologies.some(tech => tech.toLowerCase().includes(selectedSkill.toLowerCase()))
      )
    : projects;

  // ===== COMPONENTES AUXILIARES =====
  /**
   * Obtiene clases de estilo monocromáticas por tecnología
   */
  const getTechStyle = () => {
    return 'bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white border-neutral-200 dark:border-neutral-700';
  };

  /**
   * Componente de tarjeta de proyecto
   * @param {Object} project - Datos del proyecto
   * @param {number} index - Índice para animación escalonada
   */
  const ProjectCard = ({ project, index }) => (
    <div
      className={`glass-card p-6 flex flex-col justify-between group transform hover:scale-[1.03] transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${project.isExternal ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onClick={project.isExternal ? () => window.open(project.link, '_blank') : undefined}
    >
      <div>
        {/* Banner monocromático en la tarjeta */}
        <div className="h-32 -mx-6 -mt-6 mb-5 relative overflow-hidden rounded-t-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-black dark:from-neutral-300 dark:to-white opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] dark:bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 dark:border-black/30 transform group-hover:scale-110 transition-transform duration-300">
              <i className={`${project.icon} text-2xl text-white dark:text-black`}></i>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300 flex items-center justify-between">
            <span>{project.title}</span>
            {project.isExternal && (
              <i className="fas fa-external-link-alt text-xs opacity-50 group-hover:opacity-100 transition-opacity"></i>
            )}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-gray-300 leading-relaxed font-medium">
            {project.description}
          </p>

          {/* Características */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-neutral-500 dark:text-gray-400 uppercase tracking-widest">Características:</h4>
            <ul className="text-xs text-neutral-700 dark:text-gray-300 space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-[9px] text-black dark:text-white"></i>
                  </div>
                  <span className="font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tecnologías y link */}
      <div className="pt-5 mt-5 border-t border-neutral-200 dark:border-white/5 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 border text-[10px] font-bold rounded-md uppercase tracking-wider ${getTechStyle(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.isExternal && (
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-bold group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
              Ver Demo Online
            </span>
            <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 text-black dark:text-white flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
              <i className="fas fa-arrow-right text-xs"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="proyectos" className="py-12 sm:py-16 lg:py-20 bg-neutral-100/50 dark:bg-neutral-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-black dark:text-white">
          Proyectos y Experiencia
        </h2>

        {/* Filtro Activo HUD */}
        {selectedSkill && (
          <div className="flex items-center justify-center space-x-3 mb-8 animate-fade-in-up">
            <span className="text-xs sm:text-sm font-semibold text-neutral-500 dark:text-gray-400">Filtrado por:</span>
            <div className="px-3.5 py-1.5 bg-black/5 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white rounded-full text-xs font-bold flex items-center space-x-2 shadow-sm">
              <span>{selectedSkill}</span>
              <button 
                onClick={() => setSelectedSkill(null)} 
                className="hover:text-neutral-500 font-black text-sm ml-1"
                title="Quitar filtro"
              >
                ×
              </button>
            </div>
            <button 
              onClick={() => setSelectedSkill(null)} 
              className="text-xs text-neutral-500 hover:text-black dark:hover:text-white font-bold underline ml-1"
            >
              Limpiar filtro
            </button>
          </div>
        )}

        {/* Grid de proyectos */}
        {filteredProjects.length > 0 ? (
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto text-black dark:text-white">
              <i className="fas fa-folder-open text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">Ningún proyecto coincide</h3>
            <p className="text-sm text-neutral-500 dark:text-gray-400 font-medium leading-relaxed">
              No se encontraron proyectos académicos específicos utilizando la etiqueta <strong>"{selectedSkill}"</strong>. 
              Pronto estaré agregando más trabajos formativos.
            </p>
            <button
              onClick={() => setSelectedSkill(null)}
              className="neon-btn-primary py-2 px-4 text-sm"
            >
              Ver todos los proyectos
            </button>
          </div>
        )}

        {/* Sección de experiencia académica */}
        <div className={`mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="glass-card p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-neutral-300/10 dark:bg-neutral-600/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black dark:bg-white rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <i className="fas fa-graduation-cap text-xl sm:text-2xl text-white dark:text-black"></i>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              Experiencia Académica SENA
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto font-medium">
              Durante mi formación en el SENA, he participado en múltiples proyectos formativos que me han
              permitido desarrollar habilidades prácticas en programación, trabajo en equipo y resolución
              de problemas. Cada proyecto ha sido una oportunidad de aprendizaje y crecimiento profesional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
              {[
                { val: "19+", desc: "Proyectos Completados" },
                { val: "700+", desc: "Horas de Código" },
                { val: "100%", desc: "Compromiso y Entrega" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group/stat">
                  <div className="text-3xl sm:text-4xl font-black text-black dark:text-white group-hover/stat:scale-110 transition-transform duration-300">{stat.val}</div>
                  <div className="text-xs sm:text-sm text-neutral-500 dark:text-gray-400 font-bold mt-1 uppercase tracking-wider">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`mt-8 sm:mt-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-300 mb-4 sm:mb-6 font-semibold">
            ¿Interesado en conocer más sobre mis proyectos?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contacto');
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            }}
            className="neon-btn-primary"
          >
            <i className="fas fa-envelope"></i>
            Contáctame
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;