import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import test from 'node:test';

import { certificates, education, experience, skillGroups } from '../src/data/profile.js';
import { moreProjects, projects } from '../src/data/projects.js';
import { site } from '../src/data/site.js';
import { parseHash, projectHref } from '../src/lib/route.js';

const IMAGE_KEYS = new Set(
  readdirSync(new URL('../src/assets/images/', import.meta.url))
    .filter((file) => file.endsWith('.webp'))
    .map((file) => file.replace(/\.webp$/, '')),
);

const unique = (list) => new Set(list).size === list.length;
const isLinkOrEmpty = (value) => value === '' || /^https:\/\/\S+$/.test(value);

/** Every string in a value, however deeply nested. */
function strings(value, found = []) {
  if (typeof value === 'string') found.push(value);
  else if (Array.isArray(value)) value.forEach((item) => strings(item, found));
  else if (value && typeof value === 'object') Object.values(value).forEach((item) => strings(item, found));
  return found;
}

/** Every { image, alt } object in a value. */
function pictures(value, found = []) {
  if (Array.isArray(value)) value.forEach((item) => pictures(item, found));
  else if (value && typeof value === 'object') {
    if (typeof value.image === 'string') found.push(value);
    Object.values(value).forEach((item) => pictures(item, found));
  }
  return found;
}

const ALL = [site, projects, moreProjects, experience, skillGroups, education, certificates];

test('site details are complete and links are valid', () => {
  assert.ok(site.name && site.role && site.tagline && site.now);
  assert.match(site.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  for (const [name, url] of Object.entries(site.links)) {
    assert.ok(isLinkOrEmpty(url), `site.links.${name} must be an https URL or ''`);
  }
});

test('every picture points to an image file and has alt text', () => {
  const found = pictures(ALL);
  assert.ok(found.length > 20);
  for (const picture of found) {
    assert.ok(IMAGE_KEYS.has(picture.image), `no file src/assets/images/${picture.image}.webp`);
    assert.ok(picture.alt && picture.alt.trim().length > 10, `"${picture.image}" needs a descriptive alt`);
    if (picture.fit) assert.ok(['cover', 'contain'].includes(picture.fit), `bad fit on "${picture.image}"`);
  }
});

test('projects have unique ids and complete content', () => {
  assert.ok(unique([...projects, ...moreProjects].map((project) => project.id)), 'ids must be unique');
  for (const project of projects) {
    const name = `project "${project.id}"`;
    assert.match(project.id, /^[a-z0-9-]+$/, `${name}: id may use only a-z, 0-9 and -`);
    assert.ok(project.title && project.meta && project.summary, `${name}: missing text`);
    assert.ok(project.points.length >= 1 && project.tags.length >= 1, `${name}: needs points and tags`);
    assert.ok(project.images.length >= 1 && project.images.length <= 2, `${name}: needs one or two images`);
    assert.ok(unique(project.tags), `${name}: duplicate tags`);
    assert.ok(isLinkOrEmpty(project.links.demo) && isLinkOrEmpty(project.links.source), `${name}: bad link`);
  }
  for (const item of moreProjects) {
    assert.ok(item.title && item.summary && item.tags.length >= 1, `"${item.id}": missing content`);
  }
});

test('case studies have every part the page shows', () => {
  const withCase = projects.filter((project) => project.caseStudy);
  assert.ok(withCase.length >= 1);
  for (const { id, caseStudy } of withCase) {
    assert.ok(caseStudy.lead && caseStudy.cover, `"${id}": lead and cover required`);
    assert.ok(caseStudy.sections.length >= 1 && caseStudy.role.length >= 1, `"${id}": sections and role required`);
    assert.ok(caseStudy.technologies.length >= 1 && caseStudy.facts.length >= 1, `"${id}": technologies and facts`);
    assert.deepEqual(parseHash(projectHref(id)), { page: 'project', id, anchor: '' });
  }
});

test('experience, skills, and certificates are well formed', () => {
  assert.ok(unique(experience.map((job) => job.id)));
  assert.ok(experience.filter((job) => job.current).length <= 1, 'at most one current job');
  for (const job of experience) assert.ok(job.role && job.company && job.period && job.points.length);
  const allSkills = skillGroups.flatMap((group) => group.items);
  assert.ok(unique(allSkills), 'a skill must not appear twice');
  assert.ok(unique(certificates.map((item) => item.id)));
});

test('routing tells pages and section links apart', () => {
  assert.deepEqual(parseHash(''), { page: 'home', id: '', anchor: '' });
  assert.deepEqual(parseHash('#work'), { page: 'home', id: '', anchor: 'work' });
  assert.deepEqual(parseHash('#/projects/eog-keyboard'), { page: 'project', id: 'eog-keyboard', anchor: '' });
  assert.equal(parseHash('#/somewhere-else').page, 'home');
});

test('no placeholder text or stray characters in the content', () => {
  const leftovers = /\b(todo|fixme|lorem|ipsum)\b|fill in|placeholder|\[[^\]]*\]/i;
  for (const text of strings(ALL)) {
    assert.ok(!leftovers.test(text), `placeholder-like text: "${text}"`);
    assert.ok(!text.includes('—'), `em dash in: "${text}"`);
    assert.ok(!/ {2,}/.test(text), `double space in: "${text}"`);
  }
});
