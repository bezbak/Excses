import React from "react";
import Image from "next/image";
import { Container, Button, Typography, IconButton } from "@mui/material";
import logo from "@/assets/butterfly.svg";
import Search from "../UI/HeaderSearch";
import { HiOutlineHeart } from "react-icons/hi";
import { BiChat, BiPlus } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import LanguageSelect from "../UI/LanguageSelect";
import { useFavorites } from "@/hooks/useFavorites";
import MenuIconButton from "../UI/MenuIconButton";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

function Header({ isOpen, toggleSidebar }: SidebarProps) {
  const user = useUser();
  return (
    <header className="bg-default h-[100px] flex items-center ">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          p: { xs: 0, sm: 1 },
          width: "100%",
          gap: 1,
        }}
      >
        <MenuIconButton isOpen={!isOpen} toggleSidebar={toggleSidebar} />
        <Link href="/">
          <Button sx={{ flexShrink: 0 }}>
            <Image
              src={logo}
              width={42}
              className="w-[30px] md:w-[42px] "
              alt="logo img "
            />
            <Typography
              variant="h4"
              sx={{
                textTransform: "none",
                color: "white",
                fontSize: { xs: 24, md: 30, lg: 36, xl: 40 },
              }}
            >
              Eilbay
            </Typography>
          </Button>
        </Link>
        <Search sx={{maxWidth:'500px',width:"100%", display:{xs:"none",md:'block'}}} />
        {/* <LanguageSelect/> */}

        <nav className="gap-[14px] flex">
          <Link href={"/favorites"}>
            <Button
              sx={{
                color: "white",
                p: 0,
                display: { xs: "none", md: "block" },
                width: "min-content",
              }}
            >
              <HiOutlineHeart className="text-xl m-auto" />

              <Typography sx={{ fontSize: "14px", textTransform: "none" }}>
                Избранное
              </Typography>
            </Button>
          </Link>
          <Button
            href={"https://t.me/eilbayAdmin"}
            sx={{
              display: "block",
              p: 0,
              color: "white",
              minWidth: "min-content",
              width: "min-content",
            }}
          >
            <BiChat className="text-4xl md:text-xl m-auto" />
            <Typography
              sx={{
                fontSize: "14px",
                textTransform: "none",
                display: { xs: "none", md: "block" },
                width: "min-content",
              }}
            >
              Чат
            </Typography>
          </Button>
          <Link href={user.isLoggedIn ? "/user/profile" : "/user/register"}>
            <Button
              sx={{
                display: { xs: "none", md: "block" },
                p: 0,
                color: "white",
                minWidth: "min-content"
              }}
            >
              <FaRegUser className="text-xl m-auto" />

              <Typography sx={{ fontSize: "14px", textTransform: "none" }}>
                {user.isLoggedIn ? "Профиль" : "Войти"}
              </Typography>
            </Button>
          </Link>
          <Link href={true ? "/add" : ""}>
            <Button
              sx={{
                display: { xs: "none", md: "block" },
                p: 0,
                color: "white",
              }}
            >
              <BiPlus className="text-xl m-auto text-bold" />
              <Typography sx={{ fontSize: "14px", textTransform: "none" }}>
                Добавить
              </Typography>
            </Button>
          </Link>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
