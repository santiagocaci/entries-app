import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import 'styles/globals.css';
import { darkTheme, lightTheme } from 'themes';

import { Provider } from 'react-redux';
import { store } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </SnackbarProvider>
  );
}

export default MyApp;
