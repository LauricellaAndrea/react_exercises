import React from "react";
import { Age } from "./Age"

export class Welcome extends React.Component{
    render(){
        return (
         <div>
             <p>Welcome, {this.props.name}</p>
             {this.props.age>=18 && <Age age={this.props.age}/>}
        </div>
        );
    }
}

// si, è possibile settare un valore di default 
Welcome.defaultProps = {
    name: <strong>Johnnie</strong>,
    age: 25
}