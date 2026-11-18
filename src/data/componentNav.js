/**
 * Left nav inventory sourced from Youlify Design System New (Figma).
 * Only components that exist as pages in that file.
 */
export const componentNav = [
  { kind: 'item', name: 'Card' },
  { kind: 'item', name: 'Chip' },
  { kind: 'item', name: 'Conversational AI' },
  {
    kind: 'group',
    name: 'Data Grid',
    children: ['Data Grid', 'Data Grid Cell'],
  },
  {
    kind: 'group',
    name: 'Data Table',
    children: ['Data Table', 'Data Table Cell'],
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
  { kind: 'item', name: 'Input' },
  { kind: 'item', name: 'Log In' },
  { kind: 'item', name: 'Message' },
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
  { kind: 'item', name: 'Tabs' },
  { kind: 'item', name: 'Text Paragraph' },
  { kind: 'item', name: 'Toggle' },
  { kind: 'item', name: 'Tooltips' },
  { kind: 'item', name: 'Upload & Download' },
  { kind: 'item', name: 'Warning Banner' },
];

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
