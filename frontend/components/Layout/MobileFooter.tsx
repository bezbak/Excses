import React from "react";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { PiHouse, PiHouseFill } from "react-icons/pi";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import Link from 'next/link';

const icons = [
  { 
    label: "Home",
    href: "/",
    iconInactive: <PiHouse />,
    iconActive: <PiHouseFill /> },
  {
    label: "Search",
    href: "/search",
    iconInactive: <RiSearchLine />,
    iconActive: <RiSearchFill />,
  },
  {
    label: "Add",
    href: "/add",
    iconInactive: <BsPlusSquare />,
    iconActive: <BsPlusSquareFill />,
  },
  {
    label: "Favorites",
    href: "/favorites",
    iconInactive: <RxHeart />,
    iconActive: <RxHeartFilled />,
  },
  {
    label: "Profile",
    href: "/user/profile",
    iconInactive: <IoPersonOutline />,
    iconActive: <IoPerson />,
  },
];

interface IconBtnProps {
  label: string;
  icon: React.ReactNode;
  index: number;
}

export default function MobileFooter() {
  const [active, setActive] = React.useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const handleIconClick = (index: number) => {
    const newActiveState = [...active];
    newActiveState.fill(false);
    newActiveState[index] = true;
    setActive(newActiveState);
  };
  const IconBtn = ({ label, icon, index }: IconBtnProps) => {
    return (
      <BottomNavigationAction
        label={label}
        icon={icon}
        sx={{ minWidth: "40px", color:'#1E232C' }}
        onClick={() => handleIconClick(index)}
      />
    );
  };
  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: { xs: "flex", sm: "flex", md: "none" },
        justifyContent: "space-around",
        fontSize: "24px",
        color:"#1E232C"
      }}
    >
      {icons.map((icon, index) => (
        <Link key={index} href={icon.href} >
          <IconBtn
            index={index}
            label={icon.label}
            icon={active[index] ? icon.iconActive : icon.iconInactive}
          />
        </Link>
      ))}
    </BottomNavigation>
  );
}
