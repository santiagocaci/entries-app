import { createTheme } from '@mui/material';
import { red, teal } from '@mui/material/colors';

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
});
