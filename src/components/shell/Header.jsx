import { Search, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import Button from '../ui/Button.jsx';

const navItems = [
  { section: 'docs', href: '#/docs/getting-started', label: 'Docs' },
  { section: 'components', href: '#/components/overview', label: 'Components' },
  { section: 'templates', href: '#/templates', label: 'Templates' },
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
      <Button
        tone="soft"
        size="small"
        iconOnly
        className="search-trigger"
        aria-label="Search"
        icon={<Search size={16} />}
        onClick={onSearch}
      />
      <Button
        tone="soft"
        size="small"
        iconOnly
        className="mobile-menu"
        aria-label="Toggle navigation"
        icon={mobileOpen ? <X size={16} /> : <Menu size={16} />}
        onClick={() => setMobileOpen(!mobileOpen)}
      />
    </header>
  );
}
