import React, { useEffect } from 'react'
import {useState} from 'react';
import { useParams } from "react-router-dom";
import stockData from '../json/StockMarketData.json'
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const StockDetails = () => {
    const { stockId } = useParams(); //extract stockId from url here
    const navigate = useNavigate();
    const [stockDetailsData, setstockDetailsData] = useState(null); //initialise empty CoinDetails array
   

 

    useEffect(() => {
      //Fetch Stock details from json data
    
      const selectedStock = stockData.find(stock => stock.id === stockId);
      setstockDetailsData(selectedStock);
 
}, [stockId]);

      
    if (!stockDetailsData) {
      return <div>{stockId}</div>; // Show a loading state while data is being fetched
  }

  return (
 

    <div className='font-serif'>
    {/* Pool Name Header And Price starts here */}
    <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-1  sm:space-y-0">
          
          {/** Back button starts here **/}
          <div className='card shadow-lg bg-white border cursor-pointer' onClick={() => navigate(-1)}>
            <svg className='text-center m-3 rounded text-purple-600' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
              <path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" />
            </svg>
          </div>
          {/** Back button ends here **/}
          
    
      
          {/** Stock Price starts here **/}
          <div class="text-center sm:text-left">
            <p className="text-md sm:text-lg">Current price: 
              <span className='text-green-500 text-sm sm:text-md'> +30%</span> <span className='text-purple-500'>${stockDetailsData.current_price}</span>
            </p>
          </div>
          {/** Stock Price ends here **/}
          
    </div>

      {/*Project details table & starts here*/}
      <div class="flex flex-col sm:flex-row justify-center">
        {/*Pool details table starts here*/}
        <div>
            <div className='bg-white h-full  shadow-md relative p-3 sm:p-6 max-w-lg mt-5 sm:max-w-lg md:max-w-xl lg:max-w-4xl mx-auto mb-[-3%]'>
                {/* Project Market div */}
                <div className='absolute top-0 left-0 flex items-center p-2 sm:p-3 rounded-br-lg bg-purple-600 text-white h-10 text-xs sm:text-sm md:text-base'>
                  Stock Markets
                </div>

                
                  {/* Project  title div starts here */}
                  <div className='mt-8 sm:mt-8 border-b-4 border-purple-600 w-fit flex justify-center'>
                        <img src={stockDetailsData.image} className='m-0 h-8 w-8 mr-1 mb-[1%] mt-[-5%]'/>
                    <p className='text-lg sm:text-md md:text-2md font-semibold text-black '>
                    {stockDetailsData.name} 
                    </p>
                    </div>
                    {/* Project title div ends here */}
 
  {/*Stock Table starts here*/}
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
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base"> {stockDetailsData.current_price}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base"> {stockDetailsData.price_change_24h}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{stockDetailsData.market_cap}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">{stockDetailsData.market_cap_change_24h}</td>
                    <td class=" py-3 px-6 text-xs sm:text-sm md:text-base">3222</td>
                    </tr>
                    
                </tbody>
                </table>
                    </div>
                    {/*Stock table ends here*/}

           

              </div>
        </div>
        {/*Stock details table ends here*/}
       
      </div>
      {/*Stock details table & ends here*/}


            {/*Stock Chart starts here*/}
            <div className='flex flex-col  items-center justify-center '>
      <div className='bg-white h-full  shadow-md relative p-4  lg:max-w-4xl mt-10 '>
      <p className="border-b-2 border-purple-500 text-lg sm:text-xl mb-4">Coin History</p>

      <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="high_24h" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="low_24h" stroke="#82ca9d" />
          </LineChart>
      </ResponsiveContainer>
      </div>
      </div>
      {/*Stock Chart ends here*/}
       

  </div>

  
  )
}

export default StockDetails