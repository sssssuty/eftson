import { componentGroups } from '../../data/components.js';

function toId(item) {
  return item.toLowerCase().replace(/\s+/g, '-');
}

function componentSections(tab) {
  if (tab === 'properties') return ['Props', 'Required', 'Optional', 'Design Token'];
  if (tab === 'accessibility') return ['Color contrast'];
  return ['Usage', 'Anatomy', 'Best practices', 'Examples', 'States', 'Static measurements'];
}

export default function Toc({ type, tab = 'overview' }) {
  const sections = type === 'component'
    ? componentSections(tab)
    : type === 'all'
      ? componentGroups.map((group) => group.title)
      : type === 'overview'
        ? ['Overview', 'General', 'Layout', 'Navigation', 'Data Entry', 'Data Display', 'Feedback', 'Other']
        : type === 'templates'
          ? ['Templates']
          : type === 'playground'
            ? ['Playground', 'Preview', 'Controls']
            : type === 'themes'
              ? ['Themes', 'Preview', 'Tokens']
              : type === 'getting-started'
                ? ['Quick start with AI', 'Install', 'Tokens', 'Next steps']
                : type === 'landing'
                  ? []
                  : ['Overview', 'Principles', 'Examples', 'Resources'];

  if (!sections.length) return null;

  const scrollTo = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <aside className="toc" aria-label="On this page">
      {sections.map((item, i) => {
        const id = toId(item);
        return (
          <a
            key={`${tab}-${item}`}
            className={i === 0 ? 'active' : ''}
            href={`#${id}`}
            onClick={(event) => scrollTo(event, id)}
          >
            {item}
          </a>
        );
      })}
    </aside>
  );
}
