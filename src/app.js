import React from 'react';
import { Counter } from "./Counter"
import { ClickCounter } from './ClickCounter.';
import { Hello } from "./Hello";
import { Welcome } from"./Welcome"


export class App extends React.Component {
    render(){
        return (
            <div>
                {/* <Hello />
                <Welcome age="25" name="John" />
                <Counter initialValue={10} increment={5} interval={2000}/> */}
                <ClickCounter/>
            </div>
        );
    }
}