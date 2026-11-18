import { useState } from 'react';
import * as Antd from 'antd';
import { ConfigProvider } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { eftsonThemes, defaultThemeId } from '../data/themes.js';
import DemoRenderer from '../components/demos/DemoRenderer.jsx';

export default function ThemesPage() {
  const [themeId, setThemeId] = useState(defaultThemeId);
  const theme = eftsonThemes.find((item) => item.id === themeId) || eftsonThemes[0];
  const isNight = theme.id === 'night-shift';

  return (
    <article className="doc-article themes-page">
      <header className="article-header" id="themes">
        <h1>Themes</h1>
        <p>Pick a theme and preview live components.</p>
      </header>

      <div className="themes-workbench">
        <aside className="theme-picker" aria-label="Theme picker">
          <div className="theme-picker-actions">
            <Antd.Button type="primary" href={`#/playground?theme=${theme.id}`}>
              Use this theme
            </Antd.Button>
            <Antd.Button href="#/playground">
              Try in Playground
            </Antd.Button>
          </div>
          {eftsonThemes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === theme.id ? 'selected' : ''}
              onClick={() => setThemeId(item.id)}
            >
              <span className="theme-swatch" style={{ background: item.preview.accent }} />
              <span>
                <strong>{item.name}</strong>
                <small>{item.description}</small>
              </span>
              {item.id === theme.id && <CheckOutlined />}
            </button>
          ))}
        </aside>

        <section className="theme-preview-pane" id="preview" style={{
          '--theme-surface': theme.preview.surface,
          '--theme-accent': theme.preview.accent,
          '--theme-soft': theme.preview.soft,
          background: theme.preview.surface,
          color: theme.token.colorTextBase,
        }}>
          <div className="theme-preview-toolbar">
            <strong>{theme.name}</strong>
            <code>{theme.token.colorPrimary}</code>
          </div>
          <ConfigProvider
            theme={{
              algorithm: isNight ? Antd.theme.darkAlgorithm : Antd.theme.defaultAlgorithm,
              token: {
                ...theme.token,
                fontFamily: "Elza, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeightStrong: 600,
              },
            }}
          >
            <div className={`theme-live-preview ${isNight ? 'is-night' : ''}`}>
              <div className="theme-preview-card">
                <h3>Claim workspace</h3>
                <p>Primary actions, status, and form density update with the selected theme.</p>
                <Antd.Space wrap>
                  <Antd.Button type="primary">Review claim</Antd.Button>
                  <Antd.Button>Secondary</Antd.Button>
                  <Antd.Switch defaultChecked />
                </Antd.Space>
              </div>
              <div className="theme-preview-card">
                <DemoRenderer name="Alert" />
              </div>
              <div className="theme-preview-card">
                <DemoRenderer name="Tag" />
              </div>
              <div className="theme-preview-card wide">
                <DemoRenderer name="Steps" />
              </div>
            </div>
          </ConfigProvider>

          <section id="tokens" className="theme-token-panel">
            <h2>Tokens</h2>
            <div className="token-grid">
              {Object.entries(theme.token).map(([key, value]) => (
                <div key={key}>
                  <code>{key}</code>
                  <strong>{String(value)}</strong>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </article>
  );
}
