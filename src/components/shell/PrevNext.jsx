import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { allComponents } from '../../data/components.js';
import { designGroups } from '../../data/design.js';
import { routeForComponent, routeForDesign } from '../../lib/routing.js';

export default function PrevNext({ route }) {
  if (route.section !== 'components' && route.section !== 'docs') return null;

  const entries = route.section === 'components'
    ? [
      { name: 'Components Overview', href: '#/components/overview' },
      { name: 'All Components', href: '#/components/all' },
      { name: 'Changelog', href: '#/components/changelog' },
      ...allComponents.map((name) => ({ name, href: routeForComponent(name) })),
    ]
    : [
      { name: 'Getting started', href: '#/docs/getting-started' },
      ...designGroups.flatMap((g) => g.items.map((name) => ({
        name,
        group: g.title,
        href: routeForDesign(name, g.title),
      }))),
    ];

  let index = entries.findIndex((e) => e.name === route.title && (!e.group || e.group === route.group));
  if (route.type === 'overview') index = 0;
  if (route.type === 'all') index = 1;
  if (route.type === 'changelog') index = 2;
  if (route.type === 'getting-started') index = 0;

  const prev = entries[index - 1];
  const next = entries[index + 1];

  return (
    <nav className="prev-next">
      {prev ? (
        <a href={prev.href}>
          <ArrowLeftOutlined />
          <span><small>Previous</small>{prev.name}</span>
        </a>
      ) : <span />}
      {next ? (
        <a href={next.href}>
          <span><small>Next</small>{next.name}</span>
          <ArrowRightOutlined />
        </a>
      ) : <span />}
    </nav>
  );
}
