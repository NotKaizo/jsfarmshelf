# JS Farmshelf — Portfolio website

A simple, professional portfolio site for JS Farmshelf (hydroponic systems for commercial and personal use). Built with plain HTML, CSS, and JavaScript. Colour scheme: **#68F527** and white.

## Quick start

1. Open `index.html` in a browser, or run a local server (e.g. `npx serve .`).
2. Add your images to the `images/` folder — see `images/README.md` for suggested filenames.
3. Edit text and links in `index.html` and colours/spacing in `styles.css` as needed.

## Customization

### Colours and look (no coding experience needed)

Open **`styles.css`** and edit the **`:root`** block at the top. All of these are optional; change only what you want.

| Variable | What it does | Example |
|----------|----------------|--------|
| `--color-primary` | Main green | `#68F527` (default) |
| `--color-primary-dark` | Hover/darker green | `#52c01f` |
| `--color-background` | Page background | `#ffffff` |
| `--color-text` | Main text | `#1a1a1a` |
| `--color-text-muted` | Secondary text | `#5a5a5a` |

Change `--color-primary` to any hex colour to shift the whole accent (buttons, links, highlights) without touching the rest of the file.

### Typography

In the same `:root` block:

- **`--font-sans`** — Font family (default: DM Sans). Swap for another Google Font or system font.
- **`--font-size-base`** — Base text size (default: `1rem`). Slightly larger = `1.0625rem`.
- **`--font-size-hero`** — Hero headline size (responsive).

### Spacing and layout

- **`--section-padding`** — Vertical padding of each section.
- **`--container-max`** — Max width of content (default: `72rem`).
- **`--container-padding`** — Left/right padding on small screens.

### Content and images

- **Text and links:** Edit `index.html` (headings, paragraphs, email, phone).
- **Images:** Place files in `images/` and keep the same filenames, or update the `src` in `index.html` to match your filenames.
- **Gallery:** Add or remove `<div class="gallery-item">` blocks in the Gallery section; the grid adjusts automatically.

### Contact form

The contact form in `index.html` has `action="#"` and no backend. To make it work you need to either:

- Point `action` to a form service (e.g. Formspree, Netlify Forms), or  
- Add your own server/API and set `action` and `method` accordingly.

## File structure

```
NEW Farmshelf/
├── index.html      # All page content and structure
├── styles.css      # All styles and customization variables
├── script.js       # Mobile menu and footer year
├── images/         # Your photos (see images/README.md)
└── README.md       # This file
```

## Browser support

Works in all modern browsers. Smooth scrolling and `backdrop-filter` (header) may be limited in very old browsers.
