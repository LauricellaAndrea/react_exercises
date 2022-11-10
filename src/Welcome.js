import React from "react";

export class Welcome extends React.Component{
    render(){
        return (
         <div>
             <p>Welcome, {this.props.name}</p>
             <p>Your age is {this.props.age}</p>
        </div>
        );
    }
}

// si, è possibile settare un valore di default 
Welcome.defaultProps = {
    name: "Johnnie",
    age: 25
}