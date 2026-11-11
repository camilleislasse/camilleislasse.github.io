import { readFile } from 'node:fs/promises';

const PDF = 'dist/cv-camille-islasse.pdf';
const MAX_PAGES = 1;

const pdf = await readFile(PDF, 'latin1');
const pages = pdf.match(/\/Type\s*\/Page(?!s)/g)?.length ?? 0;

if (pages > MAX_PAGES) {
  console.error(`${PDF} fait ${pages} pages (max ${MAX_PAGES}) : réduire le contenu ou les espacements de /cv.`);
  process.exit(1);
}

console.log(`${PDF} : ${pages} page(s)`);
