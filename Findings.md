# Codebase Findings

## Overview

This is a **personal portfolio website** for **Usmaan Mowlana**, hosted via GitHub Pages at `usmaanmowlana.github.io`. It is a single-page, static site built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools.

---

## Architecture

### File Structure

```
/
├── index.html              # Main entry point (675 lines) — assembles all sections
├── assets/
│   ├── css/style.css       # Single stylesheet (1,048 lines)
│   ├── js/main.js          # JavaScript logic (95 lines)
│   ├── img/                # All images organized by section
│   │   ├── hero-cutout.png
│   │   ├── education/      # 33 images (spc1–spc33.jpeg)
│   │   ├── experience/     # 16 images across 4 roles
│   │   ├── projects/       # ~25+ images across 4 projects
│   │   └── volunteering/   # ~50+ images across 3 roles
│   └── certs/              # PDF certificates (mckinsey.pdf, vs_online.pdf)
├── cv/
│   └── Usmaan_Mowlana_CV.pdf
└── sections/               # Section HTML partials (not dynamically included)
    ├── head.html
    ├── navbar.html
    ├── hero.html
    ├── experience.html
    ├── education.html
    ├── projects.html
    ├── volunteering.html
    ├── contact.html
    └── footer.html
```

### Key Observations

- **`index.html` is the only served page.** The `sections/` folder contains HTML partials that mirror what's in `index.html`, but there is **no templating system or include mechanism** — the partials appear to be development reference copies, not dynamically assembled.
- **No build pipeline** — no `package.json`, no bundler, no preprocessor. The site is pure static HTML/CSS/JS.
- **Git history is minimal** — only 3 commits (initial commit, initial upload, CV update).

---

## Technology Stack

| Layer       | Technology                                                        |
|-------------|-------------------------------------------------------------------|
| Markup      | Vanilla HTML5                                                     |
| Styling     | Vanilla CSS3 with CSS custom properties (variables)               |
| JavaScript  | Vanilla JS (ES6)                                                  |
| Fonts       | Google Fonts — Inter (sans) + Fira Code (mono)                    |
| Icons       | Ionicons 5.5.2 (loaded via unpkg CDN)                             |
| Particles   | particles.js 2.0.0 (loaded via jsDelivr CDN)                     |
| Hosting     | GitHub Pages                                                      |

---

## Design & Theming

- **Dark navy theme** inspired by Brittany Chiang's v4 portfolio style.
- CSS variables define the palette: `--navy (#0a192f)`, `--cyan (#64ffda)` accent, `--slate` text, `--white` headings.
- Fonts: `Inter` for body, `Fira Code` for monospace/accent elements.
- Animated particle constellation background via `particles.js`.
- Hero image has a **grayscale filter** that reveals color on hover.
- Spinning dashed circle border animation around the hero image.
- Fixed navbar with blur backdrop and subtle cyan bottom border.

---

## Site Sections (6 total)

### 1. Hero / About (`#about`)
- Greeting, name, subtitle, short bio paragraph.
- Two CTA buttons: "View My Work" and "Resume" (links to CV PDF).
- Hero image with circular background treatment.

### 2. Experience (`#experience`)
- **Tabbed interface** with two companies: Uzabase Inc. and RMG Live.
- **Uzabase** has 3 roles shown in a timeline (Junior Analyst, Intern Analyst, Intern — spanning May 2024 to Dec 2025).
- **RMG Live** has 1 role (Event Specialist, part-time, Feb 2024 – Present).
- Each role includes description bullets and a 3-image gallery.

### 3. Education (`#education`)
- Two education cards: University of Colombo (BSc Financial Engineering) and CIMA.
- A featured block for **St. Peter's College** with leadership roles, A-Level results (A, A, B), and a dual-column vertical scrolling image train (33 images).
- Licenses & Certifications section (McKinsey Forward Program, Visual Studio Online).

### 4. Projects (`#projects`)
- **5 project cards** with alternating left/right layout:
  1. Stealth Data/AI Company (confidential, with a fake terminal animation)
  2. RMG Live Productions (image slideshow)
  3. Peterites Share the Joy of the Centenary (community water project, with YouTube/article links)
  4. 33rd Interact District Assembly (event at Temple Trees)
  5. 89th Battle of the Saints (Big Match logistics)
- Slideshows use a custom prev/next JS implementation.

### 5. Volunteering (`#volunteering`)
- 5 volunteer roles with horizontal marquee image strips:
  1. Club President — Interact Club of SPC (2021–2022) with awards list
  2. District Finance Director — Interact District 3220 (2022–2023)
  3. Chairperson of 33rd Interact District Assembly (2022–2023)
  4. Director of Finance — Interact Club of SPC (2020–2021)
  5. Director of Community Service — Rotaract Club of Colombo Heritage (2024–2025)

### 6. Contact (`#contact`)
- Email (mailto), WhatsApp, and LinkedIn buttons.
- Footer styled as a "system status bar" with live indicator, location (Colombo), copyright, and tool icons.

---

## JavaScript Functionality (`main.js` — 95 lines)

1. **Particles.js initialization** — cyan-colored constellation with grab interactivity on hover.
2. **Experience tab switcher** — `openJob()` hides/shows content blocks with a fade animation.
3. **Image slideshow system** — supports 4 independent sliders (`slider-rmg`, `slider-water`, `slider-assembly`, `slider-bigmatch`) with prev/next navigation and wrap-around.

---

## Potential Issues & Improvement Opportunities

### Functional
- **`sections/` folder is redundant** — the partials aren't dynamically loaded; `index.html` contains all the content directly. These files may drift out of sync.
- **No mobile hamburger menu** — the navbar has no responsive toggle; nav links may overflow on small screens (would need to verify in CSS media queries).
- **`README.md` is deleted** (shown in git status as `D README.md`) — GitHub Pages repos typically benefit from having one.
- **Copyright year is 2024** in the footer — could be updated to 2025.
- **Footer says "Powered by Python"** — but there is no Python in this repo. This may be aspirational or reference tooling used elsewhere.

### Performance
- **Heavy image load** — 100+ JPEG images load on a single page with no lazy loading (`loading="lazy"` attribute missing).
- **No image optimization** — JPEGs are served as-is with no WebP/AVIF alternatives or responsive `srcset`.
- **CDN dependencies** — particles.js, Ionicons, and Google Fonts are all loaded from external CDNs with no local fallbacks.

### Code Quality
- **Inline `onclick` handlers** in HTML — could be refactored to event listeners in `main.js`.
- **Inline `style="width:100%"` on slideshow images** — should be in the stylesheet.
- **Minor HTML issue** in volunteering section line 139: `</li>` used where `<li>` opening tag was intended (broken tag).
- **No `<html>` root tag** — `index.html` starts with `<!DOCTYPE html><head>` without an `<html lang="en">` wrapper.
- **No favicon** defined.
- **No meta description or Open Graph tags** for SEO/social sharing.

### Accessibility
- **No skip-to-content link.**
- **No ARIA labels** on interactive elements (tab buttons, slideshow controls).
- **Alt text is generic** (e.g., "SPC", "Backstage") — could be more descriptive.
- **Color contrast** — light slate text (`#8892b0`) on dark navy may not meet WCAG AA for smaller text.

---

## Summary

A clean, well-structured single-page portfolio with strong visual design. The main areas for improvement are image performance optimization, accessibility, mobile responsiveness verification, and cleaning up the redundant `sections/` folder or wiring it into a build/template system.
