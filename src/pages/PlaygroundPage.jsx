import { useState } from 'react';
import * as Antd from 'antd';
import { Palette, Code2, Download, Check, LayoutGrid, LayoutTemplate } from 'lucide-react';
import { eftsonTemplates } from '../data/templates.js';
import TemplateVisual from '../components/templates/TemplateVisual.jsx';
import Button from '../components/ui/Button.jsx';
import { lucideSlots } from '../components/demos/lucideSlots.jsx';

function MobilePreviewIcon() { return <span className="mobile-preview-icon" aria-hidden="true" />; }

export default function PlaygroundPage() {
  const requestedTemplate = new URLSearchParams(window.location.hash.split('?')[1] || '').get('template');
  const initialTemplate = eftsonTemplates.some((template) => template.id === requestedTemplate) ? requestedTemplate : 'clearinghouse';
  const makeConfig = (templateId) => ({ template: templateId, title: eftsonTemplates.find((item) => item.id === templateId)?.name || 'Eftson template', primaryColor: '#2D48DA', radius: 4, compact: false });
  const [config, setConfig] = useState(() => makeConfig(initialTemplate));
  const [code, setCode] = useState(() => JSON.stringify(makeConfig(initialTemplate), null, 2));
  const [panel, setPanel] = useState('code');
  const [viewport, setViewport] = useState('desktop');
  const [showGrid, setShowGrid] = useState(true);
  const [codeError, setCodeError] = useState('');
  const [exported, setExported] = useState(false);
  const updateConfig = (patch) => {
    const next = { ...config, ...patch };
    setConfig(next); setCode(JSON.stringify(next, null, 2)); setCodeError('');
  };
  const updateCode = (value) => {
    setCode(value);
    try {
      const next = JSON.parse(value);
      if (!eftsonTemplates.some((template) => template.id === next.template)) throw new Error('Unknown template');
      setConfig({ ...makeConfig(next.template), ...next }); setCodeError('');
    } catch (error) { setCodeError(error.message); }
  };
  const formatCode = () => { try { const parsed = JSON.parse(code); setCode(JSON.stringify(parsed, null, 2)); setCodeError(''); } catch (error) { setCodeError(error.message); } };
  const exportConfig = () => {
    const blob = new Blob([code], { type: 'application/json' });
    const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href = url; link.download = `${config.template}-eftson-template.json`; link.click(); URL.revokeObjectURL(url);
    setExported(true); setTimeout(() => setExported(false), 1500);
  };
  return <article className="doc-article resource-page playground-page">
    <header className="article-header" id="playground"><h1>Playground</h1><p>Tune tokens and preview templates locally.</p></header>
    <section className="playground-shell" id="preview">
      <div className="playground-appbar"><strong>Playground</strong><Button icon={<Palette size={16} />} onClick={() => setPanel(panel === 'theme' ? 'code' : 'theme')}>{panel === 'theme' ? 'Code editor' : 'Theme editor'}</Button><Antd.Select aria-label="Choose template" value={config.template} onChange={(value) => updateConfig(makeConfig(value))} options={eftsonTemplates.map((template) => ({ label: template.name, value: template.id }))} suffixIcon={lucideSlots.chevronDown} /><span className="build-status"><i /> Build finished</span><Button type="primary" icon={exported ? <Check size={16} /> : <Download size={16} />} onClick={exportConfig}>{exported ? 'Exported' : 'Export'}</Button></div>
      <div className="playground-workbench">
        <aside className="playground-editor" id="controls">
          <div className="editor-tabs"><Button tone="soft" size="small" className={panel === 'code' ? 'active' : ''} icon={<Code2 size={14} />} onClick={() => setPanel('code')}>Code</Button><Button tone="soft" size="small" className={panel === 'theme' ? 'active' : ''} icon={<Palette size={14} />} onClick={() => setPanel('theme')}>Theme</Button></div>
          {panel === 'code' ? <><div className="editor-toolbar"><span>template.config.json</span><Button tone="outline" size="small" onClick={formatCode}>Format code</Button></div><textarea value={code} onChange={(event) => updateCode(event.target.value)} spellCheck="false" aria-label="Template configuration editor" /><div className={`editor-status ${codeError ? 'error' : ''}`}>{codeError ? `Configuration error: ${codeError}` : 'Valid configuration · preview updated'}</div></> : <div className="theme-controls"><label><span>Primary color</span><Antd.ColorPicker value={config.primaryColor} onChange={(color) => updateConfig({ primaryColor: color.toHexString() })} showText /></label><label><span>Corner radius</span><Antd.Slider min={2} max={8} step={2} marks={{ 2: '2', 4: '4', 8: '8' }} value={config.radius} onChange={(value) => updateConfig({ radius: value })} /></label><label className="switch-control"><span>Compact density</span><Antd.Switch checked={config.compact} onChange={(value) => updateConfig({ compact: value })} /></label></div>}
        </aside>
        <div className="playground-preview-panel">
          <div className="preview-toolbar"><Button tone="soft" size="small" className={showGrid ? 'active' : ''} icon={<LayoutGrid size={14} />} onClick={() => setShowGrid(!showGrid)}>Grid</Button><Antd.Radio.Group value={viewport} onChange={(event) => setViewport(event.target.value)} optionType="button" buttonStyle="solid"><Antd.Radio.Button value="desktop"><LayoutTemplate /> Desktop</Antd.Radio.Button><Antd.Radio.Button value="phone"><MobilePreviewIcon /> Phone</Antd.Radio.Button></Antd.Radio.Group><span>{viewport === 'desktop' ? '1440 × 900' : '390 × 844'}</span></div>
          <div className={`playground-canvas ${showGrid ? 'with-grid' : ''}`} style={{ '--playground-radius': `${config.radius}px` }}><div className={`preview-device ${viewport}`}><TemplateVisual templateId={config.template} config={config} /></div></div>
          <p className="playground-note">Local preview only. Changes stay in this session.</p>
        </div>
      </div>
    </section>
  </article>;
}
