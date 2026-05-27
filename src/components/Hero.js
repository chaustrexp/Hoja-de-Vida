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

import React, { useState, useEffect } from 'react';
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

  // ===== TYPING ANIMATION STATE =====
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const words = ["Tecnólogo en Análisis y Desarrollo de Software", "Desarrollador Web Frontend", "Desarrollador Backend PHP/Laravel", "Apasionado por la tecnología"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];
      setText(isDeleting ? fullWord.substring(0, text.length - 1) : fullWord.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, loopNum, typingSpeed]);

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
        profileImgData = await getImageData('/img/Foto de perfil.jpeg');
      } catch (imgError) {
        console.warn('No se pudo cargar la foto de perfil para el PDF:', imgError);
      }

      // Crear nuevo documento PDF con configuración profesional
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Configurar colores (RGB) - Paleta Monocromática (Blanco y Negro)
      const colors = {
        primary: [0, 0, 0],          // Negro puro para texto principal
        secondary: [82, 82, 82],     // Gris medio para texto secundario
        accent: [0, 0, 0],           // Negro para acentos y elementos destacados
        sidebar: [245, 245, 245],    // Fondo sidebar gris muy claro
        white: [255, 255, 255],
        line: [212, 212, 212]        // Gris claro para líneas divisorias
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
        doc.setFontSize(10.5);
        doc.setTextColor(...colors.primary);
        
        // Dividir el título si es muy largo para que no se superponga con la fecha
        const titleLines = doc.splitTextToSize(edu.title, 65);
        doc.text(titleLines, mainX + 8, mainY);
        
        // Fecha alineada a la derecha en la misma línea inicial
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(...colors.secondary);
        doc.text(edu.date, mainX + 110, mainY, { align: 'right' });
        
        mainY += (titleLines.length * 5);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...colors.accent);
        doc.text(edu.inst, mainX + 8, mainY);
        
        mainY += 10;
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
        'Desarrollo de +22 proyectos formativos de alta complejidad',
        '+850 horas de código documentadas en diversas tecnologías',
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
      doc.text('Página 1', 185, 285);
      
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
        },
        {
          name: 'ProgSENA',
          description: 'Sistema web para la gestión de programación académica del SENA, incluyendo asignación de instructores y ambientes.',
          tech: 'PHP, MySQL, JavaScript',
          url: 'github.com/chaustrexp/Proyecto-Prog-Sena'
        },
        {
          name: 'Sistema de Elementos',
          description: 'Sistema integral para la gestión, control de inventario y seguimiento detallado de elementos y asignaciones.',
          tech: 'React, Node.js, CSS',
          url: 'github.com/AALGarcia/proyecto_elementos'
        },
        {
          name: 'DigiTurno APE SENA',
          description: 'Sistema Digital de Turnos para la Agencia Pública de Empleo del SENA con kiosco y panel gerencial.',
          tech: 'Laravel, PHP, TailwindCSS',
          url: 'github.com/chaustrexp/Proyecto-DigiTurno'
        }
      ];
      
      projects.forEach((project, index) => {
        if (yPos > 240) {
          // Pie de página para la página actual
          doc.setFillColor(...colors.primary);
          doc.rect(0, 275, 210, 22, 'F');
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(8.5);
          doc.setTextColor(200, 200, 200);
          doc.text(`Documento generado profesionalmente el ${new Date().toLocaleDateString('es-ES')}`, 20, 285);
          doc.text(`Página ${doc.internal.getNumberOfPages()}`, 180, 285);
          
          doc.addPage();
          yPos = 25;
          
          // Encabezado para la nueva página
          doc.setFillColor(...colors.primary);
          doc.rect(0, 0, 210, 15, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(...colors.white);
          doc.text('CRISTIAN CONTRERAS - PORTAFOLIO DE PROYECTOS (CONT.)', 105, 9.5, { align: 'center' });
        }

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
      doc.text(`Página ${doc.internal.getNumberOfPages()}`, 180, 285);
      
      // Descargar el PDF
      doc.save('Cristian_Contreras_CV.pdf');
      
      console.log('CV Monocromático generado exitosamente');
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
    <section id="inicio" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden">
      {/* Globos ambientales decorativos */}
      <div className="ambient-glow bg-neutral-400 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] -top-10 -left-10 dark:opacity-10 animate-float-slow"></div>
      <div className="ambient-glow bg-neutral-500 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bottom-10 right-10 dark:opacity-10 animate-float-slow-reverse" style={{ animationDelay: '-10s' }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className={`space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <span className="px-3.5 py-1.5 bg-black/5 dark:bg-white/10 text-black dark:text-white rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-black/10 dark:border-white/10">
                Hoja de Vida Digital
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black dark:text-white">
                Hola, soy{' '}
                <span className="text-black dark:text-white block sm:inline">
                  Cristian Contreras
                </span>
              </h1>
              
              {/* Typing Subtitle */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-gray-200 font-bold">
                  <span className="border-r-2 border-black dark:border-white animate-pulse pr-1.5">{text}</span>
                </p>
              </div>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Desarrollador web en formación, apasionado por crear soluciones digitales innovadoras 
                y comprometido con el aprendizaje continuo en tecnologías modernas.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadCV}
                className="neon-btn-primary w-full sm:w-auto"
              >
                <i className="fas fa-download"></i>
                Descargar CV Premium
              </button>
              <button
                onClick={scrollToContact}
                className="neon-btn-secondary w-full sm:w-auto"
              >
                <i className="fas fa-envelope"></i>
                Contactar
              </button>
            </div>

            {/* Enlaces sociales */}
            <div className="flex space-x-4 sm:space-x-5 justify-center lg:justify-start">
              {[
                { href: "https://www.linkedin.com/in/cristian-contreras-9a4999343", icon: "fab fa-linkedin-in" },
                { href: "https://github.com/chaustrexp", icon: "fab fa-github" },
                { href: "https://portfolio.cristian-contreras.dev", icon: "fas fa-briefcase" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 sm:w-12 sm:h-12 bg-white/40 dark:bg-neutral-800/40 border border-neutral-200 dark:border-white/10 rounded-xl flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/30 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Tarjeta de perfil */}
          <div className={`flex justify-center order-1 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="glass-card p-6 sm:p-8 w-full max-w-xs sm:max-w-sm text-center group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-300/20 dark:bg-neutral-600/10 rounded-full blur-2xl pointer-events-none"></div>
              
              {/* Spinning Avatar Border */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 relative group/avatar">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black via-neutral-500 to-black dark:from-white dark:via-neutral-400 dark:to-white opacity-30 blur-xs group-hover/avatar:opacity-60 group-hover/avatar:animate-spin transition-all duration-1000" style={{ animationDuration: '6s' }}></div>
                <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white dark:border-neutral-800 bg-white dark:bg-neutral-950">
                  <img 
                    src="/img/Foto de perfil.jpeg" 
                    alt="Cristian Contreras - Desarrollador ADSO"
                    className="w-full h-full object-cover object-center transform group-hover/avatar:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMzciIHI9IjEyIiBmaWxsPSIjOUI5QkEzIi8+CjxwYXRoIGQ9Ik0yNSA3NUMyNSA2Ni43MTU3IDMxLjcxNTcgNjAgNDAgNjBINjBDNjguMjg0MyA2MCA3NSA2Ni43MTU3IDc1IDc1VjgwSDI1Vjc1WiIgZmlsbD0iIzlCOUJBMyIvPgo8L3N2Zz4K';
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    Cristian Contreras
                  </h3>
                  <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 tracking-wide">
                    Desarrollador ADSO
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-neutral-600 dark:text-gray-300 bg-neutral-100/50 dark:bg-neutral-800/50 px-3 py-1.5 rounded-xl inline-flex text-xs font-semibold border border-neutral-200 dark:border-white/5">
                  <i className="fas fa-map-marker-alt text-black dark:text-white"></i>
                  <span>Cúcuta, Norte de Santander</span>
                </div>
                
                {/* Estadísticas rápidas */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-neutral-200 dark:border-white/10">
                  {[
                    { val: "2+", label: "Años" },
                    { val: "10+", label: "Proyectos" },
                    { val: "5+", label: "Techs" }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center group/stat">
                      <div className="text-xl sm:text-2xl font-black text-black dark:text-white group-hover/stat:scale-110 transition-transform duration-300">{stat.val}</div>
                      <div className="text-[10px] sm:text-xs text-neutral-500 dark:text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
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