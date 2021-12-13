import { Outlet } from 'react-router';

import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
