import React, { useState } from "react";
import { TextField, Button, Box, InputAdornment,styled, IconButton } from "@mui/material";
import {GoSearch} from 'react-icons/go'
import { createTheme, ThemeProvider } from '@mui/material/styles';


interface SearchProps {
  onSearch: (query: string) => void;
}

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // Customize the root style of TextField
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



const Search: React.FC<SearchProps> = ({ onSearch}) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <Box alignItems="center" sx={{maxWidth:'500px',width:"100%",display:{xs:"none",md:"none",lg:"flex"}}}>
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
            <InputAdornment position="end" onClick={handleSearch} sx={{cursor:"pointer"}}>
              <IconButton sx={{
                borderRadius:0,
                width:'50px'
              }}>
                <GoSearch className="text-2xl"/>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </ThemeProvider>
    </Box>
  );
};

export default Search;


