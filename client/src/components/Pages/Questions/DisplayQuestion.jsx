import React from 'react'
import RightSidebar from '../../RightSidebar/RightSidebar'
import LeftSidebar from '../../LeftSidebar/LeftSidebar'
import QuestionsDetails from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Questions/QuestionsDetails.jsx'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-2'>
      <QuestionsDetails/>
      <RightSidebar/>

    </div>
    
  </div>
  )
}

export default DisplayQuestion
