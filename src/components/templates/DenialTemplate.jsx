import { useState } from 'react';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import Button from '../ui/Button.jsx';

function DenialTemplate({ title = 'Denial Insights Copilot', primaryColor = '#2D40CB', compact = false, mini = false }) {
  const [selectedMonth, setSelectedMonth] = useState('Jun');
  const [prompt, setPrompt] = useState('');
  const [lastPrompt, setLastPrompt] = useState('');
  const months = [
    ['Jan', 64, 28, 38], ['Feb', 86, 24, 58], ['Mar', 92, 36, 63],
    ['Apr', 54, 45, 29], ['May', 88, 61, 38], ['Jun', 58, 44, 51],
  ];
  const send = () => { if (prompt.trim()) { setLastPrompt(prompt.trim()); setPrompt(''); } };
  return <div className={`health-template denial-template ${compact ? 'is-compact' : ''} ${mini ? 'is-mini' : ''}`} style={{ '--template-primary': primaryColor }}>
    <aside className="health-rail"><span className="health-mark">Y</span><small>Command center</small><i className="active" /><i /><i /><small>Operations</small><i /><i /><i /></aside>
    <div className="denial-workspace">
      <header>
        <Button tone="soft" size="small" icon={<ArrowLeft size={14} />}>Back to Home</Button>
        <strong>{title}</strong>
        <Button tone="outline" size="small">Show all graphs</Button>
      </header>
      <main>
        <p>Claims entering denial management are trending below last month. Review the highest-volume category and continue the analysis below.</p>
        <section className="denial-chart-card">
          <div className="chart-heading"><div><strong>Last 6 month trend of denial management</strong><small>Based on when claims entered the work queue.</small></div><Download /></div>
          <div className="chart-legend"><span><i className="pink" />Missing information</span><span><i className="yellow" />Pending completion</span><span><i className="blue" />Ready for review</span></div>
          <div className="bar-chart">{months.map(([month, pink, yellow, blue]) => <button key={month} className={selectedMonth === month ? 'selected' : ''} onClick={() => setSelectedMonth(month)} aria-label={`View ${month} data`}><span className="bar-stack"><i className="pink" style={{ height: `${pink}%` }} /><i className="yellow" style={{ height: `${yellow}%` }} /><i className="blue" style={{ height: `${blue}%` }} /></span><b>{month}</b></button>)}</div>
          <div className="chart-selection"><span>{selectedMonth}</span> selected · Click another month to compare.</div>
        </section>
        <p>{lastPrompt ? <>You asked: <strong>{lastPrompt}</strong>. The workspace is ready to pull the supporting claim table.</> : 'To see the claims behind any bar, choose a month or ask a follow-up question.'}</p>
        <div className="copilot-composer">
          <input value={prompt} onChange={(event) => setPrompt(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') send(); }} placeholder="Ask about denial trends…" />
          <Button type="primary" size="small" iconOnly icon={<ArrowRight size={14} />} onClick={send} aria-label="Send question" />
        </div>
      </main>
    </div>
  </div>;
}


export default DenialTemplate;
