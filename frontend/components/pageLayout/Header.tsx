import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container,Button, Typography,FormControl, InputLabel, Select, MenuItem, SelectChangeEvent,Box } from '@mui/material'
import logo from '../../assets/all-images/butterfly.svg';
import Search from './HeaderSearch'
import { GoHeart } from 'react-icons/go';
import { BiChat } from 'react-icons/bi'
import {FaRegUser} from 'react-icons/fa'

function Header() {
  const handleSearch = (query: string) => {
    // Perform search logic using the query
    console.log("Search query:", query);
  };
  const [lang, setLang] = React.useState('RUS');
  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
    <header className='bg-default h-[100px] flex items-center '>
      <Container sx={{display:'flex',alignItems:"center",justifyContent:"space-around"}}>
        <Button sx={{width:{md:"40px",lg:"48px"}, flexDirection:'column', alignItems:"start" }}>
            <span className='w-full h-[3px] block bg-white my-[5px] rounded'></span>
            <span className='w-3/5 h-[3.2px] block bg-white my-[5px] rounded'></span>
            <span className='w-full h-[3px] block bg-white my-[5px] rounded'></span>
        </Button>
        <Button>
          <Image
            src={logo}
            width={42}
            alt="logo img " />
          <Typography 
            variant='h4' 
            sx={{textTransform:'none', color:'white',ml:1,fontSize:{ xs: 24, md: 30, lg: 36, xl: 40 }}}
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
            sx={{outline:'none',border:"white solid 1px", borderRadius:"6px"}}
          >
            <MenuItem value={"KGZ"}  sx={{fontSize:"14px"}}>KGZ</MenuItem>
            <MenuItem value={"RUS"}  sx={{fontSize:"14px"}}>RUS</MenuItem>
            <MenuItem value={"ENG"}  sx={{fontSize:"14px"}}>ENG</MenuItem>
          </Select>
        </FormControl>
        <nav className='none justify-around gap-[18px] hidden md:flex'  >
          <Box>
            <GoHeart className='text-xl m-auto'/>
            <Typography sx={{fontSize:"14px"}}>Избранное</Typography>
          </Box>
          <Box>
            <BiChat className='text-xl m-auto'/>
            <Typography sx={{fontSize:"14px"}}>Чат</Typography>
          </Box>
          <Box>
            <FaRegUser className='text-xl m-auto'/>
            <Typography sx={{fontSize:"14px"}}>Профиль</Typography>
          </Box>
        </nav>
      </Container>
    </header>
  )
}

export default Header
