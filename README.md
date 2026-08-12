# Premium Graphic Designer Portfolio Website

A world-class, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically for Graphic Designers with expertise in **Adobe Photoshop**, **CorelDRAW**, and **InPage**.

---

## Features

- **Luxury SaaS Aesthetics**: Clean off-white background (`#F8F9FA`), slate dark cards (`#343A40`), and deep crimson highlight (`#780000`).
- **Real Projects Bento Grid**: Displays authentic project files from the `public/projects/` folder.
- **Project Detail Modal & Gallery Slider**: Fullscreen overlay modal allowing visitors to flip through all images in each project folder.
- **Glassmorphism Navbar**: Sticky navbar with smooth section scroll triggers and an animated mobile menu.
- **Interactive Tech Marquee**: Infinite scrolling banner showing software tools (Photoshop, CorelDRAW, InPage).
- **Responsive Certifications Bento Grid**: Credentials, verification badges, and credential IDs.
- **Interactive Contact Form**: Client inquiry form with submission state feedback.

---

## Quick Start (How to Run)

Open the project folder in VS Code or your terminal:

```bash
# 1. Install Dependencies
npm install

# 2. Start Development Server
npm run dev
```

The app will launch locally at `http://localhost:3000`.

---

## Production Build

To build the project for deployment (Vercel, Netlify, GitHub Pages):

```bash
npm run build
```

The output files will be saved in the `dist/` directory ready for hosting.

---

## Project Directory Structure

```
graphic-designer/
├── public/
│   └── projects/           # Real project folders & images
├── src/
│   ├── components/         # Reusable UI section components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechBanner.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Certifications.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/               # Easily maintainable data files
│   │   ├── projectsData.js
│   │   ├── certificationsData.js
│   │   ├── servicesData.js
│   │   ├── skillsData.js
│   │   └── testimonialsData.js
│   ├── hooks/
│   │   └── useCursorGlow.js
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
