import { ChevronUp, ChevronDown, Gem } from 'lucide-react';
import * as Antd from 'antd';
import Button from '../ui/Button.jsx';
import { lucideSlots } from './lucideSlots.jsx';

function SortIcon() {
  return (
    <span className="table-header-sortable-icon" aria-hidden="true">
      <ChevronUp size={10} />
      <ChevronDown size={10} />
    </span>
  );
}

function HeaderCell({
  label,
  corner = 'middle',
  sortable = false,
  tone = 'default',
  truncated = false,
}) {
  return (
    <div
      className={[
        'table-cell-header',
        `is-${corner}`,
        `is-${tone}`,
        truncated ? 'is-truncated' : '',
      ].filter(Boolean).join(' ')}
      title={truncated ? label : undefined}
    >
      {tone === 'check' ? (
        <Antd.Checkbox defaultChecked aria-label="Select all" />
      ) : (
        <>
          <span className="table-cell-header-label">{label}</span>
          {sortable ? <SortIcon /> : null}
        </>
      )}
    </div>
  );
}

function HeaderRow({ tone = 'default', sortable = false, truncated = false }) {
  const left = truncated ? 'Table Left Corn...' : 'Table Left Corner';
  const mid = truncated ? 'Table H...' : 'Table Header';
  const right = truncated ? 'Table Right Corn...' : 'Table Right Corner';
  return (
    <div className="table-cell-header-row">
      <HeaderCell label={left} corner="left" tone={tone} sortable={sortable} truncated={truncated} />
      <HeaderCell label={mid} corner="middle" tone={tone} sortable={sortable} truncated={truncated} />
      <HeaderCell label={right} corner="right" tone={tone} sortable={sortable} truncated={truncated} />
    </div>
  );
}

function ContentCell({ children, className = '' }) {
  return <div className={`table-cell-content ${className}`.trim()}>{children}</div>;
}

function ContentRow() {
  return (
    <div className="table-cell-content-row">
      <ContentCell>Text</ContentCell>
      <ContentCell>
        <span className="table-cell-with-icon">
          Text
          <Gem size={14} aria-hidden="true" />
        </span>
      </ContentCell>
      <ContentCell>
        <Button type="primary" size="small">Primary Button</Button>
      </ContentCell>
      <ContentCell>
        <Antd.Checkbox defaultChecked aria-label="Select row" />
      </ContentCell>
      <ContentCell>
        <span className="table-cell-with-icon">
          <span className="table-cell-progress-dot" aria-hidden="true" />
          1/4
        </span>
      </ContentCell>
      <ContentCell>
        <Antd.Select
          size="small"
          style={{ width: 140 }}
          placeholder="Please select"
          options={[{ value: 'option-a', label: 'Option A' }, { value: 'option-b', label: 'Option B' }]}
          suffixIcon={lucideSlots.chevronDown}
        />
      </ContentCell>
      <ContentCell>
        <span className="table-cell-progress-inline">
          <span className="table-cell-progress-track" aria-hidden="true">
            <span className="table-cell-progress-fill" style={{ width: '64%' }} />
          </span>
          Text
        </span>
      </ContentCell>
      <ContentCell>
        <span className="table-cell-yes-group">
          <span className="table-cell-yes-box" />
          <span className="table-cell-yes-pill">Yes</span>
        </span>
      </ContentCell>
      <ContentCell>
        <span className="table-cell-chip">
          <Gem size={12} aria-hidden="true" />
          Worker&apos;s Comp
        </span>
      </ContentCell>
    </div>
  );
}

export default function TableCellSpecimen({ compact = false }) {
  return (
    <div className={`table-cell-specimen${compact ? ' is-compact' : ''}`}>
      <section className="table-cell-specimen-block">
        <div className="table-cell-specimen-copy">
          <strong>Table Cell Header</strong>
          <p>A table displays rows of data. All table header row elements will come from the selection below.</p>
        </div>
        <div className="table-cell-specimen-canvas">
          <HeaderRow />
          <HeaderRow sortable />
          <HeaderRow tone="selected" />
          <HeaderRow tone="accent" />
          <div className="table-cell-header-row is-single">
            <HeaderCell label="Select" tone="check" />
          </div>
          {!compact ? <HeaderRow sortable truncated /> : null}
        </div>
      </section>

      <section className="table-cell-specimen-block">
        <div className="table-cell-specimen-copy">
          <strong>Table Cell Content</strong>
          <p>Elements below are designed to showcase different kinds of data.</p>
        </div>
        <div className="table-cell-specimen-canvas is-content">
          <ContentRow />
          {!compact ? <ContentRow /> : null}
        </div>
      </section>
    </div>
  );
}
