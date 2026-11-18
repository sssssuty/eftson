import {
  AppstoreOutlined, BulbOutlined, LayoutOutlined, ArrowRightOutlined,
} from '@ant-design/icons';
import { designCopy, designDescription, principleDescription } from '../data/design.js';
import PageMeta from '../components/shell/PageMeta.jsx';
import Table from '../components/ui/Table.jsx';

export default function DesignPage({ route }) {
  if (route.title === 'Introduction') return <IntroductionPage />;
  if (route.title === 'Colors') return <ColorsPage />;
  if (route.title === 'Font') return <FontPage />;
  if (route.title === 'Shadow') return <ShadowPage />;
  if (route.title === 'Motion') return <MotionPage />;
  if (route.title === 'Illustrations') return <IllustrationsPage />;
  const principles = designCopy[route.title] || designCopy[route.group] || ['Be clear and direct', 'Create a predictable structure', 'Show meaningful feedback', 'Design for real workflows'];
  return <article className="doc-article design-page"><header className="article-header"><h1>{route.title}</h1><p>{designDescription(route.title, route.group)}</p><PageMeta route={route} /></header><DesignHero title={route.title} />
    <section><h2>Principles</h2><div className="principle-grid">{principles.map((x, i) => <div key={x}><span>{String(i + 1).padStart(2, '0')}</span><h3>{x}</h3><p>{principleDescription(x)}</p></div>)}</div></section>
    <section><h2>Examples</h2><PatternExample title={route.title} /></section>
    <section><h2>Resources</h2><div className="resource-links"><a href="#/components/overview"><AppstoreOutlined />Explore components<ArrowRightOutlined /></a><a href="#/docs/spec/values"><BulbOutlined />Design values<ArrowRightOutlined /></a></div></section>
  </article>;
}

function DesignHero({ title }) {
  return <div className="design-hero" aria-hidden="true"><div className="hero-orbit one" /><div className="hero-orbit two" /><div className="hero-card"><span /><span /><span /></div><div className="hero-label">{title}</div></div>;
}

function PatternExample({ title }) {
  return (
    <div className="pattern-example">
      <aside><div className="tiny-logo" /><i /><i className="active" /><i /><i /></aside>
      <main>
        <div className="pattern-toolbar"><span>{title}</span><button>New item</button></div>
        <div className="metric-row">
          <div><small>Total</small><strong>12,680</strong></div>
          <div><small>Active</small><strong>8,492</strong></div>
          <div><small>Conversion</small><strong>18.6%</strong></div>
        </div>
        <Table
          className="pattern-table"
          size="small"
          columns={[
            { title: 'Name', dataIndex: 'name' },
            { title: 'Owner', dataIndex: 'owner' },
            { title: 'Status', dataIndex: 'status' },
          ]}
          dataSource={[
            { key: '1', name: 'Intake', owner: 'Ada', status: 'Active' },
            { key: '2', name: 'Review', owner: 'Lin', status: 'Queued' },
            { key: '3', name: 'Release', owner: 'Kai', status: 'Done' },
          ]}
        />
      </main>
    </div>
  );
}

function IntroductionPage() {
  return <article className="doc-article design-page"><header className="article-header"><h1>Introduction</h1><PageMeta route={{ section: 'design', title: 'Introduction' }} /></header><div className="intro-illustration"><div className="person one"><i /><b /></div><div className="person two"><i /><b /></div><div className="intro-ring" /><span className="shape s1" /><span className="shape s2" /><span className="shape s3" /></div>
    <p>Eftson Design helps healthcare teams ship clear, connected product experiences. Shared foundations and reusable patterns keep designers and developers aligned.</p>
    <p>Grounded in four values: Clear, Connected, Confident, and Human.</p>
    <section><h2>Guidelines and Resources</h2><div className="resource-links"><a href="#/docs/spec/values"><BulbOutlined />Design values<ArrowRightOutlined /></a><a href="#/components/overview"><AppstoreOutlined />Component library<ArrowRightOutlined /></a><a href="#/docs/spec/overview"><LayoutOutlined />Design patterns<ArrowRightOutlined /></a></div></section>
    <section><h2>Front-end Implementation</h2><p>React components with Eftson tokens, Elza typography, and healthcare-oriented content.</p></section>
  </article>;
}

function ColorsPage() {
  const palettes = [
    ['Eftson Indigo', ['#F3F7FF', '#E2EBFF', '#9BBCFF', '#2D40CB', '#0C0554']],
    ['Connected Blue', ['#F3F7FF', '#E2EBFF', '#9BBCFF', '#2B6FF6', '#242992']],
    ['Success Green', ['#F6FDF8', '#EAF7EB', '#9EDEB6', '#15803D', '#0D5228']],
    ['Attention Yellow', ['#FFFCF0', '#FEF3C7', '#F6BF62', '#B45309', '#78350F']],
    ['Critical Red', ['#FFF2F2', '#FEE2E2', '#EA5252', '#A41616', '#6E1010']],
    ['Support Purple', ['#F9F5FE', '#EEE5F9', '#E7CBFF', '#7F40C9', '#50247E']],
  ];
  return <article className="doc-article design-page"><header className="article-header"><h1>Colors</h1><p>Brand and semantic color for hierarchy and clinical state.</p></header><section><h2>Brand and semantic palettes</h2><p>Indigo-default <code>#2D40CB</code> anchors key actions. Connected Blue supports focus and selection.</p><div className="palette-grid">{palettes.map(([name, colors]) => <div className="swatch" key={name}><div>{colors.map((color) => <span style={{ background: color }} key={color} title={color} />)}</div><strong>{name}</strong><code>{colors[3]}</code></div>)}</div></section><section><h2>Neutral colors</h2><div className="neutral-strip">{['#FDFDFD', '#F9F9F9', '#EBECEF', '#D4D7DD', '#BDC2CB', '#A7ADB9', '#898E9A', '#6C717C', '#50545F', '#353A44', '#141414'].map((c) => <span key={c} style={{ background: c }} title={c} />)}</div></section></article>;
}

function FontPage() {
  return <article className="doc-article design-page"><header className="article-header"><h1>Font</h1><p>Elza for clear hierarchy across dense healthcare workflows.</p></header><section><h2>Elza type scale</h2><div className="type-scale">{[[40, 48, 'Heading H1'], [36, 44, 'Heading H2'], [32, 40, 'Heading H3'], [28, 36, 'Heading H4'], [24, 32, 'Heading H5'], [20, 28, 'Heading H6'], [18, 24, 'Label XLarge'], [16, 22, 'Paragraph Large'], [14, 18, 'Paragraph Medium'], [12, 16, 'Paragraph Small']].map(([size, line, label]) => <div key={label}><span>{size}/{line}</span><p style={{ fontSize: size, lineHeight: `${line}px`, fontWeight: label.includes('Heading') ? 600 : 500 }}>{label} — Clear care, connected</p></div>)}</div></section><section><h2>Typography principles</h2><div className="principle-grid"><div><span>01</span><h3>Clarity</h3><p>Use Elza Medium for comfortable reading and Semibold for decisive hierarchy.</p></div><div><span>02</span><h3>Rhythm</h3><p>Use the 4px-based type and spacing scale to keep dense interfaces calm.</p></div></div></section></article>;
}

function ShadowPage() {
  return <article className="doc-article design-page"><header className="article-header"><h1>Shadow</h1><p>Elevation for floating surfaces.</p></header><section><h2>Elevation</h2><div className="shadow-grid">{['Level 1 · Card', 'Level 2 · Dropdown', 'Level 3 · Modal'].map((x, i) => <div className={`shadow-${i + 1}`} key={x}><span>{x}</span><code>boxShadow{ i + 1 }</code></div>)}</div></section></article>;
}

function MotionPage() {
  return <article className="doc-article design-page"><header className="article-header"><h1>Motion</h1><p>Natural motion for continuity and state change.</p></header><section><h2>Motion principles</h2><div className="motion-grid">{['Natural', 'Performant', 'Concise'].map((x, i) => <div key={x}><span className={`motion-ball ball-${i}`} /><h3>{x}</h3><p>{['Move objects with believable acceleration.', 'Keep transitions smooth and responsive.', 'Use only the motion needed to explain change.'][i]}</p></div>)}</div></section></article>;
}

function IllustrationsPage() {
  return <article className="doc-article design-page"><header className="article-header"><h1>Illustrations</h1><p>Geometric illustrations for approachable empty and success states.</p></header><div className="illustration-grid">{['Success', 'No data', 'Welcome', 'Connection'].map((x, i) => <div key={x}><div className={`illus illus-${i}`}><span /><i /><b /></div><h3>{x}</h3></div>)}</div></article>;
}
