import React from 'react'
import Link from "next/link"
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box, Divider, } from "@mui/material"
import UserAnimation from "@/components/user/UserAnimation";
import { DarkButton } from '@/components/UI/DarkButton';
import { Forms } from '@/utils/forms';

function EmailRequest() {

  function isValidEmail(_email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(_email);
  }
  const [email, setEmail] = React.useState('');
  const [hreff, setHreff] = React.useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setHreff(isValidEmail(event.target.value) ? "/user/verification" : "")
  }
  
  return (
    <div className='user max-w-[1200px] m-auto flex items-center '>
      <UserAnimation />
      <div className="text-center max-h-[650px] h-min md:w-6/12 w-full">
        <div className=" px-5">
          <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: 28, md: 32, lg: 36, xl: 40 } }}>
            Забыли пароль?
          </Typography>

          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%" }}>
            <Typography sx={{ color: "secondary.main", textAlign: "left", mt: 2.5 }}>
              Пожалуйста напишите адрес вашей электронной почты для получения кода
            </Typography>
            <TextField
              type='email'
              name='email'
              sx={{ mt: 2, width: "100%", }}
              value={email} onChange={handleEmailChange}
              id='outlined-adornment'
              label="Имя ползователья"
            />


            {/* <Link href="/" className="block w-fit ml-auto no-underline font-bold hover:underline">Забыли пароль?</Link> */}

            <DarkButton
              disabled={!isValidEmail(email)}
              type='submit'
              href={hreff}
              variant="contained"
              sx={{ my: 4, width: "100%" }}
            >Отпавить код</DarkButton>



            <Typography sx={{ mt: 2, fontSize: "18px" }}>Вспомнили пароль?<Link href='/user/login' className="font-bold text-info">Войти</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default EmailRequest
