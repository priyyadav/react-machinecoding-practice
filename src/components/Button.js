import React from 'react'

const Button = (props) => {
    console.log("button render")
  return (
    <div>
      <button onClick={props.click}>click me</button>
    </div>
  )
}

export default React.memo(Button)