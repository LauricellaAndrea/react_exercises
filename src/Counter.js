import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";


// export function Counter({initialValue = 0, increment = 10, interval = 3000}){

//     const [counter, setCounter] = useState(initialValue)

//     useEffect(()=>{
//         const _interval = setInterval(() => {
//             setCounter((prev)=>prev===initialValue*10 ? prev = initialValue : prev+increment)
//         }, interval)

//         return()=>{clearInterval(_interval)}
//     },[increment, interval, initialValue])


//     return(
//         <CounterDisplay counter={counter}/>
//     )
// }


import {useCounter} from "./UseCounter";

export function Counter({ initialValue = 0 }) {

  const { counter, onIncrement, onDecrement, onReset } =  useCounter(initialValue);

  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={onIncrement}>Incrementor</button>
      <button onClick={onDecrement}>Decrementor</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
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
