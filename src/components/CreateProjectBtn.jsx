import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreateProjectBtn = () => {
    const navigate = useNavigate();

    const handleProjectCreation = () => {
  
      navigate(`/createproject/`);
    };
  return (
    <div className='fixed bottom-20 right-20 z-50'>
           <button
              
              className=' justify-center py-3 px-8 rounded-lg bg-purple-600 hover:bg-purple-800 transition duration-300 text-white text-xs'
          onClick={()=> handleProjectCreation()}>
              List a Trend
            </button>
    </div>
  )
}

export default CreateProjectBtn