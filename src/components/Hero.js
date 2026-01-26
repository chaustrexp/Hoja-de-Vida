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
import jsPDF from 'jspdf';

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
   * Genera un PDF profesional de 2 páginas con jsPDF
   */
  const handleDownloadCV = () => {
    try {
      // Crear nuevo documento PDF con configuración profesional
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Configurar colores (RGB)
      const colors = {
        primary: [42, 42, 42],        // Gris oscuro para títulos
        secondary: [70, 70, 70],      // Gris medio para texto
        accent: [100, 100, 100],      // Gris claro para detalles
        blue: [37, 99, 235],          // Azul para acentos
        lightGray: [245, 245, 245],   // Fondo claro
        white: [255, 255, 255]        // Blanco
      };
      
      // =================== PÁGINA 1 ===================
      
      // === ENCABEZADO PRINCIPAL ===
      doc.setFillColor(...colors.primary);
      doc.rect(0, 0, 210, 50, 'F');
      
      // Nombre en blanco sobre fondo oscuro
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(28);
      doc.setTextColor(...colors.white);
      doc.text('CRISTIAN CONTRERAS', 20, 25);
      
      // Título profesional
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(200, 200, 200);
      doc.text('Tecnólogo en Análisis y Desarrollo de Software', 20, 35);
      
      // Información de contacto
      doc.setFontSize(10);
      doc.setTextColor(220, 220, 220);
      doc.text('Cucuta, Norte de Santander', 20, 42);
      doc.text('+57 3229615724', 20, 46);
      doc.text('cristianchaustre90@gmail.com', 110, 42);
      doc.text('LinkedIn: /cristian-contreras', 110, 46);
      
      let yPos = 65;
      
      // === PERFIL PROFESIONAL ===
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...colors.primary);
      doc.text('PERFIL PROFESIONAL', 20, yPos);
      
      // Línea decorativa
      doc.setDrawColor(...colors.blue);
      doc.setLineWidth(2);
      doc.line(20, yPos + 2, 70, yPos + 2);
      
      yPos += 10;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(...colors.secondary);
      
      const perfilText = 'Aprendiz del programa Tecnólogo en Análisis y Desarrollo de Software del SENA, con sólidos conocimientos en desarrollo web frontend y backend. Me caracterizo por mi responsabilidad, puntualidad y capacidad de trabajo en equipo. Busco una oportunidad de contrato de aprendizaje donde pueda aplicar mis conocimientos técnicos y contribuir al crecimiento de la empresa.';
      const perfilLines = doc.splitTextToSize(perfilText, 170);
      doc.text(perfilLines, 20, yPos);
      yPos += perfilLines.length * 5 + 15;
      
      // === FORMACIÓN ACADÉMICA ===
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...colors.primary);
      doc.text('FORMACIÓN ACADÉMICA', 20, yPos);
      
      doc.setDrawColor(...colors.blue);
      doc.setLineWidth(2);
      doc.line(20, yPos + 2, 75, yPos + 2);
      yPos += 12;
      
      // Formación 1
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...colors.primary);
      doc.text('Tecnólogo en Análisis y Desarrollo de Software', 20, yPos);
      yPos += 6;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...colors.secondary);
      doc.text('SENA - Servicio Nacional de Aprendizaje', 20, yPos);
      doc.setTextColor(...colors.accent);
      doc.text('2024 - 2027 (En formación)', 140, yPos);
      yPos += 10;
      
      // Formación 2
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...colors.primary);
      doc.text('Técnico en Sistemas', 20, yPos);
      yPos += 6;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...colors.secondary);
      doc.text('Institución Educativa Eustorgio Colmenares Baptista', 20, yPos);
      doc.setTextColor(...colors.accent);
      doc.text('2022 - 2023', 140, yPos);
      yPos += 10;
      
      // Formación 3
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...colors.primary);
      doc.text('Bachiller Académico', 20, yPos);
      yPos += 6;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...colors.secondary);
      doc.text('Institución Educativa Eustorgio Colmenares Baptista', 20, yPos);
      doc.setTextColor(...colors.accent);
      doc.text('2018 - 2023', 140, yPos);
      yPos += 15;
      
      // === HABILIDADES TÉCNICAS ===
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...colors.primary);
      doc.text('HABILIDADES TÉCNICAS', 20, yPos);
      
      doc.setDrawColor(...colors.blue);
      doc.setLineWidth(2);
      doc.line(20, yPos + 2, 80, yPos + 2);
      yPos += 12;
      
      const skills = [
        { name: 'HTML & CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'Diseño Web', level: 70 },
        { name: 'Herramientas Ofimáticas', level: 90 }
      ];
      
      skills.forEach(skill => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(...colors.primary);
        doc.text(skill.name, 20, yPos);
        
        // Barra de progreso
        const barWidth = 50;
        const barHeight = 4;
        const progressWidth = (barWidth * skill.level) / 100;
        
        // Fondo de la barra
        doc.setFillColor(230, 230, 230);
        doc.rect(100, yPos - 3, barWidth, barHeight, 'F');
        
        // Progreso de la barra
        doc.setFillColor(...colors.blue);
        doc.rect(100, yPos - 3, progressWidth, barHeight, 'F');
        
        // Porcentaje
        doc.setFontSize(10);
        doc.setTextColor(...colors.accent);
        doc.text(`${skill.level}%`, 155, yPos);
        
        yPos += 10;
      });
      
      // Pie de página 1
      doc.setFontSize(8);
      doc.setTextColor(...colors.accent);
      doc.text('Página 1 de 2', 180, 285);
      
      // =================== PÁGINA 2 ===================
      doc.addPage();
      yPos = 30;
      
      // === PROYECTOS DESTACADOS ===
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...colors.primary);
      doc.text('PROYECTOS DESTACADOS', 20, yPos);
      
      doc.setDrawColor(...colors.blue);
      doc.setLineWidth(2);
      doc.line(20, yPos + 2, 85, yPos + 2);
      yPos += 15;
      
      const projects = [
        {
          name: 'Banco Express',
          description: 'Aplicación web de banca digital con interfaz moderna y funcionalidades completas de gestión financiera. Sistema seguro con autenticación y transacciones.',
          tech: 'React, JavaScript, CSS, Vercel',
          url: 'banco-express-qxkz.vercel.app'
        },
        {
          name: 'Bakery Soft',
          description: 'Sistema de gestión para panadería con interfaz moderna. Aplicación web para administrar productos, ventas e inventario.',
          tech: 'React, JavaScript, CSS, Vercel',
          url: 'bakery-soft.vercel.app'
        },
        {
          name: 'Mini Página Web',
          description: 'Sitio web minimalista y elegante con diseño moderno. Proyecto enfocado en la simplicidad y experiencia de usuario optimizada.',
          tech: 'HTML, CSS, JavaScript, Vercel',
          url: 'mini-pagina.vercel.app'
        },
        {
          name: 'Portafolio Personal',
          description: 'Sitio web personal responsivo con modo oscuro, animaciones CSS y diseño mobile-first. Optimizado para SEO.',
          tech: 'HTML, CSS, JavaScript, Tailwind CSS',
          url: 'En desarrollo'
        }
      ];
      
      projects.forEach((project, index) => {
        // Fondo alternado para cada proyecto
        if (index % 2 === 0) {
          doc.setFillColor(...colors.lightGray);
          doc.rect(15, yPos - 5, 180, 25, 'F');
        }
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(...colors.primary);
        doc.text(`${index + 1}. ${project.name}`, 20, yPos);
        yPos += 6;
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(...colors.secondary);
        const descLines = doc.splitTextToSize(project.description, 170);
        doc.text(descLines, 20, yPos);
        yPos += descLines.length * 4 + 2;
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...colors.blue);
        doc.text('Tecnologías: ', 20, yPos);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...colors.accent);
        doc.text(project.tech, 45, yPos);
        yPos += 4;
        
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(9);
        doc.setTextColor(...colors.accent);
        doc.text(`URL: ${project.url}`, 20, yPos);
        yPos += 12;
      });
      
      // === HABILIDADES BLANDAS ===
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...colors.primary);
      doc.text('HABILIDADES BLANDAS', 20, yPos);
      
      doc.setDrawColor(...colors.blue);
      doc.setLineWidth(2);
      doc.line(20, yPos + 2, 80, yPos + 2);
      yPos += 12;
      
      const softSkills = [
        'Trabajo en Equipo',
        'Puntualidad',
        'Responsabilidad',
        'Comunicación Efectiva',
        'Aprendizaje Continuo',
        'Creatividad e Innovación',
        'Resolución de Problemas',
        'Adaptabilidad'
      ];
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(...colors.secondary);
      
      // Dividir en dos columnas
      const halfLength = Math.ceil(softSkills.length / 2);
      for (let i = 0; i < halfLength; i++) {
        doc.text(`• ${softSkills[i]}`, 20, yPos + (i * 8));
        if (softSkills[i + halfLength]) {
          doc.text(`• ${softSkills[i + halfLength]}`, 110, yPos + (i * 8));
        }
      }
      
      yPos += halfLength * 8 + 15;
      
      // === INFORMACIÓN ADICIONAL ===
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...colors.primary);
      doc.text('INFORMACIÓN ADICIONAL', 20, yPos);
      
      doc.setDrawColor(...colors.blue);
      doc.setLineWidth(2);
      doc.line(20, yPos + 2, 90, yPos + 2);
      yPos += 12;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      doc.setTextColor(...colors.secondary);
      doc.text('• Disponible para contrato de aprendizaje inmediatamente', 20, yPos);
      yPos += 6;
      doc.text('• Conocimientos en metodologías ágiles (Scrum)', 20, yPos);
      yPos += 6;
      doc.text('• Experiencia en trabajo colaborativo con Git/GitHub', 20, yPos);
      yPos += 6;
      doc.text('• Inglés técnico para documentación', 20, yPos);
      
      // === PIE DE PÁGINA ===
      doc.setFillColor(...colors.primary);
      doc.rect(0, 270, 210, 27, 'F');
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...colors.white);
      doc.text('ENLACES PROFESIONALES', 20, 280);
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text('LinkedIn: linkedin.com/in/cristian-contreras-9a4999343', 20, 286);
      doc.text('GitHub: github.com/chaustrexp', 20, 291);
      
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(200, 200, 200);
      doc.text(`CV generado el ${new Date().toLocaleDateString('es-ES')}`, 140, 291);
      doc.text('Página 2 de 2', 180, 285);
      
      // Descargar el PDF
      doc.save('Cristian_Contreras_CV_2026.pdf');
      
      console.log('CV profesional de 2 páginas generado exitosamente');
    } catch (error) {
      console.error('Error al generar el CV:', error);
      // Fallback: usar el archivo estático
      try {
        const link = document.createElement('a');
        link.href = '/cv/Cristian_Contreras_CV.pdf';
        link.download = 'Cristian_Contreras_CV.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('CV estático descargado como fallback');
      } catch (fallbackError) {
        console.error('Error en fallback:', fallbackError);
        window.open('/cv/Cristian_Contreras_CV.pdf', '_blank');
      }
    }
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
                <span className="text-gradient dark:text-gradient-dark block sm:inline">
                  Cristian Contreras
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-elegant-700 dark:text-gray-300 font-medium">
                Aprendiz Tecnólogo en Análisis y Desarrollo de Software - SENA
              </p>
              <p className="text-base sm:text-lg text-elegant-600 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
                className="w-10 h-10 sm:w-12 sm:h-12 bg-elegant-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-elegant-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 border border-elegant-200 dark:border-gray-700"
              >
                <i className="fab fa-linkedin text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://github.com/chaustrexp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-elegant-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-elegant-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 border border-elegant-200 dark:border-gray-700"
              >
                <i className="fab fa-github text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://portfolio.cristian-contreras.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-elegant-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-elegant-600 dark:text-gray-400 hover:text-elegant-700 dark:hover:text-elegant-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 border border-elegant-200 dark:border-gray-700"
              >
                <i className="fas fa-briefcase text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>

          {/* Tarjeta de perfil */}
          <div className={`flex justify-center order-1 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="card p-6 sm:p-8 w-full max-w-xs sm:max-w-sm text-center transform hover:scale-105 transition-all duration-500 group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 shadow-md rounded-full overflow-hidden border-3 border-elegant-200 dark:border-gray-600 group-hover:border-elegant-300 dark:group-hover:border-gray-500 transition-all duration-300">
                <img 
                  src="/img/foto de perfil mientras.jpg" 
                  alt="Cristian Contreras - Desarrollador ADSO"
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMzciIHI9IjEyIiBmaWxsPSIjOUI5QkEzIi8+CjxwYXRoIGQ9Ik0yNSA3NUMyNSA2Ni43MTU3IDMxLjcxNTcgNjAgNDAgNjBINjBDNjguMjg0MyA2MCA3NSA2Ni43MTU3IDc1IDc1VjgwSDI1Vjc1WiIgZmlsbD0iIzlCOUJBMyIvPgo8L3N2Zz4K';
                  }}
                />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-elegant-900 dark:text-white">
                    Cristian Contreras
                  </h3>
                  <p className="text-sm sm:text-base text-elegant-600 dark:text-gray-300">
                    Desarrollador ADSO
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-elegant-500 dark:text-gray-300">
                  <i className="fas fa-map-marker-alt text-sm"></i>
                  <span className="text-xs sm:text-sm">Cúcuta, Norte de Santander</span>
                </div>
                
                {/* Estadísticas rápidas */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-elegant-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-elegant-600 dark:text-elegant-400">2+</div>
                    <div className="text-xs text-elegant-500 dark:text-gray-300">Años</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-elegant-600 dark:text-elegant-400">10+</div>
                    <div className="text-xs text-elegant-500 dark:text-gray-300">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-elegant-600 dark:text-elegant-400">5+</div>
                    <div className="text-xs text-elegant-500 dark:text-gray-300">Tecnologías</div>
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