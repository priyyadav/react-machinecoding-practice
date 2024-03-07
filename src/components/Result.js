import React from 'react'

const Result = ({result}) => {
    console.log("isode result")
  return (
    <div>{result}</div>
  )
}

export default React.memo(Result)