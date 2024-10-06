import React from 'react'
import { useNavigate } from "react-router-dom";
import GeneralPool from './GeneralPools'
import MarketPoolNav from './MarketPoolNav'
import CreateProjectBtn from '../../components/CreateProjectBtn';

const AllPools = () => {

    const navigate = useNavigate();
    const handleAddToPool = (poolId) => {
        navigate(`/addpoolliquidity/${poolId}`);
      };

        /*All Pools data*/
        const Allpool = [
            { id: 1, name: "Donald Liquidity",  liquidity: "30,000", liquiditylocked: "30,000", totalshare: "400,000" , pnl: "400,000", poolprice: "30",pooltype: "Project" },
            {id: 2, name: "Fred Liquidity", liquidity: "30,000", liquiditylocked: "30,000", totalshare: "400,000" , pnl: "400,000", poolprice: "30",pooltype: "Bet"},
            { id: 3, name: "Mike Liquidity",  liquidity: "30,000", liquiditylocked: "30,000", totalshare: "400,000"  , pnl: "400,000", poolprice: "30",pooltype: "Project"},
            { id: 4, name: "Charles Liquidity", liquidity: "30,000", liquiditylocked: "30,000", totalshare: "400,000" , pnl: "400,000" , poolprice: "30",pooltype: "Bet"},
          ];

    
  
          
    return (
        <div className='mt-10'>
    
             {/*General Pool starts here*/}
            <GeneralPool />
            {/* General pool ends here */}
             {/*General Pool starts here*/}
             <MarketPoolNav />
            {/* General pool ends here */}
    
          {/*Project Pool starts here*/}
          {Allpool.map((pool) => (
             <div key={pool.id} className='mt-20 bg-white h-full relative p-4 sm:p-6 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl mx-auto mb-[-3%]'>
             {/* General pool div */}
             <div className='absolute top-0 left-0 flex items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
             {pool.pooltype} Pool
             </div>
         
             {/* Project Pool title div starts here */}
             <div className='mt-8 sm:mt-8 border-b-4 border-purple-600 w-fit'>
                 <p className='text-lg sm:text-md md:text-2md font-semibold text-black'>
                 {pool.name}
                 </p>
             </div>
             {/* Project Pool title div ends here */}
         
             {/* General pool current price starts here */}
             <div className='absolute top-2 right-2 sm:right-4'>
                 <p className='text-xs sm:text-sm md:text-base text-black'>
                 Current price <small className='text-green-400'>+30</small>{' '}
                 <span className='text-purple-600'>{pool.poolprice}</span>
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
                 <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Unrealized P&L</th>
                 <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base"></th>
                 <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base">Action</th>
             </tr>
             </thead>
             <tbody>
       
        <tr  >
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{pool.liquidity}</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{pool.totalshare}</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{pool.liquiditylocked}</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{pool.pnl}</td>
        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base whitespace-nowrap text-purple-500">{pool.poolprice} USD</td>
        <td className="py-3 px-6  flex space-x-4 whitespace-nowrap ">
            {/*  Add to pool Button */}
            <button className="bg-purple-200 text-purple-500 py-1 px-3 rounded hover:bg-purple-400  hover:text-white  transition"
            onClick={() => handleAddToPool(pool.id)}>
                Add to pool
            </button>
           
            </td>
            
    </tr>

            
             </tbody>
         </table>
                 </div>
             {/*Pool Table ends here*/}
         
             </div>
                 ))}
          {/* Pool ends here*/}
    
     
          
         
    
    
          
          <CreateProjectBtn/>
    
    
         </div>
       )
}

export default AllPools