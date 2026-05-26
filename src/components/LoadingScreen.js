/**
 * LOADING SCREEN COMPONENT
 * ========================
 * 
 * Pantalla de carga inicial personalizada para la hoja de vida digital.
 * Muestra animaciones elegantes mientras se carga la aplicación.
 * 
 * Características:
 * - Animaciones suaves con CSS
 * - Logo animado monocromático
 * - Barra de progreso simulada
 * - Transición de salida elegante
 * - Diseño responsive
 * 
 * @author Cristian Contreras
 * @version 1.0.0
 * @since 2024-12-29
 */

import React, { useState, useEffect } from 'react';

/**
 * Componente LoadingScreen - Pantalla de carga inicial
 * 
 * Muestra una pantalla de carga elegante con animaciones
 * mientras se inicializa la aplicación principal.
 * 
 * @param {Object} props - Props del componente
 * @param {Function} props.onLoadingComplete - Callback cuando termina la carga
 * @returns {JSX.Element} Pantalla de carga completa
 */
const LoadingScreen = ({ onLoadingComplete }) => {
  // ===== ESTADOS =====
  const [progress, setProgress] = useState(0); // Progreso de carga (0-100)
  const [isExiting, setIsExiting] = useState(false); // Estado de salida

  // ===== EFECTOS =====
  /**
   * Simula el progreso de carga con incrementos graduales
   * Crea una experiencia de carga realista y fluida
   */
  useEffect(() => {
    const intervals = [
      { delay: 100, progress: 20 },
      { delay: 300, progress: 45 },
      { delay: 600, progress: 70 },
      { delay: 900, progress: 85 },
      { delay: 1200, progress: 95 },
      { delay: 1500, progress: 100 }
    ];

    // Configurar timeouts para cada incremento de progreso
    const timeouts = intervals.map(({ delay, progress: targetProgress }) =>
      setTimeout(() => setProgress(targetProgress), delay)
    );

    // Cleanup: limpiar timeouts si el componente se desmonta
    return () => timeouts.forEach(clearTimeout);
  }, []);

  /**
   * Maneja la finalización de la carga
   * Inicia animación de salida y notifica al componente padre
   */
  useEffect(() => {
    if (progress === 100) {
      // Esperar un momento antes de iniciar la salida
      const exitTimeout = setTimeout(() => {
        setIsExiting(true);
        
        // Notificar finalización después de la animación de salida
        setTimeout(() => {
          onLoadingComplete();
        }, 800); // Duración de la animación de salida
      }, 500);

      return () => clearTimeout(exitTimeout);
    }
  }, [progress, onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950 transition-all duration-1000 ${
      isExiting ? 'opacity-0 scale-105 blur-md' : 'opacity-100 scale-100'
    }`}>
      {/* Globos ambientales decorativos de fondo */}
      <div className="ambient-glow bg-neutral-400 w-[300px] h-[300px] -top-10 -left-10 dark:opacity-10 animate-float-slow"></div>
      <div className="ambient-glow bg-neutral-500 w-[300px] h-[300px] bottom-10 right-10 dark:opacity-10 animate-float-slow-reverse" style={{ animationDelay: '-8s' }}></div>

      {/* Contenedor principal de carga */}
      <div className="text-center space-y-8 px-4 relative z-10">
        
        {/* Cargador Circular Monocromático */}
        <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
          {/* Círculo interior con porcentaje */}
          <div className="w-24 h-24 rounded-full bg-neutral-50 dark:bg-neutral-900 backdrop-blur-md flex flex-col items-center justify-center shadow-xl border border-neutral-200 dark:border-white/5 relative z-20">
            <span className="text-2xl font-black text-black dark:text-white">
              {progress}%
            </span>
          </div>

          {/* Anillos de carga rotatorios */}
          <div className="absolute inset-0 rounded-full border-2 border-neutral-200 dark:border-neutral-800 animate-pulse"></div>
          <div 
            className="absolute inset-1 rounded-full border-t-2 border-r-2 border-black dark:border-white animate-spin" 
            style={{ animationDuration: '1.2s' }}
          ></div>
          <div 
            className="absolute inset-3 rounded-full border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500 animate-spin" 
            style={{ animationDirection: 'reverse', animationDuration: '2.5s' }}
          ></div>
        </div>

        {/* Información y Mensajes */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-black dark:text-white tracking-wide">
              Cristian Contreras
            </h1>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-widest">
              Desarrollador ADSO
            </p>
          </div>

          {/* HUD de progreso */}
          <div className="w-full max-w-xs mx-auto space-y-2">
            <div className="w-full bg-neutral-200 dark:bg-neutral-800 backdrop-blur-xs rounded-full h-1.5 overflow-hidden border border-neutral-300 dark:border-neutral-700">
              <div 
                className="h-full bg-black dark:bg-white rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between items-center text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
              <span>Cargando Experiencia</span>
              <span>{progress === 100 ? 'Listo' : 'Inicializando'}</span>
            </div>
          </div>
        </div>

        {/* Mensaje motivacional */}
        <div className="pt-4">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 italic font-semibold animate-pulse">
            "Preparando una experiencia única..."
          </p>
        </div>
      </div>

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-black dark:bg-white rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;