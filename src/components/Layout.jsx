import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react'


const layout = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [currentProject, setCurrentProject] = useState('');
  const [connect, setConnect] = useState(false);

  const connectWallet = () => {
    setConnect(!connect)
  }


  const SIDEBAR_LINKS = [
    {id:1, path: '/explore', name:'Explore', icons: <i className="fa-solid fa-house"></i>},
    {id:2, path: '/projectmarket', name:'Project Market', icons: <i className="fa-solid fa-folder"></i>},
    {id:3, path: '/othermarket', name:'Other Market', icons: <i className="fa-solid fa-chart-line"></i>},
    {id:4, path: '/pools', name:'Pools', icons: <i class="fa-solid fa-sack-dollar"></i>},
    {id:5, path: '/solupbet', name:'SolUpBet', icons: <i class="fa-solid fa-cube"></i>},
    {id:6, path: '/portfolio', name:'Portfolio', icons: <i class="fa-solid fa-bullseye"></i>},
  ]

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
    setActiveLink(activeIndex !== -1 ? activeIndex : 0);

  },
   [location.pathname]);


  const currentPage = SIDEBAR_LINKS[activeLink] ? SIDEBAR_LINKS[activeLink].name : '';

  return (
    <div className='md:flex'>
      <Sidebar connectWallet={connectWallet} connect={connect} activeLink={activeLink} setActiveLink={setActiveLink} SIDEBAR_LINKS={SIDEBAR_LINKS}/>
      <div className='main w-full mt-4  md:pl-1 lg:pl-8 md:mt-0 md:pr-8 ml-0 md:ml-56 '>
        <Header connect={connect} connectWallet={connectWallet} pageTitle={currentPage} currentProject={currentProject}/>
        
        <Outlet />
      </div>
    </div>
  )
}

export default layout;
