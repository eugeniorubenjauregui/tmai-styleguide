# Guía de Despliegue a NPM

Esta guía te ayudará a publicar el SDK de AI Lytics Styleguide en npm.

## Prerrequisitos

1. **Cuenta de npm**: Crea una cuenta en [npmjs.com](https://www.npmjs.com/)
2. **Iniciar sesión en npm**: 
   ```bash
   npm login
   ```
3. **Verificar que estás logueado**:
   ```bash
   npm whoami
   ```

## Preparación

### 1. Verificar package.json

Asegúrate de que el `package.json` tenga:
- ✅ Nombre del paquete correcto: `@ai-lytics/styleguide`
- ✅ Versión actualizada
- ✅ Descripción clara
- ✅ Repository URL (si aplica)
- ✅ Licencia (MIT)

### 2. Build del Proyecto

Compila el proyecto antes de publicar:

```bash
npm run build
```

Esto generará:
- `dist/index.js` - Código JavaScript compilado
- `dist/index.d.ts` - Definiciones de tipos TypeScript
- `dist/styles.css` - Estilos CSS compilados

### 3. Verificar el Build

Verifica que todos los archivos necesarios estén en `dist/`:

```bash
ls -la dist/
```

Deberías ver:
- `index.js`
- `index.d.ts`
- `styles.css`
- Y otros archivos compilados

### 4. Dry Run (Prueba sin publicar)

Ejecuta una prueba sin publicar realmente:

```bash
npm run publish:dry-run
```

Esto te mostrará qué archivos se incluirían en el paquete.

## Publicación

### Opción 1: Publicación Pública (Recomendado)

```bash
npm publish --access public
```

El flag `--access public` es necesario porque el paquete tiene scope (`@ai-lytics/`).

### Opción 2: Publicación con Verificación

```bash
# 1. Build
npm run build

# 2. Verificar
npm run prepublish

# 3. Publicar
npm publish --access public
```

### Opción 3: Publicar una Versión Específica

Si quieres publicar una versión específica:

```bash
# Actualizar versión en package.json manualmente o usar:
npm version patch   # 1.0.0 -> 1.0.1
npm version minor    # 1.0.0 -> 1.1.0
npm version major    # 1.0.0 -> 2.0.0

# Luego publicar
npm publish --access public
```

## Verificación Post-Publicación

1. **Verificar en npm**:
   Visita: `https://www.npmjs.com/package/@ai-lytics/styleguide`

2. **Probar instalación**:
   ```bash
   npm install @ai-lytics/styleguide
   ```

3. **Verificar contenido**:
   ```bash
   cd node_modules/@ai-lytics/styleguide
   ls -la
   ```

## Actualizar Versión

Para publicar una nueva versión:

```bash
# 1. Actualizar versión
npm version patch   # o minor, major

# 2. Build
npm run build

# 3. Publicar
npm publish --access public

# 4. (Opcional) Crear tag de git
git push && git push --tags
```

## Troubleshooting

### Error: "You must verify your email before publishing packages"

Solución: Verifica tu email en npmjs.com

### Error: "Package name already exists"

Solución: 
- Si es tu paquete, actualiza la versión
- Si no es tu paquete, cambia el nombre en package.json

### Error: "You do not have permission to publish"

Solución:
- Verifica que estés logueado: `npm whoami`
- Verifica que tengas permisos en el scope `@ai-lytics`
- Si es un scope nuevo, npm lo creará automáticamente

### Error: "dist/ directory not found"

Solución:
```bash
npm run build
```

## Checklist Pre-Publicación

- [ ] Build ejecutado exitosamente (`npm run build`)
- [ ] Todos los archivos en `dist/` están presentes
- [ ] Versión actualizada en `package.json`
- [ ] README.md actualizado
- [ ] Licencia especificada
- [ ] Dry run ejecutado sin errores
- [ ] Logueado en npm (`npm whoami`)
- [ ] Pruebas locales funcionando

## Comandos Útiles

```bash
# Ver información del paquete
npm view @ai-lytics/styleguide

# Ver versiones publicadas
npm view @ai-lytics/styleguide versions

# Despublicar (solo dentro de 72 horas)
npm unpublish @ai-lytics/styleguide@1.0.0

# Ver qué archivos se publicarán
npm pack --dry-run
```

## Notas Importantes

1. **Scoped Packages**: Los paquetes con scope (`@ai-lytics/`) requieren `--access public` la primera vez
2. **Versiones**: Una vez publicada, una versión no puede ser modificada
3. **Unpublish**: Solo puedes despublicar dentro de 72 horas
4. **Build**: Siempre ejecuta `npm run build` antes de publicar

## Siguiente Paso

Después de publicar, actualiza la documentación con el link de npm:
```
npm install @ai-lytics/styleguide
```

