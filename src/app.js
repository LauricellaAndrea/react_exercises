import React from 'react';
import { Counter } from "./Counter"
import { Sum } from './Sum';
import { Container } from "./Container"
// import { ClickCounter } from './ClickCounter.';
import ClickCounter from './ClickCounter.' //import così se uso export default
import { ClickTracker } from './ClickTracker';
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import  Login  from './Login'
import { UncontrolledLogin } from './UncontrolledLogin';
import { TodoList } from './TodoList'
import { Welcome } from"./Welcome"
import { LanguageContext, DisplayLanguage } from './LanguageContext';





export function App() {
         return (
            <Container>
                {/* <Hello /> */}
                <Welcome  />
                <Counter initialValue={10} increment={5} interval={2000}/>
                {/* <ClickCounter/> */}
                {/* <ClickTracker/> */}
                {/* <InteractiveWelcome/> */}
                <Login/>
                {/* <UncontrolledLogin/> */}
                <Sum/>
                <LanguageContext.Provider value="ita">
                <DisplayLanguage/>
                </LanguageContext.Provider>

                {/* <TodoList render={(items, remove)=>{
                return (
                <ul>
                {items.map((item, index)=>
                <li key={item+index}>{item}<button onClick={remove}></button></li>)}
                </ul> 
                
                )
            }}/> */}

            
            </Container>
       
        );
    }
