/**
 * PROJECTS COMPONENT
 * ==================
 * 
 * Componente de proyectos y experiencia académica con cards interactivas.
 * Muestra los proyectos formativos del aprendiz ADSO de forma atractiva.
 * 
 * Características:
 * - Cards de proyectos con iconos y gradientes oatmilk
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
const Projects = () => {
  // ===== HOOKS =====
  const [ref, isVisible] = useScrollAnimation(); // Hook para animaciones al scroll

  // ===== DATOS DE PROYECTOS =====
  /**
   * Proyectos académicos y formativos
   * Incluye información completa con gradientes oatmilk
   */
  const projects = [
    {
      title: 'HighMed',
      description: 'Plataforma médica digital con sistema de autenticación y gestión de pacientes. Aplicación web para servicios de salud con interfaz profesional y segura.',
      icon: 'fas fa-heartbeat',
      technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
      color: 'from-teal-400 to-cyan-600',
      features: [
        'Sistema de autenticación',
        'Gestión de pacientes',
        'Historial médico',
        'Interfaz profesional'
      ],
      link: 'https://highmed.vercel.app/auth',
      isExternal: true
    },
    {
      title: 'Banco Express',
      description: 'Aplicación web de banca digital con interfaz moderna y funcionalidades completas de gestión financiera. Sistema seguro con autenticación y transacciones.',
      icon: 'fas fa-university',
      technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
      color: 'from-blue-400 to-blue-600',
      features: [
        'Sistema de autenticación',
        'Gestión de cuentas',
        'Transferencias seguras',
        'Dashboard interactivo'
      ],
      link: 'https://banco-express-qxkz.vercel.app/',
      isExternal: true
    },
    {
      title: 'BakerySoft System',
      description: 'Sistema de gestión para panadería con interfaz moderna y funcionalidades completas. Aplicación web para administrar productos, ventas e inventario de panadería.',
      icon: 'fas fa-bread-slice',
      technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
      color: 'from-orange-400 to-red-500',
      features: [
        'Gestión de productos',
        'Control de inventario',
        'Sistema de ventas',
        'Interfaz intuitiva'
      ],
      link: 'https://bakerysoft-system.vercel.app/',
      isExternal: true
    },
    {
      title: 'Mini Página Web',
      description: 'Sitio web minimalista y elegante con diseño moderno. Proyecto enfocado en la simplicidad y experiencia de usuario optimizada.',
      icon: 'fas fa-window-maximize',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
      color: 'from-purple-400 to-purple-600',
      features: [
        'Diseño minimalista',
        'Carga rápida',
        'Interfaz intuitiva',
        'Optimización móvil'
      ],
      link: 'https://mini-pagina.vercel.app/',
      isExternal: true
    },
    {
      title: 'Portafolio Web Personal',
      description: 'Desarrollo de sitio web personal responsivo utilizando HTML5, CSS3 y JavaScript. Implementación de animaciones, modo oscuro y diseño mobile-first.',
      icon: 'fas fa-globe',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-elegant-400 to-elegant-600',
      features: [
        'Diseño responsivo',
        'Modo claro/oscuro',
        'Animaciones CSS',
        'Optimización SEO'
      ]
    },
    {
      title: 'Proyectos Formativos SENA',
      description: 'Desarrollo de múltiples aplicaciones web como parte de la formación académica, incluyendo sistemas de gestión, calculadoras y juegos interactivos.',
      icon: 'fas fa-code',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
      color: 'from-elegant-500 to-elegant-700',
      features: [
        'Sistemas CRUD',
        'Validación de formularios',
        'Almacenamiento local',
        'Control de versiones'
      ]
    },
    {
      title: 'Aplicaciones Interactivas',
      description: 'Creación de aplicaciones web interactivas con JavaScript puro, enfocadas en la experiencia de usuario y funcionalidades dinámicas.',
      icon: 'fas fa-mobile-alt',
      technologies: ['JavaScript', 'DOM', 'APIs'],
      color: 'from-elegant-300 to-elegant-500',
      features: [
        'Manipulación del DOM',
        'Consumo de APIs',
        'Eventos interactivos',
        'Almacenamiento de datos'
      ]
    }
  ];

  // ===== COMPONENTES AUXILIARES =====
  /**
   * Componente de tarjeta de proyecto
   * @param {Object} project - Datos del proyecto
   * @param {number} index - Índice para animación escalonada
   */
  const ProjectCard = ({ project, index }) => (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-elegant-200 dark:border-gray-600 p-6 sm:p-8 group hover:scale-105 duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${project.isExternal ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onClick={project.isExternal ? () => window.open(project.link, '_blank') : undefined}
    >
      {/* Icono del proyecto */}
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <i className={`${project.icon} text-xl sm:text-2xl text-white`}></i>
      </div>

      {/* Contenido */}
      <div className="text-center space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-elegant-900 dark:text-white group-hover:text-elegant-600 dark:group-hover:text-elegant-400 transition-colors duration-300">
          {project.title}
          {project.isExternal && (
            <i className="fas fa-external-link-alt text-sm ml-2 opacity-70"></i>
          )}
        </h3>
        
        <p className="text-sm sm:text-base text-elegant-600 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Características */}
        <div className="space-y-2">
          <h4 className="text-xs sm:text-sm font-semibold text-elegant-700 dark:text-gray-200">Características:</h4>
          <ul className="text-xs sm:text-sm text-elegant-600 dark:text-gray-300 space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center justify-center space-x-2">
                <i className="fas fa-check text-green-400 dark:text-green-400 text-xs"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tecnologías */}
        <div className="flex flex-wrap justify-center gap-2 pt-3 sm:pt-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 sm:px-3 py-1 bg-elegant-100 dark:bg-gray-700 text-elegant-700 dark:text-gray-200 text-xs font-medium rounded-full border border-elegant-200 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlace para proyectos externos */}
        {project.isExternal && (
          <div className="pt-3 sm:pt-4">
            <span className="text-xs text-elegant-500 dark:text-gray-300 italic">
              Haz clic para ver el proyecto
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="proyectos" className="py-12 sm:py-16 lg:py-20 bg-elegant-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-elegant-900 dark:text-white">
          Proyectos y Experiencia
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Sección de experiencia académica */}
        <div className={`mt-12 sm:mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-elegant-200 dark:border-gray-600 p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-elegant-500 to-elegant-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <i className="fas fa-graduation-cap text-xl sm:text-2xl text-white"></i>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-semibold text-elegant-900 dark:text-white mb-3 sm:mb-4">
              Experiencia Académica SENA
            </h3>
            
            <p className="text-sm sm:text-base text-elegant-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-3xl mx-auto">
              Durante mi formación en el SENA, he participado en múltiples proyectos formativos que me han 
              permitido desarrollar habilidades prácticas en programación, trabajo en equipo y resolución 
              de problemas. Cada proyecto ha sido una oportunidad de aprendizaje y crecimiento profesional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-elegant-600 dark:text-elegant-300 mb-1 sm:mb-2">19+</div>
                <div className="text-xs sm:text-sm text-elegant-600 dark:text-gray-300">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-elegant-600 dark:text-elegant-300 mb-1 sm:mb-2">700+</div>
                <div className="text-xs sm:text-sm text-elegant-600 dark:text-gray-300">Horas de Código</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-elegant-600 dark:text-elegant-300 mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-elegant-600 dark:text-gray-300">Compromiso</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`mt-8 sm:mt-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <p className="text-base sm:text-lg text-elegant-600 dark:text-gray-300 mb-4 sm:mb-6">
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
            className="btn-primary"
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