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
   * Obtiene los datos de una imagen en formato base64
   * @param {string} url - URL de la imagen
   * @returns {Promise<string>} - Datos de la imagen en base64
   */
  const getImageData = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        // Calcular dimensiones para un cuadrado perfecto (centrado)
        const size = Math.min(img.width, img.height);
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        
        // Crear máscara circular
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        // Dibujar la imagen recortada y centrada
        ctx.drawImage(
          img,
          (img.width - size) / 2,
          (img.height - size) / 2,
          size,
          size,
          0,
          0,
          size,
          size
        );
        
        // Devolver como PNG para mantener la transparencia del recorte
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => reject(new Error(`No se pudo cargar la imagen: ${url}`));
      img.src = url;
    });
  };

  /**
   * Maneja la descarga del CV
   * Genera un PDF profesional de 2 páginas con jsPDF
   */
  const handleDownloadCV = async () => {
    try {
      // Intentar cargar la foto de perfil
      let profileImgData = null;
      try {
        profileImgData = await getImageData('/img/foto de perfil mientras.jpg');
      } catch (imgError) {
        console.warn('No se pudo cargar la foto de perfil para el PDF:', imgError);
      }

      // Crear nuevo documento PDF con configuración profesional
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Configurar colores (RGB) - Paleta Premium
      const colors = {
        primary: [26, 32, 44],       // Azul muy oscuro para texto principal
        secondary: [74, 85, 104],    // Gris para texto secundario
        accent: [37, 99, 235],       // Azul vibrante para acentos
        sidebar: [248, 250, 252],    // Fondo sidebar (Slate 50)
        white: [255, 255, 255],
        line: [226, 232, 240]        // Color para líneas divisorias
      };
      
      // =================== PÁGINA 1 ===================
      
      // --- SIDEBAR (IZQUIERDA) ---
      doc.setFillColor(...colors.sidebar);
      doc.rect(0, 0, 75, 297, 'F');
      
      // Foto de perfil
      if (profileImgData) {
        // Círculo blanco de fondo (borde)
        doc.setFillColor(...colors.white);
        doc.circle(37.5, 35, 22, 'F');
        // Imagen circular
        doc.addImage(profileImgData, 'PNG', 17.5, 15, 40, 40);
      }
      
      let sideY = 75;
      
      // Título Sección Sidebar: CONTACTO
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...colors.accent);
      doc.text('CONTACTO', 15, sideY);
      doc.setDrawColor(...colors.accent);
      doc.setLineWidth(0.5);
      doc.line(15, sideY + 2, 60, sideY + 2);
      
      sideY += 10;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...colors.secondary);
      
      const contactInfo = [
        { icon: 'Ubicación:', text: 'Cúcuta, N. de Santander' },
        { icon: 'Teléfono:', text: '+57 3229615724' },
        { icon: 'Correo:', text: 'cristianchaustre90@gmail.com' },
        { icon: 'LinkedIn:', text: 'in/cristian-contreras-9a4999343' },
        { icon: 'GitHub:', text: 'github.com/chaustrexp' }
      ];
      
      contactInfo.forEach(info => {
        doc.setFont('helvetica', 'bold');
        doc.text(info.icon, 15, sideY);
        sideY += 4;
        doc.setFont('helvetica', 'normal');
        doc.text(info.text, 15, sideY);
        sideY += 7;
      });
      
      sideY += 5;
      
      // Título Sección Sidebar: SKILLS TÉCNICAS
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...colors.accent);
      doc.text('HABILIDADES TÉCNICAS', 15, sideY);
      doc.line(15, sideY + 2, 60, sideY + 2);
      
      sideY += 10;
      const techSkills = [
        { name: 'HTML & CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'React & Tailwind', level: 80 },
        { name: 'PHP & Laravel', level: 78 },
        { name: 'MySQL / SQL', level: 80 },
        { name: 'Git & GitHub', level: 85 }
      ];
      
      techSkills.forEach(skill => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(...colors.primary);
        doc.text(skill.name, 15, sideY);
        
        // Barra de progreso minimalista
        const barW = 45;
        const barH = 1.5;
        doc.setFillColor(226, 232, 240);
        doc.rect(15, sideY + 2, barW, barH, 'F');
        doc.setFillColor(...colors.accent);
        doc.rect(15, sideY + 2, (barW * skill.level) / 100, barH, 'F');
        
        sideY += 10;
      });
      
      sideY += 5;
      
      // Título Sección Sidebar: SOFT SKILLS
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(...colors.accent);
      doc.text('HABILIDADES BLANDAS', 15, sideY);
      doc.line(15, sideY + 2, 60, sideY + 2);
      
      sideY += 10;
      const softSkills = ['Trabajo en Equipo', 'Comunicación', 'Liderazgo', 'Adaptabilidad', 'Puntualidad', 'Creatividad'];
      
      doc.setFontSize(9);
      doc.setTextColor(...colors.secondary);
      softSkills.forEach(skill => {
        doc.setFillColor(...colors.accent);
        doc.circle(17, sideY - 1, 0.8, 'F');
        doc.text(skill, 20, sideY);
        sideY += 7;
      });
      
      // --- CONTENIDO PRINCIPAL (DERECHA) ---
      let mainY = 30;
      const mainX = 85;
      
      // Nombre y Título
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(32);
      doc.setTextColor(...colors.primary);
      doc.text('CRISTIAN', mainX, mainY);
      mainY += 12;
      doc.text('CONTRERAS', mainX, mainY);
      
      mainY += 8;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...colors.accent);
      doc.text('Tecnólogo en Análisis y Desarrollo de Software', mainX, mainY);
      
      mainY += 15;
      
      // PERFIL PROFESIONAL
      doc.setFontSize(12);
      doc.setTextColor(...colors.primary);
      doc.text('PERFIL PROFESIONAL', mainX, mainY);
      doc.setDrawColor(...colors.accent);
      doc.setLineWidth(0.8);
      doc.line(mainX, mainY + 2, mainX + 40, mainY + 2);
      
      mainY += 10;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      doc.setTextColor(...colors.secondary);
      const perfilText = 'Aprendiz del programa Tecnólogo en Análisis y Desarrollo de Software del SENA, con sólidos conocimientos en desarrollo web frontend y backend. Me caracterizo por mi responsabilidad, puntualidad y capacidad de trabajo en equipo. Busco una oportunidad de contrato de aprendizaje donde pueda aplicar mis conocimientos técnicos y contribuir al crecimiento de la empresa.';
      const perfilLines = doc.splitTextToSize(perfilText, 110);
      doc.text(perfilLines, mainX, mainY);
      
      mainY += perfilLines.length * 5 + 15;
      
      // FORMACIÓN ACADÉMICA (TIMELINE)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...colors.primary);
      doc.text('FORMACIÓN ACADÉMICA', mainX, mainY);
      
      // Punto decorativo
      doc.setFillColor(...colors.accent);
      doc.circle(mainX - 3, mainY - 1, 1, 'F');
      
      mainY += 12;
      
      const education = [
        {
          title: 'Tecnólogo en Análisis y Desarrollo de Software',
          inst: 'SENA - Servicio Nacional de Aprendizaje',
          date: '2024 - 2027 (En formación)'
        },
        {
          title: 'Técnico en Sistemas',
          inst: 'I.E. Eustorgio Colmenares Baptista',
          date: '2022 - 2023'
        },
        {
          title: 'Bachiller Académico',
          inst: 'I.E. Eustorgio Colmenares Baptista',
          date: '2018 - 2023'
        }
      ];
      
      // Dibujar línea de tiempo
      doc.setDrawColor(...colors.line);
      doc.setLineWidth(0.5);
      doc.line(mainX + 2, mainY - 5, mainX + 2, mainY + (education.length * 15) - 10);
      
      education.forEach((edu, index) => {
        // Punto de la línea de tiempo
        doc.setFillColor(...colors.accent);
        doc.circle(mainX + 2, mainY - 1, 1.5, 'F');
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(...colors.primary);
        doc.text(edu.title, mainX + 8, mainY);
        
        mainY += 5;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...colors.accent);
        doc.text(edu.inst, mainX + 8, mainY);
        
        doc.setFontSize(8.5);
        doc.setTextColor(...colors.secondary);
        doc.text(edu.date, mainX + 110, mainY - 5, { align: 'right' });
        
        mainY += 12;
      });
      
      mainY += 5;
      
      // LOGROS ACADÉMICOS
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...colors.primary);
      doc.text('LOGROS Y MÉRITOS', mainX, mainY);
      doc.circle(mainX - 3, mainY - 1, 1, 'F');
      
      mainY += 10;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...colors.secondary);
      
      const achievements = [
        'Desarrollo de +19 proyectos formativos de alta complejidad',
        '+700 horas de código documentadas en diversas tecnologías',
        'Dominio de metodologías ágiles y control de versiones',
        'Liderazgo técnico en proyectos colaborativos de clase'
      ];
      
      achievements.forEach(ach => {
        doc.setFillColor(...colors.accent);
        doc.rect(mainX, mainY - 3, 1.5, 1.5, 'F');
        doc.text(ach, mainX + 5, mainY);
        mainY += 7;
      });
      
      // Pie de página 1
      doc.setFontSize(8);
      doc.setTextColor(...colors.secondary);
      doc.text('Página 1 de 2', 185, 285);
      
      // =================== PÁGINA 2 ===================
      doc.addPage();
      let yPos = 25;
      
      // Encabezado Página 2
      doc.setFillColor(...colors.primary);
      doc.rect(0, 0, 210, 15, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...colors.white);
      doc.text('CRISTIAN CONTRERAS - PORTAFOLIO DE PROYECTOS', 105, 9.5, { align: 'center' });
      
      // PROYECTOS DESTACADOS
      doc.setFontSize(16);
      doc.setTextColor(...colors.primary);
      doc.text('PROYECTOS DESTACADOS', 20, yPos);
      doc.setDrawColor(...colors.accent);
      doc.setLineWidth(1);
      doc.line(20, yPos + 2, 90, yPos + 2);
      yPos += 15;
      
      const projects = [
        {
          name: 'HighMed System',
          description: 'Plataforma médica digital avanzada con gestión de historias clínicas y pacientes. Interfaz intuitiva y segura para profesionales de la salud.',
          tech: 'React, JS, Tailwind, Vercel',
          url: 'highmed.vercel.app'
        },
        {
          name: 'Sistema de Panadería',
          description: 'Gestión integral de ventas e inventarios para panaderías locales. Control de stock en tiempo real y administración comercial.',
          tech: 'React, JavaScript, CSS',
          url: 'sistema-panaderia.vercel.app'
        },
        {
          name: 'Gestión Fármaco',
          description: 'Sistema especializado para el control de inventarios farmacéuticos, alertas de caducidad y trazabilidad de medicamentos.',
          tech: 'React, Tailwind, JavaScript',
          url: 'gestion-farmaco.vercel.app'
        },
        {
          name: 'Banco Express',
          description: 'Simulador de banca digital con transacciones seguras y panel de control financiero detallado para usuarios.',
          tech: 'React, Tailwind, Charts.js',
          url: 'banco-express.vercel.app'
        },
        {
          name: 'Portafolio AI',
          description: 'Portafolio profesional interactivo, optimizado con herramientas de IA para una experiencia de usuario superior.',
          tech: 'React, Tailwind, AI Tools',
          url: 'cristian-portafolio.dev'
        }
      ];
      
      projects.forEach((project, index) => {
        // Card de proyecto refinada
        doc.setDrawColor(...colors.line);
        doc.setLineWidth(0.3);
        doc.rect(20, yPos - 5, 170, 35);
        
        // Borde izquierdo grueso
        doc.setFillColor(...colors.accent);
        doc.rect(20, yPos - 5, 2, 35, 'F');
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(...colors.primary);
        doc.text(project.name, 28, yPos + 3);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(...colors.secondary);
        const descLines = doc.splitTextToSize(project.description, 155);
        doc.text(descLines, 28, yPos + 10);
        
        // Stack y Link
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(...colors.accent);
        doc.text(`Tecnologías: ${project.tech}`, 28, yPos + 24);
        
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(...colors.secondary);
        doc.text(`Demo online: ${project.url}`, 28, yPos + 29);
        
        yPos += 42;
      });
      
      // Pie de página Final
      doc.setFillColor(...colors.primary);
      doc.rect(0, 275, 210, 22, 'F');
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8.5);
      doc.setTextColor(200, 200, 200);
      doc.text(`Documento generado profesionalmente el ${new Date().toLocaleDateString('es-ES')}`, 20, 285);
      doc.text('Página 2 de 2', 180, 285);
      
      // Descargar el PDF
      doc.save('Cristian_Contreras_CV_Premium.pdf');
      
      console.log('CV Premium generado exitosamente');
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
    <section id="inicio" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-elegant-50 to-elegant-100 dark:from-elegant-950 dark:to-elegant-900">
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