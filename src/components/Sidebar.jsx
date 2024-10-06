import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/solup.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Mobilesidebar from './mobileSIdebar';

const Sidebar = ({ activeLink, setActiveLink, SIDEBAR_LINKS, connectWallet, connect }) => {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    
    if (currentPath.includes('explore')) {
      // Highlight "Explore" if the path is related to latest or trending
      const exploreIndex = SIDEBAR_LINKS.findIndex(link => link.name === 'Explore');
      setActiveLink(exploreIndex);
    } else if (currentPath.includes('portfolio')) {
      // Highlight "Portfolio" if the path is related to any portfolio sub-sections
      const portfolioIndex = SIDEBAR_LINKS.findIndex(link => link.name === 'Portfolio');
      setActiveLink(portfolioIndex);
    }  else if (currentPath.includes('pools')) {
      console.log("Matched Pools");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Pools'));
    }  else if (currentPath.includes('coin')) {
      console.log("Matched Coin Market");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Other Market'));
    }  else if (currentPath.includes('stock')) {
      console.log("Matched Stock Market");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Other Market'));
    } else if (currentPath.includes('bet')) {
      console.log("Matched SolUp Bet");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'SolUpBet'));
    } else if (currentPath.includes('project')) {
      console.log("Matched Project Market");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Project Market'));
    } else {
      const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
      setActiveLink(activeIndex !== -1 ? activeIndex : 0);
    }
  }, [location.pathname, SIDEBAR_LINKS, setActiveLink]);

  return (
    <>
      {windowWidth <= 767 ? (
        <Mobilesidebar connectWallet={connectWallet} connect={connect} />
      ) : (
        <div className="w-16 sidebar md:w-56 fixed main left-0 top-0 h-screen pl-0 md:pl-8 border-r pt-6 px-4 bg-white border-none duration-200">
          <div className="mb-10 flex">
            <img src={logo} alt="LOGO" className="w-28 sidebar-logo ml-2 md:flex" />
          </div>
          <ul className="mt-16 ml-2 md:ml-0 space-y-6">
            {SIDEBAR_LINKS.map((link, index) => {
             

              // Determine if the link should be highlighted
              const isActive = activeLink === index ;

              return (
                <li
                  key={link.id}
                  onClick={() => setActiveLink(index)}
                  className={`sidebar-item text-gray-500 font-medium md:space-x-5 justify-between text-sm rounded-2xl py-2 px-5 hover ${
                    isActive ? 'bg-gray-100' : ''
                  }`}
                >
                  <Link className="flex items-center justify-center md:justify-start" to={link.path}>
                    <span className={`icon ${isActive ? 'text-purple-600' : 'text-gray-500'}`}>
                      {link.icons}
                    </span>
                    <span className={`ml-4 text ${isActive ? 'text-black' : 'text-gray-500'}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            onClick={connectWallet}
            className="align-center mt-8 flex justify-center py-3 px-8 rounded-lg bg-purple-600 text-white text-xs"
          >
            {!connect ? 'Connect Wallet' : 'Disconnect Wallet'}
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
