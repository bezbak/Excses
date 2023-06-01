import React from 'react'
import Link from "next/link"
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Box, Divider, } from "@mui/material"
import UserAnimation from "@/components/user/userAnimation";
function EmailRequest() {
  const validateEmail = (email:string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const [email, setEmail] = React.useState('');
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    console.log(validateEmail(event.target.value));
  }
 


  return (
    <div className='user max-w-[1200px] m-auto flex items-center'>
      <UserAnimation />
      <div className="text-center max-h-[650px] h-min w-6/12">
        <div className="registration">

          <Typography variant="h2" sx={{ color: "primary.main" }}>
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
              label="Email"
            />


            {/* <Link href="/" className="block w-fit ml-auto no-underline font-bold hover:underline">Забыли пароль?</Link> */}
            <Button 
            disabled={(true && validateEmail(email))} 
            
            variant="contained" 
            sx={{ my: 4, width: "100%", bgcolor: "#1E232C", fontSize: 16, fontWeight: 700, color: 'white', borderRadius: 2,  }}>Войти</Button>



            <Typography sx={{ mt: 2, fontSize: "18px" }}>Вспомнили пароль?<Link href='/user/login' className="font-bold text-info">Войти</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default EmailRequest
