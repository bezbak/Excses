import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const DarkButton = styled(Button)({
    backgroundColor: '#1E232C',
    fontSize: 16,
    fontWeight: 700,
    color:"white",
    borderRadius: 8,
    height:"56px",
    outline:"none",
    component:'button',
    variant: 'contained',
    width:"100%"
  });