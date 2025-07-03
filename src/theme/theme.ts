import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2ECC71',
      dark: '#27AE60',
      light: '#58D68D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1E8449',
      dark: '#0F1419',
      light: '#00C851',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#5D6D7E',
    },
    grey: {
      50: '#F8F9FA',
      100: '#BDC3C7',
      900: '#0F1419',
    }
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 30px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 10px 30px rgba(46, 204, 113, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 5px 15px rgba(46, 204, 113, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 60px rgba(46, 204, 113, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
            '&:hover fieldset': {
              borderColor: '#2ECC71',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#2ECC71',
            },
          },
        },
      },
    },
  },
  shadows: [
    'none',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 10px 30px rgba(46, 204, 113, 0.2)',
    '0 20px 60px rgba(46, 204, 113, 0.3)',
    '0 0 30px rgba(46, 204, 113, 0.4)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
    '0 5px 15px rgba(46, 204, 113, 0.1)',
  ],
});

export default theme;
