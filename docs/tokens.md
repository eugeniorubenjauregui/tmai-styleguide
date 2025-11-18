# Design Tokens - Documentación

## Colores

### Primitivos

Escalas de colores base:

- **Teal**: 50-900 (Principal: 500 #14b8a6, Hover: 600 #0d9488)
- **Blue**: 50-900 (Profundo: 700 #1e40af, Hover: 800 #1e3a8a)
- **Green**: 50-900 (TITA: 500 #10b981)
- **Gray**: 50-900 (Principal: 900 #0f172a, Oscuro: 700 #334155, Medio: 500 #64748b, Claro: 200 #e2e8f0)
- **Red**: 50-900 (Error: 600 #dc2626)

### Semánticos

Colores con propósito específico:

**Texto:**
- `text.primary`: #0f172a (Negro Principal)
- `text.secondary`: #64748b (Gris Medio)
- `text.disabled`: #cbd5e1
- `text.inverse`: #ffffff

**Fondo:**
- `background.primary`: #ffffff
- `background.secondary`: #f8fafc
- `background.tertiary`: #e2e8f0
- `background.inverse`: #0f172a

**Bordes:**
- `border.default`: #e2e8f0 (Gris Claro)
- `border.focus`: #14b8a6 (Teal Principal)
- `border.error`: #dc2626
- `border.success`: #10b981

**Feedback:**
- `feedback.error`: #dc2626
- `feedback.success`: #10b981
- `feedback.warning`: #f59e0b
- `feedback.info`: #1e40af

**Brand:**
- `brand.primary`: #14b8a6 (Teal Principal)
- `brand.primaryHover`: #0d9488 (Teal Hover)
- `brand.secondary`: #1e40af (Azul Profundo)
- `brand.secondaryHover`: #1e3a8a (Azul Hover)
- `brand.accent`: #10b981 (Verde TITA)

### Gradientes

- `gradients.decorative`: linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)
  - ⚠️ Solo para fondos decorativos - NO para botones con texto

- `gradients.hero`: linear-gradient(135deg, #0D9488 0%, #1E3A8A 100%)
  - ✓ Accesible con texto blanco
  - Para fondos de bienvenida, banners principales

- `gradients.subtle`: linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)
  - ✓ Accesible con texto oscuro
  - Para fondos de contenido, secciones amplias

## Tipografía

### Familia

- **Principal**: Inter
- **Fallback**: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif

### Tamaños

- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.25rem (20px)
- `2xl`: 1.5rem (24px)
- `3xl`: 1.875rem (30px)
- `4xl`: 2.25rem (36px)
- `6xl`: 3.75rem (60px)

### Pesos

- `normal`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700
- `extrabold`: 800

### Escala Tipográfica

**Display / Hero:**
- Font size: 3.75rem (text-6xl)
- Font weight: 700
- Line height: 1.2
- Letter spacing: -0.02em

**H1 / Título Principal:**
- Font size: 2.25rem (text-4xl)
- Font weight: 700
- Line height: 1.2
- Letter spacing: -0.02em

**H2 / Subtítulo:**
- Font size: 1.875rem (text-3xl)
- Font weight: 600
- Line height: 1.3
- Letter spacing: -0.02em

**H3 / Encabezado:**
- Font size: 1.5rem (text-2xl)
- Font weight: 600
- Line height: 1.3
- Letter spacing: -0.02em

**H4 / Subencabezado:**
- Font size: 1.25rem (text-xl)
- Font weight: 500
- Line height: 1.4
- Letter spacing: 0

**Body / Cuerpo:**
- Font size: 1rem (text-base)
- Font weight: 400
- Line height: 1.5
- Letter spacing: 0

**Small / Pequeño:**
- Font size: 0.875rem (text-sm)
- Font weight: 400
- Line height: 1.5
- Letter spacing: 0

**Caption / Leyenda:**
- Font size: 0.75rem (text-xs)
- Font weight: 400
- Line height: 1.5
- Letter spacing: 0

## Espaciado

Sistema basado en escala de 4px:

- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 0.75rem (12px)
- `base`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)
- `2xl`: 3rem (48px)
- `3xl`: 4rem (64px)
- `4xl`: 6rem (96px)

### Grilla

- **Columnas**: 12
- **Gap**: 1.5rem (24px)

### Breakpoints

- `mobile`: 375px
- `tablet`: 768px
- `desktop`: 1024px

### Container

**Mobile:**
- Max width: 375px
- Padding: 16px

**Tablet:**
- Max width: 768px
- Padding: 32px

**Desktop:**
- Max width: 1280px
- Padding: 64px

### Espaciado Responsivo

**Page Padding:**
- Mobile: 16px
- Tablet: 32px
- Desktop: 64px

**Section Gap:**
- Mobile: 48px
- Tablet: 64px
- Desktop: 96px

**Card Padding:**
- Mobile: 16px
- Tablet: 24px
- Desktop: 32px

**Element Gap:**
- Mobile: 12px
- Tablet: 16px
- Desktop: 24px

## Sombras

- `sm`: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- `md`: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
- `lg`: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
- `xl`: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)

## Border Radius

- `xs`: 0.125rem (2px)
- `sm`: 0.25rem (4px)
- `md`: 0.5rem (8px)
- `lg`: 0.75rem (12px)
- `xl`: 1rem (16px)
- `full`: 9999px

