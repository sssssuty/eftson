import {
  TYPE_STYLES,
  COLOR_GROUPS,
  SPACING_TOKENS,
  CORNER_TOKENS,
  SHADOW_TOKENS,
} from '../../data/foundations.js';

function TokenTable({ rows, previewClassKey, showUse = false }) {
  return (
    <table className="foundation-token-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Size</th>
          <th>Class</th>
          {showUse ? <th>Use</th> : null}
          {previewClassKey ? <th>Preview</th> : null}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.token}>
            <td>{row.token}</td>
            <td>{row.size}</td>
            <td><code>{row.className}</code></td>
            {showUse ? <td>{row.use}</td> : null}
            {previewClassKey ? (
              <td>
                <span
                  className={`foundation-token-preview ${row.className}`}
                  style={previewClassKey === 'space' ? { width: `var(${row.cssVar})` } : undefined}
                  aria-hidden="true"
                />
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TypographySpecimen({ compact = false }) {
  const rows = compact
    ? TYPE_STYLES.filter((_, index) => index < 8 || index >= TYPE_STYLES.length - 2)
    : TYPE_STYLES;

  return (
    <div className="foundation-specimen foundation-typography">
      {!compact && (
        <div className="foundation-fontface">
          <div className="foundation-fontface-sample eftson-type-h1" aria-hidden="true">Ag</div>
          <div>
            <strong className="eftson-type-label-xlarge-semibold">Elza</strong>
            <p className="eftson-type-paragraph-medium eftson-text-gray-700">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="eftson-type-paragraph-medium eftson-text-gray-700">abcdefghijklmnopqrstuvwxyz</p>
            <p className="eftson-type-paragraph-medium eftson-text-gray-700">0123456789</p>
          </div>
        </div>
      )}
      <table className="foundation-type-table">
        <thead>
          <tr>
            <th>Type style</th>
            <th>Size</th>
            <th>Weight</th>
            <th>Line height</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.style}>
              <td>
                <span className={row.className}>{row.style}</span>
              </td>
              <td>{row.size}px</td>
              <td>{row.weight}</td>
              <td>{row.line}px</td>
              <td><code>{row.className}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ColorsSpecimen({ compact = false }) {
  const groups = compact ? COLOR_GROUPS.slice(0, 4) : COLOR_GROUPS;

  return (
    <div className="foundation-specimen foundation-root-tokens">
      {groups.map((group) => (
        <section key={group.name} className="foundation-color-row">
          <div className="foundation-color-swatches">
            {group.tokens.map((token) => (
              <div className="foundation-color-token" key={token.name}>
                <div className={`foundation-color-chip ${token.className}`} />
                <div className="foundation-color-meta eftson-corner-4">
                  <strong className="eftson-type-label-small-semibold">{token.name}</strong>
                  <code>{token.hex}</code>
                  <code className="foundation-class-name">{token.className}</code>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ShadowSpecimen() {
  const shadow = SHADOW_TOKENS[0];
  return (
    <div className="foundation-specimen foundation-shadow-spec">
      <div className="foundation-shadow-copy">
        <strong className="eftson-type-label-large-semibold">{shadow.name}</strong>
        <dl className="eftson-type-paragraph-small">
          <div><dt>Drop shadow</dt><dd /></div>
          <div><dt>Blur</dt><dd>{shadow.blur}</dd></div>
          <div><dt>X</dt><dd>{shadow.x}</dd></div>
          <div><dt>Y</dt><dd>{shadow.y}</dd></div>
          <div><dt>Spread</dt><dd>{shadow.spread}</dd></div>
          <div><dt>Opacity</dt><dd>{shadow.opacity}</dd></div>
          <div><dt>Color</dt><dd>{shadow.color}</dd></div>
          <div><dt>Class</dt><dd><code>{shadow.className}</code></dd></div>
        </dl>
      </div>
      <div
        className={`foundation-shadow-preview eftson-corner-4 ${shadow.className}`}
        aria-hidden="true"
      />
    </div>
  );
}

export default function FoundationSpecimen({ name, compact = false }) {
  if (name === 'Typography') return <TypographySpecimen compact={compact} />;
  if (name === 'Colors') return <ColorsSpecimen compact={compact} />;
  if (name === 'Spacing') {
    const rows = compact ? SPACING_TOKENS.slice(0, 7) : SPACING_TOKENS;
    return (
      <div className="foundation-specimen">
        <TokenTable rows={rows} previewClassKey="space" />
      </div>
    );
  }
  if (name === 'Corner') {
    return (
      <div className="foundation-specimen">
        <TokenTable rows={CORNER_TOKENS} showUse />
      </div>
    );
  }
  if (name === 'Shadow') return <ShadowSpecimen />;
  if (name === 'Grid') {
    return (
      <div className="foundation-specimen">
        <div className="eftson-grid-demo" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
        </div>
        <p className="eftson-type-paragraph-small eftson-text-gray-700">
          {compact
            ? '12-column product grid · .eftson-grid'
            : '12-column layout grid with Spacing-24 gutters · class .eftson-grid'}
        </p>
      </div>
    );
  }
  return null;
}
