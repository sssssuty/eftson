import {
  TYPE_STYLES,
  weightValue,
  COLOR_GROUPS,
  SPACING_TOKENS,
  CORNER_TOKENS,
  SHADOW_TOKENS,
} from '../../data/foundations.js';

function TokenTable({ rows }) {
  return (
    <table className="foundation-token-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.token}>
            <td>{row.token}</td>
            <td>{row.size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TypographySpecimen({ compact = false }) {
  const rows = compact ? TYPE_STYLES.filter((_, index) => index < 8 || index >= TYPE_STYLES.length - 2) : TYPE_STYLES;

  return (
    <div className="foundation-specimen foundation-typography">
      {!compact && (
        <div className="foundation-fontface">
          <div className="foundation-fontface-sample" aria-hidden="true">Ag</div>
          <div>
            <strong>Elza</strong>
            <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p>abcdefghijklmnopqrstuvwxyz</p>
            <p>0123456789</p>
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
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.style}>
              <td>
                <span
                  className={row.overline ? 'is-overline' : ''}
                  style={{
                    fontSize: row.size,
                    lineHeight: `${row.line}px`,
                    fontWeight: weightValue[row.weight] || 500,
                  }}
                >
                  {row.style}
                </span>
              </td>
              <td>{row.size}px</td>
              <td>{row.weight}</td>
              <td>{row.line}px</td>
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
                <div className="foundation-color-chip" style={{ background: token.hex }} />
                <div className="foundation-color-meta">
                  <strong>{token.name}</strong>
                  <code>{token.hex}</code>
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
        <strong>{shadow.name}</strong>
        <dl>
          <div><dt>Drop shadow</dt><dd /></div>
          <div><dt>Blur</dt><dd>{shadow.blur}</dd></div>
          <div><dt>X</dt><dd>{shadow.x}</dd></div>
          <div><dt>Y</dt><dd>{shadow.y}</dd></div>
          <div><dt>Spread</dt><dd>{shadow.spread}</dd></div>
          <div><dt>Opacity</dt><dd>{shadow.opacity}</dd></div>
          <div><dt>Color</dt><dd>{shadow.color}</dd></div>
        </dl>
      </div>
      <div className="foundation-shadow-preview" style={{ boxShadow: shadow.css }} aria-hidden="true" />
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
        <TokenTable rows={rows} />
      </div>
    );
  }
  if (name === 'Corner') {
    return (
      <div className="foundation-specimen">
        <TokenTable rows={CORNER_TOKENS} />
      </div>
    );
  }
  if (name === 'Shadow') return <ShadowSpecimen />;
  if (name === 'Grid') {
    return (
      <div className="foundation-specimen foundation-grid">
        <div className="foundation-grid-demo" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
        </div>
        <p>{compact ? '12-column product grid' : '12-column layout grid with 24px gutters for product surfaces.'}</p>
      </div>
    );
  }
  return null;
}
