import Image from 'next/image';
import Link from 'next/link';
import BigImg from '../../assets/all-images/rafiki.svg'
import logo from '../../assets/all-images/ExcsesLogo.svg'
import Login from './login';
import Registration from './registration';
import { useRouter } from 'next/router';


 const User: React.FC = () => {
    const router = useRouter();
    // console.log(`router`, router);

    
  return (
    <div className='user flex '>
      <div className="twin text-center ">
            <div className="logo">
                <Image 
                src={logo} 
                width={105} 
                alt="logo img " />
            </div>
            <div className="image">
            <Image 
                src={BigImg} 
                priority={false}
                width={450}
                loading='lazy'
                alt="man big phone img" />
            </div>
            <span><Link href="/">Политика конфиденциальности </Link></span>
      </div>
      <div className="twin">
          <Login/>
      </div>
    </div>
  )
}

export default User;
