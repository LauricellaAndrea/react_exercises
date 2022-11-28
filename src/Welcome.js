import React from "react";
import { Age } from "./Age"
import "./index.css"



export function Welcome({name= <strong>Andrea</strong>, age}){
    return(
        <div className="welcome">
            <p>welcome, {name}</p>
            <Age age ={age} />
        </div>
    )
}

// export class Welcome extends React.Component{
//     render(){
//         return (
//          <div>
//              <p className="welcome">Welcome, {this.props.name}</p>
//              {this.props.age>=18 && this.props.age<65 && this.props.name === "John" && <Age age={this.props.age}/>}
//         </div>
//         );
//     }
// }

// // si, è possibile settare un valore di default 
// Welcome.defaultProps = {
//     name: <strong>Johnnie</strong>,
//     age: 25
// }