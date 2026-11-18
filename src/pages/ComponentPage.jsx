import * as Antd from 'antd';
import {
  componentDescriptions, anatomyRows, bestPractices, componentMeasurements,
} from '../data/components.js';
import DemoBox from '../components/demos/DemoBox.jsx';
import DemoRenderer from '../components/demos/DemoRenderer.jsx';
import Table, { SimpleTable } from '../components/ui/Table.jsx';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'properties', label: 'Properties' },
  { id: 'accessibility', label: 'Accessibility' },
];

const REQUIRED_PROPS = [
  ['children', 'Button label or content.', 'ReactNode'],
];

const OPTIONAL_PROPS = [
  ['className', 'Root class name.', 'string', '—'],
  ['disabled', 'Disabled state.', 'boolean', 'false'],
  ['size', 'Density.', 'large | middle | small', 'middle'],
  ['variant', 'Visual style.', 'outlined | filled | borderless', 'outlined'],
  ['type', 'Semantic emphasis.', 'primary | default | dashed | text | link', 'default'],
  ['loading', 'Shows a loading indicator.', 'boolean', 'false'],
  ['onClick', 'Click handler.', '(event) => void', '—'],
];

const COLOR_CONTRAST_ROWS = [
  [
    'Text label',
    '4.5:1',
    'Rest, Hover, Pointer down',
    'Button text must have at least 4.5:1 contrast with the button background in every state. For Hover and Pointer down, measure the final background after the overlay is applied.',
  ],
  [
    'Essential icon or spinner arc',
    '3:1',
    'Icon only, Loading',
    'An icon used instead of text must have at least 3:1 contrast with the button background. The moving spinner arc must also meet 3:1. An icon beside a visible label does not need its own check.',
  ],
  [
    'Badge text',
    '4.5:1',
    'Rest, Hover, Pointer down',
    'Badge text inside a button must have at least 4.5:1 contrast with the badge background across Rest, Hover, and Pointer down.',
  ],
  [
    'Visible control boundary',
    '3:1 if needed',
    'Rest',
    'The button edge needs 3:1 contrast only when users need it to see the control. A text-only button can rely on its label.',
  ],
  [
    'Keyboard focus indicator',
    '3:1',
    'Focus visible',
    'The focus outline needs at least 3:1 contrast with the area around the button. Destructive buttons use a red outline.',
  ],
  [
    'Disabled appearance',
    'Not required',
    'Disabled',
    'Disabled controls do not need to meet these contrast ratios.',
  ],
];

function codeCell(value) {
  return <code>{value}</code>;
}

function PropTable({ rows, showDefault }) {
  const columns = [
    { title: 'Property', dataIndex: 'property', key: 'property', width: 140 },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Type', dataIndex: 'type', key: 'type', render: codeCell },
    ...(showDefault
      ? [{ title: 'Default', dataIndex: 'defaultValue', key: 'defaultValue', width: 120, render: codeCell }]
      : []),
  ];

  const dataSource = rows.map(([property, description, type, defaultValue]) => ({
    key: property,
    property,
    description,
    type,
    defaultValue,
  }));

  return <Table columns={columns} dataSource={dataSource} />;
}

function OverviewSpecimen({ name }) {
  return (
    <div className="overview-specimen" aria-label={`${name} preview`}>
      <div className="overview-specimen-stage">
        <DemoRenderer name={name} />
      </div>
    </div>
  );
}

function StatesSection({ name }) {
  const states = [
    { key: 'static', label: 'Static', props: {} },
    { key: 'hover', label: 'Hover', props: { className: 'state-hover' } },
    { key: 'pressed', label: 'Pressed', props: { className: 'state-pressed' } },
    { key: 'focus', label: 'Focus', props: { className: 'state-focus' } },
    { key: 'disabled', label: 'Disabled', props: { disabled: true } },
    { key: 'loading', label: 'Loading', props: { loading: true } },
  ];

  return (
    <section id="states">
      <h2>States</h2>
      <div className="states-grid">
        {states.map((state) => (
          <div className={`state-card state-${state.key}`} key={state.key}>
            <span className="state-label">{state.label}</span>
            <div className="state-stage">
              {name === 'Input' ? (
                <Antd.Input
                  placeholder="Value"
                  disabled={state.props.disabled}
                  className={state.props.className}
                />
              ) : name === 'Toggle' ? (
                <Antd.Switch
                  defaultChecked={state.key !== 'disabled'}
                  disabled={state.props.disabled}
                  loading={state.props.loading}
                />
              ) : (
                <div className={`state-proxy ${state.props.className || ''} ${state.props.disabled ? 'is-disabled' : ''} ${state.props.loading ? 'is-loading' : ''}`}>
                  <DemoRenderer name={name} compact />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MeasurementsSection({ name }) {
  const m = componentMeasurements[name] || componentMeasurements.default;
  const rows = [
    ['Height', m.height],
    ['Width', m.width],
    ['Padding', m.padding],
    ['Radius', m.radius],
    ['Border', m.border],
    ['Font', m.font],
  ];

  return (
    <section id="static-measurements">
      <h2>Static measurements</h2>
      <div className="measure-layout">
        <div className="measure-visual" aria-hidden="true">
          <div className="measure-box">
            <span className="measure-tag top">height {m.height}</span>
            <span className="measure-tag left">pad</span>
            <div className="measure-sample">
              <DemoRenderer name={name} compact />
            </div>
            <span className="measure-tag right">radius {m.radius}</span>
            <span className="measure-tag bottom">border · font</span>
          </div>
        </div>
        <SimpleTable
          headers={['Property', 'Value']}
          rows={rows.map(([k, v]) => [k, <code key={k}>{v}</code>])}
          columnProps={[{ width: 160 }, {}]}
        />
      </div>
    </section>
  );
}

function OverviewTab({ name, code, rows, practices, description }) {
  const practiceRows = [
    ...practices.do.map((item) => ['Do', item]),
    ...practices.dont.map((item) => ['Don’t', item]),
  ];

  return (
    <>
      <OverviewSpecimen name={name} />

      <section id="usage">
        <h2>Usage</h2>
        {description ? <p>{description}</p> : null}
        <div className="usage-import">
          <span>ts</span>
          <pre><code>{`import { ${name} } from '@eftson/ui';`}</code></pre>
        </div>
      </section>

      <section id="anatomy">
        <h2>Anatomy</h2>
        <SimpleTable
          headers={['Element', 'Description']}
          rows={rows}
          columnProps={[{ width: 160 }, {}]}
          className="anatomy-table"
        />
      </section>

      <section id="best-practices">
        <h2>Best practices</h2>
        <SimpleTable
          headers={['Guidance', 'Practices']}
          rows={practiceRows}
          columnProps={[{ width: 120 }, {}]}
        />
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <div className="demo-grid">
          <DemoBox title="Basic" code={code}>
            <DemoRenderer name={name} />
          </DemoBox>
          <DemoBox title="Sizes and states" code={code}>
            <DemoRenderer name={name} variant={1} />
          </DemoBox>
        </div>
      </section>

      <StatesSection name={name} />
      <MeasurementsSection name={name} />
    </>
  );
}

function PropertiesTab({ name }) {
  return (
    <>
      <section id="props">
        <h2>Props</h2>
        <p>API surface for <code>{name}</code>.</p>
      </section>
      <section id="required">
        <h3>Required</h3>
        <PropTable rows={REQUIRED_PROPS} showDefault={false} />
      </section>
      <section id="optional">
        <h3>Optional</h3>
        <PropTable rows={OPTIONAL_PROPS} showDefault />
      </section>
      <section id="design-token">
        <h2>Design Token</h2>
        <div className="token-grid">
          {[['colorPrimary', '#2D40CB'], ['borderRadius', '8px'], ['controlHeight', '40px'], ['fontFamily', 'Elza']].map(([k, v]) => (
            <div key={k}><code>{k}</code><strong>{v}</strong></div>
          ))}
        </div>
      </section>
    </>
  );
}

function AccessibilityTab() {
  return (
    <section id="color-contrast">
      <h2>Color contrast</h2>
      <SimpleTable
        className="a11y-contrast-table"
        headers={['Requirement', 'Ratio', 'Applies to', 'Guidance']}
        rows={COLOR_CONTRAST_ROWS.map(([req, ratio, applies, guidance]) => [
          req,
          <code key={req}>{ratio}</code>,
          applies,
          guidance,
        ])}
        columnProps={[
          { width: 180 },
          { width: 110 },
          { width: 180 },
          {},
        ]}
      />
    </section>
  );
}

export default function ComponentPage({ route, tab = 'overview', onTabChange }) {
  const name = route.title;
  const description = componentDescriptions[name];
  const code = `import { ${name} } from '@eftson/ui';\n\nexport default () => <${name} />;`;
  const rows = anatomyRows[name] || anatomyRows.default;
  const practices = bestPractices[name] || bestPractices.default;

  const selectTab = (id) => {
    onTabChange?.(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="doc-article component-detail">
      <header className="article-header component-hero">
        <h1>{name}</h1>
        <p className="component-package">
          <code>@eftson/ui</code>
          <span>v1.0.0</span>
          <span className="dot" aria-hidden="true">·</span>
          <span>{name}</span>
        </p>
        <div className="component-tabs" role="tablist" aria-label={`${name} documentation`}>
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={tab === item.id}
              aria-controls={`panel-${item.id}`}
              className={`component-tab${tab === item.id ? ' is-active' : ''}`}
              onClick={() => selectTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <div
        className="component-tab-panel"
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
      >
        {tab === 'overview' && (
          <OverviewTab
            name={name}
            code={code}
            rows={rows}
            practices={practices}
            description={description}
          />
        )}
        {tab === 'properties' && <PropertiesTab name={name} />}
        {tab === 'accessibility' && <AccessibilityTab />}
      </div>
    </article>
  );
}
