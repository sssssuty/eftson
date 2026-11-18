import { useState } from 'react';
import * as Antd from 'antd';
import {
  BgColorsOutlined, CodeOutlined, DownloadOutlined, CheckOutlined,
  AppstoreOutlined, LayoutOutlined,
} from '@ant-design/icons';
import { eftsonTemplates } from '../data/templates.js';
import TemplateVisual from '../components/templates/TemplateVisual.jsx';

function MobilePreviewIcon() { return <span className="mobile-preview-icon" aria-hidden="true" />; }

export default function PlaygroundPage() {
  const requestedTemplate = new URLSearchParams(window.location.hash.split('?')[1] || '').get('template');
  const initialTemplate = eftsonTemplates.some((template) => template.id === requestedTemplate) ? requestedTemplate : 'clearinghouse';
  const makeConfig = (templateId) => ({ template: templateId, title: eftsonTemplates.find((item) => item.id === templateId)?.name || 'Eftson template', primaryColor: '#2D40CB', radius: 8, compact: false });
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
      <div className="playground-appbar"><strong>Playground</strong><Antd.Button icon={<BgColorsOutlined />} onClick={() => setPanel(panel === 'theme' ? 'code' : 'theme')}>{panel === 'theme' ? 'Code editor' : 'Theme editor'}</Antd.Button><Antd.Select aria-label="Choose template" value={config.template} onChange={(value) => updateConfig(makeConfig(value))} options={eftsonTemplates.map((template) => ({ label: template.name, value: template.id }))} /><span className="build-status"><i /> Build finished</span><Antd.Button type="primary" icon={exported ? <CheckOutlined /> : <DownloadOutlined />} onClick={exportConfig}>{exported ? 'Exported' : 'Export'}</Antd.Button></div>
      <div className="playground-workbench">
        <aside className="playground-editor" id="controls">
          <div className="editor-tabs"><button className={panel === 'code' ? 'active' : ''} onClick={() => setPanel('code')}><CodeOutlined /> Code</button><button className={panel === 'theme' ? 'active' : ''} onClick={() => setPanel('theme')}><BgColorsOutlined /> Theme</button></div>
          {panel === 'code' ? <><div className="editor-toolbar"><span>template.config.json</span><button onClick={formatCode}>Format code</button></div><textarea value={code} onChange={(event) => updateCode(event.target.value)} spellCheck="false" aria-label="Template configuration editor" /><div className={`editor-status ${codeError ? 'error' : ''}`}>{codeError ? `Configuration error: ${codeError}` : 'Valid configuration · preview updated'}</div></> : <div className="theme-controls"><label><span>Primary color</span><Antd.ColorPicker value={config.primaryColor} onChange={(color) => updateConfig({ primaryColor: color.toHexString() })} showText /></label><label><span>Corner radius</span><Antd.Slider min={2} max={16} value={config.radius} onChange={(value) => updateConfig({ radius: value })} /></label><label className="switch-control"><span>Compact density</span><Antd.Switch checked={config.compact} onChange={(value) => updateConfig({ compact: value })} /></label></div>}
        </aside>
        <div className="playground-preview-panel">
          <div className="preview-toolbar"><button className={showGrid ? 'active' : ''} onClick={() => setShowGrid(!showGrid)}><AppstoreOutlined /> Grid</button><Antd.Radio.Group value={viewport} onChange={(event) => setViewport(event.target.value)} optionType="button" buttonStyle="solid"><Antd.Radio.Button value="desktop"><LayoutOutlined /> Desktop</Antd.Radio.Button><Antd.Radio.Button value="phone"><MobilePreviewIcon /> Phone</Antd.Radio.Button></Antd.Radio.Group><span>{viewport === 'desktop' ? '1440 × 900' : '390 × 844'}</span></div>
          <div className={`playground-canvas ${showGrid ? 'with-grid' : ''}`} style={{ '--playground-radius': `${config.radius}px` }}><div className={`preview-device ${viewport}`}><TemplateVisual templateId={config.template} config={config} /></div></div>
          <p className="playground-note">Local preview only. Changes stay in this session.</p>
        </div>
      </div>
    </section>
  </article>;
}
