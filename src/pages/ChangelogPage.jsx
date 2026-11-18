import * as Antd from 'antd';

export default function ChangelogPage() {
  const releases = [
    { version: '1.0.0', date: '2026-11-11', color: 'geekblue', items: ['Apply the Eftson indigo, blue, neutral, and semantic color foundations.', 'Adopt Elza Medium and Semibold across documentation and components.', 'Launch the complete one-page component specimen.'] },
    { version: '0.9.0', date: '2026-11-04', color: 'purple', items: ['Define large, medium, and small button families.', 'Document spacing and corner-radius foundations.', 'Add responsive navigation patterns.'] },
    { version: '0.8.0', date: '2026-10-21', color: 'cyan', items: ['Create the first component documentation routes.', 'Add healthcare workflow examples and content patterns.'] },
  ];
  return <article className="doc-article"><header className="article-header"><h1>Changelog</h1></header><div className="release-list">{releases.map((r) => <section className="release" key={r.version}><div><Antd.Tag color={r.color}>v{r.version}</Antd.Tag><time>{r.date}</time></div><ul>{r.items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div></article>;
}
