import React from 'react'
import UserAnimation from '@/components/user/UserAnimation'
import { DarkButton } from '@/components/UI/DarkButton'
import { Typography, Box } from '@mui/material'
import InputCode from '@/components/UI/InputCode'
import Link from 'next/link';

function Verify() {

  const [loading, setLoading] = React.useState<boolean>(false);
  const [hreff, setHreff] = React.useState('');
  return (
    <div className='user max-width-[1200px] flex items-center '>
      <UserAnimation />
      <div className="text-center max-h-[650px] h-min md:w-6/12 w-full">
        <div className=" px-5">
          <Typography variant="h2" sx={{ color: "primary.main", fontSize: { xs: 28, md: 32, lg: 36, xl: 40 } }}>
            Подтвердите
          </Typography>
          
          <Box sx={{ mx: "auto", maxWidth: 400, width: "100%",textAlign:"center", }}>
            <Typography sx={{ color: "secondary.main", textAlign: "left", mt: 2.5 }}>
              Напишите виртефикационый код который мы отправили вам в эл.почту
            </Typography>
             
             <InputCode
                length={4}
                loading={loading}
                onComplete={code => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 10000);
                  setHreff( !loading ? "/user/new-password" : "")
                }}
              />
              
            <DarkButton
              disabled={!loading}
              type='submit'
              href={hreff}
              variant="contained"
              sx={{ my: 4, width: "100%", bgcolor: "black", fontSize: 16, fontWeight: 700, color: 'white', borderRadius: 2, ":hover": { bgcolor: "black" } }}>Отправить код</DarkButton>
            <Typography sx={{ mt: 2, fontSize: "18px" }}>Не получили код?<Link href='/user/login' className="font-bold text-info">Отправить снова</Link></Typography>
          </Box>

        </div>
      </div>
    </div>
  )
}

export default Verify;
