import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {
    const count=(state, action)=> 
    {
        switch(action.type)
        {
           case "Add":
              {
                return state+1
              }
        }
    }
    const [state, dispatch]=useReducer(count,0)
  return (
    <div>
        <span>{state}</span>
        <button onClick={()=>dispatch({type:"Add"})}></button>
    </div>
  )
}

export default Reducer