import { createTheme } from '@mui/material';
import { cyan, red, teal } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: teal[50],
    },
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19857b',
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
    // MuiCard: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'none',
    //     },
    //   },
    // },
  },
});
