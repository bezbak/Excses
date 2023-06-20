import React from "react";
import Link from "next/link"
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Box, Divider, } from "@mui/material"
import { VscEyeClosed, VscEye } from "react-icons/vsc"
import UserAnimation from "@/components/user/UserAnimation";
import { DarkButton } from "@/components/UI/DarkButton";

function Login() {

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);


  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className='user max-w-[1200px] flex items-center m-auto'>
      <UserAnimation />
      <div className="text-center max-h-[650px] h-min md:w-6/12 w-full">

        <div className="login px-5">
          <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: 24, md: 32, lg: 36, xl: 40 } }}>
            Добро пожаловать! <br />
            Рады видеть тебя снова.
          </Typography>

          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%" }}>

            <TextField
              type="text"
              name="username"
              sx={{ mt: '60px', width: "100%", }}
              value={userName} onChange={handleUserNameChange}
              id='outlined-adornment'
              label="Имя пользователья"
            />

            <FormControl sx={{ my: 2, width: "100%" }} variant="outlined">
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
            <Link href="/user/email" className="block w-fit ml-auto no-underline font-bold hover:underline">Забыли пароль?</Link>
            <DarkButton
              disabled={!(userName.length > 6 && password.length > 7)}
              type="submit"
              variant="contained"
              sx={{ my: 4, width: "100%", borderRadius: 2, ":hover": {} }}
            >Войти</DarkButton>

            <Divider><Typography sx={{ fontSize: 14, color: "secondary.main", fontWeight: 600, px: 5 }}>или</Typography></Divider>
            <Box sx={{ display: "flex",gap: 1 }}>
              <Button variant="outlined" sx={{ width: "100%", mt: 2.5, borderRadius: 2,height:"54px" }}>W</Button>
              <Button variant="outlined" sx={{ width: "100%", mt: 2.5, borderRadius: 2,height:"54px" }}>W</Button>
              <Button variant="outlined" sx={{ width: "100%", mt: 2.5, borderRadius: 2,height:"54px" }}>W</Button>
            </Box>
            <Typography sx={{ mt: 2, fontSize: "18px" }}>У вас нет аккаунта? <Link href='/user/registration' className="font-bold text-info">Зарегистрируйтесь</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default Login
