import React from 'react';
import logo from '@/assets/butterfly.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Typography, Button, Container,Box , TextField} from '@mui/material';
import {CgShoppingBag} from 'react-icons/cg'


function Footer() {
  const [text, setText] = React.useState('')
  return (

    // Desktop Footer
    <footer className='hidden bg-default pt-[70px] md:block'>
      <Container sx={{display:'flex',justifyContent:"space-between"}}>
          <Box>
            <Image
              src={logo}
              width={75}
              className='w-[50px] md:w-[75px] m-auto'
              alt="logo img " />

            <Typography 
              variant='h4' 
              sx={{textTransform:'none', color:'white',ml:1,fontSize:{ xs: 24, md: 30, lg: 36, xl: 40 }}}
              >
                Eilibay
            </Typography>

          </Box>
          <div className="h-full">
            <Link href="/" className=' h-8  flex items-center'><CgShoppingBag/> Excses@gmail.com</Link>
            <Link href="/" className=' h-8  flex items-center'><CgShoppingBag/> ул. Ленина 318</Link>
          </div>
          <div className='flex h-[56px] gap-[25px] '>
            <TextField
              type="text" 
              sx={{ width: "100%",borderRadius:"12px" }} 
              value={text} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)} 
              id='outlined-adornment' 
              label="Email"
            />
            <Button variant='contained' sx={{height:"56px",borderRadius:"12px",bgcolor:"#0D99F4 !important",px:5}}>Отправить</Button>
          </div>
      </Container>
    </footer>
  )
}

export default Footer
