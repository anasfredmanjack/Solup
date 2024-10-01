import React from 'react'
import { useNavigate } from 'react-router-dom';
import solupbetdata from '../json/solupbetdata.json';

const ExploreBets = () => {
  const navigate = useNavigate();

  const handlePlaceBet = (betId) => {

    navigate(`/placebet/${betId}`);
  };

  return (

    <div   className='grid gap-10 lg:grid-cols-2 mt-10 font-serif'>
    {
      solupbetdata.map((bet) => (
      
        <div key={bet.id} className='bg-white grid p-4 gap-4 grid-cols-12'>
            <div className='col-span-5 h-48 w-32 '>
              <img src={bet.imageUrl} alt={bet.title} />
            </div>
            <div className='flex col-span-7 gap-2 flex-col'>
              <h1 className='general font-semibold w-max'>{bet.title}</h1>
              <div className='flex justify-between'>
                <h3>Long Bet: <span className='text-green-600'>{bet.longBet}</span></h3>
                <h3>Short Bet: <span className='text-red-600'>{bet.shortBet}</span></h3>
              </div>
              <h3 className='font-semibold general w-max'>Description</h3>
              <h3>{bet.description}</h3>
              <div
                className="cursor-pointer m-auto mt-2 align-center w-full flex justify-center bg-purple-600 text-white text-sm py-1"
                onClick={() => handlePlaceBet(bet.id)} >
                <h1>Place Bet</h1>
              </div>
            </div>
          </div>
       
    
      ))
    }
    </div>
  )
}

export default ExploreBets