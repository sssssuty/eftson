import { LayoutGrid, Lightbulb, LayoutTemplate, ArrowRight } from 'lucide-react';
import { designCopy, designDescription, principleDescription } from '../data/design.js';
import {
  colorsDescription,
  typographyDescription,
  COLOR_GROUPS,
  TYPE_STYLES,
  SHADOW_TOKENS,
  weightValue,
} from '../data/foundations.js';
import PageMeta from '../components/shell/PageMeta.jsx';
import FoundationSpecimen from '../components/demos/FoundationSpecimen.jsx';
import Table from '../components/ui/Table.jsx';
import Button from '../components/ui/Button.jsx';

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
    <section><h2>Resources</h2><div className="resource-links"><a href="#/components/overview"><LayoutGrid />Explore components<ArrowRight /></a><a href="#/docs/spec/values"><Lightbulb />Design values<ArrowRight /></a></div></section>
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
        <div className="pattern-toolbar"><span>{title}</span><Button type="primary" size="small">New item</Button></div>
        <div className="metric-row">
          <div><small>Total</small><strong>12,680</strong></div>
          <div><small>Active</small><strong>8,492</strong></div>
          <div><small>Conversion</small><strong>18.6%</strong></div>
        </div>
        <Table className="pattern-table"
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
    <section><h2>Guidelines and Resources</h2><div className="resource-links"><a href="#/docs/spec/values"><Lightbulb />Design values<ArrowRight /></a><a href="#/components/overview"><LayoutGrid />Component library<ArrowRight /></a><a href="#/docs/spec/overview"><LayoutTemplate />Design patterns<ArrowRight /></a></div></section>
    <section><h2>Front-end Implementation</h2><p>React components with Eftson tokens, Elza typography, and healthcare-oriented content.</p></section>
  </article>;
}

function ColorsPage() {
  const indigo = COLOR_GROUPS[0].tokens[0];
  return (
    <article className="doc-article design-page">
      <header className="article-header">
        <h1>Colors</h1>
        <p>{colorsDescription}</p>
      </header>
      <section>
        <h2>Root tokens</h2>
        <p>
          {indigo.name} <code>{indigo.hex}</code> anchors key actions across the brand palette.
        </p>
        <FoundationSpecimen name="Colors" />
      </section>
    </article>
  );
}

function FontPage() {
  return (
    <article className="doc-article design-page">
      <header className="article-header">
        <h1>Font</h1>
        <p>{typographyDescription}</p>
      </header>
      <section>
        <h2>Elza type scale</h2>
        <FoundationSpecimen name="Typography" />
      </section>
      <section>
        <h2>Typography principles</h2>
        <div className="principle-grid">
          <div>
            <span>01</span>
            <h3>Clarity</h3>
            <p>Use Elza Medium for comfortable reading and Semibold for decisive hierarchy.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Rhythm</h3>
            <p>Use the documented size and line-height pairs so dense interfaces stay calm.</p>
          </div>
        </div>
        <p className="foundation-type-count">{TYPE_STYLES.length} text styles · weights {Object.keys(weightValue).join(', ')}</p>
      </section>
    </article>
  );
}

function ShadowPage() {
  const small = SHADOW_TOKENS[0];
  return (
    <article className="doc-article design-page">
      <header className="article-header">
        <h1>Shadow</h1>
        <p>Drop shadow tokens for elevated surfaces.</p>
      </header>
      <section>
        <h2>{small.name}</h2>
        <FoundationSpecimen name="Shadow" />
      </section>
    </article>
  );
}

function MotionPage() {
  return <article className="doc-article design-page"><header className="article-header"><h1>Motion</h1><p>Natural motion for continuity and state change.</p></header><section><h2>Motion principles</h2><div className="motion-grid">{['Natural', 'Performant', 'Concise'].map((x, i) => <div key={x}><span className={`motion-ball ball-${i}`} /><h3>{x}</h3><p>{['Move objects with believable acceleration.', 'Keep transitions smooth and responsive.', 'Use only the motion needed to explain change.'][i]}</p></div>)}</div></section></article>;
}

function IllustrationsPage() {
  return <article className="doc-article design-page"><header className="article-header"><h1>Illustrations</h1><p>Geometric illustrations for approachable empty and success states.</p></header><div className="illustration-grid">{['Success', 'No data', 'Welcome', 'Connection'].map((x, i) => <div key={x}><div className={`illus illus-${i}`}><span /><i /><b /></div><h3>{x}</h3></div>)}</div></article>;
}
