# Ravina T — Portfolio

A personal portfolio built with React, TypeScript, Vite and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The static site is output to `dist/`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts (framework preset: Vite). Vercel auto-detects `npm run build` and the `dist` output folder.

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a GitHub repository.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Editing content
- Text and section copy: `src/components/*.tsx`
- Photo and certificate images: `src/assets/`
- Colors, fonts, spacing tokens: `src/index.css` (`:root` variables)
