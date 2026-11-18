import * as Antd from 'antd';
import { Copy, Check, Zap, LayoutGrid, LayoutTemplate } from 'lucide-react';
import { useState } from 'react';
import PageMeta from '../components/shell/PageMeta.jsx';
import Button from '../components/ui/Button.jsx';

const aiPrompt = `Set up Eftson in this project.

Install @eftson/ui and apply tokens:
- colorPrimary #2D40CB
- borderRadius 8
- controlHeight 40
- fontFamily Elza

Add a primary Button and open #/components/overview.`;

export default function GettingStartedPage() {
  const [copied, setCopied] = useState(false);
  const copyPrompt = () => {
    navigator.clipboard?.writeText(aiPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <article className="doc-article design-page getting-started-page">
      <header className="article-header">
        <h1>Getting started</h1>
        <PageMeta route={{ section: 'docs', title: 'Getting started' }} />
      </header>

      <section id="quick-start-with-ai">
        <h2>Quick start with AI</h2>
        <div className="ai-prompt-card">
          <div className="ai-prompt-toolbar">
            <strong><Zap /> Agent prompt</strong>
            <Button size="small" icon={copied ? <Check /> : <Copy />} onClick={copyPrompt}>
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>
          <pre><code>{aiPrompt}</code></pre>
        </div>
      </section>

      <section id="install">
        <h2>Install</h2>
        <pre className="install-block"><code>{`npm install @eftson/ui`}</code></pre>
        <pre className="install-block"><code>{`import { ConfigProvider, Button } from '@eftson/ui';

<ConfigProvider theme={{
  token: {
    colorPrimary: '#2D40CB',
    borderRadius: 8,
    controlHeight: 40,
    fontFamily: 'Elza, sans-serif',
  },
}}>
  <Button type="primary">Get started</Button>
</ConfigProvider>`}</code></pre>
      </section>

      <section id="tokens">
        <h2>Tokens</h2>
        <div className="token-grid">
          {[['colorPrimary', '#2D40CB'], ['borderRadius', '8px'], ['controlHeight', '40px'], ['fontFamily', 'Elza']].map(([k, v]) => (
            <div key={k}><code>{k}</code><strong>{v}</strong></div>
          ))}
        </div>
      </section>

      <section id="next-steps">
        <h2>Next steps</h2>
        <div className="resource-links">
          <a href="#/components/overview"><LayoutGrid />Components</a>
          <a href="#/templates"><LayoutTemplate />Templates</a>
          <a href="#/playground"><Zap />Playground</a>
        </div>
      </section>
    </article>
  );
}
