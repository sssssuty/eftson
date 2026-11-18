import { useEffect, useMemo, useState } from 'react';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { componentNav, navGroupForComponent } from '../../data/components.js';
import { designGroups } from '../../data/design.js';
import { routeForComponent, routeForDesign, slugify } from '../../lib/routing.js';
function ComponentLink({ name, selected, onNavigate, nested = false }) {
  return (
    <a
      className={`${selected ? 'selected' : ''}${nested ? ' nav-child' : ''}`}
      href={routeForComponent(name)}
      onClick={onNavigate}
    >
      <span>{name}</span>
    </a>
  );
}

function ComponentGroup({ entry, route, query, onNavigate, forceOpen }) {
  const selectedChild = entry.children.find(
    (name) => route.type === 'component' && slugify(route.title) === slugify(name),
  );
  const [open, setOpen] = useState(Boolean(selectedChild) || forceOpen);

  useEffect(() => {
    setOpen(Boolean(selectedChild));
  }, [selectedChild, route.title]);

  const filteredChildren = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entry.children;
    return entry.children.filter((name) => (
      name.toLowerCase().includes(q) || entry.name.toLowerCase().includes(q)
    ));
  }, [entry, query]);

  if (query.trim() && !filteredChildren.length) return null;

  const searching = Boolean(query.trim());
  const expanded = searching ? true : open;

  return (
    <div className={`nav-family${expanded ? ' is-open' : ''}`}>
      <button
        type="button"
        className={`nav-family-trigger${selectedChild ? ' has-active' : ''}`}
        aria-expanded={expanded}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{entry.name}</span>
        <DownOutlined className="nav-family-chevron" aria-hidden="true" />
      </button>
      {expanded && (
        <div className="nav-family-children" role="group" aria-label={entry.name}>
          {filteredChildren.map((name) => (
            <ComponentLink
              key={name}
              name={name}
              nested
              selected={slugify(route.title) === slugify(name) && route.type === 'component'}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ route, open, close }) {
  const [query, setQuery] = useState('');
  const isComponents = route.section === 'components';
  const isDocs = route.section === 'docs';

  const activeGroup = route.type === 'component' ? navGroupForComponent(route.title) : null;

  const filteredNav = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return componentNav;
    return componentNav
      .map((entry) => {
        if (entry.kind === 'item') {
          return entry.name.toLowerCase().includes(q) ? entry : null;
        }
        const children = entry.children.filter((name) => (
          name.toLowerCase().includes(q) || entry.name.toLowerCase().includes(q)
        ));
        return children.length ? { ...entry, children } : null;
      })
      .filter(Boolean);
  }, [query]);

  return (
    <>
      {open && <button className="sidebar-scrim" aria-label="Close navigation" onClick={close} />}
      <aside className={`sidebar ${isComponents ? 'sidebar-components' : ''} ${open ? 'open' : ''}`}>
        <nav aria-label={`${route.section} navigation`}>
          <div className="mobile-primary-links">
            <a href="#/docs/getting-started" onClick={close}>Docs</a>
            <a href="#/components/overview" onClick={close}>Components</a>
            <a href="#/templates" onClick={close}>Templates</a>
            <a href="#/themes" onClick={close}>Themes</a>
            <a href="#/playground" onClick={close}>Playground</a>
          </div>

          {isDocs && (
            <a
              className={route.type === 'getting-started' ? 'selected top-link' : 'top-link'}
              href="#/docs/getting-started"
              onClick={close}
            >
              Getting started
            </a>
          )}

          {isDocs && designGroups.map((group, groupIndex) => (
            <section className="nav-group" key={`${group.title}-${groupIndex}`}>
              <h3>{group.title}</h3>
              {group.items.map((name, index) => {
                const href = routeForDesign(name, group.title);
                const selected = route.title === name && route.group === group.title;
                return (
                  <a className={selected ? 'selected' : ''} href={href} key={`${name}-${index}`} onClick={close}>
                    <span>{name}</span>
                  </a>
                );
              })}
            </section>
          ))}

          {isComponents && (
            <>
              <label className="sidebar-search">
                <SearchOutlined aria-hidden="true" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search components…"
                  aria-label="Search components"
                />
              </label>

              <a
                className={route.type === 'overview' ? 'selected top-link' : 'top-link'}
                href="#/components/overview"
                onClick={close}
              >
                Overview
              </a>

              <div className="sidebar-component-nav">
                {filteredNav.map((entry) => (
                  entry.kind === 'group' ? (
                    <ComponentGroup
                      key={entry.name}
                      entry={entry}
                      route={route}
                      query={query}
                      onNavigate={close}
                      forceOpen={activeGroup?.name === entry.name}
                    />
                  ) : (
                    <ComponentLink
                      key={entry.name}
                      name={entry.name}
                      selected={route.type === 'component' && slugify(route.title) === slugify(entry.name)}
                      onNavigate={close}
                    />
                  )
                ))}
                {!filteredNav.length && <p className="sidebar-empty">No matches</p>}
              </div>
            </>
          )}
        </nav>
      </aside>
    </>
  );
}
