/**
 * CUSTOM HOOK - NOTIFICATION SYSTEM
 * =================================
 * 
 * Hook personalizado para manejo de notificaciones temporales
 * en la aplicación. Proporciona funcionalidad completa para
 * mostrar, ocultar y gestionar notificaciones.
 * 
 * Características:
 * - Múltiples tipos de notificación
 * - Auto-dismiss configurable
 * - Estado centralizado
 * - API simple y reutilizable
 * 
 * @author Cristian Contreras
 * @version 1.0.0
 * @since 2024-12-29
 */

import { useState, useCallback } from 'react';

/**
 * Hook para manejo de sistema de notificaciones
 * 
 * Proporciona funcionalidad completa para mostrar notificaciones
 * temporales con diferentes tipos y auto-dismiss automático.
 * 
 * @returns {Object} Objeto con estado y funciones de notificación
 * @returns {Object|null} notification - Notificación actual o null
 * @returns {Function} showNotification - Función para mostrar notificación
 * @returns {Function} hideNotification - Función para ocultar notificación
 * 
 * @example
 * const { notification, showNotification, hideNotification } = useNotification();
 * 
 * // Mostrar notificación de éxito
 * showNotification('¡Operación exitosa!', 'success');
 * 
 * // Mostrar notificación de error
 * showNotification('Error al procesar', 'error');
 */
export const useNotification = () => {
  // ===== ESTADOS =====
  /**
   * Estado de la notificación actual
   * Estructura: { message: string, type: string, id: number }
   */
  const [notification, setNotification] = useState(null);

  // ===== FUNCIONES MEMOIZADAS =====
  /**
   * Muestra una nueva notificación con auto-dismiss
   * 
   * @param {string} message - Mensaje a mostrar
   * @param {string} type - Tipo de notificación ('success', 'error', 'warning', 'info')
   * 
   * @example
   * showNotification('Formulario enviado correctamente', 'success');
   * showNotification('Error de validación', 'error');
   */
  const showNotification = useCallback((message, type = 'info') => {
    // Crear nueva notificación con ID único
    const newNotification = { 
      message, 
      type, 
      id: Date.now() // ID basado en timestamp para unicidad
    };
    
    setNotification(newNotification);
    
    // Auto-dismiss después de 4 segundos
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  }, []);

  /**
   * Oculta la notificación actual manualmente
   * 
   * Útil para permitir al usuario cerrar la notificación
   * antes del auto-dismiss automático.
   * 
   * @example
   * <button onClick={hideNotification}>Cerrar</button>
   */
  const hideNotification = useCallback(() => {
    setNotification(null);
  }, []);

  // ===== RETURN =====
  return {
    notification,      // Estado actual de la notificación
    showNotification,  // Función para mostrar notificación
    hideNotification   // Función para ocultar notificación
  };
};