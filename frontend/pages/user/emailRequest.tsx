import React from 'react'
import Link from "next/link"
import { Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Box, Divider,} from "@mui/material"

function EmailRequest() {
    const [email, setEmail] = React.useState('');
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
      } 
  return (
    <div className="registration">

      <Typography variant="h2" sx={{ color: "primary.main" }}>
      Забыли пароль?
      </Typography>

      <Box sx={{ mx:"auto", maxWidth: 400, width: "100%" }}>
      <Typography sx={{ color: "secondary.main", textAlign: "left", mt:2.5}}>
      Пожалуйста напишите адрес вашей электронной почты для получения кода
      </Typography>
        <TextField
            type='email'
            name='email'
          sx={{ mt:2, width: "100%", }} 
          value={email} onChange={handleEmailChange} 
          id='outlined-adornment' 
          label="Email"
        />


        {/* <Link href="/" className="block w-fit ml-auto no-underline font-bold hover:underline">Забыли пароль?</Link> */}
        <Button disabled={true} type="submit" variant="contained" sx={{ my:4, width: "100%", bgcolor: "#1E232C", fontSize: 16, fontWeight: 700, color: 'white', borderRadius: 2, ":hover": {} }}>Войти</Button>

    
        
        <Typography sx={{mt:2,fontSize:"18px"}}>Вспомнили пароль?<Link href='/user/registration' className="font-bold text-info">Войти</Link></Typography>
      </Box>
      
    </div>
  )
}

export default EmailRequest
