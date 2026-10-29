import { copyFile } from 'node:fs/promises';
import { preview } from 'astro';
import { chromium } from 'playwright';

const OUTPUT = 'dist/cv-camille-islasse.pdf';
const DEV_COPY = 'public/cv-camille-islasse.pdf';

const server = await preview({ logLevel: 'error' });
const browser = await chromium.launch();

try {
  const page = await browser.newPage();
  const response = await page.goto(`http://localhost:${server.port}/cv/`, {
    waitUntil: 'networkidle',
  });

  if (!response?.ok()) {
    throw new Error(`/cv/ a répondu ${response?.status()}`);
  }

  await page.waitForFunction(
    () => Array.from(document.images).every((img) => img.complete && img.naturalWidth > 0),
    undefined,
    { timeout: 10000 },
  );

  await page.pdf({
    path: OUTPUT,
    preferCSSPageSize: true,
    printBackground: true,
  });

  await copyFile(OUTPUT, DEV_COPY);

  console.log(`PDF généré : ${OUTPUT} (copié dans ${DEV_COPY} pour le serveur de dev)`);
} finally {
  await browser.close();
  await server.stop();
}
