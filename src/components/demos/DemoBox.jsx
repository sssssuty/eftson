import { useState } from 'react';
import { CodeOutlined } from '@ant-design/icons';
import CopyButton from '../shell/CopyButton.jsx';

export default function DemoBox({ title, description, code, children, className = '' }) {
  const [showCode, setShowCode] = useState(false);
  return (
    <section className={`demo-box ${className}`}>
      <div className="demo-stage">{children}</div>
      <div className="demo-caption">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="demo-tools">
        <button onClick={() => setShowCode(!showCode)} aria-label="Toggle code">
          <CodeOutlined />
        </button>
        <CopyButton text={code} />
      </div>
      {showCode && (
        <pre><code>{code}</code></pre>
      )}
    </section>
  );
}
