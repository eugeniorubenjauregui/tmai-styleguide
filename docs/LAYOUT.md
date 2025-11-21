# Layout y Espaciados - Documentación

## Sistema de Espaciado

El SDK incluye un sistema completo de espaciado basado en una escala de 4px, mapeado a Tailwind CSS.

### Escala de Espaciado

```typescript
import { spacing } from 'ai-lytics-styleguide';

// Valores disponibles
spacing.scale.xs    // 0.25rem (4px)
spacing.scale.sm    // 0.5rem (8px)
spacing.scale.md    // 0.75rem (12px)
spacing.scale.base  // 1rem (16px)
spacing.scale.lg    // 1.5rem (24px)
spacing.scale.xl    // 2rem (32px)
spacing.scale['2xl'] // 3rem (48px)
spacing.scale['3xl'] // 4rem (64px)
spacing.scale['4xl'] // 6rem (96px)
```

### Uso en Tailwind

```html
<!-- Padding -->
<div class="p-xs">4px padding</div>
<div class="p-sm">8px padding</div>
<div class="p-base">16px padding</div>
<div class="p-lg">24px padding</div>
<div class="p-4xl">96px padding</div>

<!-- Margin -->
<div class="m-lg">24px margin</div>
<div class="mx-xl">32px horizontal margin</div>
<div class="my-2xl">48px vertical margin</div>

<!-- Gap -->
<div class="flex gap-md">12px gap</div>
<div class="grid gap-lg">24px gap</div>
```

## Sistema de Grilla

### Grid de 12 Columnas

```html
<div class="grid grid-cols-12 gap-grid">
  <div class="col-span-12 md:col-span-6 lg:col-span-4">Columna 1</div>
  <div class="col-span-12 md:col-span-6 lg:col-span-4">Columna 2</div>
  <div class="col-span-12 md:col-span-12 lg:col-span-4">Columna 3</div>
</div>
```

**Configuración:**
- Columnas: 12
- Gap: 24px (1.5rem)

## Container

El container está configurado con padding y max-width responsive:

```html
<div class="container">
  <!-- Contenido centrado con padding responsive -->
</div>
```

**Configuración:**
- Mobile: max-width 375px, padding 16px
- Tablet: max-width 768px, padding 32px
- Desktop: max-width 1280px, padding 64px
- Centrado: automático

## Breakpoints

```typescript
// Breakpoints disponibles
spacing.breakpoints.mobile   // 375px
spacing.breakpoints.tablet   // 768px
spacing.breakpoints.desktop  // 1024px
```

### Uso en Tailwind

```html
<!-- Mobile first -->
<div class="text-sm mobile:text-base tablet:text-lg desktop:text-xl">
  Texto responsive
</div>

<!-- Media queries personalizadas -->
<div class="mobile:block tablet:hidden">
  Solo visible en mobile
</div>
```

## Espaciados Responsive

El SDK incluye utilidades CSS personalizadas para espaciados responsive:

### Page Padding

```html
<div class="page-padding">
  <!-- Padding automático según breakpoint:
       Mobile: 16px
       Tablet: 32px
       Desktop: 64px -->
</div>
```

### Section Gap

```html
<section class="section-gap">
  <!-- Margin-bottom automático:
       Mobile: 48px
       Tablet: 64px
       Desktop: 96px -->
</section>
```

### Card Padding

```html
<div class="card card-padding">
  <!-- Padding automático:
       Mobile: 16px
       Tablet: 24px
       Desktop: 32px -->
</div>
```

### Element Gap

```html
<div class="flex element-gap">
  <!-- Gap automático:
       Mobile: 12px
       Tablet: 16px
       Desktop: 24px -->
</div>
```

## Ejemplo Completo

```html
<div class="container page-padding">
  <section class="section-gap">
    <h1 class="text-4xl mb-lg">Título</h1>
    
    <div class="grid grid-cols-12 gap-grid">
      <div class="col-span-12 md:col-span-6">
        <div class="card card-padding">
          <p class="mb-base">Contenido con espaciado consistente</p>
        </div>
      </div>
      
      <div class="col-span-12 md:col-span-6">
        <div class="flex element-gap">
          <button>Botón 1</button>
          <button>Botón 2</button>
        </div>
      </div>
    </div>
  </section>
</div>
```

## Valores de Referencia

### Container

| Breakpoint | Max Width | Padding |
|------------|-----------|---------|
| Mobile     | 375px     | 16px    |
| Tablet     | 768px     | 32px    |
| Desktop    | 1280px    | 64px    |

### Espaciados Responsive

| Utilidad      | Mobile | Tablet | Desktop |
|---------------|--------|--------|---------|
| page-padding  | 16px   | 32px   | 64px    |
| section-gap   | 48px   | 64px   | 96px    |
| card-padding   | 16px   | 24px   | 32px    |
| element-gap    | 12px   | 16px   | 24px    |

## Mejores Prácticas

1. **Usa la escala de espaciado**: Siempre usa valores de la escala (xs, sm, md, base, lg, xl, 2xl, 3xl, 4xl)
2. **Container para contenido principal**: Usa `.container` para contenido centrado
3. **Grid de 12 columnas**: Usa `grid-cols-12` para layouts complejos
4. **Utilidades responsive**: Usa `page-padding`, `section-gap`, etc. para espaciados consistentes
5. **Mobile first**: Diseña primero para mobile, luego adapta a tablet y desktop

