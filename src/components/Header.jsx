import React, { useEffect, useState } from 'react';
import Profile from '/profile.jpg';
import filter from '/filter.png';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ pageTitle, connect, connectWallet }) => {
  const location = useLocation();


  useEffect(() => {
    // Update the state based on the current pathname
    location.pathname === '/explore'
  }, [location.pathname]);

  return (
    <div className='mb-6 header'>
      <div className='flex md:flex-row flex-col mb-6 flex-col-reverse md:items-center justify-between'>
        <h1 className='text-xl mt-8 md:mt-4 md:mb-4 md:text-3xl font-medium'>{pageTitle}</h1>

        <input
          className='search text-xs md:text-xs lg:text-sm lg:w-6/12 h-10 md:h-10 md:py-6 py-4 px-4 md:px-2 lg;px-4'
          placeholder='Search Projects, Bets, Stocks, Bonds, Token'
          type="search"
        />

        <div className='flex ml-20 social items-center justify-between'>
       
            <button
              onClick={connectWallet}
              className='align-center flex justify-center py-3 px-8 rounded-lg bg-purple-600 text-white text-xs'
            >
              {!connect ? 'Connect Wallet' : 'Disconnect Wallet'}
            </button>
         
        </div>
      </div>

      {connect && <h3 className='text-gray-500 text-sm mb-4 md:mb-4'>Welcome back, Rabi!</h3>}

 
    </div>
  );
};

export default Header;
