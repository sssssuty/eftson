import { GithubOutlined, BugOutlined, EditOutlined, CompassOutlined, FileTextOutlined } from '@ant-design/icons';

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
        <a href="#/components/all"><GithubOutlined /> Source</a>
        <a href="#/components/changelog"><BugOutlined /> Changelog</a>
      </div>
      <div>
        <span>Docs</span>
        <a href="#/components/all"><EditOutlined /> Specimens</a>
        {isComp && <a href="#/docs/getting-started"><CompassOutlined /> Docs</a>}
        <a href="#/docs/spec/values"><FileTextOutlined /> Guidelines</a>
      </div>
    </div>
  );
}
