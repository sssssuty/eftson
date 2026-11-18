/**
 * Components sidebar: section titles are non-clickable labels.
 * Overview is rendered separately above these sections.
 */
export const componentNavSections = [
  {
    title: 'Foundations',
    items: [
      { kind: 'item', name: 'Typography' },
      { kind: 'item', name: 'Colors' },
      { kind: 'item', name: 'Spacing' },
      { kind: 'item', name: 'Corner' },
      { kind: 'item', name: 'Shadow' },
      { kind: 'item', name: 'Grid' },
    ],
  },
  {
    title: 'Molecules',
    items: [
      { kind: 'item', name: 'Button' },
      { kind: 'item', name: 'Card' },
      { kind: 'item', name: 'Chip' },
      {
        kind: 'group',
        name: 'Data Grid',
        children: ['Data Grid', 'Data Grid Cell'],
      },
      { kind: 'item', name: 'Data Visualization Axis' },
      { kind: 'item', name: 'Date Picker' },
      { kind: 'item', name: 'Display Form Text' },
      { kind: 'item', name: 'Dropdown Menu' },
      {
        kind: 'group',
        name: 'Filter',
        children: ['Filter Bar & Dropdown Menu', 'Filter Item'],
      },
      { kind: 'item', name: 'Footer' },
      {
        kind: 'group',
        name: 'Form List',
        children: ['Form List', 'Form List Row & Section'],
      },
      { kind: 'item', name: 'Icon' },
      { kind: 'item', name: 'Input' },
      { kind: 'item', name: 'Log In' },
      {
        kind: 'group',
        name: 'Navigation',
        children: ['Navigation', 'Navigation Profile'],
      },
      { kind: 'item', name: 'Page Header' },
      { kind: 'item', name: 'Pagination' },
      { kind: 'item', name: 'Popup Window' },
      {
        kind: 'group',
        name: 'Progress',
        children: ['Progress', 'Progress Indicator'],
      },
      { kind: 'item', name: 'Quick Info' },
      { kind: 'item', name: 'Radio Selection' },
      { kind: 'item', name: 'Slider' },
      {
        kind: 'group',
        name: 'Table',
        children: ['Table', 'Table Cell'],
      },
      { kind: 'item', name: 'Tabs' },
      { kind: 'item', name: 'Text Paragraph' },
      { kind: 'item', name: 'Toggle' },
      { kind: 'item', name: 'Tooltips' },
      { kind: 'item', name: 'Upload & Download' },
      { kind: 'item', name: 'Warning Banner' },
    ],
  },
  {
    title: 'Data Visualizations and Graphs',
    items: [
      { kind: 'item', name: 'Bar Chart' },
      { kind: 'item', name: 'Pie Chart' },
      { kind: 'item', name: 'Line Chart' },
      { kind: 'item', name: 'Area Chart' },
    ],
  },
  {
    title: 'Conversational AI',
    items: [
      { kind: 'item', name: 'Message' },
    ],
  },
];

/** Flat list of nav entries (items + collapsible families) across all sections. */
export const componentNav = componentNavSections.flatMap((section) => section.items);

export function flattenNavNames(nav = componentNav) {
  const names = [];
  nav.forEach((entry) => {
    if (entry.kind === 'group') names.push(...entry.children);
    else names.push(entry.name);
  });
  return [...new Set(names)];
}

export function navGroupForComponent(name, nav = componentNav) {
  return nav.find((entry) => entry.kind === 'group' && entry.children.includes(name)) || null;
}

export function filterNavSections(query, sections = componentNavSections) {
  const q = query.trim().toLowerCase();
  if (!q) return sections;

  return sections
    .map((section) => {
      const items = section.items
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

      const titleMatch = section.title.toLowerCase().includes(q);
      if (!items.length && !titleMatch) return null;
      return { ...section, items: titleMatch && !items.length ? section.items : items };
    })
    .filter(Boolean);
}
