# Eftson Design System

An open-source design library site with light documentation chrome, hash routes, and healthcare-ready tokens (indigo `#2D40CB`, Elza, `controlHeight` 40, radius 8).

## Open without a server

Double-click **`index.html`** or **`Eftson Design System.html`** in the project folder. When opened through `file://`, `index.html` automatically hands off to the self-contained offline build. The application code, styles, logos, and Elza fonts are embedded in that single file, which can also be copied to another device and opened directly in a modern browser.

Run `npm run build` after source changes to refresh this standalone file.

## Run locally

```bash
npm install
npm run dev
```

Open the network URL shown by Vite to view it on another device connected to the same local network.

## Production build

```bash
npm run build
npm run preview
```

For a Vite-only web build (no offline HTML packaging):

```bash
npm run build:web
```

## Site map

| Route | Purpose |
| --- | --- |
| `#/` | Landing — brand-first hero, CTAs, floating component previews |
| `#/docs/getting-started` | AI-first docs getting started |
| `#/components/overview` | Components browse landing |
| `#/components/:slug` | Component detail (Usage → Anatomy → Best practices → Examples → States → Static measurements → API → Tokens) |
| `#/themes` | Theme picker + live preview (Clinical, Connected, Care Green, Calm Stone, Night Shift) |
| `#/templates` | Healthcare product templates |
| `#/playground` | Local template playground |

Top navigation: **Docs · Components · Templates · Themes · Playground**. The logo returns to the landing page.

## Source layout

```
src/
  data/           component, design, template, and theme catalogs
  lib/routing.js  hash routing helpers and default Eftson tokens
  components/
    shell/        header, sidebar, search, toc, app shell
    demos/        DemoRenderer (full switch), DemoBox, MiniPreview
    templates/    Clearinghouse + Denial template visuals
  pages/          Landing, Docs, Components, Themes, Templates, Playground
  main.jsx        entry
  styles.css      site chrome + page styles
```
