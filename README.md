# Abdullah Al Towsif — Portfolio (my-portfolio-v2)

Personal portfolio built with React (Vite), Tailwind CSS and Framer Motion. It presents my backend and full-stack work: projects, skills, education, courses and contact links.

## Tech stack

- React + Vite
- Tailwind CSS (custom theme in `tailwind.config.js`)
- Framer Motion (animations, modal transitions)
- react-scroll (smooth section navigation)
- react-type-animation (hero typing text)
- react-icons

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx          # bio, education, courses & activities
│   ├── Skills.jsx         # renders skill groups from data
│   ├── Projects.jsx       # project cards + "See Details" button
│   ├── ProjectModal.jsx   # project details modal
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionTitle.jsx
│   └── ScrollToTop.jsx
├── data/
│   └── portfolioData.jsx  # all content lives here
├── App.jsx
└── main.jsx
```

## Updating content

All text and links come from `src/data/portfolioData.jsx`. Components should not need edits for content changes.

- **Personal info / bio:** edit `personalInfo`.
- **Education:** edit the `education` array. Set `isUniversity: true` to show the university icon.
- **Skills:** each entry in `skills` is a group with a `title` and `items` (`{ name, icon }`). Use `type: 'chips'` with a plain string array for icon-less pills.
- **Courses & activities:** edit `coursework`. Leave `link` empty when there is no certificate.
- **Projects:** add an object to `projects`:

```js
{
  id: 'my-project',          // unique, used as the React key
  title: 'My Project',
  subtitle: 'One-line description',
  category: 'Full Stack',
  date: 'January 2026',      // optional
  icon: <FaReact size={24} className="text-accent-1" />,
  summary: 'Short text shown on the card.',
  overview: 'Longer paragraph shown in the modal.',
  highlights: ['Feature one', 'Feature two'],
  tech: ['React', 'Node.js'],
  links: { client: '', server: '', live: '' }, // empty links are hidden
}
```

## Resume

The Download/Resume buttons use `personalInfo.resumeLink`. Place the PDF in `public/` with the same file name (currently `Abdullah Al Towsif_Resume.pdf`) and replace it whenever the resume changes.

## Project details modal

Clicking **See Details** on a project card opens `ProjectModal`. It closes with the Esc key, a click on the backdrop, or the close button, and it locks page scroll while open.

## Deployment

The site deploys on Vercel. Push to the connected branch, or run `npm run build` and deploy the `dist/` folder.
