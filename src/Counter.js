import React from "react";

export class Counter extends React.Component{
    state = {
        counter: this.props.initialValue
    }

    // constructor(props){
    //     super(props)
        
    //     setInterval(() => {
    //         this.setState((state)=>{
    //             return {counter: state.counter + this.props.increment}
    //         })
    //     }, this.props.interval);
    // }

    componentDidMount(){
        setInterval(() => {
            this.setState((state)=>{
                   return this.state.counter + this.props.increment 
                    
            })
        }, this.props.interval);
    }
    render(){
        return <CounterDisplay counter = {this.state.counter}/>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    increment: 1,
    interval: 1000
}