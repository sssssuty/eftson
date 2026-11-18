import { Code2, Bug, SquarePen, Compass, FileText } from 'lucide-react';

export default function PageMeta({ route }) {
  const isComp = route.section === 'components';
  return (
    <div className="page-meta">
      {isComp && (
        <div>
          <span>Import</span>
          <code>{`import { ${route.title} } from '@eftson/ui';`}</code>
        </div>
      )}
      <div>
        <span>Source</span>
        <a href="#/components/all"><Code2 size={14} /> Source</a>
        <a href="#/components/changelog"><Bug size={14} /> Changelog</a>
      </div>
      <div>
        <span>Docs</span>
        <a href="#/components/all"><SquarePen size={14} /> Specimens</a>
        {isComp && <a href="#/docs/getting-started"><Compass size={14} /> Docs</a>}
        <a href="#/docs/spec/values"><FileText size={14} /> Guidelines</a>
      </div>
    </div>
  );
}
