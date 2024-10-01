import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Explore from './components/Explore';
import LatestProject from './components/LatestProject';
import TrendingProject from './components/TrendingProject';
import Othermarket from './pages/Othermarket';
import Pools from './pages/Pools/Pools';
import GeneralPool from './pages/Pools/GeneralPools';
import AddPoolLiquidity from './pages/Pools/AddPoolLiquidity';
import AllPools from './pages/Pools/AllPools'
import ProjectPools from './pages/Pools/ProjectPools';
import BetPools from './pages/Pools/BetPools';
import SolUpBet from './pages/SolUpBet';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioAll from './pages/Portfolio/PortfolioAll';
import PortfolioBet from './pages/Portfolio/PortfolioBets';
import  PortfolioProjects from './pages/Portfolio/PortfolioProjects';
import Modal from './components/Modal';
import './App.css';
import SolUpAllBets from './pages/SolUpBet/SolUpAllBets';
import SolUpNewBets from './pages/SolUpBet/SolupNewbets';
import SolUpTrendingBets from './pages/SolUpBet/SolUpTrendingBets';
import SolupPlaceBet from './pages/SolUpBet/SolupPlaceBets';
import ProjectDetails from './components/ProjectDetails';
import CoinDetails from './components/CoinDetails';
import SolupPlaceBetRabi from './pages/SolUpBet/SolupPlaceBet';
import StockDetails from './components/StockDetails';
import ProjectMarket from './components/ProjectMarket';

function App() {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobile = () => {
    setToggle(!toggle);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisited');

    if (!hasVisitedBefore) {
      setIsModalOpen(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout toggle={toggle} toggleMobile={toggleMobile} />}>
          <Route index element={<Explore />} /> 
          <Route path='latest' element={<LatestProject />} />
          <Route path='trending' element={<TrendingProject />} />
          <Route path='explore' element={<Explore />} />
          <Route path='othermarket' element={<Othermarket />} />
          <Route path='pools' element={<Pools />} />
          <Route path='generalpool' element={<GeneralPool />} />
          <Route path='allpools' element={<AllPools />} />
          <Route path='addpoolliquidity/:poolId' element={<AddPoolLiquidity />} />
          <Route path='projectpools' element={<ProjectPools />} />
          <Route path='betpools' element={<BetPools />} />
          <Route path='solupallbet' element={<SolUpAllBets/>}/>
          <Route path="/solupplacebet/:betId" element={<SolupPlaceBet />} />
          <Route path='solupbet' element={<Navigate to="/solupallbet" />} />
          <Route path='solupallbet' element={<SolUpAllBets/>}/>
          <Route path='soluptrendingbets' element={<SolUpTrendingBets/>}/>
          <Route path='solupnewbets' element={<SolUpNewBets/>}/>
          <Route path="/placebet/:betId" element={<SolupPlaceBetRabi />} />
          <Route path="chart" element={<SolupPlaceBetRabi />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='portfolioall' element={<PortfolioAll />} />
          <Route path='portfolioprojects' element={<PortfolioProjects />} />
          <Route path='portfoliobets' element={<PortfolioBet />} />
          <Route path='projectdetails/:projectId' element={<ProjectDetails />} />
          <Route path='coindetails/:coinId' element={<CoinDetails />} />
          <Route path='stockdetails/:stockId' element={<StockDetails />} />
          <Route path='projectmarket' element={<ProjectMarket />} />
       
        </Route>
      </Routes>

      {/* Modal shown on first visit */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col items-center px-10 pb-4 text-center justify-center modal'>
          <div className='flex bg-white items-center'>
            <img className='w-5/12 ml-12 h-3/7' src='/group91.png' alt="" />
            <img className='w-5/12 h-3/7' src='/ccc.jpg' alt="" />
          </div> 
          <h1 className='font-semibold md:text-3xl  text-gray-700'>Welcome to SolUp</h1>
          <p className='mt-2'>Welcome to Solup, the world's first decentralized market driven by the latest trends and aesthetics...</p>
          <button onClick={handleCloseModal} className='align-center flex justify-center py-3 px-16 mt-4 md:mt-6 rounded-lg bg-purple-600 text-white text-xs'>
            Continue
          </button>      
        </div>
      </Modal>
    </BrowserRouter>
  );
}

export default App;
