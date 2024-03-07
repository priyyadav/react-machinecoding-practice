import React from 'react'
import { Child } from './child'

 const Parent = (props) => {
  return (

    <div>
        Parent
        <button onClick={props.click}></button>
        <Child name="priyanka"></Child>
    </div>
  )
}

export default Parent