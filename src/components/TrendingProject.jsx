import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import filter from '/filter.png';
import ProjectCards from './ProjectCards';

const TrendingProject = () => {
  const location = useLocation();

  return (
    <div>
        <div className='text-xs highlights flex gap-1 text-gray-500'>
        <div className='bg-white py-3 px-6 flex items-center'>
        <i class="fa-solid fa-sack-dollar mr-2"></i>
        <h3>Highlights</h3>
        </div>
        <div className='bg-white py-3 px-6 flex items-center'>
          <h3>All</h3>
        </div>
        <div className='bg-white py-3 px-6 flex items-center'>
          <h3>ERC$)$</h3>
        </div>
        <div className='bg-white py-3 px-6 flex items-center'>
          <h3>ERC404</h3>
        </div>
        <div className='bg-white py-3 px-6 flex items-center'>
          <h3>Other Categories</h3>
        </div>
        <div className='hidden lg:block w-2/5 bg-white py-3 px-10 flex items-center'></div>
      </div>
      <div className='project'>
        <div className='flex justify-between mt-4 items-center'>
          <div className='flex text-xs md:text-sm text-gray-500 justify-between items-center'>
            <Link to='/latest'>
              <h4 className={`${location.pathname === '/latest' ? 'border-b-2  mt-4 pro' : ''} md:mr-20 mr-4`}>
                Latest Project
              </h4>
            </Link>
            <Link to='/trending'>
              <h4 className={`${location.pathname === '/trending' ? 'border-b-2 pb-2 mt-4 pro' : ''}`}>
                Trending Project
              </h4>
            </Link>
          </div>

          <div className='flex items-center'>
          <div>
            <i class="text-blue-800 p-2 h-8 w-8 mr-2 rounded-lg bg-blue-100 fa-solid fa-magnifying-glass"></i>
            </div>
          <div className='flex p-1 py-2 text-xs md:text-sm rounded-lg bg-purple-600 justify-between items-center'>
            <img src={filter} className='mr-2 filter w-3' alt="filter-icon" />
            <h4 className='text-white'>Filter Projects</h4>
          </div>
          </div>
          
        </div>
      </div>

      
      <div className='grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4'>
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </div>
  );
};

export default TrendingProject;
