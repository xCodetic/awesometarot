import '../styles/globals.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';

import type { AppProps } from 'next/app'
import {
  PaletteMode
} from '@mui/material';

function AwesomeTarotApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(() => createTheme({ palette: { mode: mode } }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      {/* <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default AwesomeTarotApp;
