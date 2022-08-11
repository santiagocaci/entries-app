import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import '../styles/globals.css';
import { darkTheme, lightTheme } from '../themes';
import { UiProvider } from '../context/ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
  );
}

export default MyApp;
