import { versionBadgeKind } from '../../data/components.js';

export default function VersionBadge({ name }) {
  const kind = versionBadgeKind(name);
  if (kind === 'new') return <small>NEW</small>;
  if (kind === 'deprecated') return <small className="deprecated">DEPRECATED</small>;
  return null;
}
