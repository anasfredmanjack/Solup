import React from 'react'
import logo from '/solup.png';
import invest from '/invest.png';
import { useNavigate } from 'react-router-dom';
import bitcoinillustration from '/bitcoin-illustration.png';


const LandingPage = () => {
  const navigate = useNavigate();
  const handleLaunchapp = () => {

    navigate(`/explore/`);
  };

  return (
    <div className='font-serif'>
        <nav className="bg-white shadow-md w-full h-[50%]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className=" w-28" />
        </div>

        {/* Button Section */}
        <div className="flex items-center">
      
          <button
              
              className=' justify-center py-3 px-8 rounded-lg bg-purple-600 hover:bg-purple-800 transition duration-300 text-white text-xs'
            onClick={()=> handleLaunchapp()}>
              Launch App
            </button>
        </div>

      </div>
      </nav>

      <div className="container mx-auto px-4 py-4 flex  justify-between items-center">
           {/* invest Section */}
           <div className="grid items-center">
           <img src={invest} alt="invest" className='w-[400px] h-[100%] mr-[20px]'/>
           <small className='text-purple-950 mt-5'>
            Welcome to Solup - where trends become your currency and your reality becomes your market.<br></br>
            It's time to earn from who you already are.
           </small>
           <button
              
              className='mt-5 justify-center  py-3 px-8 rounded-lg bg-purple-600 hover:bg-purple-800 transition duration-300 text-white text-xs'
              onClick={()=> handleLaunchapp()}>
              Launch App
            </button>
        </div>
    
        
           {/* illustration Section */}
           <div className="flex items-center">
           <img src={bitcoinillustration} alt="illustration" className='ml-[20px] w-[500px] h-[100%] '/>
        </div>
        </div>
       
  
    </div>
  )
}

export default LandingPage