import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import '../styles/globals.css';
import { darkTheme, lightTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
