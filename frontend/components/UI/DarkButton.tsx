import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const DarkButton = styled(Button)({
    backgroundColor: '#1E232C !important',
    fontSize: 16,
    fontWeight: 700,
    color:"white",
    borderRadius: 8,
    height:"56px",
    outline:"none",
    '&:disabled': {
        backgroundColor: 'gray !important',
    },
    // '&:hover': {
    //   backgroundColor: '#1E232C  !important',
    // },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  });