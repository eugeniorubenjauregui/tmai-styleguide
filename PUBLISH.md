# 🚀 Guía Rápida de Publicación a NPM

## Pasos Rápidos

### 1. Preparación Inicial (Solo la primera vez)

```bash
# Iniciar sesión en npm
npm login

# Verificar que estás logueado
npm whoami
```

### 2. Publicar

**Opción A: Script Automático (Recomendado)**

```bash
# Publicar con versión patch (1.0.0 -> 1.0.1)
./scripts/publish.sh patch

# O con versión minor (1.0.0 -> 1.1.0)
./scripts/publish.sh minor

# O con versión major (1.0.0 -> 2.0.0)
./scripts/publish.sh major
```

**Opción B: Manual**

```bash
# 1. Build
npm run build

# 2. Verificar
npm run prepublish

# 3. Dry run (opcional)
npm run publish:dry-run

# 4. Publicar
npm publish --access public
```

**Opción C: Con actualización de versión**

```bash
# Actualizar versión
npm version patch   # o minor, major

# Build y publicar
npm run build
npm publish --access public
```

## ⚠️ Importante

- **Scoped packages**: El flag `--access public` es **obligatorio** para paquetes con scope (`@ai-lytics/`)
- **Primera publicación**: npm creará automáticamente el scope `@ai-lytics` si no existe
- **Versiones**: Una vez publicada, una versión no puede ser modificada

## ✅ Checklist Pre-Publicación

- [ ] Logueado en npm (`npm whoami`)
- [ ] Build ejecutado (`npm run build`)
- [ ] Versión actualizada en `package.json`
- [ ] README.md actualizado
- [ ] Dry-run ejecutado sin errores

## 🔍 Verificar Publicación

```bash
# Ver información del paquete
npm view ai-lytics-styleguide

# Probar instalación
npm install ai-lytics-styleguide
```

## 📚 Documentación Completa

Para más detalles, consulta [DEPLOY.md](./DEPLOY.md)

