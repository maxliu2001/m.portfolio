# M.Portfolio

[M.Portfolio](https://maxliu2001.github.io/m.portfolio/) is Max Liu's personal portfolio and interactive resume. It highlights selected work across distributed systems, AI/ML infrastructure, robotics, cloud engineering, and product development.

## Current site

The site includes:

- An introduction and professional overview
- Three featured projects with expanded case studies
- An archive of research, coursework, open-source, and hackathon projects
- Responsive light and dark themes
- Motion effects with reduced-motion support
- Keyboard-accessible project dialogs
- Links to GitHub, LinkedIn, and email

## Tech stack

- [Next.js](https://nextjs.org/) using the Pages Router
- [React](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- CSS Modules
- Static export for hosting without a Node.js server

## Local development

Requires a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Validation and production build

```bash
npm run lint
npm run build
```

The production build is exported as static files in `out/`.

## Project structure

```text
src/
├── components/          Reusable navigation, contact, and visual components
│   └── sections/        Hero, about, and project sections
├── pages/               Next.js pages and document setup
├── styles/              Global and component-scoped styles
└── theme/               Light/dark color-mode state
public/                  Images and static assets
```

Project content is maintained in `src/components/sections/ProjectsSection.js`.

## Contact

- [GitHub](https://github.com/maxliu2001)
- [LinkedIn](https://www.linkedin.com/in/max-liu-a7948a1ab/)
- [Email](mailto:yinghaomaxliu06@gmail.com)
