import { useState } from 'react';
import {
  SearchOutlined, SettingOutlined,
} from '@ant-design/icons';
import Table from '../ui/Table.jsx';

function ClaimsTemplate({ title = 'Clearinghouse Rejection', primaryColor = '#2D40CB', compact = false, mini = false }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);

  const allRows = [
    { key: 'Jane Doe', date: '02/01/25', patient: 'Jane Doe', payer: 'Medicare', status: 'Missing info', amount: '$5,000.00' },
    { key: 'John Yager', date: '02/01/25', patient: 'John Yager', payer: 'Blue Shield', status: 'In progress', amount: '$4,800.00' },
    { key: 'Melissa Smith', date: '02/04/25', patient: 'Melissa Smith', payer: 'UMR', status: 'New', amount: '$1,024.00' },
    { key: 'Harman Kaur', date: '02/06/25', patient: 'Harman Kaur', payer: 'Sedgwick', status: 'Closed', amount: '$560.00' },
  ];

  const rows = allRows.filter((row) => (
    `${row.date} ${row.patient} ${row.payer} ${row.status} ${row.amount}`
      .toLowerCase()
      .includes(query.toLowerCase())
  ));

  const columns = [
    { title: 'Date of service', dataIndex: 'date', key: 'date' },
    {
      title: 'Patient',
      dataIndex: 'patient',
      key: 'patient',
      render: (value) => <strong>{value}</strong>,
    },
    { title: 'Payer', dataIndex: 'payer', key: 'payer' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (value) => (
        <span className={`claim-status status-${value.toLowerCase().replace(/\s+/g, '-')}`}>{value}</span>
      ),
    },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  ];

  return (
    <div
      className={`health-template claims-template ${compact ? 'is-compact' : ''} ${mini ? 'is-mini' : ''}`}
      style={{ '--template-primary': primaryColor }}
    >
      <aside className="health-rail"><span className="health-mark">Y</span><i /><i /><i className="active" /><i /><i /></aside>
      <div className="health-workspace">
        <div className="health-template-header">
          <div><small>REVENUE CYCLE</small><h3>{title}</h3></div>
          <button aria-label="Template settings"><SettingOutlined /></button>
        </div>
        <div className="claim-filters">
          <label>
            <SearchOutlined />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Patient name or ID"
            />
          </label>
          <button>Encounter ID</button>
          <button>Assignee</button>
          <button>Status</button>
          <button>More filters</button>
          <button className="claim-assign" disabled={!selected.length}>
            Assign{selected.length ? ` (${selected.length})` : ''}
          </button>
        </div>
        <Table
          className="claim-table"
          size={compact || mini ? 'small' : 'middle'}
          columns={columns}
          dataSource={rows}
          rowSelection={{
            selectedRowKeys: selected,
            onChange: (keys) => setSelected(keys),
          }}
        />
        {!rows.length && <div className="template-empty">No claims match this search.</div>}
      </div>
    </div>
  );
}

export default ClaimsTemplate;
