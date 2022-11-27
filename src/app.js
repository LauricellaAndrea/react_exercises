import React from 'react';
import { Counter } from "./Counter"
import { Container } from "./Container"
import { ClickCounter } from './ClickCounter.';
import { ClickTracker } from './ClickTracker';
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from './Login'
import { UncontrolledLogin } from './UncontrolledLogin';
import { TodoList } from './TodoList'
import { Welcome } from"./Welcome"




export class App extends React.Component {
    render(){
        return (
            <Container>
                {/* <Hello /> */}
                <Welcome  />
                {/* <Counter initialValue={10} increment={5} interval={2000}/> */}
                {/* <ClickCounter/> */}
                {/* <ClickTracker/> */}
                {/* <InteractiveWelcome/> */}
                {/* <Login/> */}
                {/* <UncontrolledLogin/> */}
                <TodoList render={(items, remove)=>{
                return (
                <ul className="list-none uppercase">
                {items.map((item, index)=><li key={item+index}>{item}<button className="ml-10" id={item+index} onClick={remove}>Remove item</button></li>)}
                </ul>
                )
            }}/>
            </Container>
        );
    }
}