import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Aquest és el directori arrel del projecte que vols vigilar
const projectRoot = __dirname; // Ajusta-ho si el teu script no està a l'arrel

// Aquest és el directori destí on vols copiar els fitxers
const destDir = path.join('/users', 'Jordi', 'Documents', 'z', 'copy-to-z');

// Funció per copiar fitxers
function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} to ${dest}`);
}

// Funció per vigilar i copiar fitxers
function watchAndCopy(dir) {
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    
    const srcPath = path.join(dir, filename);
    if (!fs.existsSync(srcPath)) return; // Ignora si el fitxer ha estat eliminat

    const relativePath = path.relative(projectRoot, srcPath);
    const destPath = path.join(destDir, relativePath);

    copyFile(srcPath, destPath);
  });
}

// Inicia la vigilància
watchAndCopy(projectRoot);
