import { useState } from 'react';
import * as Antd from 'antd';
import {
  SearchOutlined, ArrowRightOutlined, CopyOutlined, CheckOutlined,
} from '@ant-design/icons';
import { eftsonTemplates } from '../data/templates.js';
import TemplateVisual from '../components/templates/TemplateVisual.jsx';

export default function TemplatesPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [preview, setPreview] = useState(null);
  const [copied, setCopied] = useState(false);
  const categories = ['All', 'Dashboard', 'Table', 'AI Copilot'];
  const templates = eftsonTemplates.filter((template) => {
    const matchesCategory = category === 'All' || template.category === category || template.tags.includes(category);
    const matchesQuery = `${template.name} ${template.description} ${template.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });
  const copyCommand = () => {
    if (!preview) return;
    navigator.clipboard?.writeText(`npx @eftson/ui template ${preview.id}`);
    setCopied(true); setTimeout(() => setCopied(false), 1400);
  };
  return <article className="doc-article resource-page templates-page">
    <header className="article-header" id="templates"><h1>Templates</h1><p>Healthcare product templates — preview, then open in Playground.</p></header>
    <div className="template-gallery-tools"><Antd.Segmented aria-label="Filter templates by category" options={categories} value={category} onChange={setCategory} /><Antd.Input allowClear prefix={<SearchOutlined />} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search templates" /></div>
    <div className="template-grid">{templates.map((template) => <div className="template-card" key={template.id}>
      <div className="template-preview" aria-hidden="true" inert={true}><TemplateVisual templateId={template.id} mini /></div>
      <div><small>{template.category}</small><h2>{template.name}</h2><p>{template.description}</p><div className="template-tags">{template.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button type="button" className="template-link" onClick={() => setPreview(template)}>Preview template <ArrowRightOutlined /></button></div>
    </div>)}</div>
    {!templates.length && <Antd.Empty description="No templates match these filters." />}
    <Antd.Modal className="template-modal" width="min(1240px, calc(100vw - 32px))" open={Boolean(preview)} onCancel={() => setPreview(null)} footer={null} title={preview?.name}>
      {preview && <><p className="template-modal-description">{preview.description}</p><div className="template-modal-canvas"><TemplateVisual templateId={preview.id} /></div><div className="template-modal-footer"><div><span>Eftson CLI</span><code>npx @eftson/ui template {preview.id}</code><Antd.Button aria-label="Copy CLI command" icon={copied ? <CheckOutlined /> : <CopyOutlined />} onClick={copyCommand} /></div><Antd.Button type="primary" onClick={() => { window.location.hash = `/playground?template=${preview.id}`; }}>Open in Playground <ArrowRightOutlined /></Antd.Button></div></>}
    </Antd.Modal>
  </article>;
}
