import * as Antd from 'antd';
import { ArrowRight, LayoutGrid, LayoutTemplate, Zap, Lightbulb } from 'lucide-react';
import DemoRenderer from '../components/demos/DemoRenderer.jsx';
import Button from '../components/ui/Button.jsx';

const teasers = [
  {
    href: '#/docs/getting-started',
    icon: <Zap />,
    title: 'Getting started',
    body: 'AI prompt, install, and tokens.',
  },
  {
    href: '#/components/overview',
    icon: <LayoutGrid />,
    title: 'Components',
    body: 'Live demos, states, and measurements.',
  },
  {
    href: '#/templates',
    icon: <LayoutTemplate />,
    title: 'Templates',
    body: 'Clearinghouse and denial workflows.',
  },
  {
    href: '#/playground',
    icon: <Lightbulb />,
    title: 'Playground',
    body: 'Try templates and tweak configuration live.',
  },
];

export default function LandingPage() {
  return (
    <article className="landing-page">
      <section className="landing-hero">
        <div className="landing-hero-copy">
          <div className="landing-brand-lockup" aria-label="Eftson">
            <strong className="landing-brand-word">Eftson</strong>
          </div>
          <h1>Open source design system</h1>
          <p>Customizable, agent-ready components for product teams.</p>
          <div className="landing-cta">
            <Button type="primary" size="large" href="#/docs/getting-started">
              Get started
            </Button>
            <Button size="large" href="#/components/overview" iconRight={<ArrowRight size={16} />}>
              Browse components
            </Button>
          </div>
        </div>
        <div className="landing-float-stage" aria-hidden="true">
          <div className="landing-float float-a">
            <DemoRenderer name="Table" compact />
          </div>
          <div className="landing-float float-b">
            <DemoRenderer name="Alert" />
          </div>
          <div className="landing-float float-c">
            <DemoRenderer name="Segmented" />
          </div>
          <div className="landing-float float-d">
            <DemoRenderer name="Tag" />
          </div>
        </div>
      </section>

      <section className="landing-teasers">
        <div className="landing-section-head">
          <h2>Start anywhere</h2>
        </div>
        <div className="landing-teaser-grid">
          {teasers.map((item) => (
            <a className="landing-teaser" href={item.href} key={item.title}>
              <span>{item.icon}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
              <em>Explore <ArrowRight /></em>
            </a>
          ))}
        </div>
      </section>

      <section className="landing-values">
        <div>
          <h2>Clear. Connected. Confident. Human.</h2>
          <Button type="link" href="#/docs/spec/values" iconRight={<ArrowRight size={14} />}>
            Read design values
          </Button>
        </div>
        <div className="landing-value-cards">
          {['Clear', 'Connected', 'Confident', 'Human'].map((value, i) => (
            <div key={value} style={{ '--i': i }}>
              <Lightbulb />
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
