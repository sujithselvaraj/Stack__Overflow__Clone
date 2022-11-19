import { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Navbar/Navbar.jsx'
import AllRoutes from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/AllRoutes.jsx'
import {fetchAllQuestions} from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/actions/question.js'
import {useDispatch} from 'react-redux'
import { fetchAllUsers } from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/actions/users.js'





function App() {
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])
  
  return (
    <div className="App">
      <Router>
     <Navbar/>
      <AllRoutes/>

     </Router>
    </div>
  );
}

export default App;
