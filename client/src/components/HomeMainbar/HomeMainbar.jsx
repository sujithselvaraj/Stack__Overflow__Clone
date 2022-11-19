import React from 'react'
import {useLocation,useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/HomeMainbar/HomeMainbar.css'
import QuestionList from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/HomeMainbar/QuestionList.jsx'


const HomeMainbar = () => {
  const user=1;
  const navigate=useNavigate()
   const location=useLocation()
  const questionsList=useSelector(state => state.questionReducer)
  //console.log(questionsList) 


  //    var questionsList  = [{
  //     _id: '1',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java","nodejs","reactjs","mongodb","expressjs"],
  //     userPosted: "sujith",
  //     userId: 1,
  //     askedOn: "Jan 1",
  //     answer: [{
  //           answerBody: "Answer",
  //           userAnswered: "nisanth",
  //           answeredon: "Jan 2",
  //           userId: 2,
  //     }]
  //   },{
  //     _id: '2',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript","R","python"],
  //     userPosted: "sujith",
  //     askedOn: "Jan 1",
  //     userId: 1,
  //     answer: [{
  //         answerBody: "Answer",
  //         userAnswered: "nisanth",
  //         answeredon: "Jan 2",
  //         userId: 2,
  //   }]
  //   },{
  //     _id: '3',
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript","R","python"],
  //     userPosted: "Sujith",
  //     askedOn: "Jan 1",
  //     answer: [{
  //       answerBody: "Answer",       
  //       userAnswered: "nisanth",
  //       answeredon: "Jan 2",
  //       userId: 2,
  // }]
  //   }]
      const checkAuth=()=>{
        if(user === null){
        alert("login or signup to ask a question")
        navigate('/Auth')
      }
      else{
        navigate('/AskQuestion')
      }
    }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
          <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
          {
          questionsList.data === null ?
          <h1>Loading...</h1>:
          <>
            <p>{questionsList.data.length} questions</p>
             <QuestionList questionsList={questionsList.data}/>
          </>
          }
      </div>
    </div>
  )
}

export default HomeMainbar
