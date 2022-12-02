import React from 'react';
import { Counter } from "./Counter"
import { Sum } from './Sum';
// import { GithubUserList } from './GithubUserList';
// import { Container } from "./Container"
// import { ClickCounter } from './ClickCounter.';
import ClickCounter from './ClickCounter.' //import così se uso export default
import { ClickTracker } from './ClickTracker';
import GithubUser from './GitHubUser';
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import  Login  from './Login'
// import { UncontrolledLogin } from './UncontrolledLogin';
import { TodoList } from './TodoList'
import { Welcome } from"./Welcome"
import { UseForms } from './UseForms';
import  GitHubUser  from "./GitHubUser";
import { LanguageContext, DisplayLanguage } from './LanguageContext';




export function App() {
         return (
            <div>
               <Hello />
                <Welcome  />
                <UseForms/>
                {/* <ClickCounter/> */}
                {/* <ClickTracker/> */}
                {/* <InteractiveWelcome/> */}
                {/* <Login/> */}
                {/* <Counter/> */}
                <GithubUser username='Johnnie-Walker' />
                {/* <GithubUser username= {'Andrea'}/> */}
                {/* <GithubUserList/> */}
                {/* <UncontrolledLogin/> */}
                {/* <Sum/> */}
                {/* <GithubUser username={'Andrea'} /> */}
                {/* <LanguageContext.Provider value="ita"> */}
                {/* <DisplayLanguage/> */}
                {/* </LanguageContext.Provider> */}
                <GitHubUser username={'Johnnie Walker'} />
            

            </div>
       
        );
    }
