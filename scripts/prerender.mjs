import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist-ssr/entry-server.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(projectRoot, 'dist');
const serverOutputDirectory = path.join(projectRoot, 'dist-ssr');
const template = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');

const publicRoutes = [
  '/',
  '/debt-solutions',
  '/loans',
  '/business-setup',
  '/legal-assistance',
  '/investments',
  '/book-consultation',
  '/about-us',
  '/blogs',
  '/blogs/breaking-debt-cycle-financial-advisory',
  '/blogs/uae-pdpl-asset-protection',
  '/blogs/debt-restructuring-dubai',
  '/blogs/mainland-vs-economic-zone-setup',
  '/privacy',
  '/terms',
  '/disclaimer',
];

function assemblePage(head, html) {
  return template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);
}

for (const route of publicRoutes) {
  const { head, html } = await render(route);
  const routeDirectory = route === '/'
    ? outputDirectory
    : path.join(outputDirectory, ...route.slice(1).split('/'));

  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, 'index.html'), assemblePage(head, html));
}

const notFound = await render('/404');
await writeFile(
  path.join(outputDirectory, '404.html'),
  assemblePage(notFound.head, notFound.html),
);

const privateAppShell = template
  .replace('<!--app-head-->', '<meta name="robots" content="noindex, nofollow, noarchive">')
  .replace('<!--app-html-->', '');
await writeFile(path.join(outputDirectory, 'spa.html'), privateAppShell);

await rm(serverOutputDirectory, { recursive: true, force: true });

console.log(`Pre-rendered ${publicRoutes.length} public routes and a custom 404 page.`);
