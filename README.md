# camilleislasse.github.io

CV et blog de Camille Islasse : [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Stack

- **Astro 7** : statique, quasi zéro JavaScript embarqué
- **Tailwind 4** : tokens dans `src/styles/global.css` (`@theme`)
- **SEO** : balises meta et JSON-LD écrits à la main dans le layout, @astrojs/sitemap, RSS
- **Fonts** : League Spartan, Quicksand, JetBrains Mono (variables, auto-hébergées)

## Commandes

| Commande          | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Installe les dépendances            |
| `npm run dev`     | Serveur de dev sur `localhost:4321` |
| `npm run build`   | Build de production dans `./dist/`  |
| `npm run preview` | Prévisualise le build               |

## Structure

- `src/pages/` : accueil, blog (liste, article, tags), mentions légales, 404, RSS, robots
- `src/content/blog/` : un dossier par article (`slug/index.md` + ses images)
- `src/data/cv.ts` : profil, parcours (rendu en git graph) et certifications
- `src/components/` : GitGraph, PostCarousel, BlogCard, CookieConsent...
- `src/layouts/Layout.astro` : head SEO complet, header, footer
- `public/` : favicons, og-image, fonts
