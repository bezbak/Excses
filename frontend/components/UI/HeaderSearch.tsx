import React, { useState } from "react";
import { TextField, Box, InputAdornment, IconButton } from "@mui/material";
import {GoSearch} from 'react-icons/go'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link'
import { useActions } from "@/hooks/useAction";

interface SearchProps {
  sx: object;
}

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'lightgray',
          border:"white solid 1px",
          borderRadius: "8px",
          position: 'relative',
          overflow:"hidden",
          color:'#ffffff',
          
          outline:'none',
          '&:focus':{
            outline:'none',
            border:'none'

          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50px',
            height: '100%',
            backgroundColor: 'white',
          },
        },
      },
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:{
          fontSize: 16,
          color:"white",
          paddingRight:"0px",
        }
      }
    },
  },
});



const Search = ({sx}:SearchProps) => {
  const [query, setQuerys] = useState("");
  const {setQuery }= useActions()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuerys(event.target.value);
    setQuery(event.target.value);
  };
  return (
    <Box alignItems="center" sx={sx}>
      <ThemeProvider theme={theme}>
      <TextField  
        value={query}
        onChange={handleChange}
        placeholder="Search"
        // variant="outlined"
        size="small"
        sx={{ mr: 1,width:"100%",bgcolor:"#f7f8f900",color:'white',}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end"  sx={{cursor:"pointer"}}>
              <Link href="/search">
              <IconButton sx={{
                borderRadius:0,
                width:'50px'
              }}>
                <GoSearch className="text-2xl"/>
              </IconButton>
              </Link>
            </InputAdornment>
          ),
        }}
      />
      </ThemeProvider>
    </Box>
  );
};

export default Search;


