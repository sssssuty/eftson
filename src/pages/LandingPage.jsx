import * as Antd from 'antd';
import {
  ArrowRightOutlined, AppstoreOutlined, BgColorsOutlined,
  LayoutOutlined, ThunderboltOutlined, BulbOutlined,
} from '@ant-design/icons';
import DemoRenderer from '../components/demos/DemoRenderer.jsx';

const teasers = [
  {
    href: '#/docs/getting-started',
    icon: <ThunderboltOutlined />,
    title: 'Getting started',
    body: 'AI prompt, install, and tokens.',
  },
  {
    href: '#/components/overview',
    icon: <AppstoreOutlined />,
    title: 'Components',
    body: 'Live demos, states, and measurements.',
  },
  {
    href: '#/themes',
    icon: <BgColorsOutlined />,
    title: 'Themes',
    body: 'Clinical, Connected, Care Green, and more.',
  },
  {
    href: '#/templates',
    icon: <LayoutOutlined />,
    title: 'Templates',
    body: 'Clearinghouse and denial workflows.',
  },
];

export default function LandingPage() {
  return (
    <article className="landing-page">
      <section className="landing-hero">
        <div className="landing-hero-copy">
          <div className="landing-brand-lockup" aria-label="Eftson">
            <span className="brand-mark" aria-hidden="true" />
            <strong className="landing-brand-word">Eftson</strong>
          </div>
          <h1>Open source design system</h1>
          <p>Customizable, agent-ready components for product teams.</p>
          <div className="landing-cta">
            <Antd.Button type="primary" size="large" href="#/docs/getting-started">
              Get started
            </Antd.Button>
            <Antd.Button size="large" href="#/components/overview">
              Browse components <ArrowRightOutlined />
            </Antd.Button>
          </div>
        </div>
        <div className="landing-float-stage" aria-hidden="true">
          <div className="landing-float float-a">
            <DemoRenderer name="Data Table" compact />
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
              <em>Explore <ArrowRightOutlined /></em>
            </a>
          ))}
        </div>
      </section>

      <section className="landing-values">
        <div>
          <h2>Clear. Connected. Confident. Human.</h2>
          <Antd.Button type="link" href="#/docs/spec/values">
            Read design values <ArrowRightOutlined />
          </Antd.Button>
        </div>
        <div className="landing-value-cards">
          {['Clear', 'Connected', 'Confident', 'Human'].map((value, i) => (
            <div key={value} style={{ '--i': i }}>
              <BulbOutlined />
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
