import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/solup.png';
import Profile from '/profile.jpg';

const Mobilesidebar = ({ connectWallet, connect }) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const toggleMobile = () => {
    setToggle(!toggle);
  };

  const SIDEBAR_LINKS = [
    {id:1, path: '/explore', name:'Explore', icons: <i className="fa-solid fa-house"></i>},
    {id:2, path: '/projectmarket', name:'Project Market', icons: <i className="fa-solid fa-folder"></i>},
    {id:3, path: '/othermarket', name:'Other Market', icons: <i className="fa-solid fa-chart-line"></i>},
    {id:4, path: '/pools', name:'Pools', icons: <i class="fa-solid fa-sack-dollar"></i>},
    {id:5, path: '/solupbet', name:'SolUpBet', icons: <i class="fa-solid fa-cube"></i>},
    {id:6, path: '/portfolio', name:'Portfolio', icons: <i class="fa-solid fa-bullseye"></i>},
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    
 
    if (currentPath.includes('solupbet')) { 
      console.log("Matched SolUpBet");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'SolUpBet'));
    } else if (currentPath.includes('explore')) {
      console.log("Matched Explore");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Explore'));
    } else if (currentPath.includes('portfolio')) {
      console.log("Matched Portfolio");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Portfolio'));
    } else if (currentPath.includes('coin')) {
      console.log("Matched Coin Market");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Other Market'));
    }  else if (currentPath.includes('stock')) {
      console.log("Matched Stock Market");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Other Market'));
    } else if (currentPath.includes('bet')) {
      console.log("Matched SolUp Bet");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'SolUpBet'));
    } else if (currentPath.includes('pools')) {
      console.log("Matched Pools");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Pools'));
    }else if (currentPath.includes('project')) {
      console.log("Matched Project Market");
      setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Project Market'));
    }  else {
      const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === currentPath);
      if (activeIndex !== -1) {
        setActiveLink(activeIndex);
      } else {
        console.log("Setting default to SolUpBet");
        setActiveLink(SIDEBAR_LINKS.findIndex(link => link.name === 'Explore')); 
      }
      console.log("Default Match:", activeIndex);
    }
  
    console.log("Active Link Set To:", activeLink);
  
  }, [location.pathname, SIDEBAR_LINKS, setActiveLink]);
  return (
    <div className='flex justify-between items-center'>
      {toggle ? (
        <div className='mobilesidebar w-50 fixed main left-0 top-0 h-screen border-r pt-8 px-4 bg-white border-none'>
          <div className='mb-8 flex'>
            <img src={logo} alt="LOGO" className='w-28 sidebar-logo ml-2 md:flex'/>
            <i onClick={toggleMobile} className="cancel-sidebar fa-solid text-purple-600 text-xl cursor-pointer ml-20 fa-xmark"></i>
          </div>
          <ul className='mt-6 md:ml-0 space-y-6'>
            {SIDEBAR_LINKS.map((link, index) => (
              <li
                key={link.id}
                onClick={() => setActiveLink(index)}
                className='sidebar-item text-gray-500 font-medium md:space-x-5 justify-between text-sm rounded-2xl py-2 px-6 hover'
              >
                <Link className='flex items-center justify-start' to={link.path}>
                  <span className={`icon ${activeLink === index ? 'text-purple-600 border--2 border-purple-600' : ''}`}>
                    {link.icons}
                  </span>
                  <span className={`ml-4 text ${activeLink === index ? 'text-black' : ''}`}>
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Display "Connect Wallet" button if not connected */}
          {!connect && (
            <button
              onClick={connectWallet}
              className='align-center mt-32 flex justify-center py-3 px-8 rounded-lg bg-purple-600 text-white text-xs'
            >
              Connect Wallet
            </button>
          )}
        </div>
      ) : (
        <i onClick={toggleMobile} className="text-gray-500 cursor-pointer text-xl fa-solid fa-bars"></i>
      )}

      <div className='justify-center gap-2 items-center flex'>
        <i className="text-purple-800 md:ml-6 p-2 rounded-lg bg-purple-200 fa-regular fa-bell"></i>

      </div>
    </div>
  );
};

export default Mobilesidebar;
