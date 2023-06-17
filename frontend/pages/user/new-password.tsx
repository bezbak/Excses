import React from 'react'
import UserAnimation from '@/components/user/UserAnimation'
import { Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box} from "@mui/material"
import { DarkButton } from '@/components/UI/DarkButton'
import { VscEyeClosed, VscEye } from "react-icons/vsc"

import Link from 'next/link';

function NewPassword() {
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const [passwordCopy, setPasswordCopy] = React.useState('');
  const [showPasswordCopy, setShowPasswordCopy] = React.useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const handlePasswordCopyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCopy(event.target.value)
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleClickShowPasswordCopy = () => setShowPasswordCopy((show) => !show);
  const handleMouseDownPasswordCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
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
            <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
            <OutlinedInput
              
              value={password}
              onChange={handlePasswordChange}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VscEye /> : <VscEyeClosed />}
                  </IconButton>
                </InputAdornment>
              }
              label="Пароль"
            />
          </FormControl>

          <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password-copy">Пароль</InputLabel>
            <OutlinedInput
              value={passwordCopy}
              onChange={handlePasswordCopyChange}
              id="outlined-adornment-password-copy"
              type={showPasswordCopy ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordCopy}
                    onMouseDown={handleMouseDownPasswordCopy}
                    edge="end"
                  >
                    {showPasswordCopy ? <VscEye />:<VscEyeClosed />}
                  </IconButton>
                </InputAdornment>
              }
              label="Пароль"
            />
          </FormControl>
            <DarkButton
              disabled={false}
              type='submit'
              variant="contained"
              sx={{ my: 4, width: "100%", bgcolor: "black", fontSize: 16, fontWeight: 700, color: 'white', borderRadius: 2, ":hover": { bgcolor: "black" } }}>Изменить пароль</DarkButton>
            <Typography sx={{ mt: 2, fontSize: "18px" }}>Не получили код?<Link href='/user/login' className="font-bold text-info">Отправить снова</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default NewPassword;
