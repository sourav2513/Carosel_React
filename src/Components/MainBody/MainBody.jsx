import React from 'react'
import './mainbody.css'
const MainBody = (props) => {
  return (
    <div className='flex justify-center w-full h-full bg-primary absolute top-0 left-0 right-0'>
      {props.children}
    </div>
  )
}

export default MainBody
