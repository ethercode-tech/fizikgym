# Design System

## Fizik Gym - Implementacion aplicada en landing

- Se aplica paleta oscura dominante:
  - Fondo principal `#050B14`
  - Superficies `#0D1522` y `#121D2D`
  - Texto `#FFFFFF` / secundario `#A9B4C3`
  - Acento y CTA principal `#18D2FF`
- Tipografia:
  - Titulares: sans display condensada, agresiva, en mayusculas y gran escala
  - UI y cuerpo: sans moderna limpia, de alta legibilidad
- Botones:
  - Primario cyan brillante con bordes rectos
  - Secundario ghost blanco/cyan con opacidad
  - Interacciones por glow, opacidad y color
- Hero:
  - Imagen full viewport con overlay oscuro azulado
  - Badges de ubicacion, horarios y clase de prueba
  - Triple CTA (Clase Gratis, Ver Planes, Contactar)
- Secciones con imagen:
  - Entrenamiento funcional
  - Equipamiento
  - Transformaciones
  - Entrenadores
  - Planes
- Se mantiene SEO estructural y JSON-LD de gimnasio / local business.

## 1. Visual Theme & Atmosphere

Fizik Gym debe sentirse como un espacio de alto rendimiento. La web tiene que transmitir disciplina, fuerza, constancia y energia. El diseño tiene que parecer una mezcla entre gimnasio industrial, centro de entrenamiento funcional y club premium.

La pagina debe ser predominantemente oscura, con fondos negros y azulados muy profundos. Sobre esa base, el cyan electrico se utiliza como unico color de energia y accion. Todo debe sentirse frio, moderno y potente.

El hero debe ser un full viewport con una fotografia real del gimnasio, barras, discos, maquinas, mancuernas y atletas entrenando. La imagen necesita un overlay oscuro azulado para reforzar la legibilidad y darle una atmosfera cinematografica.

La navegacion debe ser limpia y simple. Logo a la izquierda, menu minimalista y CTA destacado para reservar una clase de prueba. La experiencia tiene que ser mobile-first, directa y orientada a conversion.

Typography is the voice of this atmosphere. The display font must feel strong, condensed and athletic. Headlines must be large, uppercase and compact. Body text should remain clean, readable and secondary. The interface should feel like a high-performance dashboard rather than a decorative website.

**Key Characteristics:**
- Fondo oscuro dominante con cyan electrico como unico acento
- Hero full viewport con imagen real del gimnasio
- Tipografia condensada, fuerte y en mayusculas
- Navegacion simple y directa
- Fotografias con overlay oscuro y alto contraste
- CTAs brillantes y faciles de identificar
- Cards oscuras con glow sutil
- Bordes rectos o apenas suavizados
- Sensacion de energia, potencia y profesionalismo
- Mobile first en todas las secciones

## 2. Color Palette & Roles

### Primary
- **Electric Cyan** (`#18D2FF`): Color principal de accion. Se usa exclusivamente en botones, links activos, iconos destacados y detalles de conversion
- **Pure White** (`#FFFFFF`): Texto principal, iconografia y elementos de alto contraste

### Secondary & Accent
- **Deep Cyan** (`#00B8E6`): Hover y estado activo de botones
- **Sky Cyan** (`#64E8FF`): Variacion mas clara para highlights y hover suaves
- **Link Blue** (`#3E8BFF`): Hover de links y elementos interactivos secundarios
- **Steel Blue** (`#2A3A4E`): Fondo para badges y elementos de soporte

### Surface & Background
- **Absolute Night** (`#050B14`): Fondo principal de toda la pagina
- **Dark Navy** (`#0D1522`): Surface principal de cards y contenedores
- **Steel Surface** (`#121D2D`): Surface elevada para bloques importantes
- **Overlay Black** (`rgba(0,0,0,0.7)`): Overlay de hero y modales
- **Overlay Cyan** (`rgba(24,210,255,0.12)`): Glow y hover suaves
- **Mist White** (`#F3F7FA`): Raras secciones claras o modales especiales

### Neutrals & Text
- **Pure White** (`#FFFFFF`): Texto principal
- **Soft White** (`#E9EEF4`): Texto secundario sobre fondos oscuros
- **Light Gray** (`#A9B4C3`): Metadata y descripciones
- **Steel Gray** (`#6D7785`): Labels, placeholders y texto desactivado
- **Dark Gray** (`#394657`): Bordes y separadores
- **Shadow Blue** (`#1A2433`): Fondos secundarios y bloques oscuros

### Semantic & Accent
- **Success Green** (`#29D17D`): Confirmaciones y estados positivos
- **Alert Red** (`#FF5A5A`): Alertas y errores
- **Warning Yellow** (`#FFD34F`): Advertencias y badges de promocion

### Gradient System
- Hero overlay: `linear-gradient(180deg, rgba(5,11,20,0.15) 0%, rgba(5,11,20,0.88) 100%)`
- CTA glow: `linear-gradient(90deg, #18D2FF 0%, #00B8E6 100%)`
- Card surface: `linear-gradient(180deg, #0D1522 0%, #121D2D 100%)`
- Divider glow: `linear-gradient(90deg, rgba(24,210,255,0) 0%, rgba(24,210,255,0.35) 50%, rgba(24,210,255,0) 100%)`

## 3. Typography Rules

### Font Family
- **Display & UI**: `Bebas Neue`, `Anton`, `Oswald`, `Inter`, sans-serif
- **Fallback/UI**: `Montserrat`, `Roboto`, sans-serif
- **No serif fonts** used anywhere in the experience

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Hero Display | 96px (6rem) | 700 | 0.92 | 1px | Uppercase, maximum impact |
| Display 2 | 72px (4.5rem) | 700 | 1.0 | 0.8px | Major section titles |
| Section Title | 48px (3rem) | 700 | 1.1 | 0.5px | Uppercase |
| Sub-section | 36px (2.25rem) | 600 | 1.15 | 0.4px | Uppercase |
| Feature Heading | 28px (1.75rem) | 600 | 1.2 | 0.2px | Uppercase |
| Card Title | 22px (1.38rem) | 700 | 1.3 | normal | Strong and clean |
| Body Large | 18px (1.13rem) | 400 | 1.6 | normal | Secondary descriptions |
| Body / UI | 16px (1rem) | 400/500 | 1.6 | normal | General content |
| Button Large | 16px (1rem) | 700 | 1.2 | 0.5px | Uppercase CTA |
| Button Standard | 14px (0.88rem) | 600 | 1.2 | 0.3px | Uppercase |
| Caption | 13px (0.81rem) | 500 | 1.4 | 0.2px | Secondary text |
| Label | 12px (0.75rem) | 600 | 1.5 | 0.8px | Uppercase badges |
| Micro | 10px (0.63rem) | 500 | 1.2 | 1px | Metadata |

### Principles
- ALL-CAPS is the default voice for headlines
- Titulos compactos y de alto impacto
- Pesos fuertes para headings y medianos para cuerpo
- Jerarquia visual evidente desde el primer scroll
- Espaciados ajustados en titulos para generar fuerza
- Letter spacing positivo en botones y labels
- El cuerpo de texto debe ser facil de leer incluso sobre overlays oscuros

## 4. Component Stylings

### Buttons

All buttons use sharp edges or very small border radius.

**Electric CTA** — Primary action:
- Default: bg `#18D2FF`, text `#050B14`, padding 24px, fontSize 16px, fontWeight 700, borderRadius 8px, no border
- Hover: bg `#00B8E6`
- Shadow: `0 0 24px rgba(24,210,255,0.35)`
- Used for: "Clase Gratis", "Contactar", "Empezar Hoy"

**Transparent Ghost** — Secondary action:
- Default: bg transparent, text `#FFFFFF`, border 1px solid `rgba(255,255,255,0.25)`, padding 16px
- Hover: bg `rgba(24,210,255,0.12)`, border `1px solid #18D2FF`
- Focus: glow cyan suave
- Used for: secondary CTAs

**Dark Filled** — Dark action:
- Default: bg `#121D2D`, text `#FFFFFF`
- Hover: bg `#1A2433`
- Used for: secondary cards and filters

### Cards & Containers
- Background: `#0D1522` o `#121D2D`
- Border: `1px solid rgba(255,255,255,0.06)`
- Border-radius: 16px
- Shadow: glow cyan minimo en hover
- Content: imagen, iconos, estadisticas y texto

### Inputs & Forms
- Fondo `#0D1522`
- Border `1px solid #394657`
- Border-radius 12px
- Texto blanco
- Placeholder `#6D7785`
- Focus border cyan y glow suave

### Navigation
- Desktop: logo a la izquierda, links centrados, CTA destacado a la derecha
- Background: blur oscuro con transparencia
- Sticky: fixed top
- Hover states en cyan
- Mobile: menu hamburguesa y CTA fijo

### Image Treatment
- Hero full viewport con overlay oscuro
- Fotografias reales del gimnasio
- Contraste alto y tonos frios
- Aspect ratios 16:9 y portrait para cards
- Bordes levemente redondeados
- Glow cyan suave sobre imagenes destacadas

### Distinctive Components
- Counter cards de alumnos, maquinas y años
- Timeline de progreso y transformacion
- Testimonios con avatars circulares
- Tarjetas de planes destacando el plan recomendado
- Seccion de entrenadores con cards grandes
- Horarios en formato tabla premium
- Mapa y ubicacion con CTA a Google Maps

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Full scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px, 80px
- Button padding: 16px y 24px
- Section padding: 64px vertical, 32px horizontal
- Small spacing: 4px y 8px para iconos y badges

### Grid & Container
- Framework: CSS Grid + Flexbox
- Max width: 1440px
- Columns: 12-column responsive grid
- Full-bleed: Hero y banners
- Content areas: centradas dentro de 1200px

### Whitespace Philosophy
Fizik Gym debe usar el espacio negativo para transmitir orden y potencia. No se trata de llenar cada espacio con informacion. Cada seccion debe respirar y sentirse premium. El fondo oscuro funciona como el silencio entre ejercicios, hace que lo importante destaque mas.

### Border Radius Scale

| Value | Context |
|-------|---------|
| 0px | Dividers, separators |
| 4px | Small tags |
| 8px | Buttons |
| 12px | Inputs |
| 16px | Cards |
| 999px | Avatars y pills |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 | `#050B14` flat | Main page background |
| Level 1 | `#0D1522` | Cards and content panels |
| Level 2 | `#121D2D` | Elevated containers |
| Level 3 | `rgba(24,210,255,0.12)` | Hover states |
| Level 4 | `rgba(24,210,255,0.22)` | Active glow |

### Shadow Philosophy
Fizik Gym should use glow instead of heavy shadow. Since the interface is dark, depth comes from brighter surfaces and cyan reflections rather than large blurred shadows.

### Decorative Depth
- Hero image with dark overlay
- Cyan glow on CTA buttons
- Hover states with subtle border light
- Section dividers using cyan gradient lines
- Numbers and stats highlighted with stronger contrast

## 7. Do's and Don'ts

### Do
- Use dark backgrounds as the primary visual language
- Apply cyan only on actions and highlights
- Use uppercase display typography
- Keep CTAs large and visible
- Use real gym photography
- Maintain strong contrast between background and text
- Keep layouts clean and performance-focused
- Use subtle glow instead of aggressive shadows
- Design every section mobile first

### Don't
- Introduce many accent colors
- Use decorative fonts
- Add large rounded borders
- Overload the page with text
- Use low contrast combinations
- Add unnecessary animations
- Use bright backgrounds as dominant surfaces
- Fill every space with elements
- Create overly complex navigation systems

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <425px | Single column, compact hero |
| Mobile | 425-576px | Stacked buttons, smaller typography |
| Tablet Small | 576-768px | Two-column sections begin |
| Tablet | 768-1024px | Hero expands, cards side-by-side |
| Desktop | 1024-1280px | Full navigation, 3-column layouts |
| Desktop Large | 1280-1440px | Full hero scale and large spacing |
| Wide | >1440px | Extra whitespace and centered content |

### Touch Targets
- CTA buttons: 48px minimum height
- Navigation icons: 44px minimum touch area
- Menu hamburger: 48px square
- Cards: easy tap targets on mobile

### Collapsing Strategy
- Navigation collapses into hamburger
- Hero typography scales from 96px to 42px
- Cards collapse from 3 columns to 1 column
- Buttons stack vertically on mobile
- Section spacing reduces from 64px to 32px
- Timetables become swipeable on mobile

### Image Behavior
- Hero uses `object-fit: cover`
- Cards maintain aspect ratio
- Portrait trainer images crop intelligently
- Background overlays darken more on mobile for readability

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: `#18D2FF`
- Background: `#050B14`
- Surface: `#0D1522`
- Elevated Surface: `#121D2D`
- Heading text: `#FFFFFF`
- Body text: `#A9B4C3`
- Border: `rgba(255,255,255,0.06)`
- Hover: `#00B8E6`

### Example Component Prompts
- "Create a hero section with a full-viewport gym background image, dark blue overlay, uppercase headline at 96px saying 'ENTRENA SIN LIMITES', with a bright cyan CTA button below"
- "Design a pricing card with dark navy background, cyan border glow, white text and a highlighted recommended plan badge"
- "Build a sticky navbar with transparent dark blur background, Fizik Gym logo, navigation links and a cyan CTA button"
- "Create a testimonial card with dark surface, circular avatar, cyan star icons and bold uppercase quote"
- "Design a schedule section with dark table layout, cyan highlights and strong typography"

### Iteration Guide
When refining existing screens generated with this design system:
1. Focus on one section at a time
2. Maintain the cyan-only accent system
3. Keep typography large and uppercase
4. Preserve strong contrast between background and content
5. Use real gym imagery as the emotional driver