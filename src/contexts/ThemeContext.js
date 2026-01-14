/**
 * THEME CONTEXT - MANEJO DE TEMA CLARO/OSCURO
 * ===========================================
 * 
 * Context de React para manejo global del tema de la aplicación.
 * Proporciona funcionalidad completa para cambio entre modo claro
 * y oscuro con persistencia en localStorage.
 * 
 * Características:
 * - Estado global del tema
 * - Persistencia en localStorage
 * - Transiciones suaves
 * - API simple con hook personalizado
 * - Soporte para preferencias del sistema
 * 
 * @author Cristian Contreras
 * @version 1.0.0
 * @since 2024-12-29
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

// ===== CONTEXT CREATION =====
/**
 * Context para el tema de la aplicación
 * Proporciona estado y funciones para manejo del tema
 */
const ThemeContext = createContext();

// ===== CUSTOM HOOK =====
/**
 * Hook personalizado para acceder al contexto de tema
 * 
 * Proporciona una API simple para componentes que necesiten
 * acceder o modificar el tema actual de la aplicación.
 * 
 * @returns {Object} Objeto con estado y funciones del tema
 * @returns {boolean} isDark - Estado actual del tema (true = oscuro, false = claro)
 * @returns {Function} toggleTheme - Función para alternar entre temas
 * 
 * @throws {Error} Si se usa fuera del ThemeProvider
 * 
 * @example
 * const { isDark, toggleTheme } = useTheme();
 * 
 * return (
 *   <button onClick={toggleTheme}>
 *     {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
 *   </button>
 * );
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  // Validación de uso correcto del hook
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

// ===== THEME PROVIDER COMPONENT =====
/**
 * Proveedor del contexto de tema
 * 
 * Componente que envuelve la aplicación y proporciona el estado
 * global del tema a todos los componentes hijos.
 * 
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Componentes hijos
 * 
 * @example
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children }) => {
  // ===== ESTADO DEL TEMA =====
  /**
   * Estado del tema con inicialización desde localStorage
   * Prioriza el tema guardado, fallback a tema claro
   */
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  // ===== EFECTOS =====
  /**
   * Efecto para aplicar el tema al DOM y persistir en localStorage
   * Se ejecuta cada vez que cambia el estado del tema
   */
  useEffect(() => {
    const root = document.documentElement;
    
    // Aplicar clase CSS al elemento raíz para Tailwind CSS
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Persistir preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // ===== FUNCIONES =====
  /**
   * Alterna entre tema claro y oscuro
   * 
   * Cambia el estado del tema y activa automáticamente
   * los efectos para aplicar los cambios visuales.
   */
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // ===== VALOR DEL CONTEXTO =====
  /**
   * Valor que se proporciona a todos los componentes hijos
   * Incluye el estado actual y las funciones de control
   */
  const contextValue = {
    isDark,      // Estado actual del tema
    toggleTheme  // Función para cambiar tema
  };

  // ===== RENDER =====
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};