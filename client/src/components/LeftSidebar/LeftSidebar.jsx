import React from 'react'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/LeftSidebar/LeftSidebar.css'
import Globe from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/Assests/Globe.svg'
import { NavLink } from 'react-router-dom'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
    <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links ' activeClassname="active">
           <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions' className='side-nav-links' activeclassName="active">
              <img src={Globe} alt="Globe" width="18px" style={{opacity: "0.7"}}/>
              <p style={{paddingLeft: "10px"}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeclassname="active" style={{paddingLeft: "40px"}}>
              <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' activeclassname="active" style={{paddingLeft: "40px"}}>
              <p>Users</p>
          </NavLink>
        </div>
    </nav>
  </div>
  )
}

export default LeftSidebar
