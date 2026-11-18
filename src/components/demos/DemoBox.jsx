import { useState } from 'react';
import { Code2 } from 'lucide-react';
import CopyButton from '../shell/CopyButton.jsx';
import Button from '../ui/Button.jsx';

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
        <Button
          tone="soft"
          size="small"
          iconOnly
          aria-label="Toggle code"
          icon={<Code2 size={14} />}
          onClick={() => setShowCode(!showCode)}
        />
        <CopyButton text={code} />
      </div>
      {showCode && (
        <pre><code>{code}</code></pre>
      )}
    </section>
  );
}
