# Loud Haus

Site for **Loud Haus** — a brand partnerships consultancy for fashion, culture and entertainment.

Static, no build step, no dependencies.

## Pages
- `index.html` — logo screen, no scroll
- `who.html` — positioning and services
- `work.html` — one-at-a-time image gallery
- `contact.html` — details
- `site.css` — shared styles
- `menu.js` — hamburger + full-screen menu, included on every page

## Images
`img/` holds the photography, two sizes each:
- `name.webp` — up to 1500px (lightbox and homepage)
- `name-sm.webp` — up to 760px (grid thumbnails)

Prefixes: `wc-` White Claw, `sb-` Snowbunny, `gq-` GQ Men of the Year.

To add a project image: export both sizes, then add `['file-name','Project Title']`
to the `shots` array in `work.html`.

Gallery images are capped at 640x560 CSS px on purpose. The source photos came from
WhatsApp and are already compressed, so displaying them larger would show artefacts.
Every image currently renders at under half its pixel width, which keeps it sharp on
retina screens. Raise the cap in `.frame` only if higher-resolution originals arrive.

## Local preview
```
python3 -m http.server 8000
```

## Custom domain
1. Repo → Settings → Pages → Custom domain → `loudhaus.com`
2. Apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. CNAME: `www` → `zorian.github.io`
4. Tick **Enforce HTTPS** once the certificate issues.

## Contact
hello@loudhaus.com · [@itsloudhaus](https://www.instagram.com/itsloudhaus)
