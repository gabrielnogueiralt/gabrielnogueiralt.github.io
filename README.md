# Personal Website

A modern, single-page portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. All site content lives in [`src/data/profile.ts`](src/data/profile.ts) so updates do not require touching any component code.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/`.

## Deploying to GitHub Pages

This project is configured for a **user site** (the URL `https://<username>.github.io/`).

1. Create a repository named exactly `<your-username>.github.io` on GitHub.
2. Push this project to the `main` branch of that repository.
3. In the repository settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Under **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**, then select the workflow **Deploy to GitHub Pages** (not the default Jekyll / `pages-build-deployment` workflow).
5. Every push to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs `npm run build` and publishes the `dist/` folder.

The first deployment may take a minute or two. After it finishes, the site is live at `https://<your-username>.github.io/`.

> If you instead deploy this as a project site (`https://<username>.github.io/<repo>/`), update `base` in [`vite.config.ts`](vite.config.ts) to `'/<repo>/'`.

## Updating content

Edit [`src/data/profile.ts`](src/data/profile.ts). The structure is fully typed, so missing or misspelled fields surface as TypeScript errors during `npm run build`.
