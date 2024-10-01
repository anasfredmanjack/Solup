import React from 'react'
import ExploreStocks from './ExploreStocks'
import ExploreTokens from './ExploreTokens'

const OtherMarketTabContents = ({tabData,activeOtherMarketTab}) => {
    const renderTab = () => {
        if(activeOtherMarketTab === 0)
        {
            return <ExploreTokens /> //navigate to tokens
    
        }else if(activeOtherMarketTab === 1)
        {
            return <ExploreStocks /> //navigate to stocks
        }else
            {
                return <ExploreTokens /> //navigate to tokens 
            }
    }
  return (
    <div>
    {renderTab()}
    </div>
  )
}

export default OtherMarketTabContents