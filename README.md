# Hanshika Mukati — Developer Portfolio

A React + Vite + Tailwind CSS portfolio built from verified information in [Hanshika103's GitHub repositories](https://github.com/Hanshika103) and resume. No fabricated metrics, links, or achievements — anything not yet confirmed is left as a clearly marked placeholder.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- lucide-react (icons)

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Visit the URL Vite prints (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## 4. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — framework preset "Vite", build command `npm run build`, output directory `dist`. Leave these as default.
4. Click **Deploy**.

Alternatively, from the CLI:

```bash
npm install -g vercel
vercel
```

## 5. Where to edit things

Almost everything lives in two data files — edit these, not the components, for day-to-day updates:

| What to update | File |
| --- | --- |
| Name, tagline, bio, email, phone, LinkedIn, resume link, skills, experience, education, certifications, coding profiles | `src/data/profile.js` |
| Projects (title, description, tech stack, features, GitHub link, live demo link) | `src/data/projects.js` |

### Replacing placeholders

Search `src/data/profile.js` for anything starting with `YOUR_` — these are intentionally left blank so nothing fake ships to recruiters:

- `linkedin: 'YOUR_LINKEDIN_URL'` → your real LinkedIn profile URL
- `resumeUrl: 'YOUR_RESUME_URL'` → a hosted PDF link (e.g. Google Drive share link, or drop a PDF into `public/` and link to `/your-resume.pdf`)
- `codingProfiles` → add real LeetCode/GeeksforGeeks/CodeChef/Codeforces URLs as you create them; empty ones are hidden automatically

### Adding a new project

Copy an existing object in `src/data/projects.js` and fill in only verified details:

```js
{
  id: 'unique-id',
  title: 'Project Name',
  subtitle: 'One-line description',
  category: 'AI / Web / etc.',
  featured: false, // true = shows in the "Featured Projects" grid
  description: '...',
  problem: '...',
  solution: '...',
  technicalImplementation: '...',
  technologies: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  contribution: '...',
  github: 'https://github.com/...',
  liveDemo: null, // or a real URL — never a fabricated one
  image: null,
}
```

### Wiring up the contact form

The contact form currently opens the visitor's email client with the message pre-filled (via a `mailto:` link) — it does not send email silently, since no backend is connected. To change that, open `src/components/Contact.jsx` and connect one of:

- [Formspree](https://formspree.io) — point the form at your Formspree endpoint
- [EmailJS](https://www.emailjs.com) — call `emailjs.send(...)` with your service/template IDs
- Your own backend API

## 6. Project structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── profile.js
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 7. Notes on data accuracy

Every project's description, tech stack, features and live-demo link were pulled directly from that project's own GitHub README as of the date this site was generated. Repositories with no README-listed deployment show a GitHub link only — no invented demo URLs. LinkedIn URL, resume URL, and unconfirmed coding-profile links are left as placeholders (see above) rather than guessed.