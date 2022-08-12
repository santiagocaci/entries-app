import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import '../styles/globals.css';
import { darkTheme, lightTheme } from '../themes';
import { UiProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UiProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </EntriesProvider>
  );
}

export default MyApp;
