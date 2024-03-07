import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Counteri'
const Counter = () => {
    const aa=useContext(CounterContext)
  return (
    <div>
        <button onClick={()=>aa.setCount(aa.count+1)}>increment</button>
        <button onClick={()=>aa.setCount(aa.count-1)}>decrement</button>
    </div>
  )
}

export default Counter