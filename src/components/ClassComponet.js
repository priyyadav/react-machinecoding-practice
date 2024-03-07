import React from 'react'

// const ClassComponet = () => {
//   return (
//     <div>ClassComponet</div>
//   )
// }

class ClassComponet extends React.Component
{
    constructor(props)
    {
 super(props)
 this.state={
    count:0,
    count1:1
 }
    }
    render()
    {
        return(
            <div>
                {this.props.name}{this.state.count}{this.state
                .count1}
                <button
                onClick={()=>
                {
                    this.setState(
                        {
                            count:this.state.count+1,
                        }
                    )
                }}></button>
            </div>
        )
    }
}
export default ClassComponet