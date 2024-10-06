import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const GeneralPool = () => {
  return (
    
    <div className='bg-white h-full relative p-4 sm:p-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl mx-auto mb-[-3%]'>
      {/* General pool div */}
      <div className='absolute top-0 left-0 flex items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
        General Pool
      </div>

      {/* General pool title div starts here */}
      <div className='mt-8 sm:mt-8 border-b-4 border-purple-600 w-fit'>
        <p className='text-lg sm:text-md md:text-2md font-semibold text-black'>
          Solup General Pool
        </p>
      </div>
      {/* General pool title div ends here */}

      {/* General pool current price starts here */}
      <div className='absolute top-2 right-2 sm:right-4'>
        <p className='text-xs sm:text-sm md:text-base text-black'>
          Current price <small className='text-green-400'>+30</small>{' '}
          <span className='text-purple-600'>$300</span>
        </p>
      </div>
      {/* General pool current price ends here */}


      {/*Pool Table starts here*/}
      <div class="overflow-x-auto mt-5">
  <table class="min-w-full table-auto border-collapse">
    <thead>
      <tr class="bg-gray-200">
        <th class=" py-3 px-6  text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Total Liquidity</th>
        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Total Shares</th>
        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Locked Liquidity</th>
        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Price/Share</th>
        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Unrealized P&L</th>
        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base"></th>
        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">$120,000</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">20,000</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">$12000,0000</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">$1,000</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">1,000</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base whitespace-nowrap text-purple-500">500 USD</td>
        <td className="py-3 px-6  flex space-x-4 whitespace-nowrap ">
              {/*  Add to pool Button */}
              <button className="bg-purple-200 text-purple-500 py-1 px-3 rounded hover:bg-purple-400  hover:text-white  transition">
                Add to pool
              </button>
              {/* Secondary Button */}
              <button className="bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-400 transition">
                Borrow Liquidity
              </button>
            </td>
            
      </tr>
      
    </tbody>
  </table>
        </div>
      {/*Pool Table ends here*/}

    </div>
  )
}

export default GeneralPool

