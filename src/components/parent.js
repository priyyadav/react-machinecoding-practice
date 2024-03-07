import React, { useEffect, useState } from 'react'

const Parent = ({name}) => {
    const [total, setTotal]=useState(0)
    useEffect(()=>
    {
      
    },[total])
  return (
    <div>{name}{total}
    </div>
  )
}

export default Parent