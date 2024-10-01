import React from 'react'
import CoinMarketData from '../json/CoinMarketData.json'
import { useNavigate } from "react-router-dom";

const ExploreTokens = () => {
    const navigate = useNavigate();
    const ViewCoindetails = (coinId) => {
      navigate(`/coindetails/${coinId}`);
    };


  return (
    <div className='font-serif'>
                {
                        CoinMarketData.map((coin) => (
                            <div className='flex items-center  justify-center  pl-4 pr-4'>
                    <div key={coin.id} className='bg-white h-full   relative   max-w-sm   p-4 lg:max-w-2xl  mt-10 cursor-pointer '  onClick={() => ViewCoindetails(coin.id)} >
                    {/* Market type*/}
                    <div className='absolute  top-0 left-0 flex items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
                    Coin Markets
                    </div>

                    {/* Coin  title div starts here */}
                    <div className='mt-8 sm:mt-8 border-b-4 border-purple-600 w-fit flex justify-center'>
                        <img src={coin.image} className='m-0 h-8 w-8 mr-1 mb-[1%] mt-[-5%]'/>
                    <p className='text-lg sm:text-md md:text-2md font-semibold text-black '>
                        {coin.name}
                    </p>
                    </div>
                    {/* Coin title div ends here */}


                    {/*Coin Table starts here*/}
                    <div class="overflow-x-auto mt-5">
                <table class="min-w-full table-auto border-collapse">
                <thead>
                    <tr class="bg-gray-200">
                    <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Price</th>
                    <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Price Change 24h</th>
                    <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Market Cap</th>
                    <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Market Cap 24h </th>
                    <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Volume </th>
                    <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">24h High</th>
                    <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">24h Low</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base"> {coin.current_price}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base"> {coin.price_change_24h}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{coin.market_cap}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{coin.market_cap_change_24h}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{coin.total_volume}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base text-green-600">{coin.high_24h}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base text-green-600">{coin.low_24h}</td>
                    </tr>
                    
                </tbody>
                </table>
                    </div>
                    {/*Coin table ends here*/}

                    </div>
                    </div>
                ))
            }
  </div>
)
}

export default ExploreTokens