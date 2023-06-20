import React from 'react'
import UserAnimation from '@/components/user/UserAnimation'
import Link from "next/link"
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Box, Divider,} from "@mui/material"
import { VscEyeClosed, VscEye } from "react-icons/vsc"
import { DarkButton } from '@/components/UI/DarkButton'

function Registration() {
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const [passwordCopy, setPasswordCopy] = React.useState('');
  const [showPasswordCopy, setShowPasswordCopy] = React.useState(false);


  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
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
      <UserAnimation/>
      <div className="text-center max-h-[650px] h-min md:w-6/12 w-full">
      <div className="registration px-5">

        <Typography variant="h2" 
          sx={{ 
            color: "primary.main",
            fontSize: {xs:24,md:24,lg:24,xl:40 },
            whiteSpace: "wrap"
          }}>
                Привет, <br/>
          зарегистрируйтесь для начала
        </Typography>

        <Box sx={{ mx:"auto", maxWidth: 400, width: "100%" }}>

          <TextField 
            name='username'
            type='text'
            sx={{ mt: '60px', width: "100%", }} 
            value={userName} onChange={handleUserNameChange} 
            id='outlined-adornment' 
            label="Имя пользователья"
          />
          <TextField
            type="email" 
            name="email"
            sx={{ mt:2, width: "100%", }} 
            value={email} onChange={handleEmailChange} 
            id='outlined-adornment' 
            label="Имя пользователья"
          />

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
            <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
            <OutlinedInput
              value={passwordCopy}
              onChange={handlePasswordCopyChange}
              id="outlined-adornment-password"
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

          {/* <Link href="/" className="block w-fit ml-auto no-underline font-bold hover:underline">Забыли пароль?</Link> */}
          <DarkButton disabled={false} variant="contained" sx={{ my:4, width: "100%", bgcolor: "#1E232C", fontSize: 16, fontWeight: 700, color: 'white', borderRadius: 2, ":hover": {} }}>Войти</DarkButton>

          <Divider><Typography sx={{fontSize:14, color:"secondary.main", fontWeight:600, px:5}}>или</Typography></Divider>
          <Box sx={{display:"flex"}}>
            <Button variant="outlined" sx={{width:"100%", mr:1, mt:2.5,borderRadius: 2}}>W</Button>
            <Button variant="outlined" sx={{width:"100%", mr:1, mt:2.5,borderRadius: 2}}>W</Button>
            <Button variant="outlined" sx={{width:"100%", mt:2.5,borderRadius: 2}}>W</Button>
          </Box>
          
          <Typography sx={{mt:2,fontSize:"18px"}}>У вас уже есть аккаунт?<Link href='/user/login' className="font-bold text-info">Войти сейчас</Link></Typography>
        </Box>
        
      </div>
      </div>
    </div>
  )
}

Registration.propTypes = {

}

export default Registration

