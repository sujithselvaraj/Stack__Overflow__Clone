import React from 'react'
import Questions from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/HomeMainbar/Questions.jsx'
const QuestionList = ({questionsList}) => {
  return (
    <>
      {
        questionsList.map((question) => (
          <Questions question={question} key={question.id}/>

        ))
      }
    </>
  )
}

export default QuestionList
