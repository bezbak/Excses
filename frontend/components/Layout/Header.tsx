import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container,Button, Typography,FormControl, Select, MenuItem, SelectChangeEvent,Box, InputAdornment, IconButton} from '@mui/material'
import logo from '@/assets/butterfly.svg';
import Search from './HeaderSearch'
import { HiOutlineHeart } from 'react-icons/hi';
import { BiChat } from 'react-icons/bi'
import {FaRegUser} from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [lang, setLang] = React.useState('RUS');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  return (
    <header className='bg-default h-[100px] flex items-center '>
      <Container sx={{display:'flex',alignItems:"center",justifyContent:"space-around"}}>
        <Button 
          className={`relative lg:mr-[60px] w-[48px] min-w-[32px] h-[30px] cursor-pointer ${isOpen ? 'open' : ''}`}
          onClick={handleClick} >
            <div className={isOpen?"w-full h-[3px] bg-white absolute top-0 rounded ":"rotate-45 w-full h-[3px] bg-white absolute top-4 rounded"}></div>         
            <div className={isOpen?"w-3/5 h-[3px] bg-white absolute top-0 rounded bottom-0 m-auto left-0 ":"hidden"}></div>
            <div className={isOpen?"w-full h-[3px] bg-white absolute bottom-0  rounded":"-rotate-45 w-full h-[3px] bg-white absolute top-4 rounded"}></div>
        </Button>
        <Button>
          <Image
            src={logo}
            width={42}
            className='w-[36px] md:w-[42px] '
            alt="logo img " />
          <Typography 
            variant='h4' 
            sx={{textTransform:'none', color:'white',ml:1,mr:7.5,fontSize:{ xs: 24, md: 30, lg: 36, xl: 40 }}}
            >
              Eilibay
          </Typography>

        </Button>
        <Search onSearch={handleSearch}  />
          <FormControl >
            <Select
              value={lang}
              label="Language"
              onChange={handleChange}
              size='small'
              sx={{outline:'none',border:'none', borderRadius:"6px" , pr:0, width:"87px"}}    
            >
              
              <MenuItem value={"KGZ"}  sx={{fontSize:"14px", textAlign:"center"}}>KGZ</MenuItem>
              <MenuItem value={"RUS"}  sx={{fontSize:"14px", textAlign:"center"}}>RUS</MenuItem>
              <MenuItem value={"ENG"}  sx={{fontSize:"14px", textAlign:"center"}}>ENG</MenuItem>
            </Select>
          </FormControl>
        <nav>
          <IconButton sx={{display:"block", color:'white'}}>
          <BiChat className='block md:hidden text-4xl m-auto'/>
          </IconButton>
        </nav>
        <nav className='none justify-around gap-[4px] hidden md:flex'  >
          <Button sx={{display:"block", color:'white'}}>
            <HiOutlineHeart className='text-xl m-auto'/>
            <Typography sx={{fontSize:"14px",textTransform:'none'}}>Избранное</Typography>
          </Button>
          <Button sx={{display:"block", color:'white'}}>
            <BiChat className='text-xl m-auto'/>
            <Typography sx={{fontSize:"14px",textTransform:'none'}}>Чат</Typography>
          </Button>
          <Button sx={{display:"block", color:'white'}}>
            <FaRegUser className='text-xl m-auto'/>
            <Typography sx={{fontSize:"14px",textTransform:'none'}}>Профиль</Typography>
          </Button>
        </nav>
      </Container>
    </header>
  )
}

export default Header
