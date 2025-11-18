#!/bin/bash

# Script de publicación a NPM
# Uso: ./scripts/publish.sh [patch|minor|major]

set -e

echo "🚀 Iniciando proceso de publicación a NPM...\n"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
  echo "❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
  exit 1
fi

# Verificar que npm está instalado
if ! command -v npm &> /dev/null; then
  echo "❌ Error: npm no está instalado."
  exit 1
fi

# Verificar que estamos logueados en npm
if ! npm whoami &> /dev/null; then
  echo "⚠️  No estás logueado en npm. Ejecuta: npm login"
  exit 1
fi

echo "✅ Verificaciones básicas completadas\n"

# Si se proporciona un argumento, actualizar versión
if [ "$1" != "" ]; then
  echo "📌 Actualizando versión: $1"
  npm version $1 --no-git-tag-version
  echo "✅ Versión actualizada\n"
fi

# Build
echo "🔨 Compilando proyecto..."
npm run build
echo "✅ Build completado\n"

# Verificar build
echo "🔍 Verificando build..."
npm run prepublish
echo "✅ Verificación completada\n"

# Dry run
echo "🧪 Ejecutando dry-run..."
npm publish --dry-run --access public
echo "✅ Dry-run completado\n"

# Preguntar confirmación
read -p "¿Deseas publicar el paquete a NPM? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "❌ Publicación cancelada"
  exit 1
fi

# Publicar
echo "📦 Publicando a NPM..."
npm publish --access public

echo "\n✅ ¡Publicación exitosa!"
echo "📦 Paquete: @ai-lytics/styleguide"
echo "🌐 Ver en: https://www.npmjs.com/package/@ai-lytics/styleguide"

