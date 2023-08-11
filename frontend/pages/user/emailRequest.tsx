import React from 'react'
import Link from "next/link"
import { Typography, TextField, Box } from "@mui/material"
import UserAnimation from "@/components/Layout/UserAnimation";
import { DarkButton } from '@/components/UI/DarkButton';
import { useForm } from "react-hook-form";
import { EmailValidations } from "@/utils/forms/validations";
import { yupResolver } from '@hookform/resolvers/yup';

function EmailRequest() {

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(EmailValidations),
  });
  console.log(form.getValues().email);
  const onSubmit = (data:any) => {
    console.log(data);
    // Perform form submission logic here
  };
  return (
    <div className='user max-w-[1200px] m-auto flex items-center '>
      <UserAnimation />
      <div className="text-center max-h-[700px] h-min md:w-6/12 w-full">
        <div className=" px-5">
          <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: 28, md: 32, lg: 36, xl: 40 } }}>
            Забыли пароль?
          </Typography>

          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%" }}>
            <Typography sx={{ color: "secondary.main", textAlign: "left", mt: 2.5 }}>
              Пожалуйста напишите адрес вашей электронной почты для получения кода
            </Typography>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <TextField
                type="text"
                sx={{ mt: '60px',mb:2}}
                fullWidth
                id='outlined-adornment'
                label="Ваш email"
                {...form.register("email")}
                helperText={form.formState.errors.email?.message}
                error={!!form.formState.errors.email?.message}
                />
              
              <DarkButton
                disabled={!form.formState.isValid}
                type="submit"
                content='button'
                className='dark-button'
                href='/user/verification'
                variant="contained"
                sx={{ my: 4,color:'white' }}
              >
                Войти
              </DarkButton>
            </form>
            <Typography sx={{ mt: 2, fontSize: "18px" }}>Вспомнили пароль?<Link href='/user/login' className="font-bold text-info">Войти</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default EmailRequest
