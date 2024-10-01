import React from 'react'
import ExploreBets from './ExploreBets'
import ExploreStocks from './ExploreStocks'
import ExploreProjects from './ExploreProjects'
import ExploreTokens from './ExploreTokens'

const ExploreTabContents = ({tabData, activeTab}) => {
const renderTab = () => {
    if(activeTab === 0)
    {
        return <ExploreProjects /> //navigate to Project

    }else if(activeTab === 1)
    {
        return <ExploreTokens /> //navigate to tokens
    }
    else if(activeTab === 2)
        {
            return <ExploreStocks /> //navigate to Stocks
        }else
        {
            return <ExploreBets /> //navigate to Bets 
        }
}
  return (
   
    <div>
           {renderTab()}
    </div>
  )
}

export default ExploreTabContents