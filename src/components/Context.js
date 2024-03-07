import React from 'react'
import { CounterProvider } from '../context/Counteri'
import { useContext } from 'react';
import { CounterContext } from '../context/Counteri';
import Counter from './Counter';
const Context = (props) => {
    const countestate=useContext(CounterContext)
  return (<div>
  <h1>count is {countestate.count}</h1> 
    <Counter></Counter>
   <Counter></Counter>
   <Counter></Counter>
   <Counter></Counter>
  </div>
   
  )
}

export default Context