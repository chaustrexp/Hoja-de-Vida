# Cristian Contreras - CV Digital

Una hoja de vida digital moderna y responsiva desarrollada con React y Tailwind CSS, optimizada para reclutadores del sector tecnológico y empresas que ofrecen contrato de aprendizaje SENA.

## 🚀 Características

### ✨ Diseño Moderno
- **Interfaz limpia y profesional** con paleta de colores azul y verde
- **Tipografía Inter** de Google Fonts para máxima legibilidad
- **Diseño responsivo** que se adapta perfectamente a desktop, tablet y móvil
- **Modo claro/oscuro** con persistencia en localStorage

### 🎯 Funcionalidades Interactivas
- **Navegación suave** con scroll automático entre secciones
- **Animaciones al scroll** usando Intersection Observer API
- **Barras de habilidades animadas** que se activan al ser visibles
- **Formulario de contacto** funcional con validaciones
- **Sistema de notificaciones** elegante
- **Botón de descarga de CV** (listo para implementar PDF)

### 📱 Optimización Mobile-First
- **Menú hamburguesa** para dispositivos móviles
- **Grid layouts adaptativos** usando Tailwind CSS
- **Touch-friendly** con botones y enlaces optimizados para táctil
- **Performance optimizada** con lazy loading y animaciones eficientes

### 🎨 Componentes Destacados
- **Hero Section** con tarjeta de perfil interactiva
- **Timeline de educación** con marcadores visuales
- **Cards de proyectos** con efectos hover y tecnologías
- **Formulario de contacto** con estados de carga
- **Footer completo** con enlaces sociales y información

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Tailwind CSS 3** - Framework de CSS utilitario
- **Font Awesome 6** - Iconografía
- **Google Fonts (Inter)** - Tipografía
- **Intersection Observer API** - Animaciones al scroll
- **LocalStorage** - Persistencia del tema

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/cristian-contreras/cv-digital.git

# Navegar al directorio
cd cv-digital

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### Scripts Disponibles
```bash
# Desarrollo
npm start          # Inicia el servidor de desarrollo en http://localhost:3000

# Producción
npm run build      # Crea la versión optimizada para producción
npm test           # Ejecuta las pruebas
npm run eject      # Expone la configuración (irreversible)
```

## 🎨 Personalización

### Colores
Los colores están definidos en `tailwind.config.js` y pueden ser fácilmente personalizados:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8'
  },
  secondary: {
    500: '#10b981',
    600: '#059669'
  }
}
```

### Contenido
Edita los componentes en `src/components/` para personalizar:
- Información personal en `Hero.js`
- Experiencia profesional en `Profile.js`
- Educación en `Education.js`
- Habilidades en `Skills.js`
- Proyectos en `Projects.js`
- Información de contacto en `Contact.js`

## 📱 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Navbar.js       # Navegación principal
│   ├── Hero.js         # Sección hero con perfil
│   ├── Profile.js      # Perfil profesional
│   ├── Education.js    # Formación académica
│   ├── Skills.js       # Habilidades técnicas y blandas
│   ├── Projects.js     # Proyectos y experiencia
│   ├── Contact.js      # Formulario de contacto
│   ├── Footer.js       # Pie de página
│   └── Notification.js # Sistema de notificaciones
├── contexts/           # Contextos de React
│   └── ThemeContext.js # Manejo del tema claro/oscuro
├── hooks/              # Custom hooks
│   ├── useScrollAnimation.js # Animaciones al scroll
│   └── useNotification.js    # Sistema de notificaciones
├── App.js              # Componente principal
├── index.js            # Punto de entrada
└── index.css           # Estilos globales y Tailwind
```

## 🎯 Optimizado para ADSO

Esta hoja de vida está específicamente diseñada para:

### 👨‍🎓 Aprendices SENA
- **Perfil enfocado** en formación y aprendizaje continuo
- **Habilidades técnicas** relevantes para desarrollo web
- **Proyectos académicos** del programa ADSO destacados
- **Disponibilidad** para contrato de aprendizaje claramente indicada

### 🏢 Reclutadores Tecnológicos
- **Información clara** y bien estructurada
- **Tecnologías visibles** desde el primer vistazo
- **Contacto directo** con múltiples canales
- **Diseño profesional** que refleja habilidades técnicas

## 🚀 Despliegue

### Netlify
```bash
npm run build
# Subir la carpeta 'build' a Netlify
```

### Vercel
```bash
npm run build
# Conectar repositorio con Vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Agregar script en package.json: "deploy": "gh-pages -d build"
npm run build
npm run deploy
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**Cristian Contreras**
- LinkedIn: [linkedin.com/in/cristian-contreras](https://linkedin.com/in/cristian-contreras)
- GitHub: [github.com/cristian-contreras](https://github.com/cristian-contreras)
- Email: cristian.contreras@email.com

---

⭐ Si este proyecto te fue útil, ¡no olvides darle una estrella!

**Desarrollado con ❤️ para la comunidad ADSO**