import React from "react";

export class ClickCounter extends React.Component{
    state = {
        count: 0
    }


  ClickButtonEvent = () => {
    this.setState((state) =>{
    return {count: state.count + 1}
    })
  }

  render(){
    return (
        <div>
            <h3>Count of click: {this.state.count}</h3>
            <button onClick={this.ClickButtonEvent}>Increment Counter</button>
        </div>
    )
  }



}




