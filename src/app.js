import React from 'react';
import { Counter } from "./Counter"
import { Sum } from './Sum';
import { GithubUser } from './GithubUser';
import { GithubUserList } from './GithubUserList';
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
            <div>
               <Hello />
                <Welcome  />
                {/* <ClickCounter/> */}
                {/* <ClickTracker/> */}
                {/* <InteractiveWelcome/> */}
                {/* <Login/> */}
                <Counter/>
                {/* <GithubUser username= {'Andrea'}/> */}
                {/* <GithubUserList/> */}
                {/* <UncontrolledLogin/> */}
                {/* <Sum/> */}
                {/* <GithubUser username={'Andrea'} /> */}
                {/* <LanguageContext.Provider value="ita"> */}
                {/* <DisplayLanguage/> */}
                {/* </LanguageContext.Provider> */}
            

            </div>
       
        );
    }
