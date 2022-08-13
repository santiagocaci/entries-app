import { createTheme } from '@mui/material';
import { red, cyan } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: cyan[100],
    },
    secondary: {
      main: cyan[200],
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {},
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: cyan[700],
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
