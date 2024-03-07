import React, { useState } from 'react'
import Parent  from './parent'
import Parent2  from './parent2'

const Granparent = () => {
    const [total, settotal]=useState(0)
    const clickhandler=()=>
    {
        settotal(1)
    }
  return (
    <div>
        <Parent click={clickhandler}></Parent>
        <Parent2 total={total}></Parent2>
    </div>
  )
}
export default Granparent
