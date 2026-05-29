# GitHub Pages deployment guide

## Quick deploy

```bash
# 1. Copy and edit base path
cp .env.example .env.production
# Set: VITE_BASE_PATH=/YOUR-REPO-NAME/

# 2. Deploy
npm run deploy
```

## Base path

Vite `base` is read from `VITE_BASE_PATH` in `vite.config.ts`.

| Environment | Value |
|-------------|--------|
| Local dev | `/` (default) |
| GitHub Pages | `/repository-name/` |

Example for this repo:

```
VITE_BASE_PATH=/cps-mbt-dt-health-platform-mvp/
```

## Enable GitHub Pages

1. Push to GitHub.
2. Run `npm run deploy` locally (publishes `gh-pages` branch).
3. In the repo: **Settings → Pages → Source**: branch `gh-pages`, folder `/ (root)`.
4. Wait a few minutes; site URL: `https://<username>.github.io/<repo>/`.

## Troubleshooting

- **CSS/JS 404 em `github.io/assets/...` (sem nome do repo):** O `vite.config.ts` usa `loadEnv` para ler `.env.production`. Rode `npm run deploy` de novo após corrigir `VITE_BASE_PATH`.
- **Blank page / 404 on refresh:** Confirm `VITE_BASE_PATH` matches the repo name exactly (slashes included). O build gera `404.html` para rotas da SPA.
- **Assets 404:** Rebuild with the correct `.env.production` before deploying.
- **Router issues:** `BrowserRouter` works on GitHub Pages when `base` is set correctly; all internal links are relative to the app base.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build + publish to `gh-pages` |
