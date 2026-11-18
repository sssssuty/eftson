import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Button from '../ui/Button.jsx';

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      tone="soft"
      size="small"
      iconOnly
      className="copy-button"
      aria-label={copied ? 'Copied' : 'Copy'}
      icon={copied ? <Check size={14} /> : <Copy size={14} />}
      onClick={() => {
        navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1300);
      }}
    />
  );
}
