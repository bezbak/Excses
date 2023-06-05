import React from 'react'
import UserAnimation from '@/components/user/userAnimation'
import { DarkButton } from '@/components/UI/DarkButton'
import { Typography, Box,  } from '@mui/material'
import Link from 'next/link';

function NewPassword() {
  return (
    <div className='user max-w-[1200px] m-auto flex items-center'>
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

            <DarkButton
              disabled={false}
              type='submit'
              variant="contained"
              sx={{ my: 4, width: "100%", bgcolor: "black", fontSize: 16, fontWeight: 700, color: 'white', borderRadius: 2, ":hover": { bgcolor: "black" } }}>Войти</DarkButton>
            <Typography sx={{ mt: 2, fontSize: "18px" }}>Вспомнили пароль?<Link href='/user/login' className="font-bold text-info">Войти</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default NewPassword;
