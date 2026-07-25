# Loud Haus

Marketing site for **Loud Haus** — a boutique brand partnerships consultancy for fashion, culture and entertainment.

Single-page static site. No build step, no dependencies.

## Files
- `index.html` — the entire site (HTML, CSS and JS inline)

## Local preview
Open `index.html` in a browser, or:
```
python3 -m http.server 8000
```

## Live site
Published with GitHub Pages from the `main` branch.

## Custom domain
1. Repo → Settings → Pages → Custom domain → `loudhaus.com`
2. At your DNS provider add four A records for the apex:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Add a CNAME record: `www` → `zorian.github.io`
4. Tick **Enforce HTTPS** once the certificate is issued.

## Editing
- Copy lives directly in `index.html` under commented section blocks (`HERO`, `ABOUT`, `SERVICES`, `PROJECTS`, `CONTACT`).
- Brand colours are CSS variables at the top: `--ox` (oxblood) and `--cream`.
- The contact form opens the visitor's email client. To capture submissions instead, point the form at Formspree or Netlify Forms.

## Contact
hello@loudhaus.com · [@itsloudhaus](https://www.instagram.com/itsloudhaus)
