import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/user.scss'
import { createTheme, ThemeProvider } from '@mui/material'
import '@fontsource/urbanist/300.css';
import '@fontsource/urbanist/400.css';
import '@fontsource/urbanist/500.css';
import '@fontsource/urbanist/600.css';
import '@fontsource/urbanist/700.css';
import '@fontsource/urbanist/900.css';


const theme = createTheme({
  components:{
    MuiInputLabel:{
      styleOverrides:{
        root:{
          fontSize: 16
          
        }
      }
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:{
          fontSize: 16,
          borderRadius: 8,
          backgroundColor:"#F7F8F9"
        }
      }
    },
   
  }
  ,
  palette:{
    primary:{
      main:"#1E232C"
    },
    secondary:{
      main:'#8391A1'
    }
  },
  typography:{
    fontSize:20,
    h1: {
      fontSize: '48px',
      fontWeight: 700
    },
    h2: {
      fontSize: '40px',
      fontWeight: 700
    },
    h3: {
      fontSize: '32px',
      fontWeight: 700,
    }
    
  },
  
})


export default function App({ Component, pageProps }: AppProps) {
  return(
  <ThemeProvider theme={theme}>
      <Component {...pageProps} />
  </ThemeProvider>
      
 
  )
}
