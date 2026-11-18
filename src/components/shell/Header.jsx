import { SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from './Logo.jsx';

const navItems = [
  { section: 'docs', href: '#/docs/getting-started', label: 'Docs' },
  { section: 'components', href: '#/components/overview', label: 'Components' },
  { section: 'templates', href: '#/templates', label: 'Templates' },
  { section: 'themes', href: '#/themes', label: 'Themes' },
  { section: 'playground', href: '#/playground', label: 'Playground' },
];

export default function Header({ route, mobileOpen, setMobileOpen, onSearch }) {
  return (
    <header className="site-header">
      <Logo />
      <nav className="top-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.section} className={route.section === item.section ? 'active' : ''} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className="search-trigger" aria-label="Search" onClick={onSearch}>
        <SearchOutlined />
      </button>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>
    </header>
  );
}
