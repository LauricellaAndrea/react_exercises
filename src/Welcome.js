import React from "react";

export class Welcome extends React.Component{
    render(){
        return <p>Welcome, {this.props.name}</p>
    }
}

// si, è possibile settare un valore di default 
Welcome.defaultProps = {
    name: "Johnnie"
}