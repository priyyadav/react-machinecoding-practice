import React from 'react'

const Name = ({name}) => {
    console.log("isode name")
  return (
    <div>{name}</div>
  )
}

export default React.memo(Name)