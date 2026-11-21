# Rury Shazkyya Astrada – Portfolio

Personal portfolio of a junior front end and fullstack developer with a QA background. Built with React and Vite, hosted on GitHub Pages.

## Run it locally

Needs Node 18 or newer.

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm test         # checks the content files
npm run build    # production build in dist/
npm run preview  # serves the production build
```

## Publish on GitHub Pages

1. Create a new repository on GitHub and push this folder to its `main` branch.
2. In the repository, open **Settings > Pages**. Under **Build and deployment > Source**, choose **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`: it installs, tests, builds, and publishes. Check progress in the **Actions** tab.
4. The site appears at `https://<your-username>.github.io/<repository-name>/`. Name the repository `<your-username>.github.io` to get `https://<your-username>.github.io/` instead.

The build uses relative paths (`base: './'` in `vite.config.js`) and hash links (`#/projects/eog-keyboard`), so it works under any repository name without extra setup.

## Change the content

Everything on the site comes from `src/data/`. You rarely need to touch a component.

| File | What it controls |
| --- | --- |
| `site.js` | Name, role, tagline, the "Now" line, email, location, photos, and the LinkedIn, GitHub, and CV links |
| `projects.js` | The main projects under "Selected work", the smaller "More projects" cards, and case study pages |
| `profile.js` | Experience, skills, education, and certificates |

A link left as `''` is hidden, so no broken buttons ever show.

### Add a project

1. Save a screenshot as `.webp` in `src/assets/images/`, for example `my-app.webp`.
2. Add a line for it in `src/assets/images.js`: `import myApp from './images/my-app.webp';` and `'my-app': myApp,` inside `images`.
3. Add an entry to `projects` (or `moreProjects`) in `src/data/projects.js`, with `image: 'my-app'`.
4. Run `npm test`. It fails with a clear message if an image is missing, an id is repeated, a link is malformed, or alt text is missing.

To give a project its own page, add a `caseStudy` object, as the EOG keyboard project does. The page appears at `#/projects/<id>` and a "Read the case study" link shows up automatically.

## Accessibility

Skip link, visible keyboard focus, one `h1` per page with a logical heading order, alt text on every image, a phone menu that closes with Escape, and links that open a new tab say so to screen readers.
