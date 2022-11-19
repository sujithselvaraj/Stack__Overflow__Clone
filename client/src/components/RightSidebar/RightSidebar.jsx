import React from 'react'
import Widget from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/RightSidebar/Widget.jsx'
import WidgetTags from '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/RightSidebar/WidgetTags.jsx'
import '/Users/sujiths/vscodeprojects/Stack Overflow/client/src/components/RightSidebar/RightSidebar.css'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
    <Widget/>
    <WidgetTags/>
  </aside>
  )
}

export default RightSidebar
