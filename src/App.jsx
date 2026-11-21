import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import CaseStudy from './components/CaseStudy.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import { site } from './data/site.js';
import { parseHash } from './lib/route.js';

const HOME_TITLE = `${site.name} – ${site.role}`;

export default function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // When the page itself changes (home <-> case study, or the first load), jump
  // straight to the right spot. Links within the home page scroll on their own.
  const shownPage = useRef(null);
  useLayoutEffect(() => {
    if (route.page === 'home') document.title = HOME_TITLE;
    const pageKey = `${route.page}:${route.id}`;
    if (shownPage.current === pageKey) return;
    shownPage.current = pageKey;
    const target = route.anchor ? document.getElementById(route.anchor) : null;
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {route.page === 'project' ? <CaseStudy id={route.id} /> : <Home />}
      </main>
      <footer className="site-footer">
        <div className="wrap site-footer__inner">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <p>Built with React and Vite</p>
        </div>
      </footer>
    </>
  );
}
