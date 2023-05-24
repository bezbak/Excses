import Image from 'next/image';
import BigImg from '../../assets/all-images/rafiki.svg'
import logo from '../../assets/all-images/ExcsesLogo.svg'


 const User: React.FC = () => {
    
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
                width={450}
             
                alt="man big phone img" />
            </div>
            <span><a href="">Политика конфиденциальности </a></span>
      </div>
      <div className="twin ">
      </div>
    </div>
  )
}

export default User;
