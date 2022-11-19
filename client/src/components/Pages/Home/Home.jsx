import React from 'react'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/App.css'
import LeftSidebar from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/LeftSidebar/LeftSidebar.jsx'
import RightSidebar from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/RightSidebar/RightSidebar.jsx'
import HomeMainbar from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/HomeMainbar/HomeMainbar.jsx'

const Home = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-2'>
      <HomeMainbar/>
      <RightSidebar/>

    </div>
    
  </div>
  )
}

export default Home
