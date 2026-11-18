import { LoaderCircle } from 'lucide-react';

const SIZE_MAP = {
  large: 'lg',
  middle: 'md',
  small: 'sm',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
};

const TONE_MAP = {
  primary: 'solid',
  default: 'soft',
  dashed: 'soft',
  text: 'text',
  link: 'link',
  solid: 'solid',
  soft: 'soft',
  outline: 'outline',
};

/**
 * Eftson Button — solid / soft / outline / text / link
 */
export default function Button({
  children,
  className = '',
  tone,
  type = 'default',
  htmlType = 'button',
  size = 'middle',
  href,
  icon,
  iconRight,
  iconOnly = false,
  block = false,
  danger = false,
  disabled = false,
  loading = false,
  forceState,
  onClick,
  'aria-label': ariaLabel,
  ...rest
}) {
  const resolvedTone = tone || TONE_MAP[type] || 'soft';
  const resolvedSize = SIZE_MAP[size] || 'md';
  const onlyIcon = iconOnly || (Boolean(icon) && !children && !iconRight);
  const typeClass = resolvedSize === 'lg'
    ? 'eftson-type-label-medium-medium'
    : resolvedSize === 'sm'
      ? 'eftson-type-label-small-medium'
      : 'eftson-type-label-medium-medium';

  const classes = [
    'eftson-btn',
    typeClass,
    `is-${resolvedTone}`,
    `is-${resolvedSize}`,
    onlyIcon ? 'is-icon-only' : '',
    block ? 'is-block' : '',
    danger ? 'is-danger' : '',
    loading ? 'is-loading' : '',
    forceState && forceState !== 'default' && forceState !== 'disabled' ? `is-${forceState}` : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading ? <LoaderCircle size={resolvedSize === 'sm' ? 12 : 14} className="eftson-btn-spinner" aria-hidden="true" /> : icon}
      {!onlyIcon && children != null && children !== false ? <span>{children}</span> : null}
      {!loading && iconRight}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        className={classes}
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={htmlType}
      className={classes}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
}
