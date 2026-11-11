const { readdirSync, readFileSync } = require('node:fs');

const urls = readdirSync('dist')
  .filter((file) => /^sitemap-\d+\.xml$/.test(file))
  .flatMap((file) => [...readFileSync(`dist/${file}`, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)])
  .map(([, loc]) => `http://localhost${new URL(loc).pathname}`);

if (urls.length === 0) {
  throw new Error('Aucune URL dans dist/sitemap-*.xml : lancer le build avant Lighthouse.');
}

module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: urls,
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 1 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
      },
    },
  },
};
