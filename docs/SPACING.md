# Sistema de Espaciados - Guía Completa

## Introducción

El SDK de AI Lytics utiliza un sistema de espaciado basado en una escala de 4px, que garantiza consistencia visual en todos los componentes. Todos los márgenes, paddings y gaps deben usar estos tokens.

## Escala Base de Espaciado

La escala base sigue múltiplos de 4px:

| Token | Valor | Píxeles | Uso Recomendado |
|-------|-------|---------|-----------------|
| `xs` | `0.25rem` | 4px | Espacios muy pequeños, iconos cerca de texto |
| `sm` | `0.5rem` | 8px | Espacios entre elementos relacionados |
| `md` | `0.75rem` | 12px | Padding interno de componentes pequeños |
| `base` | `1rem` | 16px | Espaciado estándar entre elementos |
| `lg` | `1.5rem` | 24px | Separación entre grupos de elementos |
| `xl` | `2rem` | 32px | Espacios entre secciones menores |
| `2xl` | `3rem` | 48px | Separación entre secciones principales |
| `3xl` | `4rem` | 64px | Márgenes de página, espacios amplios |
| `4xl` | `6rem` | 96px | Espacios extra grandes, heroes |

## Uso en Tailwind CSS

### Padding

```html
<!-- Padding completo -->
<div class="p-xs">4px padding</div>
<div class="p-sm">8px padding</div>
<div class="p-base">16px padding</div>
<div class="p-lg">24px padding</div>
<div class="p-xl">32px padding</div>
<div class="p-2xl">48px padding</div>
<div class="p-3xl">64px padding</div>
<div class="p-4xl">96px padding</div>

<!-- Padding horizontal -->
<div class="px-base">16px horizontal</div>
<div class="px-lg">24px horizontal</div>

<!-- Padding vertical -->
<div class="py-base">16px vertical</div>
<div class="py-lg">24px vertical</div>

<!-- Padding individual -->
<div class="pt-base">16px top</div>
<div class="pr-base">16px right</div>
<div class="pb-base">16px bottom</div>
<div class="pl-base">16px left</div>
```

### Margin

```html
<!-- Margin completo -->
<div class="m-base">16px margin</div>
<div class="m-lg">24px margin</div>

<!-- Margin horizontal -->
<div class="mx-base">16px horizontal</div>
<div class="mx-lg">24px horizontal</div>

<!-- Margin vertical -->
<div class="my-base">16px vertical</div>
<div class="my-lg">24px vertical</div>

<!-- Margin individual -->
<div class="mt-base">16px top</div>
<div class="mr-base">16px right</div>
<div class="mb-base">16px bottom</div>
<div class="ml-base">16px left</div>
```

### Gap

```html
<!-- Gap en flexbox/grid -->
<div class="flex gap-xs">4px gap</div>
<div class="flex gap-sm">8px gap</div>
<div class="flex gap-base">16px gap</div>
<div class="flex gap-lg">24px gap</div>
<div class="grid gap-xl">32px gap</div>
```

## Utilidades Responsive

### Page Padding (Padding de Página)

Para contenedores principales y secciones de página:

```html
<div class="p-page-responsive">
  <!-- Mobile: 16px, Tablet: 32px, Desktop: 64px -->
</div>

<div class="px-page-responsive">
  <!-- Padding horizontal responsive -->
</div>

<div class="py-page-responsive">
  <!-- Padding vertical responsive -->
</div>
```

### Card Padding (Padding de Tarjetas)

Para componentes tipo card:

```html
<div class="p-card-responsive">
  <!-- Mobile: 16px, Tablet: 24px, Desktop: 32px -->
</div>

<div class="px-card-responsive">
  <!-- Padding horizontal responsive -->
</div>

<div class="py-card-responsive">
  <!-- Padding vertical responsive -->
</div>
```

### Element Gap (Gap entre Elementos)

Para espaciado entre elementos en flexbox/grid:

```html
<div class="flex gap-element-responsive">
  <!-- Mobile: 12px, Tablet: 16px, Desktop: 24px -->
</div>
```

### Section Margin (Márgenes entre Secciones)

Para separar secciones principales:

```html
<section class="mb-section-responsive">
  <!-- Margin-bottom: Mobile 48px, Tablet 64px, Desktop 96px -->
</section>

<section class="mt-section-responsive">
  <!-- Margin-top: Mobile 48px, Tablet 64px, Desktop 96px -->
</section>

<section class="my-section-responsive">
  <!-- Margin vertical: Mobile 48px, Tablet 64px, Desktop 96px -->
</section>

<section class="mx-section-responsive">
  <!-- Margin horizontal: Mobile 48px, Tablet 64px, Desktop 96px -->
</section>

<section class="m-section-responsive">
  <!-- Margin completo: Mobile 48px, Tablet 64px, Desktop 96px -->
</section>
```

## Valores Responsive Completos

| Utilidad | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| `p-page-responsive` | 16px | 32px | 64px |
| `p-card-responsive` | 16px | 24px | 32px |
| `gap-element-responsive` | 12px | 16px | 24px |
| `m-section-responsive` | 48px | 64px | 96px |
| `mb-section-responsive` | 48px | 64px | 96px |
| `mt-section-responsive` | 48px | 64px | 96px |

## Breakpoints

Los breakpoints utilizados son:

- **Mobile**: `< 768px`
- **Tablet**: `≥ 768px`
- **Desktop**: `≥ 1024px`

## Ejemplos de Uso

### Ejemplo 1: Card con Padding Responsive

```html
<div class="bg-white rounded-xl shadow-md">
  <div class="px-card-responsive py-card-responsive">
    <h3 class="text-xl font-bold mb-base">Título</h3>
    <p class="text-base mb-lg">Contenido de la tarjeta</p>
    <div class="flex gap-sm">
      <button>Acción 1</button>
      <button>Acción 2</button>
    </div>
  </div>
</div>
```

### Ejemplo 2: Layout con Secciones

```html
<div class="p-page-responsive">
  <section class="mb-section-responsive">
    <h1 class="text-4xl mb-lg">Título Principal</h1>
    <p class="text-base">Contenido de la sección</p>
  </section>
  
  <section class="mb-section-responsive">
    <h2 class="text-2xl mb-base">Subtítulo</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
      <div>Contenido 1</div>
      <div>Contenido 2</div>
    </div>
  </section>
</div>
```

### Ejemplo 3: Formulario con Espaciado Consistente

```html
<form class="space-y-lg">
  <div class="space-y-sm">
    <label class="block text-sm font-medium mb-xs">Email</label>
    <input class="w-full px-md py-md" type="email" />
  </div>
  
  <div class="space-y-sm">
    <label class="block text-sm font-medium mb-xs">Password</label>
    <input class="w-full px-md py-md" type="password" />
  </div>
  
  <div class="flex gap-sm justify-end pt-base">
    <button type="button">Cancelar</button>
    <button type="submit">Enviar</button>
  </div>
</form>
```

## Mejores Prácticas

### ✅ Hacer

1. **Usar siempre los tokens de spacing**: `p-base`, `m-lg`, `gap-sm`, etc.
2. **Usar utilidades responsive** para layouts y secciones principales
3. **Mantener consistencia**: usar el mismo token para elementos similares
4. **Seguir la escala**: usar múltiplos de 4px

### ❌ Evitar

1. **Valores hardcodeados**: No usar `p-6`, `m-4`, `gap-3` directamente
2. **Valores arbitrarios**: No usar `p-[13px]` o valores que no sigan la escala
3. **Mezclar sistemas**: No mezclar tokens con valores numéricos de Tailwind
4. **Espaciados inconsistentes**: No usar diferentes valores para elementos similares

## Mapeo de Componentes

Los componentes del SDK ya utilizan estos tokens:

- **Button**: `px-base`, `px-lg`, `px-xl` / `py-sm`, `py-md`
- **Input**: `px-md`, `py-md`
- **Badge**: `px-sm`, `px-2.5` / `py-xs`, `py-0.5`
- **Card**: `px-card-responsive`, `py-card-responsive`
- **Navigation**: `px-base`, `py-sm`, `gap-xs`, `gap-sm`
- **DataTable**: `px-xl`, `py-md`, `py-base`

## Acceso Programático

```typescript
import { spacing } from 'ai-lytics-styleguide';

// Escala base
spacing.scale.xs    // '0.25rem'
spacing.scale.base  // '1rem'
spacing.scale.lg    // '1.5rem'

// Valores responsive
spacing.responsive.pagePadding.mobile   // '1rem'
spacing.responsive.pagePadding.desktop  // '4rem'
spacing.responsive.cardPadding.tablet   // '1.5rem'
spacing.responsive.sectionGap.desktop   // '6rem'
```

## Grid System

El sistema de grilla utiliza un gap de 24px (`gap-lg`):

```html
<div class="grid grid-cols-12 gap-lg">
  <div class="col-span-12 md:col-span-6 lg:col-span-4">Columna 1</div>
  <div class="col-span-12 md:col-span-6 lg:col-span-4">Columna 2</div>
  <div class="col-span-12 md:col-span-12 lg:col-span-4">Columna 3</div>
</div>
```

## Container

El container tiene padding responsive automático:

```html
<div class="container">
  <!-- Padding automático: Mobile 16px, Tablet 32px, Desktop 64px -->
</div>
```

