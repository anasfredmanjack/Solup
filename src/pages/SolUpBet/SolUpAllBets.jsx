import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SolupBetNav from './SolupBetNav';
import solupbetdata from '../solupbetdata.json';


const SolUpAllBets = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/solupallbet');
  }, [navigate]);

  const handlePlaceBet = (betId) => {

    navigate(`/placebet/${betId}`);
  };

  return (
    <div className='solupbet'>
      <div className='ml-4 project flex text-xs text-gray-500 justify-between items-center'>
        <SolupBetNav />
      </div>
      <div className='grid gap-10 md:grid-cols-2'>
        {solupbetdata.map((bet) => (
          <div key={bet.id} className='bg-white grid p-4 gap-4 grid-cols-12'>
            <div className='col-span-5 bg-gray-200'>
              <img src={bet.imageUrl} alt={bet.title} />
            </div>
            <div className='flex col-span-7 gap-2 flex-col'>
              <h1 className='general font-semibold w-max'>{bet.title}</h1>
              <div className='flex justify-between'>
                <h3>Long Bet: <span className='green'>{bet.longBet}</span></h3>
                <h3>Short Bet: <span className='red'>{bet.shortBet}</span></h3>
              </div>
              <h3 className='font-semibold general w-max'>Description</h3>
              <h3>{bet.description}</h3>
              <div className="cursor-pointer m-auto mt-2 align-center w-full flex justify-center bg-purple-600 text-white text-sm py-1"
                onClick={() => handlePlaceBet(bet.id)}>
                <h1>{bet.buttonText}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolUpAllBets;