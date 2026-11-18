import { useDeferredValue, useMemo, useState } from 'react';
import { icons, Search } from 'lucide-react';

const ICON_ENTRIES = Object.entries(icons)
  .filter(([name, component]) => (
    Boolean(component)
    && name !== 'createLucideIcon'
    && !name.endsWith('Icon')
  ))
  .sort(([a], [b]) => a.localeCompare(b));

export default function IconGallery({ compact = false }) {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = useMemo(() => {
    if (!deferredQuery) return ICON_ENTRIES;
    return ICON_ENTRIES.filter(([name]) => name.toLowerCase().includes(deferredQuery));
  }, [deferredQuery]);

  const visible = compact ? filtered.slice(0, 48) : filtered;

  return (
    <div className={`icon-gallery${compact ? ' is-compact' : ''}`}>
      <div className="icon-gallery-toolbar">
        <label className="icon-gallery-search">
          <Search size={16} aria-hidden="true" />
          <input value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Lucide icons…"
            aria-label="Search Lucide icons"
 />
        </label>
        <span className="icon-gallery-count">
          {visible.length.toLocaleString()}
          {!compact && ` / ${ICON_ENTRIES.length.toLocaleString()}`}
          {' '}
          icons
        </span>
      </div>
      <div className="icon-gallery-grid" role="list">
        {visible.map(([name, Icon]) => (
          <button type="button"
            className="icon-gallery-item"
            key={name}
            role="listitem"
            title={name}
            onClick={() => navigator.clipboard?.writeText(name)}
          >
            <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
            <span>{name}</span>
          </button>
        ))}
      </div>
      {compact && filtered.length > visible.length && (
        <p className="icon-gallery-more">
          Showing 48 of
          {' '}
          {filtered.length.toLocaleString()}
          . Open Icon for the full Lucide catalog.
        </p>
      )}
    </div>
  );
}

export const lucideIconCount = ICON_ENTRIES.length;
