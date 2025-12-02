# The Expected - Análisis Futbolístico Basado en Datos

## 🎯 Descripción del Proyecto

**The Expected** es un medio digital especializado en análisis futbolístico basado en datos avanzados. La plataforma ofrece métricas, visualizaciones y análisis profundos de LaLiga española, con un sistema de membresía premium (LEGENDS) para contenido exclusivo.

## 🎨 Diseño y Estilo Visual

### Paleta de Colores
- **Blanco (#FFFFFF)**: Base principal, claridad y orden
- **Negro (#000000)**: Texto y contraste
- **Dorado (#d4af37)**: Elementos premium, métricas destacadas y contenido LEGENDS

### Estética
- Limpia, moderna y muy visual
- Inspirada en medios deportivos contemporáneos
- Énfasis en visualizaciones de datos y gráficos
- Diseño responsive para todos los dispositivos

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                          # Página principal con artículos y rankings
│   ├── equipo/
│   │   └── [team]/
│   │       ├── page.tsx                  # Página del equipo con stats
│   │       └── plantilla/page.tsx        # Plantilla del equipo
│   ├── jugador/
│   │   └── [player]/page.tsx             # Perfil individual del jugador
│   ├── partido/
│   │   ├── preview/[match]/page.tsx      # Previa (LEGENDS)
│   │   └── post/[match]/page.tsx         # Post-partido
│   ├── los-mas/page.tsx                  # Rankings ("Los Más")
│   ├── diccionario/page.tsx              # Diccionario de métricas
│   └── legends/page.tsx                  # Página de suscripción LEGENDS
│
├── components/
│   ├── Header.tsx                        # Navegación con dropdown de equipos
│   ├── Footer.tsx                        # Footer del sitio
│   ├── LegendsBadge.tsx                  # Badge para contenido premium
│   ├── LegendsCard.tsx                   # Tarjeta de acceso bloqueado
│   └── LegendsAccessModal.tsx            # Modal de acceso LEGENDS
│
└── public/
    ├── teams/                            # Escudos de equipos (PNG)
    └── players/                          # Fotos de jugadores (PNG)
```

## ⚡ Funcionalidades Principales

### 🏠 Página Principal
- Carrusel de artículos destacados
- Grid de noticias con estadísticas
- Rankings en tiempo real (datos ficticios)
- Sidebar con métricas del día
- Acceso directo a LEGENDS

### 🏆 Sección LaLiga
- Dropdown con los 20 equipos de Primera División
- Escudos oficiales en PNG con fondo transparente
- Navegación vertical optimizada (accesibilidad con teclado)

### 👥 Páginas de Equipo
- Estadísticas avanzadas del equipo
- **Análisis del próximo partido** con visualizaciones:
  - Mapas de calor de los últimos 5 partidos
  - Gráficos temporales de xG
  - Matriz de probabilidades por minuto
  - Comparativas entre equipos (radar charts)
  - 3 insights automáticos generados
- Enlaces a plantilla y perfiles de jugadores

### 📊 Previas y Post-Partidos (LEGENDS)
**Previas**:
- Análisis predictivo completo
- Proyecciones de xG esperado
- Distribución temporal de goles
- Mapas de calor y zonas de influencia
- Comparativas de métricas clave

**Post-Partidos**:
- Análisis de rendimiento
- Momentos clave con datos
- Métricas avanzadas de jugadores
- Visualizaciones interactivas

### 🥇 Rankings "Los Más"
Sistema de rankings con pestañas:
- Máximos goleadores
- Asistentes
- xG (Expected Goals)
- Pases completados
- *Algunos públicos, otros LEGENDS-exclusivos*

### 📖 Diccionario de Datos
- **16 métricas explicadas en detalle**
- Mini-gráficos con datos de ejemplo
- Búsqueda y filtrado por categoría (Ofensiva, Defensiva, Pases, Progresión)
- **Botón "Ver ejemplo en partido"** para cada métrica
- Explicaciones pedagógicas:
  - ¿Qué es?
  - ¿Cómo interpretarla?
  - ¿Cuándo usar?
  - Limitaciones
  - Ejemplo práctico

### 👑 Sistema LEGENDS

#### ⚠️ Acceso Demo (Simplificado para Pruebas)
**COMPORTAMIENTO ACTUAL:**
- ✅ **UN SOLO CLIC en "Iniciar sesión"** → Acceso directo automático
- ✅ **SIN validación de contraseña**
- ✅ **SIN formulario de credenciales**
- ✅ Contraseñas mostradas solo como **documentación visual**:
  - `Legends2025!`
  - `TE-LEGEND-Access`
  - `golden_entry2025`

```javascript
// Código actual: acceso inmediato sin validación
const handleDirectAccess = () => {
  localStorage.setItem("legends_session", JSON.stringify({
    timestamp: Date.now(),
    demo: true
  }))
  router.push("/legends")
}
```

#### Contenido LEGENDS Incluye:
- ✅ Previas avanzadas de partidos
- ✅ Post-partidos con análisis profundo
- ✅ Métricas premium de jugadores
- ✅ Mapas de calor detallados
- ✅ Rankings completos con xG, xA y más
- ✅ Herramientas de análisis personalizadas
- ✅ Artículos exclusivos semanales

## 🎲 Datos Ficticios (Demo/Maquetación)

### ⚠️ IMPORTANTE: Todos los datos son inventados para propósitos de diseño y maquetación

**NO hay integración con Opta ni preparación para feeds reales.** Este proyecto está diseñado exclusivamente para:
- ✅ Visualización de diseño
- ✅ Pruebas de UX/UI
- ✅ Demostración de concepto
- ✅ Maquetación y prototipado

### Datos de Ejemplo Incluidos:
- Rankings ficticios con valores inventados
- Estadísticas de ejemplo para todos los jugadores
- Mapas de calor generados aleatoriamente
- Gráficos con datos de muestra
- xG, xA y otras métricas simuladas
- Matrices de probabilidad inventadas
- Comparativas con datos demo

### Ejemplo de Datos Ficticios:
```json
{
  "ranking_xg": [
    {"player": "Lamine Yamal", "team": "Barcelona", "xg": 0.97, "image": "/players/yamal-lamine.png"},
    {"player": "Robert Lewandowski", "team": "Barcelona", "xg": 0.85}
  ],
  "shots_on_target_avg": [
    {"team": "Barcelona", "sot": 6.3, "badge": "/teams/barcelona.png"},
    {"team": "Real Madrid", "sot": 5.8}
  ],
  "heatmap_data": [
    [0, 0, 0, 1, 2, 3, 5, 3, 2, 1],
    // ... más datos ficticios
  ]
}
```

## 🖼️ Activos Gráficos

### Escudos de Equipos (20 equipos LaLiga)
- **Ubicación**: `/public/teams/`
- **Formato**: PNG con fondo transparente generados por IA
- **Equipos incluidos**:
  - Barcelona, Real Madrid, Atlético de Madrid
  - Athletic Bilbao, Real Sociedad, Villarreal
  - Real Betis, Valencia, Sevilla, Girona
  - Getafe, Osasuna, Rayo Vallecano, Celta de Vigo
  - Las Palmas, Mallorca, Valladolid, Espanyol
  - Alavés, Leganés
- **Nomenclatura**: `barcelona.png`, `real-madrid.png`, etc.
- **Alt Text**: "Escudo FC Barcelona"

### Fotos de Jugadores
- **Ubicación**: `/public/players/`
- **Formato**: PNG generados por IA (fondo neutro)
- **Jugadores destacados**:
  - Lamine Yamal, Robert Lewandowski, Pedri
  - Vinícius Jr, Jude Bellingham, Kylian Mbappé
  - Antoine Griezmann, Jan Oblak, Nico Williams
- **Nomenclatura**: `yamal-lamine.png`, `lewandowski-robert.png`
- **Alt Text**: "Foto de Lamine Yamal"

### Visualizaciones Generadas
- **Mapas de calor**: 5 archivos PNG para Barcelona
- **Gráficos de xG**: Líneas temporales con datos simulados
- **Matriz de probabilidad**: Grid de colores por minutos
- **Comparativas**: Radar charts de equipos

### Optimizaciones Implementadas
- ✅ `loading="lazy"` en todas las imágenes
- ✅ Next.js Image component con optimización automática
- ✅ Responsive con srcset automático
- ✅ Alt text descriptivo en el 100% de imágenes

## 🚀 Instalación y Ejecución

### Requisitos
- Node.js 18+ o Bun
- npm/yarn/pnpm/bun

### Instalación
```bash
# Clonar el repositorio
git clone [repository-url]

# Instalar dependencias
bun install
# o
npm install

# Ejecutar en desarrollo
bun dev
# o
npm run dev
```

### Abrir en Navegador
```
http://localhost:3000
```

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 **Móvil**: 320px - 767px
- 📱 **Tablet**: 768px - 1023px
- 💻 **Desktop**: 1024px - 1439px
- 🖥️ **Large Desktop**: 1440px+

## ♿ Accesibilidad

- ✅ Navegación por teclado en todos los menús
- ✅ Roles ARIA apropiados
- ✅ Alt text descriptivo en todas las imágenes (100%)
- ✅ Contraste de colores cumple WCAG 2.1 AA
- ✅ Focus states visibles con borde dorado
- ✅ Hover effects en elementos interactivos

## 🎯 Páginas y Rutas

| Ruta | Descripción | Público/LEGENDS |
|------|-------------|--------------------|
| `/` | Página principal con rankings | Público |
| `/equipo/barcelona` | Página del Barcelona con análisis | Público |
| `/equipo/[team]` | Página de cualquier equipo | Público |
| `/equipo/[team]/plantilla` | Plantilla del equipo | Público |
| `/jugador/[player]` | Perfil del jugador | Mixto |
| `/partido/preview/[match]` | Previa del partido | **LEGENDS** |
| `/partido/post/[match]` | Post-partido | **LEGENDS** |
| `/los-mas` | Rankings con 4 pestañas | Mixto |
| `/diccionario` | 16 métricas explicadas | Público |
| `/legends` | Página de suscripción | Público |

## 🔐 Sistema de Autenticación (Demo)

### Funcionamiento Actual (Modo Demo para Pruebas)
```javascript
// ✅ ACCESO DIRECTO - Un solo clic
// Click en "Iniciar sesión" → Acceso inmediato sin formulario
const handleDirectAccess = () => {
  // Simula carga breve (500ms) para UX
  setTimeout(() => {
    localStorage.setItem("legends_session", JSON.stringify({
      timestamp: Date.now(),
      demo: true
    }))
    router.push(redirectTo || "/legends")
  }, 500)
}

// Las contraseñas se muestran solo como documentación visual
const DEMO_PASSWORDS = ["Legends2025!", "TE-LEGEND-Access", "golden_entry2025"]
// ⚠️ NO se validan, NO se usan en el flujo de acceso
```

### Para Producción Real
En un entorno de producción, este sistema debe ser reemplazado por:
- Autenticación real con backend (NextAuth.js, Auth0, Clerk, Supabase Auth)
- Base de datos de usuarios con hash de contraseñas
- Sistema de roles y permisos (free vs LEGENDS)
- Integración con Stripe/PayPal para suscripciones
- Gestión de renovación y cancelación
- Verificación de email
- Recuperación de contraseña

## 📊 Métricas Incluidas en el Diccionario

1. **xG** (Expected Goals) - Goles esperados
2. **xA** (Expected Assists) - Asistencias esperadas
3. **xGChain** - Cadena de goles esperados
4. **xGBuildup** - Construcción de goles esperados
5. **Progressive Passes** - Pases progresivos
6. **Key Passes** - Pases clave
7. **Passing Accuracy** - Precisión de pase
8. **PPDA** - Passes per Defensive Action
9. **Tackles Won %** - Porcentaje de entradas exitosas
10. **Interceptions** - Interceptaciones
11. **Shot-Creating Actions** - Acciones que generan tiro
12. **Successful Dribbles** - Regates exitosos
13. **G/90** - Goals per 90 minutes
14. **Touches in Box** - Toques en el área
15. **Defensive Duels Won %** - Duelos defensivos ganados
16. **Progressive Carries** - Conducciones progresivas

Cada métrica incluye:
- Mini-gráfico visual con datos ficticios
- Definición clara
- Interpretación práctica
- Cuándo usarla
- Limitaciones
- Ejemplo real
- Botón "Ver ejemplo en partido"

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Optimización de Imágenes**: Next.js Image
- **Gestión de Estado**: React Hooks (useState, useEffect)
- **Routing**: Next.js App Router con dynamic routes
- **Generación de Assets**: IA (Flux para imágenes)

## 📝 Notas Importantes

### ⚠️ Para Desarrolladores

1. **❌ NO hay integración con Opta**: Todos los datos son ficticios
2. **❌ NO hay endpoints reales**: No hay APIs conectadas
3. **✅ Acceso LEGENDS es demo**: Un clic → acceso inmediato
4. **✅ Datos inventados**: Todos los rankings, stats y métricas son de ejemplo
5. **✅ Assets generados por IA**: Escudos y fotos son ilustraciones

### ✅ Lo que SÍ está implementado

- ✅ Diseño completo y responsive (móvil, tablet, desktop)
- ✅ Navegación funcional entre todas las páginas
- ✅ Sistema visual de LEGENDS (badges, modales, cards)
- ✅ Visualizaciones con datos ficticios (mapas de calor, gráficos xG, matrices)
- ✅ Diccionario completo de 16 métricas con mini-charts
- ✅ 20 escudos de equipos LaLiga generados
- ✅ Fotos de jugadores generadas
- ✅ Componentes reutilizables y modulares
- ✅ Optimización de imágenes con Next.js Image
- ✅ Accesibilidad básica (ARIA, alt text, keyboard nav)
- ✅ Header con dropdown vertical de equipos
- ✅ Rankings con múltiples widgets en homepage
- ✅ Página Barcelona con análisis avanzado de partido

## 🔮 Futuras Mejoras (Para Producción)

### Integración de Datos Reales
- [ ] Conectar con API de Opta Sports Data
- [ ] Implementar caché de datos con Redis
- [ ] Sistema de actualización en tiempo real (WebSockets)
- [ ] Webhooks para actualizaciones automáticas de partidos
- [ ] Scraping de fuentes alternativas como backup

### Autenticación y Pagos Real
- [ ] Sistema de usuarios con NextAuth.js o Supabase Auth
- [ ] Integración con Stripe para suscripciones recurrentes
- [ ] Panel de usuario con gestión de cuenta y facturación
- [ ] Sistema de renovación automática y recordatorios
- [ ] Prueba gratuita de 7 días
- [ ] Cupones y descuentos promocionales

### Funcionalidades Adicionales
- [ ] Comentarios y sistema de comunidad
- [ ] Notificaciones push para partidos importantes
- [ ] Comparador de jugadores interactivo (drag & drop)
- [ ] Exportación de datos a PDF/CSV/Excel
- [ ] API pública REST para desarrolladores terceros
- [ ] Modo oscuro completo con toggle
- [ ] Favoritos y seguimiento de equipos/jugadores
- [ ] Newsletter semanal automatizada
- [ ] App móvil nativa (React Native)

### Optimizaciones de Performance
- [ ] Server-side rendering para SEO
- [ ] Static generation de páginas comunes
- [ ] CDN para assets estáticos
- [ ] Lazy loading de componentes pesados
- [ ] Service Workers para offline mode
- [ ] Analytics con Google Analytics / Plausible

## 📄 Licencia y Derechos

Este es un proyecto de **demostración y maquetación**. 

### Derechos de Imagen
- ⚠️ **Escudos de equipos**: Generados por IA (no oficiales)
- ⚠️ **Fotos de jugadores**: Generadas por IA (no reales)
- ⚠️ **En producción**: Obtener licencias oficiales de LaLiga y clubes

### Datos
- Todos los datos estadísticos son **ficticios**
- En producción se requiere licencia de Opta Sports Data o similar
- No usar estos datos para análisis real o apuestas

## 👥 Créditos

- **Diseño y Desarrollo**: The Expected Team
- **Escudos de Equipos**: Generados por IA (Flux - imagen generativa)
- **Fotos de Jugadores**: Generadas por IA (Flux - imagen generativa)
- **Datos de Ejemplo**: Inventados manualmente para demo
- **Tecnología**: Next.js, TypeScript, Tailwind CSS, shadcn/ui

---

## 🚨 Recordatorio Final - DATOS FICTICIOS

### ❌ Este proyecto NO incluye:
- ❌ Integración real con Opta o cualquier proveedor de datos
- ❌ Autenticación funcional de producción (solo demo)
- ❌ Base de datos real (ni SQL ni NoSQL)
- ❌ Sistema de pagos funcional
- ❌ Datos reales de partidos, jugadores o equipos
- ❌ Endpoints preparados para feeds automáticos
- ❌ Estructura para recibir datos de Opta

### ✅ Lo que SÍ tiene:
- ✅ Diseño completo listo para producción
- ✅ Toda la maquetación responsive
- ✅ Componentes reutilizables y modulares
- ✅ Sistema visual de membresía LEGENDS
- ✅ Acceso demo simplificado (un clic)
- ✅ Datos ficticios para visualización
- ✅ Assets generados (escudos, fotos, gráficos)
- ✅ Diccionario completo de métricas
- ✅ Navegación completa funcional

---

### 📋 Checklist de Implementación Completada

- [x] Página principal con carrusel y rankings
- [x] Header con dropdown de 20 equipos LaLiga
- [x] 20 escudos de equipos generados
- [x] Fotos de jugadores principales generadas
- [x] Página Barcelona con análisis de partido (mapas de calor, xG, matriz)
- [x] Sistema LEGENDS con acceso directo (un clic)
- [x] Modal de acceso con contraseñas documentadas
- [x] Diccionario de 16 métricas con mini-charts
- [x] Botón "Ver ejemplo en partido" en cada métrica
- [x] Rankings "Los Más" con pestañas
- [x] Páginas de jugador con stats avanzadas
- [x] Previas y post-partidos LEGENDS
- [x] Footer con enlaces
- [x] Badges y cards de LEGENDS
- [x] Optimización de imágenes
- [x] Responsive design completo
- [x] Accesibilidad básica (ARIA, keyboard nav)
- [x] README completo con documentación

---

**Última actualización**: Noviembre 2025  
**Versión**: 1.0.0 (Demo - Datos Ficticios)  
**Estado**: ✅ Maquetación completa - Listo para presentación

**Para pasar a producción**: Implementar backend real, autenticación, base de datos, integración con Opta y sistema de pagos.