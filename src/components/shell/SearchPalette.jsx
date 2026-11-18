import { useEffect, useRef, useState } from 'react';
import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { componentGroups } from '../../data/components.js';
import { designGroups } from '../../data/design.js';
import { routeForComponent, routeForDesign } from '../../lib/routing.js';

export default function SearchPalette({ open, close }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 20);
  }, [open]);

  if (!open) return null;

  const entries = [
    { name: 'Home', group: 'Landing', href: '#/' },
    { name: 'Getting started', group: 'Docs', href: '#/docs/getting-started' },
    { name: 'All Components', group: 'Components · Overview', href: '#/components/all' },
    { name: 'Themes', group: 'Resources', href: '#/themes' },
    { name: 'Templates', group: 'Resources', href: '#/templates' },
    { name: 'Playground', group: 'Resources', href: '#/playground' },
    ...componentGroups.flatMap((g) => g.items.map((name) => ({
      name,
      group: `Components · ${g.title}`,
      href: routeForComponent(name),
    }))),
    ...designGroups.flatMap((g) => g.items.map((name) => ({
      name,
      group: `Design · ${g.title}`,
      href: routeForDesign(name, g.title),
    }))),
  ];

  const results = entries
    .filter((x) => `${x.name} ${x.group}`.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 10);

  return (
    <div className="palette-backdrop" onMouseDown={close}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="palette-input">
          <SearchOutlined />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
          />
          <kbd>ESC</kbd>
        </div>
        <div className="search-results">
          {results.map((item) => (
            <a href={item.href} onClick={close} key={`${item.group}-${item.name}`}>
              <span>
                {item.name}
                <small>{item.group}</small>
              </span>
              <ArrowRightOutlined />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
