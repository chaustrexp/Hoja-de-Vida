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
 * - Paleta monocromática blanco y negro
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
   * Información de contacto con iconos
   */
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ubicación',
      value: 'Cúcuta, Norte de Santander',
      iconColor: 'text-black dark:text-white',
      bgGlow: 'bg-neutral-100 dark:bg-neutral-800'
    },
    {
      icon: 'fas fa-phone',
      title: 'Teléfono',
      value: '+57 3229615724',
      iconColor: 'text-black dark:text-white',
      bgGlow: 'bg-neutral-100 dark:bg-neutral-800'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'cristianchaustre90@gmail.com',
      iconColor: 'text-black dark:text-white',
      bgGlow: 'bg-neutral-100 dark:bg-neutral-800'
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
      className={`glass-card p-4 sm:p-5 flex items-center space-x-4 group hover:scale-[1.02] hover:shadow-md transition-all duration-300 backdrop-blur-sm ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`w-11 h-11 rounded-xl ${info.bgGlow} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-neutral-200 dark:border-white/5`}>
        <i className={`${info.icon} text-lg ${info.iconColor}`}></i>
      </div>
      <div>
        <h4 className="font-bold text-neutral-500 dark:text-gray-400 text-xs uppercase tracking-wider">{info.title}</h4>
        <p className="font-semibold text-black dark:text-white text-sm sm:text-base">{info.value}</p>
      </div>
    </div>
  );

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-neutral-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-black dark:text-white">
          Contacto
        </h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Información de contacto */}
          <div className="space-y-6 sm:space-y-8">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 text-center lg:text-left">
                ¡Hablemos!
              </h3>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-300 leading-relaxed mb-6 text-center lg:text-left font-medium">
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
            <div className={`flex justify-center lg:justify-start space-x-4 pt-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              {[
                { href: "https://www.linkedin.com/in/cristian-contreras-9a4999343", icon: "fab fa-linkedin-in" },
                { href: "https://github.com/chaustrexp", icon: "fab fa-github" },
                { href: "mailto:cristianchaustre90@gmail.com", icon: "fas fa-envelope" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/40 dark:bg-neutral-800/40 border border-neutral-200 dark:border-white/10 rounded-xl flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/30 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                >
                  <i className={`${item.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="glass-card p-6 sm:p-8 relative">
              <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-4 sm:mb-6 text-center lg:text-left">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-neutral-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full glass-input"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-neutral-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full glass-input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-neutral-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full glass-input resize-vertical"
                    placeholder="Cuéntame sobre la oportunidad de contrato de aprendizaje..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full neon-btn-primary justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
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
        <div className={`mt-12 sm:mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto border-black/10 dark:border-white/10 backdrop-blur-md">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black dark:bg-white rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
              <i className="fas fa-check-circle text-xl sm:text-2xl text-white dark:text-black"></i>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              Disponible para Contrato de Aprendizaje
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 leading-relaxed font-semibold">
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