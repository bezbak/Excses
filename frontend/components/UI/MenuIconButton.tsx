import React from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface MenuIconButtonProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const MenuIconButton: React.FC<MenuIconButtonProps> = ({ isOpen, toggleSidebar }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          className={`relative md:w-[48px] min-w-[32px] transition-2  h-[28px] p-0`} >
            <div className={`w-full h-[2px] rounded bg-white absolute ${isOpen?"top-0":"rotate-45 top-4"}`}></div>         
            <div className={isOpen?"w-3/5 h-[2px] bg-white absolute top-0 rounded bottom-0 m-auto left-0 ":"hidden"}></div>
            <div className={`w-full h-[2px] rounded bg-white absolute ${isOpen?"bottom-0":"-rotate-45 top-4"}`}></div>
        </IconButton>);
};

export default MenuIconButton;
