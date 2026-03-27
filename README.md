# Prime Brev Edge Website (Static)

A small static portfolio/demo website built with HTML, CSS, and JavaScript.

## Overview
- Multi-page brochure site: `index.html`, `about.html`, `services.html`, `blog.html`, `contact.html`, plus service/blog detail pages.
- Glassmorphism/UI shimmer style using `backdrop-filter`, gradients, and floating cards.
- Social links include WhatsApp and Instagram.
- Uses Font Awesome 6.5 via CDN for icons.

## Files
- `index.html` — homepage with typed intro and CTA.
- `about.html` — about section.
- `services.html` — service list.
- `blog.html` and variants — blog posts.
- `contact.html` — contact form and contact details.
- `styles.css` — all styles/theme.
- `script.js` — optional / UI behavior (typing text, form actions, etc.).

## Local run
1. Open `index.html` in browser, or run a local static server:
   - `python -m http.server 8000`
   - then visit `http://127.0.0.1:8000`

## Social icons (WhatsApp + Instagram)
- Included in footer markup:
  - `<i class="fa-brands fa-whatsapp"></i>`
  - `<i class="fa-brands fa-instagram"></i>`
- Ensure internet access for Font Awesome CDN to load icons.

## Notes
- If icons are not visible, verify:
  1. Font Awesome CSS link is present in `<head>`.
  2. No ad-blocker or CSP blocking `cdnjs.cloudflare.com`.
  3. Correct classes `fa-brands fa-whatsapp` and `fa-brands fa-instagram` are used.

## License
- No license specified.
