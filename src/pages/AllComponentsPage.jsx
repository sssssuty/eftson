import {
  AppstoreOutlined, LayoutOutlined, BarsOutlined, FormOutlined, TableOutlined, MessageOutlined, ToolOutlined, ArrowRightOutlined,
} from '@ant-design/icons';
import { componentGroups, componentDescriptions, wideSpecimens } from '../data/components.js';
import { routeForComponent } from '../lib/routing.js';
import DemoRenderer from '../components/demos/DemoRenderer.jsx';

const groupIcons = {
  General: <AppstoreOutlined />, Layout: <LayoutOutlined />, Navigation: <BarsOutlined />,
  'Data Entry': <FormOutlined />, 'Data Display': <TableOutlined />, Feedback: <MessageOutlined />,
  Other: <ToolOutlined />,
};

export default function AllComponentsPage() {
  return <article className="doc-article all-components-page">
    <header className="article-header"><h1>All Components</h1><p>Every component and its core visual style on one page.</p></header>
    <section className="foundation-strip" id="foundations"><div><span>Primary</span><strong>#2D40CB</strong></div><div><span>Accent</span><strong>#2B6FF6</strong></div><div><span>Success</span><strong>#15803D</strong></div><div><span>Warning</span><strong>#B45309</strong></div><div><span>Critical</span><strong>#A41616</strong></div><div className="font-foundation"><span>Typeface</span><strong>Elza</strong></div></section>
    {componentGroups.map((group) => <section className="specimen-section" id={group.title.toLowerCase().replace(/\s+/g, '-')} key={group.title}>
      <div className="section-title"><span>{groupIcons[group.title]}</span><div><h2>{group.title}</h2><p>{group.items.length} components</p></div></div>
      <div className="specimen-grid">{group.items.map((name) => <div className={`specimen-card ${wideSpecimens.has(name) ? 'wide' : ''}`} key={name}><header><div><h3>{name}</h3><p>{componentDescriptions[name]}</p></div><a href={routeForComponent(name)} aria-label={`Open ${name} documentation`}><ArrowRightOutlined /></a></header><div className="specimen-stage"><DemoRenderer name={name} /></div></div>)}</div>
    </section>)}
  </article>;
}
