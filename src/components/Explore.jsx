import React, { useEffect } from 'react';
import { useState } from 'react';
import ExploreTabs from './ExploreTabs';
import ExploreTabContents from './ExploreTabContents';

const Explore = () => {
  const [activeTab, setActiveTab] = useState(0);

  //ExploreTabs data
  const tabData = [
    {
        type: "Projects",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                <path fill="currentColor" fill-rule="evenodd" d="M5.495.126A.89.89 0 0 1 6.379.11c3.987 1.852 6.244 5.698 6.105 8.914c-.06 1.351-.543 2.602-1.48 3.515c-.938.914-2.285 1.448-3.99 1.451a5.186 5.186 0 0 1-5.502-4.967v-.008a4.38 4.38 0 0 1 2.251-3.94a.5.5 0 0 1 .7.235A5 5 0 0 0 5.47 6.796c.494-.645.722-1.478.715-2.394c-.008-1.09-.35-2.259-.924-3.254A.76.76 0 0 1 5.495.126" clip-rule="evenodd" />
            </svg>`
    },
    {
        type: "Tokens",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M5.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M11 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-2.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/></svg>`
    }, {
        type: "Stocks",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M2.5 14.5h.539c.472 0 .708 0 .914-.099c.205-.098.352-.283.647-.652L6 12l1.5 2.5L9 11l2.5 5L15 9l2 3.5l1.5-1.5l1.445 2.168c.252.378.378.567.562.681q.055.034.114.061c.198.09.425.09.879.09M15 2.5v3m0 16v-7"/><circle cx="15" cy="9" r="1"/></g></svg>`
    }, {
        type: "Bets",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32 32v7.5a3 3 0 0 1-3 3H10.5a5 5 0 0 1-5-5V19a3 3 0 0 1 3-3H16"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 10.5a5 5 0 0 0-5-5H16l8.3 8.3l-8.185 8.185a2.435 2.435 0 0 0 0 3.444l6.456 6.456c.951.95 2.493.95 3.444 0L34.2 23.7l8.3 8.3z"/></svg>`
    }
];

  return (
    <div>
      <ExploreTabs 
      tabData={tabData}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
       />

      <ExploreTabContents 
      tabData={tabData}
      activeTab={activeTab}
       />
   
    </div>
  );
};

export default Explore;
