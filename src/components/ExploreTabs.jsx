import React from 'react'

//safely loop tab content as string
const ExploreTabs = ({tabData,activeTab, setActiveTab}) => {
    const SVGIcon = ({ svg }) => {
        return <div dangerouslySetInnerHTML={{ __html: svg }} />;
      };
  return (
    <div className='flex justify-around gap-2 p-0 m-[-15px] mt-0 mb-0'>
        {tabData.map((item, index) => (
                  <div key={item.type} className={`hover:bg-purple-600 cursor-pointer text-purple-600 hover:text-white w-max p-4 rounded-sm shadow-md text-center items-center justify-center flex flex-col ${index === activeTab && 'active' ? 'bg-purple-600 text-white': ''}`}
                onClick={() => setActiveTab(index)}>
                    
                    <SVGIcon svg={item.icon} />
                    <p>{item.type}</p>
                    </div>
        ))

        }
    </div>
  )
}

export default ExploreTabs