import React from 'react'
import LeftSidebar from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/LeftSidebar/LeftSidebar.jsx'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Users/Users.css'
import { useLocation } from 'react-router-dom'
import UsersList from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Users/UsersList.jsx'


const Users = () => {
const location=useLocation()

  return (
    <div className='home-container-1'>
      <LeftSidebar/>
        <div className="home-container-2" style={{marginTop:"50px"}}>
            
              <h1 style={{fontWeight:"400"}}>Users</h1>
                <UsersList />
            
        </div>

    </div>
  )
}
 
export default Users
