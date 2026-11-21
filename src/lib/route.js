// Hash-based routing, so the site works on GitHub Pages without server rewrites.
//   ''  or '#work'            -> home page (optionally scrolled to a section)
//   '#/projects/<id>'         -> case study page for a project

const PROJECT_ROUTE = /^#\/projects\/([a-z0-9-]+)\/?$/;

export function parseHash(hash = '') {
  const match = PROJECT_ROUTE.exec(hash);
  if (match) return { page: 'project', id: match[1], anchor: '' };
  const anchor = hash.startsWith('#') && !hash.startsWith('#/') ? hash.slice(1) : '';
  return { page: 'home', id: '', anchor };
}

export const projectHref = (id) => `#/projects/${id}`;
