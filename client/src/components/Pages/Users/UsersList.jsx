import React from 'react'
import { useSelector } from 'react-redux'
import User from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Users/User.jsx'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Users/Users.css'

const UsersList = () => {

    const users=useSelector((state)=>state.usersReducer)
   
  return (
    <div className='user-list-container'>
      {
        users.map((user)=>(
          <User user={user} key={user?._id}/>
        ))
      }
    </div>
  )
}

export default UsersList
