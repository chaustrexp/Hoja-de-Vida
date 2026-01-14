/**
 * CUSTOM HOOKS - SCROLL ANIMATIONS
 * ================================
 * 
 * Hooks personalizados para manejo de animaciones basadas en scroll
 * y detección de secciones activas en la navegación.
 * 
 * Hooks incluidos:
 * - useScrollAnimation: Animaciones al hacer scroll
 * - useActiveSection: Detección de sección activa
 * 
 * @author Cristian Contreras
 * @version 1.0.0
 * @since 2024-12-29
 */

import { useEffect, useRef, useState } from 'react';

/**
 * Hook para animaciones basadas en scroll usando Intersection Observer
 * 
 * Detecta cuando un elemento entra en el viewport y activa animaciones.
 * Optimizado para performance usando Intersection Observer API.
 * 
 * @param {number} threshold - Porcentaje de visibilidad requerido (0-1)
 * @returns {Array} [ref, isVisible] - Referencia del elemento y estado de visibilidad
 * 
 * @example
 * const [ref, isVisible] = useScrollAnimation(0.1);
 * 
 * return (
 *   <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
 *     Contenido que se anima al ser visible
 *   </div>
 * );
 */
export const useScrollAnimation = (threshold = 0.1) => {
  // ===== ESTADOS =====
  const [isVisible, setIsVisible] = useState(false); // Estado de visibilidad del elemento
  const ref = useRef(); // Referencia al elemento DOM

  // ===== EFECTOS =====
  /**
   * Configura el Intersection Observer para detectar visibilidad
   * Se ejecuta una sola vez al montar el componente
   */
  useEffect(() => {
    // Configuración del observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento es visible, activar animación y desconectar observer
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Optimización: desconectar después de animar
        }
      },
      {
        threshold, // Porcentaje de visibilidad requerido
        rootMargin: '0px 0px -50px 0px' // Margen para activar antes de ser completamente visible
      }
    );

    // Conectar observer al elemento si existe
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup: desconectar observer al desmontar
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

/**
 * Hook para detectar la sección activa basada en scroll
 * 
 * Monitorea la posición del scroll y determina qué sección está
 * actualmente visible en el viewport para actualizar la navegación.
 * 
 * @returns {string} activeSection - ID de la sección actualmente activa
 * 
 * @example
 * const activeSection = useActiveSection();
 * 
 * // En el componente Navbar
 * <NavLink className={activeSection === 'inicio' ? 'active' : ''}>
 *   Inicio
 * </NavLink>
 */
export const useActiveSection = () => {
  // ===== ESTADOS =====
  const [activeSection, setActiveSection] = useState('inicio'); // Sección activa por defecto

  // ===== EFECTOS =====
  /**
   * Configura el listener de scroll para detectar sección activa
   * Optimizado con throttling implícito del navegador
   */
  useEffect(() => {
    /**
     * Maneja el evento de scroll para determinar sección activa
     * Calcula qué sección está más visible en el viewport
     */
    const handleScroll = () => {
      // Lista de secciones en orden de aparición
      const sections = ['inicio', 'perfil', 'formacion', 'habilidades', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + 100; // Offset para navbar fijo

      // Iterar sobre secciones para encontrar la activa
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          // Verificar si el scroll está dentro de esta sección
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; // Salir del loop al encontrar la sección activa
          }
        }
      }
    };

    // Agregar listener de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Ejecutar una vez al montar para establecer sección inicial
    handleScroll();

    // Cleanup: remover listener al desmontar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};