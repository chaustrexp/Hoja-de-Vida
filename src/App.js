/**
 * APP COMPONENT - COMPONENTE PRINCIPAL
 * ====================================
 * 
 * Componente raíz de la aplicación que orquesta todos los componentes
 * y maneja el estado de carga inicial.
 * 
 * Características:
 * - Pantalla de carga inicial
 * - Proveedor de tema global
 * - Estructura completa de la hoja de vida
 * - Sistema de notificaciones
 * 
 * @author Cristian Contreras
 * @version 2.0.0
 * @since 2024-12-29
 */

import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Notification from './components/Notification';

/**
 * Componente App - Aplicación principal
 * 
 * Maneja el estado de carga y renderiza toda la estructura
 * de la hoja de vida digital.
 * 
 * @returns {JSX.Element} Aplicación completa
 */
function App() {
  // ===== ESTADOS =====
  const [isLoading, setIsLoading] = useState(true); // Estado de carga inicial

  // ===== FUNCIONES =====
  /**
   * Maneja la finalización de la carga inicial
   * Se ejecuta cuando el LoadingScreen completa su animación
   */
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // ===== RENDER CONDICIONAL =====
  // Mostrar pantalla de carga si aún está cargando
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  // ===== RENDER PRINCIPAL =====
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-dark-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <Hero />
        <Profile />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Notification />
      </div>
    </ThemeProvider>
  );
}

export default App;