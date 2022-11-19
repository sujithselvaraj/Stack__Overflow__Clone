import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Home/Home.jsx'
import Auth from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Auth/Auth.jsx'
import Questions from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Questions/Questions.jsx'
import AskQuestion from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/AskQuestion/AskQuestion.jsx'
import DisplayQuestion from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Questions/DisplayQuestion.jsx'
import Tags from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Tags/Tags.jsx'
import Users from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Users/Users.jsx'
import UserProfile from './components/Pages/UserProfile/UserProfile'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route  path='/' element={<Home/>}/>
        <Route  path='/Auth' element={<Auth/>}/>
        <Route  path='/Questions' element={<Questions/>}/>
        <Route  path='/AskQuestion' element={<AskQuestion/>}/>
        <Route  path='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<UserProfile/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
