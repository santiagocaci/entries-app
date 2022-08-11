import { createTheme } from '@mui/material';
import { red, blue } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: blue[100],
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {},
    },
  },
});
