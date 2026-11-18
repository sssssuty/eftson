import * as Antd from 'antd';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { componentGroups, componentDescriptions } from '../data/components.js';
import { routeForComponent } from '../lib/routing.js';
import DemoRenderer from '../components/demos/DemoRenderer.jsx';
import VersionBadge from '../components/shell/VersionBadge.jsx';
import Button from '../components/ui/Button.jsx';
import { lucideSlots } from '../components/demos/lucideSlots.jsx';

const previewNames = new Set([
  'Button', 'Card', 'Chip', 'Icon', 'Tabs', 'Input', 'Toggle', 'Dropdown Menu', 'Radio Selection',
  'Warning Banner', 'Progress', 'Table', 'Slider', 'Tooltips', 'Pagination', 'Message',
]);

export default function ComponentsOverview() {
  const [query, setQuery] = useState('');
  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return componentGroups;
    return componentGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((name) => {
          const haystack = `${name} ${componentDescriptions[name] || ''} ${group.title}`.toLowerCase();
          return haystack.includes(q);
        }),
      }))
      .filter((group) => group.items.length);
  }, [query]);

  return (
    <article className="doc-article overview-page browse-library-page">
      <header className="browse-hero">
        <h1>Browse the library</h1>
        <div className="browse-cta">
          <Button type="primary" size="large" href="#/docs/getting-started">
            Install
          </Button>
          <Button size="large" href="#/components/all">
            Specimens
          </Button>
        </div>
        <Antd.Input
          className="browse-search"
          allowClear={{ clearIcon: lucideSlots.clear }}
          prefix={<Search size={14} aria-hidden="true" />}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search components…"
          aria-label="Search components"
 />
      </header>

      {filteredGroups.map((group) => (
        <section id={group.title.toLowerCase().replace(/\s+/g, '-')}
          className="component-section browse-section"
          key={group.title}
        >
          <div className="section-title">
            <div>
              <h2>{group.title}</h2>
              <p>{group.items.length} components</p>
            </div>
          </div>
          <div className="browse-card-grid">
            {group.items.map((name) => (
              <a href={routeForComponent(name)} className="browse-card" key={name}>
                <div className="browse-card-stage" aria-hidden="true">
                  {previewNames.has(name) ? (
                    <DemoRenderer name={name} />
                  ) : (
                    <span className="browse-card-fallback">{name.slice(0, 1)}</span>
                  )}
                </div>
                <div className="browse-card-meta">
                  <strong>{name}</strong>
                  <VersionBadge name={name} />
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      {!filteredGroups.length && (
        <Antd.Empty description="No components match this search." />
      )}
    </article>
  );
}
