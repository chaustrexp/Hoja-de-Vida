# DOCUMENTACIÓN DE COMPONENTES
## Hoja de Vida Digital - Cristian Contreras

---

## 📋 Índice de Componentes

1. [Navbar](#navbar)
2. [Hero](#hero)
3. [Profile](#profile)
4. [Education](#education)
5. [Skills](#skills)
6. [Projects](#projects)
7. [Contact](#contact)
8. [Footer](#footer)
9. [Notification](#notification)

---

## 🧭 Navbar

### Descripción
Componente de navegación principal con diseño moderno tipo "pills" y menú móvil responsive.

### Props
Ninguna (utiliza hooks internos)

### Hooks Utilizados
- `useTheme()` - Manejo del tema claro/oscuro
- `useActiveSection()` - Detección de sección activa

### Características Principales
- **Logo personalizado** con avatar e iniciales
- **Navegación desktop** con iconos y efectos hover
- **Menú móvil** con animaciones suaves
- **Botón de tema** con transiciones
- **Botón CTA** para contacto directo
- **Scroll suave** entre secciones

### Estados
```javascript
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

### Funciones Principales
```javascript
scrollToSection(href) // Navegación suave a secciones
```

### Estilos CSS
`src/styles/components/Navbar.css`

---

## 🦸 Hero

### Descripción
Sección principal de presentación con información personal y tarjeta de perfil.

### Props
Ninguna

### Hooks Utilizados
- `useScrollAnimation()` - Animaciones de entrada

### Características Principales
- **Título principal** con gradiente de texto
- **Descripción profesional** enfocada en ADSO
- **Botones de acción** (Descargar CV, Contactar)
- **Enlaces sociales** con efectos hover
- **Tarjeta de perfil** con estadísticas
- **Diseño responsive** con grid adaptativo

### Funciones Principales
```javascript
handleDownloadCV()    // Simula descarga de CV
scrollToContact()     // Navega a sección contacto
```

### Datos Mostrados
- Nombre completo
- Título profesional
- Descripción personal
- Ubicación
- Estadísticas básicas (años, proyectos, tecnologías)

### Estilos CSS
`src/styles/components/Hero.css`

---

## 👤 Profile

### Descripción
Sección de perfil profesional con descripción detallada y características destacadas.

### Props
Ninguna

### Hooks Utilizados
- `useScrollAnimation()` - Animaciones de entrada

### Características Principales
- **Descripción profesional** orientada a contrato de aprendizaje
- **Características destacadas** con iconos temáticos
- **Estadísticas de formación** en cards animadas
- **Grid responsive** que se adapta a diferentes pantallas

### Datos de Estadísticas
```javascript
const stats = [
  { number: '2+', label: 'Años de Formación' },
  { number: '10+', label: 'Proyectos Académicos' },
  { number: '5+', label: 'Tecnologías' }
];
```

### Características Destacadas
- Formación SENA
- Desarrollo Web
- Trabajo en Equipo
- Innovación

### Estilos CSS
`src/styles/components/Profile.css`

---

## 🎓 Education

### Descripción
Timeline de formación académica con certificaciones y logros educativos.

### Props
Ninguna

### Hooks Utilizados
- `useScrollAnimation()` - Animaciones de entrada

### Características Principales
- **Timeline vertical** con línea conectora
- **Marcadores de tiempo** con colores diferenciados
- **Cards de formación** con información detallada
- **Sección de certificaciones** con iconos tecnológicos
- **Animaciones escalonadas** por elemento

### Datos de Educación
```javascript
const educationData = [
  {
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    institution: 'SENA',
    period: '2023 - 2025',
    description: '...',
    icon: 'fas fa-laptop-code',
    color: 'primary'
  },
  // ... más elementos
];
```

### Funciones Auxiliares
```javascript
getColorClasses(color) // Retorna clases CSS según el tipo
```

### Certificaciones Mostradas
- HTML5 & CSS3
- JavaScript
- Git & GitHub

### Estilos CSS
`src/styles/components/Education.css`

---

## 💻 Skills

### Descripción
Sección de habilidades técnicas con barras de progreso y habilidades blandas con iconos.

### Props
Ninguna

### Hooks Utilizados
- `useScrollAnimation()` - Animaciones de entrada
- `useEffect()` - Control de animaciones de barras

### Características Principales
- **Habilidades técnicas** con barras de progreso animadas
- **Habilidades blandas** en cards con iconos
- **Sección de tecnologías** con tags
- **Animaciones sincronizadas** con scroll
- **Gradientes personalizados** en barras de progreso

### Estados
```javascript
const [animateSkills, setAnimateSkills] = useState(false);
```

### Datos de Habilidades Técnicas
```javascript
const technicalSkills = [
  { name: 'HTML & CSS', level: 85, icon: 'fab fa-html5', color: 'from-orange-500 to-red-500' },
  { name: 'JavaScript', level: 75, icon: 'fab fa-js-square', color: 'from-yellow-400 to-yellow-600' },
  // ... más habilidades
];
```

### Datos de Habilidades Blandas
```javascript
const softSkills = [
  { name: 'Trabajo en Equipo', icon: 'fas fa-users', color: 'text-blue-500' },
  { name: 'Puntualidad', icon: 'fas fa-clock', color: 'text-green-500' },
  // ... más habilidades
];
```

### Componentes Internos
- `SkillBar` - Barra de progreso individual
- `SoftSkillCard` - Card de habilidad blanda

### Estilos CSS
`src/styles/components/Skills.css`

---

## 📁 Projects

### Descripción
Showcase de proyectos académicos y experiencia con tecnologías utilizadas.

### Props
Ninguna

### Hooks Utilizados
- `useScrollAnimation()` - Animaciones de entrada

### Características Principales
- **Cards de proyectos** con gradientes únicos
- **Lista de tecnologías** por proyecto
- **Características destacadas** de cada proyecto
- **Sección de experiencia** con estadísticas
- **Call-to-action** para contacto

### Datos de Proyectos
```javascript
const projects = [
  {
    title: 'Portafolio Web Personal',
    description: '...',
    icon: 'fas fa-globe',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-blue-500 to-purple-600',
    features: ['Diseño responsivo', 'Modo oscuro', '...']
  },
  // ... más proyectos
];
```

### Componentes Internos
- `ProjectCard` - Card individual de proyecto

### Funcionalidades
- Navegación a sección de contacto
- Hover effects en cards
- Animaciones escalonadas

### Estilos CSS
`src/styles/components/Projects.css`

---

## 📧 Contact

### Descripción
Formulario de contacto funcional con validaciones e información de contacto.

### Props
Ninguna

### Hooks Utilizados
- `useScrollAnimation()` - Animaciones de entrada
- `useState()` - Manejo del formulario

### Características Principales
- **Formulario funcional** con validaciones
- **Información de contacto** en cards
- **Enlaces sociales** con colores temáticos
- **Indicador de disponibilidad** para contrato
- **Estados de carga** en envío

### Estados del Formulario
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
```

### Datos de Contacto
```javascript
const contactInfo = [
  { icon: 'fas fa-map-marker-alt', title: 'Ubicación', value: 'Cúcuta, Norte de Santander', color: 'text-red-500' },
  { icon: 'fas fa-phone', title: 'Teléfono', value: '+57 300 123 4567', color: 'text-green-500' },
  { icon: 'fas fa-envelope', title: 'Email', value: 'cristian.contreras@email.com', color: 'text-blue-500' }
];
```

### Funciones Principales
```javascript
handleInputChange(e)  // Actualiza estado del formulario
handleSubmit(e)       // Procesa envío del formulario
isValidEmail(email)   // Valida formato de email
```

### Componentes Internos
- `ContactInfoCard` - Card de información de contacto

### Validaciones
- Campos requeridos
- Formato de email
- Longitud de mensaje

### Estilos CSS
`src/styles/components/Contact.css`

---

## 🦶 Footer

### Descripción
Pie de página completo con información personal, enlaces y mensaje motivacional.

### Props
Ninguna

### Características Principales
- **Información personal** resumida
- **Enlaces rápidos** de navegación
- **Información de contacto** completa
- **Enlaces sociales** con efectos hover
- **Botón scroll to top** animado
- **Mensaje motivacional** con gradiente

### Datos de Enlaces
```javascript
const quickLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#perfil', label: 'Perfil' },
  // ... más enlaces
];

const socialLinks = [
  { href: 'https://linkedin.com/in/cristian-contreras', icon: 'fab fa-linkedin', label: 'LinkedIn', color: 'hover:text-blue-600' },
  // ... más enlaces sociales
];
```

### Funciones Principales
```javascript
scrollToSection(href) // Navegación suave a secciones
scrollToTop()         // Scroll al inicio de la página
```

### Secciones del Footer
1. **Información Personal** - Descripción y enlaces sociales
2. **Enlaces Rápidos** - Navegación por secciones
3. **Información de Contacto** - Datos completos
4. **Copyright** - Derechos y tecnologías
5. **Mensaje Motivacional** - Frase inspiradora

### Estilos CSS
`src/styles/components/Footer.css`

---

## 🔔 Notification

### Descripción
Sistema de notificaciones temporales con diferentes tipos y auto-dismiss.

### Props
Ninguna (maneja estado interno)

### Hooks Utilizados
- `useState()` - Manejo de notificaciones
- `useEffect()` - Exposición de función global

### Características Principales
- **Múltiples tipos** (success, error, warning, info)
- **Auto-dismiss** después de 4 segundos
- **Animaciones de entrada/salida**
- **Posicionamiento fijo** en esquina superior
- **Función global** accesible desde cualquier componente

### Estados
```javascript
const [notifications, setNotifications] = useState([]);
```

### Funciones Principales
```javascript
showNotification(message, type)    // Muestra nueva notificación
removeNotification(id)             // Remueve notificación específica
getNotificationStyles(type)        // Retorna estilos según tipo
getNotificationIcon(type)          // Retorna icono según tipo
```

### Tipos de Notificación
- **success** - Verde con icono de check
- **error** - Rojo con icono de exclamación
- **warning** - Amarillo con icono de advertencia
- **info** - Azul con icono de información

### Uso Global
```javascript
// Desde cualquier componente
window.showNotification('Mensaje enviado!', 'success');
```

### Estilos
Estilos inline con Tailwind CSS

---

## 🎨 Patrones de Diseño Utilizados

### 1. **Compound Components**
Componentes que trabajan juntos (ej: ContactInfoCard dentro de Contact)

### 2. **Custom Hooks**
Lógica reutilizable extraída en hooks personalizados

### 3. **Render Props Pattern**
Usado en animaciones y efectos de scroll

### 4. **Container/Presentational**
Separación entre lógica y presentación

---

## 🔧 Convenciones de Código

### Nomenclatura
- **Componentes**: PascalCase (ej: `Navbar`)
- **Funciones**: camelCase (ej: `scrollToSection`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `ANIMATION_DURATION`)
- **CSS Classes**: kebab-case (ej: `navbar-container`)

### Estructura de Archivos
```javascript
// 1. Imports
import React from 'react';
import { useHook } from '../hooks/useHook';

// 2. Documentación JSDoc
/**
 * Descripción del componente
 */

// 3. Componente
const Component = () => {
  // 4. Hooks
  // 5. Estados
  // 6. Efectos
  // 7. Funciones
  // 8. Render
};

// 9. Export
export default Component;
```

### Comentarios
- **JSDoc** para documentación de funciones
- **Comentarios inline** para lógica compleja
- **Secciones** marcadas con `// ===== TÍTULO =====`

---

## 📱 Responsive Breakpoints

### Tailwind CSS Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Estrategias por Componente
- **Navbar**: Menú hamburguesa en < lg
- **Hero**: Grid de 2 columnas en >= lg
- **Skills**: Grid de 2 columnas en >= lg
- **Contact**: Grid de 2 columnas en >= lg
- **Footer**: Grid de 3 columnas en >= md

---

## ⚡ Performance Tips

### Optimizaciones Implementadas
1. **Lazy animations** - Solo se activan cuando son visibles
2. **Debounced scroll** - Optimización de eventos de scroll
3. **CSS-only animations** - Uso de Tailwind para animaciones
4. **Minimal re-renders** - Estados locales cuando es posible

### Métricas Objetivo
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1