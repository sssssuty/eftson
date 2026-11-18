const BARS = [42, 68, 54, 80, 61, 74, 48];
const LINE = [28, 36, 32, 48, 44, 62, 58, 70];
const PIE = [
  { label: 'Approved', value: 38, color: '#2D40CB' },
  { label: 'In review', value: 27, color: '#2B6FF6' },
  { label: 'Denied', value: 18, color: '#A41616' },
  { label: 'Pending', value: 17, color: '#BDC2CB' },
];

function linePoints(values, width, height, pad = 12) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = Math.max(max - min, 1);
  return values.map((value, index) => {
    const x = pad + (index * (width - pad * 2)) / Math.max(values.length - 1, 1);
    const y = height - pad - ((value - min) / span) * (height - pad * 2);
    return `${x},${y}`;
  }).join(' ');
}

function areaPath(values, width, height, pad = 12) {
  const points = linePoints(values, width, height, pad).split(' ');
  return `M ${pad},${height - pad} L ${points.join(' L ')} L ${width - pad},${height - pad} Z`;
}

export default function ChartSpecimen({ name, compact = false }) {
  const width = compact ? 320 : 420;
  const height = compact ? 160 : 220;

  if (name === 'Bar Chart') {
    const bars = compact ? BARS.slice(0, 5) : BARS;
    const max = Math.max(...bars);
    return (
      <div className="chart-specimen" aria-label="Bar chart example">
        <div className="chart-bars" style={{ height }}>
          {bars.map((value, index) => (
            <div key={`${value}-${index}`} className="chart-bar-col">
              <span style={{ height: `${(value / max) * 100}%` }} />
              <small>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</small>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (name === 'Pie Chart') {
    let offset = 0;
    const gradient = PIE.map((slice) => {
      const start = offset;
      offset += slice.value;
      return `${slice.color} ${start}% ${offset}%`;
    }).join(', ');

    return (
      <div className="chart-specimen chart-pie" aria-label="Pie chart example">
        <div className="chart-pie-visual" style={{ background: `conic-gradient(${gradient})` }} />
        <ul>
          {PIE.map((slice) => (
            <li key={slice.label}>
              <i style={{ background: slice.color }} />
              <span>{slice.label}</span>
              <strong>{slice.value}%</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (name === 'Line Chart') {
    const pointList = linePoints(LINE, width, height).split(' ');
    return (
      <div className="chart-specimen" aria-label="Line chart example">
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} role="img">
          <polyline fill="none" stroke="#2D40CB" strokeWidth="2.5" points={pointList.join(' ')} />
          {pointList.map((point, index) => {
            const [px, py] = point.split(',').map(Number);
            return <circle key={`${point}-${index}`} cx={px} cy={py} r="3.5" fill="#2D40CB" />;
          })}
        </svg>
      </div>
    );
  }

  if (name === 'Area Chart') {
    const points = linePoints(LINE, width, height);
    return (
      <div className="chart-specimen" aria-label="Area chart example">
        <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} role="img">
          <path d={areaPath(LINE, width, height)} fill="rgba(45, 64, 203, 0.16)" />
          <polyline fill="none" stroke="#2D40CB" strokeWidth="2.5" points={points} />
        </svg>
      </div>
    );
  }

  return null;
}
