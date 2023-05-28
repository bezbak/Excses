import Image from 'next/image';
import Link from 'next/link';
import BigImg from '../../assets/all-images/rafiki.svg'
import logo from '../../assets/all-images/Eilibay.svg'
import Login from './login';
import Registration from './registration';
import { useRouter } from 'next/router';
import Confiramation from './confiramation';
import { Typography } from '@mui/material';
import EmailRequest from './emailRequest';


 const User: React.FC = () => {
    const router = useRouter();

  return (
    <div className='user flex items-center'>
      <div className="w-6/12 px-[35px] pb-10 text-center h-[650px]">
            <div className="logo">
                <Image 
                className='m-auto mb-2.5'
                src={logo} 
                width={80} 
                alt="logo img " />
            </div>

            <Typography variant='h2'>
              Eilibay
            </Typography>
            <Image 
                className='m-auto mt-10'
                src={BigImg} 
                priority={false}
                width={450}
                loading='lazy'
                alt="man big phone img" />
            
            <span><Link href="/" className='underline font-bold mt-7'>Политика конфиденциальности </Link></span>
      </div>
      <div className="text-center max-h-[650px] h-min w-6/12">
        {
          false?
          <Login/>:
          false? 
          <Registration/>:
          true?
          <EmailRequest/>:
          <Confiramation/>
        }
        
      </div>
    </div>
  )
}

export default User;
