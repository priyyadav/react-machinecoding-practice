import React, { useCallback, useState } from 'react'
import Button from './Button';

const Call = () => {
  const [count, setcount]=useState(0);
  const increment= useCallback(()=>
  {
    setcount(prev=>prev+1)
  },[])
  return (
    <div>{count}
    <Button click={increment}></Button></div>
  )
}

export default Call