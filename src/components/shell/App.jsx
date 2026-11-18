import { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { parseRoute, eftsonThemeConfig } from '../../lib/routing.js';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Toc from './Toc.jsx';
import SearchPalette from './SearchPalette.jsx';
import PrevNext from './PrevNext.jsx';
import LandingPage from '../../pages/LandingPage.jsx';
import GettingStartedPage from '../../pages/GettingStartedPage.jsx';
import DesignPage from '../../pages/DesignPage.jsx';
import ComponentsOverview from '../../pages/ComponentsOverview.jsx';
import AllComponentsPage from '../../pages/AllComponentsPage.jsx';
import ChangelogPage from '../../pages/ChangelogPage.jsx';
import ComponentPage from '../../pages/ComponentPage.jsx';
import TemplatesPage from '../../pages/TemplatesPage.jsx';
import PlaygroundPage from '../../pages/PlaygroundPage.jsx';

function renderPage(route, { componentTab, setComponentTab } = {}) {
  if (route.type === 'landing') return <LandingPage />;
  if (route.type === 'getting-started') return <GettingStartedPage />;
  if (route.type === 'overview') return <ComponentsOverview />;
  if (route.type === 'all') return <AllComponentsPage />;
  if (route.type === 'changelog') return <ChangelogPage />;
  if (route.type === 'component') {
    return (
      <ComponentPage route={route}
        tab={componentTab}
        onTabChange={setComponentTab}
 />
    );
  }
  if (route.type === 'templates') return <TemplatesPage />;
  if (route.type === 'playground') return <PlaygroundPage />;
  return <DesignPage route={route} />;
}

export default function App() {
  const [route, setRoute] = useState(parseRoute());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [componentTab, setComponentTab] = useState('overview');

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute());
      setComponentTab('overview');
      setMobileOpen(false);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const hasSidebar = route.section === 'docs' || route.section === 'components';
  const fullBleed = route.section === 'landing'
    || route.section === 'templates' || route.section === 'playground';

  return (
    <ConfigProvider theme={eftsonThemeConfig}>
      <div className={`site ${route.section}-site`}>
        <Header route={route}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          onSearch={() => setSearchOpen(true)}
 />
        {(hasSidebar || mobileOpen) && (
          <Sidebar route={route} open={mobileOpen} close={() => setMobileOpen(false)} />
        )}
        <main className={`main-shell ${hasSidebar ? '' : 'no-sidebar'} ${fullBleed ? 'full-bleed' : ''} ${route.section}-route-shell`}>
          <div className="content-column">
            {renderPage(route, { componentTab, setComponentTab })}
            <PrevNext route={route} />
            <footer>Eftson</footer>
          </div>
          {!fullBleed && <Toc type={route.type} tab={componentTab} />}
        </main>
        <SearchPalette open={searchOpen} close={() => setSearchOpen(false)} />
      </div>
    </ConfigProvider>
  );
}
