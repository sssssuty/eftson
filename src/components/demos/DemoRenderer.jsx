import React, { useState } from 'react';
import * as Antd from 'antd';
import {
  SearchOutlined, EditOutlined, ArrowRightOutlined, UploadOutlined, UserOutlined,
  BellOutlined, SettingOutlined, PlusOutlined, DownloadOutlined, DeleteOutlined,
  CheckCircleOutlined, ExclamationCircleOutlined, AppstoreOutlined, BarsOutlined,
  TableOutlined, CaretUpOutlined, CaretDownOutlined,
} from '@ant-design/icons';
import Table, { TableActionButton } from '../ui/Table.jsx';

const { ConfigProvider } = Antd;

const sampleTree = [{ title: 'Eftson Design', key: '0', children: [{ title: 'Components', key: '0-0' }, { title: 'Design patterns', key: '0-1' }] }];
const sampleOptions = [{ value: 'Natural' }, { value: 'Certain' }, { value: 'Meaningful' }, { value: 'Growing' }];
function DemoRenderer({ name, variant = 0, compact = false }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState(48);
  const [selected, setSelected] = useState(['1', '3']);
  const [messageApi, contextHolder] = Antd.message.useMessage();
  const [notificationApi, notificationHolder] = Antd.notification.useNotification();
  const commonButton = compact
    ? <Antd.Button type="primary">Primary</Antd.Button>
    : <Antd.Space wrap><Antd.Button type="primary">Primary</Antd.Button><Antd.Button>Default</Antd.Button><Antd.Button type="dashed">Dashed</Antd.Button><Antd.Button type="text">Text</Antd.Button><Antd.Button type="link">Link</Antd.Button></Antd.Space>;
  const menuItems = [
    { key: 'edit', label: 'Edit' },
    { key: 'duplicate', label: 'Duplicate' },
    { type: 'divider' },
    { key: 'archive', label: 'Archive', danger: true },
  ];
  const checkboxMenu = {
    items: [
      { key: 'claims', label: 'Claims', type: 'group' },
      { key: 'open', label: <Antd.Checkbox defaultChecked>Open</Antd.Checkbox> },
      { key: 'closed', label: <Antd.Checkbox>Closed</Antd.Checkbox> },
    ],
  };
  const radioMenu = {
    items: [
      { key: 'status', label: 'Status', type: 'group' },
      { key: 'new', label: <Antd.Radio defaultChecked>New</Antd.Radio> },
      { key: 'review', label: <Antd.Radio>In review</Antd.Radio> },
    ],
  };
  const submenu = {
    items: [
      { key: 'assign', label: 'Assign' },
      {
        key: 'more',
        label: 'More actions',
        children: [
          { key: 'export', label: 'Export' },
          { key: 'print', label: 'Print' },
        ],
      },
    ],
  };

  switch (name) {
    case 'Button': return variant ? <Antd.Space wrap><Antd.Button size="large" type="primary" icon={<DownloadOutlined />}>Download</Antd.Button><Antd.Button danger icon={<DeleteOutlined />}>Delete</Antd.Button><Antd.Button loading>Loading</Antd.Button></Antd.Space> : commonButton;
    case 'Button Group': return <Antd.Space.Compact>{['Left', 'Middle', 'Right'].map((label) => <Antd.Button key={label}>{label}</Antd.Button>)}</Antd.Space.Compact>;
    case 'Icon Button': return <Antd.Space wrap><Antd.Button type="primary" icon={<PlusOutlined />} /><Antd.Button icon={<SearchOutlined />} /><Antd.Button icon={<SettingOutlined />} /><Antd.Button danger icon={<DeleteOutlined />} /></Antd.Space>;
    case 'Float Button':
    case 'FloatButton': return <div className="float-demo"><Antd.FloatButton.Group style={{ position: 'absolute', insetInlineEnd: 24, bottom: 18 }}><Antd.FloatButton icon={<PlusOutlined />} /><Antd.FloatButton.BackTop visibilityHeight={0} /></Antd.FloatButton.Group></div>;
    case 'Icon': return <Antd.Space size="large" wrap><SearchOutlined /><SettingOutlined spin /><BellOutlined /><CheckCircleOutlined style={{ color: '#15803D' }} /><ExclamationCircleOutlined style={{ color: '#B45309' }} /></Antd.Space>;
    case 'Typography': return <div><Antd.Typography.Title level={3}>Eftson</Antd.Typography.Title><Antd.Typography.Text>Healthcare experiences that make complex work feel clear and human.</Antd.Typography.Text><br /><Antd.Typography.Link>Explore the system</Antd.Typography.Link></div>;
    case 'Divider': return <div className="wide-demo">Clarity connects people and better outcomes.<Antd.Divider>Eftson</Antd.Divider>Build with confidence.</div>;
    case 'Flex': return <Antd.Flex gap="middle" wrap><div className="layout-block grow">01</div><div className="layout-block">02</div><div className="layout-block grow">03</div></Antd.Flex>;
    case 'Grid': return <Antd.Row gutter={[12, 12]} className="grid-demo">{[8, 8, 8, 6, 6, 6, 6].map((span, i) => <Antd.Col span={span} key={i}><div>{span}</div></Antd.Col>)}</Antd.Row>;
    case 'Layout': return <Antd.Layout className="mini-layout"><Antd.Layout.Header>Header</Antd.Layout.Header><Antd.Layout><Antd.Layout.Sider width={100}>Sider</Antd.Layout.Sider><Antd.Layout.Content>Content</Antd.Layout.Content></Antd.Layout></Antd.Layout>;
    case 'Masonry': { const Masonry = Antd.Masonry; return Masonry ? <Masonry columns={4} gutter={8}>{[72, 104, 56, 88, 64, 120].map((h, i) => <div className="masonry-item" style={{ height: h }} key={i}>{i + 1}</div>)}</Masonry> : <div className="css-masonry">{[72, 104, 56, 88, 64, 120].map((h, i) => <div style={{ height: h }} key={i}>{i + 1}</div>)}</div>; }
    case 'Space': return <Antd.Space size={[12, 12]} wrap>{commonButton}</Antd.Space>;
    case 'Splitter': return Antd.Splitter ? <Antd.Splitter style={{ height: 180, border: '1px solid #f0f0f0' }}><Antd.Splitter.Panel defaultSize="40%"><div className="split-panel">Navigation</div></Antd.Splitter.Panel><Antd.Splitter.Panel><div className="split-panel">Canvas</div></Antd.Splitter.Panel></Antd.Splitter> : <Antd.Flex><div className="split-panel">Navigation</div><div className="split-panel">Canvas</div></Antd.Flex>;
    case 'Anchor': return <Antd.Anchor items={[{ key: '1', href: '#basic', title: 'Basic' }, { key: '2', href: '#api', title: 'API' }, { key: '3', href: '#design-token', title: 'Design Token' }]} />;
    case 'Breadcrumb':
    case 'Breadcrumb Item': return <Antd.Breadcrumb items={compact
      ? [{ title: 'Home' }, { title: 'Page' }]
      : [{ title: 'Home' }, { title: 'Components' }, { title: 'Breadcrumb' }]} />;
    case 'Dropdown':
    case 'Dropdown Menu':
    case 'Dropdown Menu Item':
      return <Antd.Dropdown menu={{ items: menuItems }}><Antd.Button>Actions <ArrowRightOutlined rotate={90} /></Antd.Button></Antd.Dropdown>;
    case 'Dropdown Menu Checkbox Item':
      return <Antd.Dropdown menu={checkboxMenu}><Antd.Button>Filters <ArrowRightOutlined rotate={90} /></Antd.Button></Antd.Dropdown>;
    case 'Dropdown Menu Divider':
    case 'Dropdown Menu Group':
      return <Antd.Dropdown menu={{ items: menuItems }}><Antd.Button>Grouped menu <ArrowRightOutlined rotate={90} /></Antd.Button></Antd.Dropdown>;
    case 'Dropdown Menu Radio Group':
    case 'Dropdown Menu Radio Item':
      return <Antd.Dropdown menu={radioMenu}><Antd.Button>Status <ArrowRightOutlined rotate={90} /></Antd.Button></Antd.Dropdown>;
    case 'Dropdown Menu Submenu':
      return <Antd.Dropdown menu={submenu}><Antd.Button>More <ArrowRightOutlined rotate={90} /></Antd.Button></Antd.Dropdown>;
    case 'Menu': return <Antd.Menu mode="horizontal" selectedKeys={['components']} items={compact
      ? [{ key: 'design', label: 'One' }, { key: 'components', label: 'Two' }]
      : [{ key: 'design', label: 'Design' }, { key: 'components', label: 'Components' }, { key: 'resources', label: 'Resources' }]} />;
    case 'Pagination': return <Antd.Pagination size={compact ? 'small' : 'default'} defaultCurrent={2} total={compact ? 20 : 80} showSizeChanger={!compact} />;
    case 'Steps': return <Antd.Steps size={compact ? 'small' : 'default'} current={1} items={compact
      ? [{ title: 'One' }, { title: 'Two' }]
      : [{ title: 'Finished' }, { title: 'In progress' }, { title: 'Waiting' }]} />;
    case 'Tabs':
    case 'Tab': return <Antd.Tabs size={compact ? 'small' : 'middle'} items={compact
      ? [{ key: '1', label: 'One', children: 'Panel' }, { key: '2', label: 'Two', children: 'Panel' }]
      : [{ key: '1', label: 'Design', children: 'Design guidelines' }, { key: '2', label: 'Development', children: 'Components' }, { key: '3', label: 'Resources', children: 'Tools' }]} />;
    case 'AutoComplete': return <Antd.AutoComplete style={{ width: 280 }} options={sampleOptions} placeholder="Try typing “N”" />;
    case 'Cascader': return <Antd.Cascader options={[{ value: 'design', label: 'Design', children: [{ value: 'patterns', label: 'Patterns' }, { value: 'principles', label: 'Principles' }] }]} placeholder="Please select" />;
    case 'Checkbox': return <Antd.Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>Remember my preference</Antd.Checkbox>;
    case 'Checkbox Group': return <Antd.Checkbox.Group options={['Claims', 'Coding', 'Review']} defaultValue={['Claims']} />;
    case 'ColorPicker': return <Antd.Space><Antd.ColorPicker defaultValue="#2D40CB" showText /><Antd.ColorPicker defaultValue="#EA5252" showText /></Antd.Space>;
    case 'Date Picker':
    case 'DatePicker': return <Antd.DatePicker />;
    case 'Range Picker': return <Antd.DatePicker.RangePicker />;
    case 'Display Form Text': return <Antd.Form layout="vertical" style={{ maxWidth: 360 }}><Antd.Form.Item label="Patient"><Antd.Typography.Text>Ada Lovelace</Antd.Typography.Text></Antd.Form.Item><Antd.Form.Item label="Claim ID"><Antd.Typography.Text copyable>CLM-20481</Antd.Typography.Text></Antd.Form.Item></Antd.Form>;
    case 'Filter Item': return <Antd.Space wrap><Antd.Tag.CheckableTag checked={checked} onChange={setChecked}>Open</Antd.Tag.CheckableTag><Antd.Tag.CheckableTag checked>Denied</Antd.Tag.CheckableTag><Antd.Tag>Payer</Antd.Tag></Antd.Space>;
    case 'Filter Bar & Dropdown Menu': return <Antd.Space wrap><Antd.Select defaultValue="all" style={{ width: 160 }} options={[{ value: 'all', label: 'All statuses' }, { value: 'open', label: 'Open' }]} /><Antd.Dropdown menu={{ items: menuItems }}><Antd.Button>More filters</Antd.Button></Antd.Dropdown><Antd.Input.Search placeholder="Search claims" style={{ width: 220 }} /></Antd.Space>;
    case 'Footer': return <div className="footer-demo"><span>© Youlify</span><Antd.Space size="large"><a>Privacy</a><a>Terms</a><a>Support</a></Antd.Space></div>;
    case 'Form List':
    case 'Form List Row & Section': return <Antd.Form layout="vertical" style={{ maxWidth: 420 }}><Antd.Form.Item label="Section"><Antd.Input placeholder="Provider details" /></Antd.Form.Item><Antd.Form.Item label="NPI"><Antd.Input placeholder="1234567890" /></Antd.Form.Item><Antd.Form.Item label="Notes"><Antd.Input.TextArea rows={2} placeholder="Optional notes" /></Antd.Form.Item></Antd.Form>;
    case 'Log In': return <Antd.Card style={{ width: 320 }} title="Log in"><Antd.Form layout="vertical"><Antd.Form.Item label="Email" required><Antd.Input placeholder="you@clinic.com" /></Antd.Form.Item><Antd.Form.Item label="Password" required><Antd.Input.Password /></Antd.Form.Item><Antd.Button type="primary" block>Continue</Antd.Button></Antd.Form></Antd.Card>;
    case 'Navigation':
    case 'Navigation Profile': return <Antd.Space style={{ width: '100%', justifyContent: 'space-between' }}><Antd.Menu mode="horizontal" selectedKeys={['claims']} items={[{ key: 'claims', label: 'Claims' }, { key: 'era', label: 'ERA' }, { key: 'settings', label: 'Settings' }]} style={{ flex: 1, minWidth: 0, border: 0 }} /><Antd.Space><Antd.Avatar size="small">TS</Antd.Avatar><span>Tingyu Su</span></Antd.Space></Antd.Space>;
    case 'Page Header': return <div className="page-header-demo"><div><Antd.Typography.Title level={3} style={{ margin: 0 }}>Claims workbench</Antd.Typography.Title><Antd.Typography.Text type="secondary">Review and resolve open claims</Antd.Typography.Text></div><Antd.Space><Antd.Button>Export</Antd.Button><Antd.Button type="primary">New claim</Antd.Button></Antd.Space></div>;
    case 'Popup Window':
    case 'Modal': return <><Antd.Button type="primary" onClick={() => setOpen(true)}>Open popup</Antd.Button><Antd.Modal title="Confirm changes" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}><p>Your updates will be available to everyone in this workspace.</p></Antd.Modal></>;
    case 'Quick Info':
    case 'Popover': return <Antd.Popover title="Quick info" content="A short explanation next to the trigger."><Antd.Button>Hover me</Antd.Button></Antd.Popover>;
    case 'Radio Selection':
    case 'Radio': return <Antd.Radio.Group defaultValue="a" options={[{ label: 'Option A', value: 'a' }, { label: 'Option B', value: 'b' }]} />;
    case 'Text Paragraph': return <Antd.Typography.Paragraph style={{ maxWidth: 420, margin: 0 }}>Eftson helps teams ship clear healthcare product experiences with shared components and guidance.</Antd.Typography.Paragraph>;
    case 'Toggle':
    case 'Switch': return <Antd.Space><Antd.Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked /><Antd.Switch loading defaultChecked /><Antd.Switch disabled /></Antd.Space>;
    case 'Tooltips':
    case 'Tooltip': return <Antd.Space><Antd.Tooltip title="Save your changes"><Antd.Button type="primary">Save</Antd.Button></Antd.Tooltip><Antd.Tooltip title="Delete permanently" color="red"><Antd.Button danger icon={<DeleteOutlined />} /></Antd.Tooltip></Antd.Space>;
    case 'Upload & Download':
    case 'Upload': return <Antd.Space orientation="vertical" style={{ width: '100%' }}><Antd.Upload.Dragger><p className="ant-upload-drag-icon"><UploadOutlined /></p><p>Click or drag file to this area to upload</p></Antd.Upload.Dragger><Antd.Button icon={<DownloadOutlined />}>Download template</Antd.Button></Antd.Space>;
    case 'Warning Banner':
    case 'Alert': return <Antd.Space orientation="vertical" style={{ width: '100%' }}><Antd.Alert title="Review completed" type="success" showIcon /><Antd.Alert title="Warning" description="Additional claim information is required before submission." type="warning" showIcon closable /></Antd.Space>;
    case 'Conversational AI': return <div className="chat-demo"><div className="chat-bubble assistant">How can I help with this claim?</div><div className="chat-bubble user">Summarize denial reasons.</div><Antd.Input.Search placeholder="Ask the assistant" enterButton="Send" /></div>;
    case 'Chip':
    case 'Tag': return <Antd.Space wrap><Antd.Tag color="blue">Design</Antd.Tag><Antd.Tag color="purple">Research</Antd.Tag><Antd.Tag color="cyan">Development</Antd.Tag><Antd.Tag closable>Closable</Antd.Tag><Antd.Tag.CheckableTag checked={checked} onChange={setChecked}>Checkable</Antd.Tag.CheckableTag></Antd.Space>;
    case 'Progress Indicator':
    case 'Progress': return <Antd.Space orientation="vertical" style={{ width: '100%' }}><Antd.Progress percent={68} /><Antd.Progress percent={100} status="success" /><Antd.Progress type="circle" percent={72} size={90} /></Antd.Space>;
    case 'Data Visualization Axis': return <div className="axis-demo" aria-label="Chart axis"><div className="axis-line" /><Antd.Space style={{ width: '100%', justifyContent: 'space-between' }}><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></Antd.Space></div>;
    case 'Form': return <Antd.Form layout="vertical" style={{ maxWidth: 420 }}><Antd.Form.Item label="Project name" required><Antd.Input placeholder="Design system" /></Antd.Form.Item><Antd.Form.Item label="Description"><Antd.Input.TextArea rows={2} /></Antd.Form.Item><Antd.Button type="primary">Create project</Antd.Button></Antd.Form>;
    case 'Input': return <Antd.Input prefix={<UserOutlined />} placeholder="Patient or claim ID" />;
    case 'Input Number':
    case 'InputNumber': return <Antd.Space><Antd.InputNumber min={0} max={100} value={value} onChange={(n) => setValue(n || 0)} suffix="%" /><Antd.InputNumber defaultValue={24} prefix="$" /></Antd.Space>;
    case 'Password': return <Antd.Input.Password placeholder="Password" />;
    case 'Search': return <Antd.Input.Search placeholder="Search documentation" enterButton />;
    case 'TextArea': return <Antd.Input.TextArea rows={3} placeholder="Add a note" />;
    case 'Slider': return <div style={{ width: '100%' }}><Antd.Slider value={value} onChange={setValue} /><Antd.Slider range defaultValue={[24, 72]} /></div>;
    case 'Avatar': return <Antd.Avatar size={48} icon={<UserOutlined />} />;
    case 'Avatar Group': return <Antd.Avatar.Group><Antd.Avatar style={{ background: '#2D40CB' }}>Z</Antd.Avatar><Antd.Avatar style={{ background: '#7F40C9' }}>D</Antd.Avatar><Antd.Avatar style={{ background: '#0AA5A8' }}>S</Antd.Avatar></Antd.Avatar.Group>;
    case 'Badge': return <Antd.Space size="large"><Antd.Badge count={5}><Antd.Avatar shape="square" icon={<BellOutlined />} /></Antd.Badge><Antd.Badge status="success" text="Available" /><Antd.Badge.Ribbon text="New"><Antd.Card size="small">Eftson UI</Antd.Card></Antd.Badge.Ribbon></Antd.Space>;
    case 'Calendar': return <Antd.Calendar fullscreen={false} />;
    case 'Card': return <Antd.Card title="Design system" extra={<a>More</a>} style={{ width: 320 }} actions={[<SettingOutlined key="settings" />, <EditOutlined key="edit" />]}><Antd.Card.Meta avatar={<Antd.Avatar>E</Antd.Avatar>} title="Eftson Design" description="A system for healthcare products" /></Antd.Card>;
    case 'Clickable Card': return <Antd.Card hoverable style={{ width: 280 }} cover={<div style={{ height: 100, background: '#F3F7FF' }} />}><Antd.Card.Meta title="Open claim" description="Navigate into a workflow from the card." /></Antd.Card>;
    case 'Carousel': return <Antd.Carousel autoplay><div><div className="carousel-slide">Natural</div></div><div><div className="carousel-slide alt">Certain</div></div><div><div className="carousel-slide third">Meaningful</div></div></Antd.Carousel>;
    case 'Collapse': return <Antd.Collapse defaultActiveKey={['1']} items={[{ key: '1', label: 'What is Eftson Design?', children: <p>A healthcare product design language and React UI library.</p> }, { key: '2', label: 'How do I use it?', children: <p>Compose components into clear product experiences.</p> }]} />;
    case 'Descriptions': return <Antd.Descriptions title="Project Info" bordered column={2} items={[{ key: '1', label: 'Owner', children: 'Design Systems' }, { key: '2', label: 'Status', children: <Antd.Badge status="processing" text="Active" /> }, { key: '3', label: 'Version', children: '1.0.0' }, { key: '4', label: 'Product', children: 'Eftson' }]} />;
    case 'Empty': return <Antd.Empty description="No components found"><Antd.Button type="primary">Create one</Antd.Button></Antd.Empty>;
    case 'Image': return <Antd.Image width={220} src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='400' viewBox='0 0 640 400'%3E%3Cdefs%3E%3ClinearGradient id='g' x2='1' y2='1'%3E%3Cstop stop-color='%231677ff'/%3E%3Cstop offset='1' stop-color='%23722ed1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='640' height='400' rx='24' fill='url(%23g)'/%3E%3Ccircle cx='465' cy='115' r='55' fill='%23fff' fill-opacity='.3'/%3E%3Cpath d='M0 330 175 170l115 115 85-80 265 195H0Z' fill='%23fff' fill-opacity='.22'/%3E%3C/svg%3E" />;
    case 'List':
    case 'List Item': return <div className="legacy-list">{['Design values', 'Global styles', 'Component patterns'].map((item, i) => <div className="legacy-list-item" key={item}><Antd.Avatar style={{ background: ['#2D40CB', '#7F40C9', '#0AA5A8'][i] }}>{i + 1}</Antd.Avatar><span><strong>{item}</strong><small>Guidance for clear, connected healthcare experiences.</small></span><a>Open</a></div>)}</div>;
    case 'Listy': return <Antd.Listy items={['Design values', 'Global styles', 'Component patterns']} rowKey={(item) => item} itemRender={(item, i) => <div className="listy-item"><Antd.Avatar style={{ background: ['#2D40CB', '#7F40C9', '#0AA5A8'][i] }}>{i + 1}</Antd.Avatar><span><strong>{item}</strong><small>Clear, connected healthcare guidance.</small></span><ArrowRightOutlined /></div>} />;
    case 'QRCode': return <Antd.QRCode value="https://eftson.com" />;
    case 'Segmented': return <Antd.Segmented size={compact ? 'small' : 'middle'} options={compact
      ? [{ label: 'List', value: 'list' }, { label: 'Grid', value: 'grid' }]
      : [{ label: 'List', value: 'list', icon: <BarsOutlined /> }, { label: 'Cards', value: 'cards', icon: <AppstoreOutlined /> }, { label: 'Table', value: 'table', icon: <TableOutlined /> }]} />;
    case 'Statistic': return <Antd.Row gutter={32}><Antd.Col span={12}><Antd.Statistic title="Claims Reviewed" value={112893} /></Antd.Col><Antd.Col span={12}><Antd.Statistic title="Accuracy" value={98.28} precision={2} suffix="%" styles={{ content: { color: '#15803D' } }} /></Antd.Col></Antd.Row>;
    case 'Data Table':
    case 'Data Grid':
    case 'Table':
    case 'Table Body':
    case 'Table Row': {
      const paymentRows = [
        { key: '1', provider: 'Smith, Robert', charge: '$73,269.95', paid: '$24,312.09', insurance: '$20,110.40', patient: '$4,201.69', allowed: '$31,844.12' },
        { key: '2', provider: 'Lee, Amanda', charge: '$58,104.20', paid: '$19,880.55', insurance: '$16,402.10', patient: '$3,478.45', allowed: '$26,119.88' },
        { key: '3', provider: 'Patel, Anika', charge: '$41,992.00', paid: '$14,205.33', insurance: '$11,880.00', patient: '$2,325.33', allowed: '$18,640.75' },
      ];
      const money = (value) => <span className="table-cell-strong">{value}</span>;
      return (
        <Table
          dataSource={compact ? paymentRows.slice(0, 2) : paymentRows}
          columns={[
            { title: 'Provider', dataIndex: 'provider', key: 'provider' },
            { title: 'Total Charge', dataIndex: 'charge', key: 'charge', render: money },
            { title: 'Total Paid', dataIndex: 'paid', key: 'paid', render: money },
            { title: 'Insurance Paid', dataIndex: 'insurance', key: 'insurance', render: money },
            { title: 'Patient Paid', dataIndex: 'patient', key: 'patient', render: money },
            { title: 'Ins Allowed', dataIndex: 'allowed', key: 'allowed', render: money },
            {
              title: 'Action',
              key: 'action',
              render: () => <TableActionButton>View Provider Payment Details</TableActionButton>,
            },
          ]}
        />
      );
    }
    case 'Data Table Cell':
    case 'Data Grid Cell':
    case 'Table Header':
    case 'Table Header Cell':
    case 'Table Cell':
      return (
        <div className="table-cell-content-demo">
          <Table
            dataSource={[
              {
                key: '1',
                text: 'Plain text',
                withIcon: <span>With icon <AppstoreOutlined /></span>,
                action: <Antd.Button type="primary" size="small">Primary Button</Antd.Button>,
                check: <Antd.Checkbox defaultChecked />,
                status: <Antd.Tag color="blue">Worker&apos;s Comp</Antd.Tag>,
              },
              {
                key: '2',
                text: 'Hover / zebra row',
                withIcon: <span>1/4</span>,
                action: <Antd.Select size="small" style={{ width: 140 }} placeholder="Please select" options={sampleOptions} />,
                check: <Antd.Switch size="small" defaultChecked checkedChildren="Yes" unCheckedChildren="No" />,
                status: <Antd.Progress percent={64} size="small" style={{ width: 120 }} />,
              },
            ]}
            columns={[
              { title: 'Text', dataIndex: 'text' },
              { title: 'Mixed', dataIndex: 'withIcon' },
              { title: 'Control', dataIndex: 'action' },
              { title: 'Select', dataIndex: 'check' },
              { title: 'Status', dataIndex: 'status' },
            ]}
          />
        </div>
      );
    case 'Message': return <>{contextHolder}<Antd.Space><Antd.Button onClick={() => messageApi.success('Changes saved')}>Success</Antd.Button><Antd.Button onClick={() => messageApi.loading('Saving…', 1)}>Loading</Antd.Button></Antd.Space></>;
    default: return (
      <Antd.Card size="small" style={{ maxWidth: 420 }}>
        <Antd.Typography.Text strong>{name}</Antd.Typography.Text>
        <Antd.Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
          Specimen for the Youlify Figma component.
        </Antd.Typography.Paragraph>
      </Antd.Card>
    );
  }
}


export default DemoRenderer;
