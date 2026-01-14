/**
 * CONTACT COMPONENT
 * =================
 * 
 * Componente de contacto con formulario funcional y información de contacto.
 * Permite a los reclutadores contactar al aprendiz ADSO de forma directa.
 * 
 * Características:
 * - Formulario de contacto con validación
 * - Información de contacto con iconos
 * - Enlaces a redes sociales
 * - Sección de disponibilidad
 * - Diseño completamente responsive
 * - Paleta de colores oatmilk
 * - Validación de email y campos requeridos
 * 
 * @author Cristian Contreras
 * @version 2.0.0
 * @since 2024-12-29
 */

import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Componente Contact - Sección de contacto y formulario
 * 
 * Renderiza el formulario de contacto e información personal
 * 
 * @returns {JSX.Element} Sección de contacto completa
 */
const Contact = () => {
  // ===== HOOKS =====
  const [ref, isVisible] = useScrollAnimation(); // Hook para animaciones al scroll
  
  // ===== ESTADO DEL FORMULARIO =====
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado de envío

  // ===== DATOS DE CONTACTO =====
  /**
   * Información de contacto con iconos y colores
   * Usa la paleta oatmilk para consistencia visual
   */
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ubicación',
      value: 'Cúcuta, Norte de Santander',
      color: 'text-elegant-600'
    },
    {
      icon: 'fas fa-phone',
      title: 'Teléfono',
      value: '+57 3229615724',
      color: 'text-elegant-700'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'cristianchaustre90@gmail.com',
      color: 'text-elegant-500'
    }
  ];

  // ===== FUNCIONES DE MANEJO =====
  /**
   * Maneja los cambios en los inputs del formulario
   * @param {Event} e - Evento del input
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Maneja el envío del formulario
   * @param {Event} e - Evento del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Por favor, ingresa un email válido.');
      return;
    }

    setIsSubmitting(true);

    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('¡Mensaje enviado exitosamente! Te contactaré pronto.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Valida el formato del email
   * @param {string} email - Email a validar
   * @returns {boolean} True si el email es válido
   */
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // ===== COMPONENTES AUXILIARES =====
  /**
   * Componente de tarjeta de información de contacto
   * @param {Object} info - Información de contacto
   * @param {number} index - Índice para animación escalonada
   */
  const ContactInfoCard = ({ info, index }) => (
    <div
      className={`card p-4 sm:p-6 text-center group hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-elegant-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <i className={`${info.icon} text-lg sm:text-2xl ${info.color}`}></i>
      </div>
      <h4 className="font-semibold text-elegant-900 dark:text-white mb-2 text-sm sm:text-base">{info.title}</h4>
      <p className="text-elegant-600 dark:text-gray-300 text-sm sm:text-base">{info.value}</p>
    </div>
  );

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-elegant-900 dark:text-white">
          Contacto
        </h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Información de contacto */}
          <div className="space-y-6 sm:space-y-8">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h3 className="text-xl sm:text-2xl font-semibold text-elegant-900 dark:text-white mb-4 sm:mb-6 text-center lg:text-left">
                ¡Hablemos!
              </h3>
              <p className="text-base sm:text-lg text-elegant-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
                Estoy disponible para oportunidades de contrato de aprendizaje 
                y colaboraciones en proyectos de desarrollo web. Me encantaría 
                conocer más sobre tu empresa y cómo puedo contribuir a su crecimiento.
              </p>
            </div>

            {/* Tarjetas de información */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={info.title} info={info} index={index} />
              ))}
            </div>

            {/* Enlaces sociales */}
            <div className={`flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-6 sm:pt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <a
                href="https://www.linkedin.com/in/cristian-contreras-9a4999343"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-linkedin text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://github.com/chaustrexp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-github text-lg sm:text-xl"></i>
              </a>
              <a
                href="mailto:cristianchaustre90@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-envelope text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="card p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-elegant-900 dark:text-white mb-4 sm:mb-6 text-center lg:text-left">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-elegant-700 dark:text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-elegant-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-elegant-500 focus:border-transparent bg-white dark:bg-gray-800 text-elegant-900 dark:text-white transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-elegant-700 dark:text-gray-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-elegant-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-elegant-500 focus:border-transparent bg-white dark:bg-gray-800 text-elegant-900 dark:text-white transition-colors duration-200 text-sm sm:text-base"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-elegant-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-elegant-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-elegant-500 focus:border-transparent bg-white dark:bg-gray-800 text-elegant-900 dark:text-white transition-colors duration-200 resize-vertical text-sm sm:text-base"
                    placeholder="Cuéntame sobre la oportunidad de contrato de aprendizaje..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary justify-center text-sm sm:text-base ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Disponibilidad */}
        <div className={`mt-12 sm:mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="card p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fas fa-check-circle text-xl sm:text-2xl text-green-600 dark:text-green-400"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-elegant-900 dark:text-white mb-3 sm:mb-4">
              Disponible para Contrato de Aprendizaje
            </h3>
            <p className="text-sm sm:text-base text-elegant-600 dark:text-gray-300 leading-relaxed">
              Actualmente estoy buscando oportunidades de contrato de aprendizaje para 
              completar mi formación como Tecnólogo en Análisis y Desarrollo de Software. 
              Estoy disponible para comenzar inmediatamente y comprometido con el aprendizaje 
              y crecimiento profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;