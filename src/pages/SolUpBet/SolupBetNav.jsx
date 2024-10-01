import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SolupBetNav = () => {
  const location = useLocation();
  return (
    <div>
       <div className='flex gap-10 justify-between'>
        <Link to='/solupallbet'>
            <h4 className={`${location.pathname === '/solupallbet' ? 'border-b-2 text-500-red mt-4 pro' : ''} `}>
              All Bets
            </h4>
          </Link>
          <Link to='/soluptrendingbets'>
            <h4 className={`${location.pathname === '/soluptrendingbets' ? 'border-b-2 pb-2 mt-4 pro' : ''}`}>
              Trending Bets
            </h4>
          </Link>
          <Link to='/solupnewbets'>
            <h4 className={`${location.pathname === '/solupnewbets' ? 'border-b-2 mt-4 pro' : ''}`}>
              New Bets
            </h4>
          </Link>
        </div>
    </div>
  )
}

export default SolupBetNav;