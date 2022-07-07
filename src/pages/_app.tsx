import '../styles/globals.css';

import { DefaultLayout, PageWithLayoutType } from 'components/layouts';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';

import { PaletteMode } from '@mui/material';

type AppLayoutProps = {
  Component: PageWithLayoutType;
  pageProps: any;
}

function AwesomeTarotApp({ Component, pageProps }: AppLayoutProps) {
  // Get component layout
  const Layout = Component.layout || DefaultLayout;
  // Define theme mode
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = useMemo(() => createTheme({ palette: { mode: mode } }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      {/* <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default AwesomeTarotApp;
