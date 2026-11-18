import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(projectRoot, 'dist');
const builtHtmlPath = join(distDir, 'index.html');

const asDataUrl = async (relativePath, mimeType) => {
  const bytes = await readFile(join(distDir, relativePath));
  return `data:${mimeType};base64,${bytes.toString('base64')}`;
};

const generatedHtml = await readFile(builtHtmlPath, 'utf8');
// The project-root index uses this redirect only when opened directly. Remove
// it from the standalone destination itself to avoid a self-redirect loop.
const builtHtml = generatedHtml.replace(
  /\s*<script id="offline-entry-redirect">[\s\S]*?<\/script>/,
  '',
).replace(
  /\s*<p id="offline-entry-fallback"[\s\S]*?<\/p>/,
  '',
);
const scriptMatch = builtHtml.match(/<script[^>]+src="([^"]+)"[^>]*><\/script>/);
const styleMatch = builtHtml.match(/<link[^>]+href="([^"]+\.css)"[^>]*>/);

if (!scriptMatch || !styleMatch) {
  throw new Error('Could not find the generated JavaScript and CSS files in dist/index.html.');
}

const resolveBuiltAsset = (url) => join(distDir, url.replace(/^\.\//, '').replace(/^\//, ''));
let javascript = await readFile(resolveBuiltAsset(scriptMatch[1]), 'utf8');
let stylesheet = await readFile(resolveBuiltAsset(styleMatch[1]), 'utf8');

const embeddedAssets = {
  '/brand/primary-logo-full.svg': await asDataUrl('brand/primary-logo-full.svg', 'image/svg+xml'),
  '/fonts/Elza-Medium.woff': await asDataUrl('fonts/Elza-Medium.woff', 'font/woff'),
  '/fonts/Elza-MediumOblique.woff': await asDataUrl('fonts/Elza-MediumOblique.woff', 'font/woff'),
  '/fonts/Elza-Semibold.woff': await asDataUrl('fonts/Elza-Semibold.woff', 'font/woff'),
  '/fonts/Elza-SemiboldOblique.woff': await asDataUrl('fonts/Elza-SemiboldOblique.woff', 'font/woff'),
};

for (const [assetPath, dataUrl] of Object.entries(embeddedAssets)) {
  const escapedPath = assetPath.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const assetReference = new RegExp(`(?:\\.\\./|\\./|/)${escapedPath}`, 'g');
  javascript = javascript.replace(assetReference, dataUrl);
  stylesheet = stylesheet.replace(assetReference, dataUrl);
}

// Prevent embedded source text from accidentally closing its containing element.
javascript = javascript.replaceAll('</script', '<\\/script');
stylesheet = stylesheet.replaceAll('</style', '<\\/style');

const standaloneHtml = builtHtml
  // Function replacers keep `$&`, `$'`, and similar source-code sequences literal.
  // Vite's production bundle is self-contained, so a classic inline script avoids
  // file:// module-origin restrictions in browsers when the HTML is double-clicked.
  // Remove it from Vite's module position in <head>, then place it after #root.
  // Inline classic scripts do not honor `defer`, so keeping it in <head> causes
  // React createRoot() to run before the container exists (React error #299).
  .replace(scriptMatch[0], '')
  .replace(styleMatch[0], () => `<style>${stylesheet}</style>`)
  .replace('</body>', () => `<script>${javascript}</script>\n  </body>`)
  .replace(
    '</head>',
    '    <!-- Self-contained offline build: scripts, styles, fonts, and brand assets are embedded. -->\n  </head>',
  );

const standaloneName = 'Eftson Design System.html';
await Promise.all([
  writeFile(builtHtmlPath, standaloneHtml),
  writeFile(join(distDir, standaloneName), standaloneHtml),
  writeFile(join(projectRoot, standaloneName), standaloneHtml),
]);

const megabytes = (Buffer.byteLength(standaloneHtml) / 1024 / 1024).toFixed(2);
console.log(`Created standalone offline HTML (${megabytes} MB):`);
console.log(`- ${join(projectRoot, standaloneName)}`);
console.log(`- ${join(distDir, standaloneName)}`);
