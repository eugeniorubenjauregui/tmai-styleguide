# AI Lytics Styleguide SDK

[![CI](https://github.com/eugeniorubenjauregui/tmai-styleguide/actions/workflows/ci.yml/badge.svg)](https://github.com/eugeniorubenjauregui/tmai-styleguide/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/ai-lytics-styleguide.svg)](https://www.npmjs.com/package/ai-lytics-styleguide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)

SDK completo de styleguide para AI Lytics - Sistema de diseño modular basado en Atomic Design con TypeScript y Tailwind CSS.

**Desarrollado por [Tita Media](https://github.com/eugeniorubenjauregui)**

## Características

- 🎨 **Design Tokens**: Sistema completo de tokens (colores, tipografía, espaciado, sombras)
- 🧩 **Componentes Atómicos**: Button, Input, Icon, Avatar, Badge, Typography
- 🔗 **Componentes Moleculares**: SearchInput, FormField, ButtonGroup, Card parts
- 🏗️ **Componentes Organismos**: Card, Form, Navigation, DataTable
- 📐 **Templates**: DashboardLayout
- 🔄 **Sistema de Versiones**: Permite múltiples versiones de tokens
- 📦 **TypeScript**: Tipado completo y estricto
- 🎯 **Tailwind CSS**: Configuración personalizada con tokens
- 📚 **Documentación Interactiva**: Página de documentación completa con ejemplos
- 👀 **Preview Interactivo**: Aplicación de preview para probar componentes en tiempo real

## 📚 Documentación y Preview

- **[🌐 Preview Interactivo (GitHub Pages)](https://eugeniorubenjauregui.github.io/tmai-styleguide/preview/index.html)** - Aplicación de preview para probar componentes en tiempo real
- **[📖 Documentación Completa (GitHub Pages)](https://eugeniorubenjauregui.github.io/tmai-styleguide/docs/index.html)** - Página de documentación con todos los componentes y tokens
- **[Guía de Uso](./docs/GUIDE.md)** - Guía completa de instalación y uso
- **[Documentación de Componentes](./docs/components.md)** - Detalles de cada componente
- **[Documentación de Tokens](./docs/tokens.md)** - Referencia completa de design tokens
- **[Sistema de Espaciados](./docs/SPACING.md)** - Guía completa del sistema de espaciados

## Instalación

```bash
npm install ai-lytics-styleguide
```

## Uso Básico

### Importar estilos

```typescript
import 'ai-lytics-styleguide/dist/styles.css';
```

### Usar componentes

```typescript
import { Button, Input, Card, Typography } from 'ai-lytics-styleguide';

function App() {
  return (
    <div>
      <Typography variant="h1">Bienvenido a AI Lytics</Typography>
      <Button variant="primary" size="md">
        Click me
      </Button>
      <Input placeholder="Escribe aquí..." />
    </div>
  );
}
```

### Usar tokens

```typescript
import { tokens, colors, typography, spacing } from 'ai-lytics-styleguide';

console.log(colors.semantic.brand.primary); // #14b8a6
console.log(typography.scale.h1.fontSize); // 2.25rem
console.log(spacing.scale.lg); // 1.5rem
```

### Sistema de Versiones

```typescript
import { versionManager, getCurrentTokens } from 'ai-lytics-styleguide';

// Obtener tokens de una versión específica
const v1Tokens = versionManager.getTokens('v1');

// Cambiar versión actual
versionManager.setCurrentVersion('v2');

// Obtener tokens de la versión actual
const currentTokens = getCurrentTokens();
```

## Componentes

### Atoms

#### Button

```typescript
import { Button } from 'ai-lytics-styleguide';

<Button variant="primary" size="md" onClick={handleClick}>
  Enviar
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'`
- `size`: `'sm' | 'md' | 'lg'`
- `disabled`: `boolean`
- `loading`: `boolean`
- `icon`: `React.ReactNode`
- `iconPosition`: `'left' | 'right'`

#### Input

```typescript
import { Input } from 'ai-lytics-styleguide';

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

#### Icon

```typescript
import { Icon } from 'ai-lytics-styleguide';

<Icon size="md" color="#14b8a6">
  <path d="M12 2L2 7l10 5 10-5-10-5z" />
</Icon>
```

#### Avatar

```typescript
import { Avatar } from 'ai-lytics-styleguide';

<Avatar
  src="/avatar.jpg"
  size="md"
  variant="default"
/>

<Avatar
  variant="tita"
  size="lg"
  titaExpression="happy"
/>
```

#### Badge

```typescript
import { Badge } from 'ai-lytics-styleguide';

<Badge variant="primary" size="md">
  Nuevo
</Badge>
```

#### Typography

```typescript
import { H1, H2, Body, Typography } from 'ai-lytics-styleguide';

<H1>Título Principal</H1>
<H2>Subtítulo</H2>
<Body>Texto de cuerpo</Body>

<Typography variant="display">Display Text</Typography>
```

### Molecules

#### SearchInput

```typescript
import { SearchInput } from 'ai-lytics-styleguide';

<SearchInput
  placeholder="Buscar..."
  iconPosition="left"
  onChange={handleSearch}
/>
```

#### FormField

```typescript
import { FormField } from 'ai-lytics-styleguide';

<FormField
  label="Email"
  name="email"
  type="email"
  required
  error="Email inválido"
  helpText="Ingresa tu email"
/>
```

#### ButtonGroup

```typescript
import { ButtonGroup } from 'ai-lytics-styleguide';

<ButtonGroup
  buttons={[
    { children: 'Cancel', variant: 'ghost' },
    { children: 'Save', variant: 'primary' },
  ]}
  orientation="horizontal"
/>
```

### Organisms

#### Card

```typescript
import { Card } from 'ai-lytics-styleguide';

<Card variant="default" shadow>
  <Card.Image src="/image.jpg" alt="Card image" />
  <Card.Header>
    <Typography variant="h3">Título de la tarjeta</Typography>
  </Card.Header>
  <Card.Body>
    <Body>Contenido de la tarjeta</Body>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Acción</Button>
  </Card.Footer>
</Card>
```

#### Form

```typescript
import { Form } from 'ai-lytics-styleguide';

<Form
  fields={[
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      id: 'password',
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      required: true,
    },
  ]}
  submitButton={{ children: 'Enviar', variant: 'primary' }}
  onSubmit={(data) => console.log(data)}
/>
```

#### Navigation

```typescript
import { Navigation } from 'ai-lytics-styleguide';

<Navigation
  items={[
    { label: 'Inicio', href: '/', active: true },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Configuración', href: '/settings' },
  ]}
  orientation="horizontal"
/>
```

#### DataTable

```typescript
import { DataTable } from 'ai-lytics-styleguide';

<DataTable
  columns={[
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Rol' },
  ]}
  data={[
    { name: 'Juan', email: 'juan@example.com', role: 'Admin' },
    { name: 'María', email: 'maria@example.com', role: 'User' },
  ]}
  striped
  hover
/>
```

### Templates

#### DashboardLayout

```typescript
import { DashboardLayout } from 'ai-lytics-styleguide';

<DashboardLayout
  sidebarItems={[
    { label: 'Dashboard', href: '/', active: true },
    { label: 'Analytics', href: '/analytics' },
  ]}
  topNavItems={[
    { label: 'Perfil', href: '/profile' },
    { label: 'Configuración', href: '/settings' },
  ]}
>
  <div>Contenido principal</div>
</DashboardLayout>
```

## Configuración de Tailwind

El SDK incluye una configuración de Tailwind personalizada. Para usarla en tu proyecto:

```javascript
// tailwind.config.js
const styleguideConfig = require('ai-lytics-styleguide/src/config/tailwind.config.ts');

module.exports = {
  ...styleguideConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/ai-lytics-styleguide/dist/**/*.js',
  ],
};
```

## Design Tokens

### Colores

```typescript
import { colors } from 'ai-lytics-styleguide';

// Primitivos
colors.primitives.teal[500]; // #14b8a6
colors.primitives.blue[700]; // #1e40af

// Semánticos
colors.semantic.brand.primary; // #14b8a6
colors.semantic.text.primary; // #0f172a
colors.semantic.feedback.error; // #dc2626

// Gradientes
colors.gradients.hero; // linear-gradient(...)
```

### Tipografía

```typescript
import { typography } from 'ai-lytics-styleguide';

typography.fontFamily.primary; // 'Inter'
typography.fontSize.xl; // '1.25rem'
typography.fontWeight.bold; // 700
typography.scale.h1.fontSize; // '2.25rem'
```

### Espaciado

```typescript
import { spacing } from 'ai-lytics-styleguide';

spacing.scale.xs; // '0.25rem' (4px)
spacing.scale.lg; // '1.5rem' (24px)
spacing.scale['4xl']; // '6rem' (96px)
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Compilar
npm run build

# Modo desarrollo (watch)
npm run dev

# Verificar tipos
npm run type-check
```

## Estructura del Proyecto

```
ia-styleguide/
├── src/
│   ├── tokens/          # Design tokens
│   ├── config/          # Configuraciones (Tailwind, versiones)
│   ├── atoms/           # Componentes atómicos
│   ├── molecules/       # Componentes moleculares
│   ├── organisms/       # Componentes organismos
│   ├── templates/       # Layouts estructurales
│   ├── utils/           # Utilidades
│   └── index.ts         # Export principal
├── dist/                # Build output
└── package.json
```

## Licencia

MIT

## Autor

**Tita Media**

Desarrollado con ❤️ por Tita Media

