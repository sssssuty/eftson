import { Table as AntTable } from 'antd';

/**
 * Branded Youlify/Eftson Table.
 * Gray header band, vertical header dividers, borderless body rows, airy padding.
 */
export default function Table({
  columns,
  dataSource = [],
  className = '',
  size = 'middle',
  pagination = false,
  bordered = false,
  rowKey,
  ...rest
}) {
  const rows = dataSource.map((row, index) => (
    row && row.key != null ? row : { ...row, key: row?.key ?? String(index) }
  ));

  return (
    <div className={`eftson-table ${className}`.trim()}>
      <AntTable
        columns={columns}
        dataSource={rows}
        pagination={pagination}
        size={size}
        bordered={bordered}
        showSorterTooltip={false}
        rowKey={rowKey || ((record) => record.key)}
        {...rest}
      />
    </div>
  );
}

/** Docs helper: headers + row arrays → branded Table */
export function SimpleTable({ headers, rows = [], className = '', columnProps = [] }) {
  const columns = headers.map((title, index) => ({
    title,
    dataIndex: `c${index}`,
    key: `c${index}`,
    ...(columnProps[index] || {}),
    render: (value) => value,
  }));

  const dataSource = rows.map((row, rowIndex) => {
    const record = { key: String(rowIndex) };
    row.forEach((cell, cellIndex) => {
      record[`c${cellIndex}`] = cell;
    });
    return record;
  });

  return <Table columns={columns} dataSource={dataSource} className={className} />;
}

export function TableActionButton({ children = 'View details', onClick }) {
  return (
    <button type="button" className="table-action-btn" onClick={onClick}>
      {children}
    </button>
  );
}
