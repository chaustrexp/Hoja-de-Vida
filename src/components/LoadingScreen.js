/**
 * LOADING SCREEN COMPONENT
 * ========================
 * 
 * Pantalla de carga inicial personalizada para la hoja de vida digital.
 * Muestra animaciones elegantes mientras se carga la aplicación.
 * 
 * Características:
 * - Animaciones suaves con CSS
 * - Logo animado con gradientes oatmilk
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
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-800 ${
      isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Contenedor principal de carga */}
      <div className="text-center space-y-8 px-4">
        
        {/* Logo animado */}
        <div className="relative">
          {/* Avatar principal */}
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-white font-bold text-3xl">CC</span>
            </div>
            
            {/* Anillos de carga animados */}
            <div className="absolute inset-0 rounded-2xl border-4 border-dark-300 animate-spin opacity-30"></div>
            <div className="absolute inset-2 rounded-xl border-2 border-dark-400 animate-spin opacity-50" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          </div>
          
          {/* Nombre y título */}
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gradient">
              Cristian Contreras
            </h1>
            <p className="text-dark-600 dark:text-gray-400 font-medium">
              Desarrollador ADSO
            </p>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="w-full max-w-xs mx-auto space-y-3">
          <div className="w-full bg-dark-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-dark-600 to-dark-800 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Porcentaje de progreso */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-dark-500 dark:text-gray-400">Cargando portafolio...</span>
            <span className="text-dark-700 dark:text-gray-300 font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Puntos de carga animados */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 bg-dark-400 dark:bg-gray-500 rounded-full animate-bounce"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>

        {/* Mensaje motivacional */}
        <div className="mt-8">
          <p className="text-dark-500 dark:text-gray-400 text-sm italic">
            "Preparando una experiencia única..."
          </p>
        </div>
      </div>

      {/* Partículas de fondo decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-dark-300 dark:bg-gray-600 rounded-full animate-ping opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;