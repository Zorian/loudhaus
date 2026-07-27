# Loud Haus

Site for **Loud Haus** — a brand partnerships consultancy for fashion, culture and entertainment.

Static, no build step, no dependencies.

## Pages
- `index.html` — full-screen slideshow, no scroll
- `who.html` — positioning and services
- `work.html` — project grid with lightbox
- `contact.html` — details
- `site.css` — shared styles for the three inner pages

## Images
`img/` holds the photography, two sizes each:
- `name.webp` — up to 1500px (lightbox and homepage)
- `name-sm.webp` — up to 760px (grid thumbnails)

Prefixes: `wc-` White Claw, `sb-` Snowbunny, `gq-` GQ Men of the Year.

To add a project image: export both sizes, then add a `<article class="tile tall">`
(or `short`) block in `work.html`. To add it to the homepage, append the filename
to the `src` array in `index.html`.

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
