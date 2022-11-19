import React from 'react'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/Pages/Tags/Tags.css'


const TagsList = ({ tag }) => {
    return (
      <div className='tag'> 
          <h5>{tag.tagName}</h5>
          <p>{tag.tagDesc}</p>
      </div>
    )
  }
  
  export default TagsList