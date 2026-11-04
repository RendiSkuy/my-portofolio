# Portfolio — Rendi Ripaldi

Personal portfolio site for **Rendi Ripaldi** — D3 Informatics Engineering graduate (GPA 3.6/4.00), Universitas Logistik dan Bisnis Internasional, Bandung. Built with React + Vite + Tailwind, animated with GSAP.

Focused on backend development, mobile applications, database management, and workflow automation.

## Stack

| Layer | Tools |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS 4 |
| Animation | GSAP + @gsap/react |
| Icons | react-icons |
| Content | Curriculum Vitae (ID + EN) served as PDF |

## Sections

- **Home** — name, role, quick highlights, typewriter roles
- **About** — profile, experience timeline, certifications (SAP01, BC400), tech stack, soft skills
- **Projects** — five CV-backed projects with repo links
- **Resume** — embedded PDF viewer with ID/EN toggle and download
- **Contact** — email, GitHub, LinkedIn

## Projects shown

| Project | Role | Stack |
|---|---|---|
| Point-Based Waste Bank Web System | Backend Developer | PHP, Laravel, Filament, MySQL |
| Gudang Pro — Warehouse Management System | Backend Developer | Node.js, REST API, Flutter, MySQL |
| My Daily Kos — Boarding House Finance App | Fullstack Developer | Flutter, Firebase, OCR, n8n |
| T.U.R.U App — Sleep Risk Screening | Fullstack Developer | Flutter, Node.js, TypeScript, PostgreSQL, Python, Gemini API |
| Amanda Mart B2B Portal (internship) | Backend Developer Intern | Laravel, PostgreSQL, 2FA |

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Deploy

The build output in `dist/` is static — deploy to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. No environment variables required.

## Notes

- `public/CV-Rendi-Ripaldi - English.pdf` and `public/CV-Rendi-Ripaldi-indonesia.pdf` are the documents rendered on the Resume page. Replace them to update the CV section.
- `public/portfolio-rendi.html` is a standalone, print-friendly single-file version of the same portfolio.