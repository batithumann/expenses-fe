import { SxProps, Theme } from '@mui/system';

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'background.default',
  backgroundImage:'linear-gradient(to bottom right, #45C270, #28a745)'
  // backgroundImage:'linear-gradient(to bottom right, #5B7FFF, #33CCFC)'
};

export const contentBoxStyle: SxProps<Theme> = {
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  margin: '30px',
  textAlign: 'center',
};

export const historyTableStyle:SxProps<Theme> = {
  width: "100%",
  placeContent: "center"
}

export const textFieldStyle: SxProps<Theme> = {
  marginBottom: '15px',
  textAlign: 'left',
  width: '100%'
};

export const linkStyle: SxProps<Theme> = {
  display: 'block',
  marginTop: '10px',
  fontSize: '14px',
  color: 'primary.main',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

export const buttonStyle: SxProps<Theme> = {
  margin: '10px 0',
};

export const dividerStyle: SxProps<Theme> = {
  margin: '20px 0',
};

export const createAccountButtonStyle: SxProps<Theme> = {
  borderColor: 'primary.main',
  color: 'primary.main',
  '&:hover': {
    backgroundColor: '#e6ffe6',
  },
};
