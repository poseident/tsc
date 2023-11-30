import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

/*import Footer from './Footer';*/
/*import Header from './Header';*/
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Meta />
      <div>
        {/*<Header />*/}
        {children}
        {/*<Footer />*/}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
