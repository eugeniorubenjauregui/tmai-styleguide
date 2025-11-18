#!/usr/bin/env node

/**
 * Pre-publish script
 * Validates that the package is ready for publishing
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating package for publishing...\n');

// Check if dist directory exists
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ Error: dist/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Check if dist/index.js exists
const indexJsPath = path.join(distPath, 'index.js');
if (!fs.existsSync(indexJsPath)) {
  console.error('❌ Error: dist/index.js does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Check if dist/index.d.ts exists
const indexDtsPath = path.join(distPath, 'index.d.ts');
if (!fs.existsSync(indexDtsPath)) {
  console.error('❌ Error: dist/index.d.ts does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Check if dist/styles.css exists
const stylesPath = path.join(distPath, 'styles.css');
if (!fs.existsSync(stylesPath)) {
  console.error('❌ Error: dist/styles.css does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Check package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

if (!packageJson.name) {
  console.error('❌ Error: package.json missing "name" field.');
  process.exit(1);
}

if (!packageJson.version) {
  console.error('❌ Error: package.json missing "version" field.');
  process.exit(1);
}

if (!packageJson.main) {
  console.error('❌ Error: package.json missing "main" field.');
  process.exit(1);
}

if (!packageJson.types) {
  console.error('❌ Error: package.json missing "types" field.');
  process.exit(1);
}

console.log('✅ All checks passed!');
console.log(`📦 Package: ${packageJson.name}`);
console.log(`📌 Version: ${packageJson.version}`);
console.log(`\n✨ Ready to publish!\n`);

