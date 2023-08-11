import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import Layout from '@/components/Layout';
import { store } from '@/store'
import { Provider } from 'react-redux'
import '@/styles/globals.css'
import '../styles/user.scss'
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
      main:"#1E232C",
      dark:'#3190FF'
    },
    secondary:{
      main:'#8391A1',
      
    },  
  },
  typography:{
    body1:{
      fontSize:22,
    },
    body2:{
      fontSize:"14px",
      fontWeight:400,
    },
    h1: {
      fontSize: '48px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '40px',
      fontWeight: 700,
 
    },
    h3: {
      fontSize: '32px',
      fontWeight: 700,
    },
    h6:{
      fontSize:"20px",
      fontWeight:600,
    }
  },
  
})


export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Layout>
        <AnyComponent {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Provider>
    
  )
}
