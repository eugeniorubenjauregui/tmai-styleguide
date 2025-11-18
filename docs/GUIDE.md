# Guía de Uso - AI Lytics Styleguide

## Instalación

```bash
npm install ai-lytics-styleguide
```

## Configuración Inicial

### 1. Importar Estilos

En tu archivo principal (index.js o App.js):

```typescript
import 'ai-lytics-styleguide/dist/styles.css';
```

### 2. Configurar Tailwind CSS

Si usas Tailwind CSS en tu proyecto, extiende la configuración del styleguide:

```javascript
// tailwind.config.js
const styleguideConfig = require('ai-lytics-styleguide/tailwind.config.js');

module.exports = {
  ...styleguideConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/ai-lytics-styleguide/dist/**/*.js',
  ],
};
```

## Uso Básico

### Importar Componentes

```typescript
import { Button, Input, Card, Typography } from 'ai-lytics-styleguide';
```

### Ejemplo Completo

```tsx
import React from 'react';
import { Button, Input, Card, Typography } from 'ai-lytics-styleguide';
import 'ai-lytics-styleguide/dist/styles.css';

function App() {
  const [value, setValue] = React.useState('');
  
  return (
    <div className="p-8">
      <Typography variant="h1">Bienvenido</Typography>
      
      <Card>
        <Card.Header>
          <Typography variant="h3">Formulario</Typography>
        </Card.Header>
        <Card.Body>
          <Input
            placeholder="Escribe aquí..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => console.log(value)}>
            Enviar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
```

## Componentes Principales

### Button

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: `boolean`
- `loading`: `boolean`
- `icon`: `React.ReactNode`
- `iconPosition`: `'left' | 'right'`

### Input

```tsx
<Input
  type="text"
  placeholder="Escribe aquí..."
  state="default"
  onChange={handleChange}
/>
```

**Props:**
- `type`: `'text' | 'email' | 'password' | 'number' | 'tel' | 'url'`
- `state`: `'default' | 'error' | 'success'`
- `disabled`: `boolean`
- `required`: `boolean`

### Card

```tsx
<Card variant="default" shadow>
  <Card.Header>
    <Typography variant="h3">Título</Typography>
  </Card.Header>
  <Card.Body>
    <Typography variant="body">Contenido</Typography>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Acción</Button>
  </Card.Footer>
</Card>
```

### FormField

```tsx
<FormField
  label="Email"
  name="email"
  type="email"
  required
  error="Email inválido"
  helpText="Ingresa tu email"
/>
```

### Navigation

```tsx
<Navigation
  items={[
    { label: 'Inicio', href: '/', active: true },
    { label: 'Dashboard', href: '/dashboard' },
  ]}
  orientation="horizontal"
/>
```

### DataTable

```tsx
<DataTable
  columns={[
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Email' },
  ]}
  data={[
    { name: 'Juan', email: 'juan@example.com' },
  ]}
  striped
  hover
/>
```

## Design Tokens

### Acceder a Tokens

```typescript
import { colors, typography, spacing, shadows } from 'ai-lytics-styleguide';

// Colores
const primaryColor = colors.semantic.brand.primary; // #14b8a6

// Tipografía
const h1Size = typography.scale.h1.fontSize; // 2.25rem

// Espaciado
const largeSpacing = spacing.scale.lg; // 1.5rem

// Sombras
const mediumShadow = shadows.md;
```

### Usar en CSS/SCSS

```css
.custom-element {
  color: var(--brand-primary);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
}
```

## Sistema de Versiones

```typescript
import { versionManager, getCurrentTokens } from 'ai-lytics-styleguide';

// Obtener tokens de una versión específica
const v1Tokens = versionManager.getTokens('v1');

// Cambiar versión actual
versionManager.setCurrentVersion('v2');

// Registrar nueva versión
versionManager.register('v2', newTokens);

// Obtener tokens actuales
const currentTokens = getCurrentTokens();
```

## Mejores Prácticas

### 1. Consistencia

- Usa siempre los componentes del styleguide en lugar de crear estilos personalizados
- Sigue la escala tipográfica definida
- Usa los espaciados del sistema (múltiplos de 4px)

### 2. Accesibilidad

- Todos los botones deben tener texto descriptivo
- Los inputs deben tener labels asociados
- Usa FormField en lugar de Input cuando necesites validación

### 3. Performance

- Importa solo los componentes que necesitas
- Usa lazy loading para componentes pesados
- Evita crear múltiples instancias del mismo componente

### 4. Composición

- Combina componentes pequeños para crear interfaces complejas
- Usa Card.Header, Card.Body, Card.Footer para estructurar contenido
- Prefiere composición sobre personalización

## Troubleshooting

### Los estilos no se aplican

1. Verifica que importaste el CSS: `import 'ai-lytics-styleguide/dist/styles.css'`
2. Asegúrate de que Tailwind está configurado correctamente
3. Verifica que las clases de Tailwind están siendo procesadas

### Los componentes no se renderizan

1. Verifica que React está instalado como peer dependency
2. Asegúrate de que estás usando React 18+
3. Revisa la consola del navegador para errores

### Los tokens no están disponibles

1. Verifica que el build se ejecutó correctamente: `npm run build`
2. Asegúrate de importar desde el paquete correcto
3. Verifica que la versión de tokens está registrada

## Recursos Adicionales

- [Documentación de Componentes](./components.md)
- [Documentación de Tokens](./tokens.md)
- [Página de Preview](../preview/index.html)
- [Ejemplos de Código](../examples/)

