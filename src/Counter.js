import React, { useState } from "react";
// import { CounterDisplay } from "./CounterDisplay"
import {Usestate, useEffect} from "react"


export function Counter(){
    const [count, setCount] = useState(0);


    useEffect(() =>{
        const interval = setInterval(() =>{
            setCount(count + 1);
            return () => clearInterval(interval)
        }, 3000); 

        return () => {
            console.log('Clear all');
        }
    })

    

    return (
        <>
        <h1>count: {count}</h1>
        </>
    )
}

// export class Counter extends React.Component{
//     state = {
//         counter: this.props.initialValue
//     }

//     // constructor(props){
//     //     super(props)
        
//     //     setInterval(() => {
//     //         this.setState((state)=>{
//     //             return {counter: state.counter + this.props.increment}
//     //         })
//     //     }, this.props.interval);
//     // }

//     componentDidMount(){
//         setInterval(() => {
//             this.setState((state)=>{
//                    return this.state.counter + this.props.increment 
                    
//             })
//         }, this.props.interval);
//     }
//     render(){
//         return <CounterDisplay counter = {this.state.counter}/>
//     }
// }

// Counter.defaultProps = {
//     initialValue: 0,
//     increment: 1,
//     interval: 1000
// }