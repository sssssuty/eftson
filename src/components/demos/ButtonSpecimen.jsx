import { Gem } from 'lucide-react';
import Button from '../ui/Button.jsx';

const PREVIEWS = [
  { tone: 'solid', icon: 'none', label: 'Primary Button' },
  { tone: 'solid', icon: 'leading', label: 'Primary Button' },
  { tone: 'soft', icon: 'leading', label: 'Primary Button' },
  { tone: 'text', icon: 'none', label: 'Primary Button' },
  { tone: 'solid', icon: 'only', label: 'Primary Button' },
];

function ButtonPreview({
  tone = 'solid',
  size = 'md',
  icon = 'none',
  label = 'Primary Button',
}) {
  const iconNode = <Gem size={size === 'sm' ? 12 : 14} aria-hidden="true" />;
  return (
    <Button
      tone={tone}
      size={size}
      icon={icon === 'leading' || icon === 'only' ? iconNode : undefined}
      iconRight={icon === 'trailing' ? iconNode : undefined}
      iconOnly={icon === 'only'}
      aria-label={icon === 'only' ? label : undefined}
    >
      {icon === 'only' ? null : label}
    </Button>
  );
}

export default function ButtonSpecimen({ compact = false }) {
  const items = compact ? PREVIEWS.slice(0, 4) : PREVIEWS;
  const sizes = compact ? ['md'] : ['lg', 'md', 'sm'];

  return (
    <div className={`button-specimen${compact ? ' is-compact' : ''}`} aria-label="Button examples">
      <div className="button-specimen-strip">
        {items.map((item) => (
          <div className="button-specimen-stack" key={`${item.tone}-${item.icon}`}>
            {sizes.map((size) => (
              <ButtonPreview
                key={size}
                tone={item.tone}
                size={size}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
