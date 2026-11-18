import { allComponents, componentSlugs, slugRedirects } from '../data/components.js';
import { designGroups, designSlugs } from '../data/design.js';

export function slugify(name) {
  return (componentSlugs[name] || name.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-')).toLowerCase();
}

export function resolveComponentTitle(slug) {
  if (slugRedirects[slug]) return slugRedirects[slug];
  return allComponents.find((name) => slugify(name) === slug) || null;
}

export function routeForComponent(name) {
  return `#/components/${slugify(name)}`;
}

export function routeForDesign(name, groupTitle) {
  const prefix = groupTitle === 'Principles'
    ? 'principles'
    : groupTitle === 'Design Patterns (Research)'
      ? 'research'
      : 'spec';
  return `#/docs/${prefix}/${designSlugs[name] || slugify(name)}`;
}

export function parseRoute() {
  const raw = window.location.hash.slice(1) || '/';
  const path = raw.split('?')[0].replace(/\/$/, '') || '/';

  if (path === '/' || path === '') {
    return { section: 'landing', type: 'landing', title: 'Eftson Design' };
  }
  if (path === '/templates') {
    return { section: 'templates', type: 'templates', title: 'Templates' };
  }
  if (path === '/playground') {
    return { section: 'playground', type: 'playground', title: 'Playground' };
  }
  if (path === '/docs' || path === '/docs/getting-started') {
    return { section: 'docs', type: 'getting-started', title: 'Getting started', group: 'Eftson Design' };
  }
  if (path === '/components' || path === '/components/overview') {
    return { section: 'components', type: 'overview', title: 'Components Overview' };
  }
  if (path === '/components/all') {
    return { section: 'components', type: 'all', title: 'All Components' };
  }
  if (path === '/components/changelog') {
    return { section: 'components', type: 'changelog', title: 'Changelog' };
  }
  if (path.startsWith('/components/')) {
    const slug = path.split('/').pop();
    const title = resolveComponentTitle(slug) || allComponents[0] || 'Card';
    return { section: 'components', type: 'component', title, slug: slugify(title) };
  }

  if (path.startsWith('/docs/')) {
    const slug = path.split('/').pop();
    if (slug === 'getting-started') {
      return { section: 'docs', type: 'getting-started', title: 'Getting started', group: 'Eftson Design' };
    }
    const expectedGroup = path.startsWith('/docs/principles/')
      ? 'Principles'
      : path.startsWith('/docs/research/')
        ? 'Design Patterns (Research)'
        : null;
    let found = null;
    designGroups
      .filter((g) => !expectedGroup || g.title === expectedGroup)
      .forEach((g) => g.items.forEach((item) => {
        if (!found && (designSlugs[item] || slugify(item)) === slug) {
          found = { title: item, group: g.title };
        }
      }));
    return {
      section: 'docs',
      type: 'design',
      title: found?.title || 'Introduction',
      group: found?.group || 'Eftson Design',
    };
  }

  return { section: 'landing', type: 'landing', title: 'Eftson Design' };
}

/** Ant Design theme mapped from foundation tokens (Indigo-default, Corner-4 default, Spacing-40). */
export const eftsonThemeConfig = {
  token: {
    colorPrimary: '#2D48DA',
    colorInfo: '#2B6FFF',
    colorSuccess: '#13803D',
    colorWarning: '#DB8702',
    colorError: '#A31D16',
    borderRadius: 4,
    controlHeight: 40,
    fontFamily: "Elza, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeightStrong: 600,
  },
};
