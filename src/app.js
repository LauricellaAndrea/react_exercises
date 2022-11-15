import React from 'react';
import { Counter } from "./Counter"
import { Hello } from "./Hello";
import { Welcome } from"./Welcome"


export class App extends React.Component {
    render(){
        return (
            <div>
                <Hello />
                <Welcome age="25" name="John" />
                <Counter/>
            </div>
        );
    }
}