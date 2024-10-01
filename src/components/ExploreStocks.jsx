import React from 'react'
import StockMarketData from '../json/StockMarketData.json'
import { useNavigate } from "react-router-dom";
const ExploreStocks = () => {
    const navigate = useNavigate();
    const ViewStockdetails = (stockId) => {
      navigate(`/stockdetails/${stockId}`);
    };

    return (
        <div className='font-serif'>
                    {
                            StockMarketData.map((stock) => (
                                <div className='flex items-center  justify-center  pl-4 pr-4'>
                        <div key={stock.id} className='bg-white h-full   relative   max-w-sm   p-4 lg:max-w-2xl  mt-10 cursor-pointer ' onClick={() => ViewStockdetails(stock.id)}>
                        {/* Market type*/}
                        <div className='absolute top-0 left-0 flex items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
                        Stock Markets
                        </div>
    
                        {/* stock  title div starts here */}
                        <div className='mt-8 sm:mt-8 border-b-4 border-purple-600 w-fit flex justify-center'>
                            <img src={stock.image} className='m-0 h-8 w-8 mr-1 mb-[1%] mt-[-5%]'/>
                        <p className='text-lg sm:text-md md:text-2md font-semibold text-black '>
                            {stock.name}
                        </p>
                        </div>
                        {/* stock title div ends here */}
    
    
                        {/*stock Table starts here*/}
                        <div class="overflow-x-auto mt-5">
                    <table class="min-w-full table-auto border-collapse">
                    <thead>
                        <tr class="bg-gray-200">
                        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Last Price</th>
                        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Change</th>
                        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">% Change</th>
                        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Volume </th>
                        <th class=" py-3 px-6 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">Trade Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base"> {stock.current_price}</td>
                        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base"> {stock.price_change_24h}</td>
                        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{stock.market_cap}</td>
                        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{stock.market_cap_change_24h}</td>
                        <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">30000</td>
                        </tr>
                        
                    </tbody>
                    </table>
                        </div>
                        {/*stock table ends here*/}
    
                    </div>
                    </div>
                    ))
                }
      </div>
    )
}

export default ExploreStocks