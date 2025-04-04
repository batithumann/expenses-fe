import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#28a745', // Green for login button
    },
    secondary: {
      main: '#ffffff', // White for register button
      contrastText: '#28a745', // Green text for register button
    },
    background: {
      default: 'red', // Light gray background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    button: {
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px', // Rounded corners for buttons
        },
      },
    },
  },
});

export default theme;
