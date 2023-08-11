import React from "react";
import logo from "@/assets/butterfly.svg";
import Image from "next/image";
import Link from "next/link";
import { CgShoppingBag } from "react-icons/cg";
import MobileFooter from "./MobileFooter";

import {
  Typography,
  Container,
  Box,
  TextField,
  Button,
} from "@mui/material";

function Footer() {
  return (
    // Desktop Footer
    <footer className="bg-default pt-[60px] pb-[30px]">
      <Container
        sx={{
          display: { xs: "none", sm: "none", md: "flex", },
          justifyContent: "space-between",
          flexWrap: { sm: "wrap", md: "nowrap" },
        }}
      >
        <Box>
          <Image
            src={logo}
            width={75}
            className="w-[50px] md:w-[75px] m-auto"
            alt="logo img "
          />
          <Typography
            variant="h4"
            sx={{
              textTransform: "none",
              color: "white",
              ml: 1,
              fontSize: { xs: 24, md: 30, lg: 36, xl: 40 },
            }}
          >
            Eilbay
          </Typography>
        </Box>
        <div className="h-full">
          <Link href="/" className=" h-8  flex items-center">
            <CgShoppingBag /> Excses@gmail.com
          </Link>
          <Link href="/" className=" h-8  flex items-center">
            <CgShoppingBag /> ул. Ленина 318
          </Link>
        </div>
        <div className="flex h-[56px] gap-[25px] ">
          <TextField
            type="text"
            sx={{ width: "100%", borderRadius: "12px" }}
            id="outlined-adornment"
            label="Email"
          />
          <Button
            variant="contained"
            sx={{
              height: "56px",
              borderRadius: "12px",
              bgcolor: "#0D99F4 !important",
              px: 5,
            }}
          >
            Отправить
          </Button>
        </div>
      </Container>

      {/* // Mobile footer */}
      <MobileFooter/>
    </footer>
  );
}
export default Footer;
