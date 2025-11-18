# Componentes - Documentación

## Atoms

### Button

Componente de botón con múltiples variantes, tamaños y estados.

**Variantes:**
- `primary`: Botón principal (Teal #14b8a6)
- `secondary`: Botón secundario (Azul #1e40af)
- `outline`: Botón con borde
- `ghost`: Botón sin fondo

**Tamaños:**
- `sm`: Pequeño (px-4 py-2 text-sm)
- `md`: Mediano (px-5 py-2.5 text-base)
- `lg`: Grande (px-6 py-3 text-lg)

**Estados:**
- `default`: Estado normal
- `hover`: Efecto hover automático
- `disabled`: Deshabilitado
- `loading`: Estado de carga con spinner

### Input

Campo de entrada de texto con estados de validación.

**Tipos:**
- `text`, `email`, `password`, `number`, `tel`, `url`

**Estados:**
- `default`: Estado normal
- `error`: Estado de error (borde rojo)
- `success`: Estado de éxito (borde verde)

### Icon

Wrapper para iconos SVG de Flaticon uicons.

**Tamaños:**
- `xs`: 12px
- `sm`: 16px
- `md`: 24px
- `lg`: 32px
- `xl`: 48px

### Avatar

Avatar de usuario con soporte para TITA assistant.

**Variantes:**
- `default`: Avatar estándar
- `tita`: Avatar del asistente TITA con expresiones

**Expresiones TITA:**
- `happy`, `relaxed`, `stars`, `surprised`, `sad`

### Badge

Indicador pequeño para estados o etiquetas.

**Variantes:**
- `default`: Gris
- `primary`: Teal
- `success`: Verde
- `warning`: Amarillo
- `error`: Rojo
- `info`: Azul

### Typography

Componentes de texto siguiendo la escala tipográfica.

**Variantes:**
- `display`: text-6xl font-bold
- `h1`: text-4xl font-bold
- `h2`: text-3xl font-semibold
- `h3`: text-2xl font-semibold
- `h4`: text-xl font-medium
- `body`: text-base font-normal
- `small`: text-sm font-normal
- `caption`: text-xs font-normal

## Molecules

### SearchInput

Input con icono de búsqueda integrado.

### FormField

Input completo con label, validación y mensajes de error/ayuda.

### ButtonGroup

Agrupación de botones con orientación horizontal o vertical.

### Card Parts

Componentes composables para Card:
- `CardHeader`: Encabezado de tarjeta
- `CardBody`: Cuerpo de tarjeta
- `CardFooter`: Pie de tarjeta

## Organisms

### Card

Tarjeta composable con Header, Body, Footer, Actions e Image.

**Variantes:**
- `default`: Tarjeta estándar con borde
- `highlighted`: Tarjeta con gradiente hero

### Form

Formulario completo con validación visual y manejo de datos.

### Navigation

Navegación principal con estados activos y soporte para iconos.

**Orientaciones:**
- `horizontal`: Navegación horizontal
- `vertical`: Navegación vertical (sidebar)

### DataTable

Tabla de datos con estilos, filas alternadas y hover.

## Templates

### DashboardLayout

Layout base para dashboards con sidebar, header y footer opcionales.

