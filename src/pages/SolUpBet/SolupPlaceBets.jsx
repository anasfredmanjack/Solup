import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import solupbetdata from '../solupbetdata.json';

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const SolupPlaceBet = () => {
  const { betId } = useParams();
  const navigate = useNavigate();

  const selectedBet = solupbetdata.find((bet) => bet.id.toString() === betId);

  const candleData = [
    { name: 'Jan', open: 100, high: 120, low: 80, close: 110 },
    { name: 'Feb', open: 110, high: 130, low: 100, close: 120 },
    { name: 'Mar', open: 120, high: 140, low: 110, close: 130 },
    { name: 'Apr', open: 130, high: 150, low: 120, close: 140 },
    { name: 'May', open: 140, high: 160, low: 130, close: 150 },
    { name: 'Jun', open: 150, high: 170, low: 140, close: 160 },
  ];

  const [showOrderbook, setShowOrderbook] = useState(false);

  const toggleView = (isOrderbook) => {
    setShowOrderbook(isOrderbook);
  };

  const yAxisLabels = [
    { value: 50, label: '$50' },
    { value: 100, label: '$100' },
    { value: 150, label: '$150' },
    { value: 200, label: '$200' },
  ];

  return (
    <div className="grid gap-2 lg:grid-cols-3 p-2">
      <div className="flex lg:col-span-2 flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="text-purple-600 fa-solid fa-arrow-left cursor-pointer"
            ></i>
          </div>
          <img
            src={selectedBet.imageUrl}
            alt={selectedBet.title}
            className="w-10 h-10 rounded-full border"
          />
          <h1 className="text-xl form-title font-semibold">{selectedBet.title}</h1>
        </div>

        <div className="bg-white rounded-md p-4 py-8 mb-6 mt-10">
          <div id="table-wrapper">
            <div id="table-scroll" className="overflow-x-auto">
              <table className="w-full">
                <thead className="project font-medium">
                  <tr>
                    <th className="p-2">Total bets placed</th>
                    <th className="p-2">Start Date</th>
                    <th className="p-2">Due Date</th>
                    <th className="p-2">Long</th>
                    <th className="p-2">Short</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="pt-8">$120,000</td>
                    <td className="pt-8">20000</td>
                    <td className="pt-8">$12000000</td>
                    <td className="text-red-500 pt-8">+490%</td>
                    <td className="text-green-500 pt-8">-499%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md shadow p-4 py-8 mb-6">
          <div className='flex ml-10 gap-20 project'>
            <Link to="#" onClick={() => toggleView(false)}>
              <h4 className={`${!showOrderbook ? 'border-b-2 text-500-red mt-4 pro' : ''}`}>
                CHARTS
              </h4>
            </Link>
            <Link to="#" onClick={() => toggleView(true)}>
              <h4 className={`${showOrderbook ? 'border-b-2 pb-2 mt-4 pro' : ''}`}>
                ORDERBOOK
              </h4>
            </Link>
          </div>

          
          {showOrderbook ? (
           <div></div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                data={candleData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" tick={false} axisLine={false} />
                <YAxis
                  dataKey="close"
                  type="number"
                  reversed={true}
                  ticks={[50, 100, 150, 200]}
                  tickFormatter={(tick) => {
                    const label = yAxisLabels.find((label) => label.value === tick);
                    return label ? label.label : tick;
                  }}
                />
                <Tooltip />
                <Bar dataKey="high" fill="red" barSize={10} />
                <Bar dataKey="low" fill="blue" barSize={10} />
              </ComposedChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div>
        <h3 className='font-semibold text-sm w-max form-title'>Description</h3>
        <h3 className='text-xs mt-2'>{selectedBet.description}</h3>
        <div className='bg-white h-3/6 px-2 flex flex-col gap-2 mt-5'>
          <div className='project px-6 cursor-pointer text-sm'>
            <Link to='/chart'>
              <h4 className={`${location.pathname.includes('/chart') ? 'border-b-2 text-500-red mt-4 pro' : ''} pb-4`}>
                Place your bet
              </h4>
            </Link>
          </div>
          <div className='select p-1 mb-4 border-gray-300'>
            <input type="text" className='border-2 text-sm border-gray-500' placeholder='Enter bet amount' />
          </div>
          <div className='bg-green-500 py-2 text-sm cursor-pointer text-white text-center'>Bet for</div>
          <div className='bg-red-600 text-sm py-2 cursor-pointer text-white text-center'>Bet against</div>
          <div className='flex font-semibold text-xs justify-between'><h4>Trading fees</h4><h4>1.5%</h4></div>
          <div className='flex font-semibold text-xs justify-between'><h4>Creator fees</h4><h4>0.5%</h4></div>
        </div>
      </div>
    </div>
  );
};

export default SolupPlaceBet;