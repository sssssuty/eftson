import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import Table from '../ui/Table.jsx';
import TableStatus from './TableStatus.jsx';

const PRIMARY_ROWS = [
  {
    key: '1',
    dos: '01/15/2025',
    patient: 'Jane Doe',
    payer: 'Aetna',
    provider: 'Dr. Smith',
    specialty: 'Cardiology',
    charge: '$1,250.00',
    assignee: 'Alex Rivera',
    status: 'New',
  },
  {
    key: '2',
    dos: '01/16/2025',
    patient: 'John Yager',
    payer: 'Blue Cross',
    provider: 'Dr. Lee',
    specialty: 'Orthopedics',
    charge: '$890.50',
    assignee: 'Sam Chen',
    status: 'Closed',
  },
  {
    key: '3',
    dos: '01/17/2025',
    patient: 'Melissa Smith',
    payer: 'United',
    provider: 'Dr. Patel',
    specialty: 'Neurology',
    charge: '$2,100.00',
    assignee: 'Jordan Blake',
    status: 'In Progress',
  },
  {
    key: '4',
    dos: '01/18/2025',
    patient: 'Harman Kaur',
    payer: 'Cigna',
    provider: 'Dr. Nguyen',
    specialty: 'Dermatology',
    charge: '$450.00',
    assignee: 'Casey Morgan',
    status: 'Completed',
  },
  {
    key: '5',
    dos: '01/19/2025',
    patient: 'Chris Evans',
    payer: 'Medicare',
    provider: 'Dr. Wong',
    specialty: 'Primary Care',
    charge: '$320.00',
    assignee: 'Riley Quinn',
    status: 'Approved',
  },
];

const SECONDARY_CHILDREN = {
  a: [
    {
      key: 'a-1',
      procedure: '99213',
      modifier: '25',
      unit: '1',
      charge: '$180.00',
      allowed: '$140.00',
      adjusted: '$40.00',
      insPaid: '$112.00',
      ptPaid: '$28.00',
      writeOff: '$0.00',
      balance: '$0.00',
      status: 'Paid',
    },
    {
      key: 'a-2',
      procedure: '93000',
      modifier: '—',
      unit: '1',
      charge: '$220.00',
      allowed: '$175.00',
      adjusted: '$45.00',
      insPaid: '$140.00',
      ptPaid: '$35.00',
      writeOff: '$0.00',
      balance: '$0.00',
      status: 'Paid',
    },
  ],
  b: [
    {
      key: 'b-1',
      procedure: '97110',
      modifier: 'GP',
      unit: '2',
      charge: '$310.00',
      allowed: '$248.00',
      adjusted: '$62.00',
      insPaid: '$198.40',
      ptPaid: '$49.60',
      writeOff: '$0.00',
      balance: '$0.00',
      status: 'AI',
    },
  ],
};

const SECONDARY_ROWS = [
  {
    key: 'a',
    patient: 'Jane Doe',
    dos: '01/15/2025',
    provider: 'Dr. Smith',
    payer: 'Aetna',
    charge: '$400.00',
    allowed: '$315.00',
    adjusted: '$85.00',
    insPaid: '$252.00',
    ptPaid: '$63.00',
    writeOff: '$0.00',
    balance: '$0.00',
    status: 'Paid',
  },
  {
    key: 'b',
    patient: 'John Yager',
    dos: '01/16/2025',
    provider: 'Dr. Lee',
    payer: 'Blue Cross',
    charge: '$310.00',
    allowed: '$248.00',
    adjusted: '$62.00',
    insPaid: '$198.40',
    ptPaid: '$49.60',
    writeOff: '$0.00',
    balance: '$0.00',
    status: 'AI',
  },
  {
    key: 'c',
    patient: 'Melissa Smith',
    dos: '01/17/2025',
    provider: 'Dr. Patel',
    payer: 'United',
    charge: '$520.00',
    allowed: '$410.00',
    adjusted: '$110.00',
    insPaid: '$328.00',
    ptPaid: '$82.00',
    writeOff: '$0.00',
    balance: '$0.00',
    status: 'Paid',
  },
];

function money(value) {
  return <span className="table-cell-strong">{value}</span>;
}

function PrimaryTable({ compact = false, selectable = false }) {
  const [selected, setSelected] = useState(selectable ? ['1', '3'] : []);
  const rows = compact ? PRIMARY_ROWS.slice(0, 3) : PRIMARY_ROWS;

  const columns = [
    {
      title: 'Date of Service',
      dataIndex: 'dos',
      key: 'dos',
      ellipsis: { showTitle: true },
    },
    { title: 'Patient', dataIndex: 'patient', key: 'patient', render: (v) => <strong>{v}</strong> },
    { title: 'Payer', dataIndex: 'payer', key: 'payer' },
    { title: 'Provider', dataIndex: 'provider', key: 'provider' },
    { title: 'Specialty', dataIndex: 'specialty', key: 'specialty' },
    { title: 'Charge', dataIndex: 'charge', key: 'charge', render: money },
    { title: 'Assignee', dataIndex: 'assignee', key: 'assignee' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (value) => <TableStatus value={value} />,
    },
  ];

  return (
    <div className="table-specimen-block">
      {selectable && selected.length ? (
        <div className="table-selection-bar" role="status">
          Selected {selected.length} items
        </div>
      ) : null}
      <Table
        className="claim-table primary-table"
        columns={columns}
        dataSource={rows}
        rowSelection={selectable ? {
          selectedRowKeys: selected,
          onChange: (keys) => setSelected(keys),
        } : undefined}
      />
    </div>
  );
}

function SecondaryNestedTable({ parentKey }) {
  const childRows = SECONDARY_CHILDREN[parentKey] || [];
  if (!childRows.length) {
    return (
      <div className="table-secondary-empty">No line items for this encounter.</div>
    );
  }

  return (
    <Table
      className="claim-table secondary-table"
      size="small"
      columns={[
        { title: 'Procedure', dataIndex: 'procedure', key: 'procedure' },
        { title: 'Modifier', dataIndex: 'modifier', key: 'modifier' },
        { title: 'Unit', dataIndex: 'unit', key: 'unit' },
        { title: 'Charge', dataIndex: 'charge', key: 'charge', render: money },
        { title: 'Allowed', dataIndex: 'allowed', key: 'allowed', render: money },
        { title: 'Adjusted', dataIndex: 'adjusted', key: 'adjusted', render: money },
        { title: 'Ins. Paid', dataIndex: 'insPaid', key: 'insPaid', render: money },
        { title: 'Pt Paid', dataIndex: 'ptPaid', key: 'ptPaid', render: money },
        { title: 'Write-off', dataIndex: 'writeOff', key: 'writeOff', render: money },
        { title: 'Balance', dataIndex: 'balance', key: 'balance', render: money },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (value) => <TableStatus value={value} />,
        },
      ]}
      dataSource={childRows}
    />
  );
}

function SecondaryTable({ compact = false }) {
  const [expanded, setExpanded] = useState(['a']);
  const rows = compact ? SECONDARY_ROWS.slice(0, 2) : SECONDARY_ROWS;

  const columns = [
    { title: 'Patient', dataIndex: 'patient', key: 'patient', render: (v) => <strong>{v}</strong> },
    { title: 'DOS', dataIndex: 'dos', key: 'dos' },
    { title: 'Provider', dataIndex: 'provider', key: 'provider' },
    { title: 'Payer', dataIndex: 'payer', key: 'payer' },
    { title: 'Charge', dataIndex: 'charge', key: 'charge', render: money },
    { title: 'Allowed', dataIndex: 'allowed', key: 'allowed', render: money },
    { title: 'Adjusted', dataIndex: 'adjusted', key: 'adjusted', render: money },
    { title: 'Ins. Paid', dataIndex: 'insPaid', key: 'insPaid', render: money },
    { title: 'Pt Paid', dataIndex: 'ptPaid', key: 'ptPaid', render: money },
    { title: 'Write-off', dataIndex: 'writeOff', key: 'writeOff', render: money },
    { title: 'Balance', dataIndex: 'balance', key: 'balance', render: money },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (value) => <TableStatus value={value} />,
    },
  ];

  return (
    <div className="table-specimen-block">
      <Table
        className="claim-table primary-table has-expand"
        columns={columns}
        dataSource={rows}
        expandable={{
          expandedRowKeys: expanded,
          onExpandedRowsChange: (keys) => setExpanded(keys),
          expandIcon: ({ expanded: isOpen, onExpand, record }) => (
            <button
              type="button"
              className="table-expand-trigger"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Collapse row' : 'Expand row'}
              onClick={(event) => onExpand(record, event)}
            >
              {isOpen ? <Minus size={14} /> : <Plus size={14} />}
            </button>
          ),
          expandedRowRender: (record) => (
            <div className="table-secondary-wrap">
              <SecondaryNestedTable parentKey={record.key} />
            </div>
          ),
          rowExpandable: (record) => Boolean(SECONDARY_CHILDREN[record.key]),
        }}
      />
    </div>
  );
}

export default function TableSpecimen({ compact = false }) {
  if (compact) {
    return (
      <div className="table-specimen is-compact">
        <PrimaryTable compact />
      </div>
    );
  }

  return (
    <div className="table-specimen" aria-label="Table examples">
      <section className="table-specimen-section">
        <div className="table-specimen-copy">
          <strong>Primary table</strong>
          <p>Default claim rows with status cells. Header text truncates with a tooltip on hover.</p>
        </div>
        <PrimaryTable />
      </section>

      <section className="table-specimen-section">
        <div className="table-specimen-copy">
          <strong>Selected state</strong>
          <p>Row selection with a bulk action summary above the header.</p>
        </div>
        <PrimaryTable selectable />
      </section>

      <section className="table-specimen-section">
        <div className="table-specimen-copy">
          <strong>Secondary table</strong>
          <p>Expand a primary row to reveal nested line-item details.</p>
        </div>
        <SecondaryTable />
      </section>
    </div>
  );
}
