import { createContext, useState } from "react";
export const CounterContext=createContext(null)
export const CounterProvider=(props)=>
{
    const [count, setcount]=useState(0)
    return <CounterContext value={{count,setcount}}>
        {props.children}
    </CounterContext>
}