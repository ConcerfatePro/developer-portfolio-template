# Devfolio One — Developer Portfolio Template (Demo)

A **frontend-only** personal portfolio template with a dark-first layout, optional light mode, smooth in-page navigation, mock project cards, and a contact form that only shows a confirmation message — no email or backend.

## Live Demo

Coming soon.

## Video demo

Screen recording of the UI in motion (WebM, committed in this repo):

<video src="public/videos/developer-portfolio-template.webm" controls playsinline muted width="100%"></video>

If the player does not load in your viewer, open [`public/videos/developer-portfolio-template.webm`](./public/videos/developer-portfolio-template.webm) locally or via **Raw** on GitHub.

## Features

- Dark / light toggle using React state and a `dark` class on the document root (Tailwind `class` strategy)
- Sticky navbar with anchor links and smooth scrolling (`scroll-behavior` on `html`)
- Sections: hero, about, skills, projects, experience timeline, services, contact
- Project cards driven by local mock data
- Contact form UI with `preventDefault` and inline success copy
- Manrope + Space Grotesk typography for a minimal premium feel
- Responsive spacing and hover transitions throughout

## Tech Stack

- React
- Vite
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

## Possible Future Improvements

- Blog / MDX route for case studies
- CMS hookup for projects and resume content
- OG image and meta tags per deploy
- i18n toggle for multilingual freelancers
