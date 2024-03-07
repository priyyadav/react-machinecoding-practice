import React, { useEffect, useState } from 'react'

export const State = () => {
    const [count, setCount]=useState(0)
    useEffect(()=>
    {
       clickHandler()
    },[])
    const clickHandler=()=>
    {
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={clickHandler}>{count}</button>
    </div>
  )
}
