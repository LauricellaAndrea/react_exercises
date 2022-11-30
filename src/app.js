import React from 'react';
import { Counter } from "./Counter"
import { CarDetails } from "./CarDetails"
import { Sum } from './Sum';
// import { GithubUserList } from './GithubUserList';
// import { Container } from "./Container"
// import { ClickCounter } from './ClickCounter.';
import ClickCounter from './ClickCounter.' //import così se uso export default
import { ClickTracker } from './ClickTracker';
// import GithubUser from './GithubUser';
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import  Login  from './Login'
import { UncontrolledLogin } from './UncontrolledLogin';
import { TodoList } from './TodoList'
import { Welcome } from"./Welcome"
import { UseForms } from './UseForms';
import { LanguageContext, DisplayLanguage } from './LanguageContext';


const initialData = {
    model: 'volkswagen',
    year: 1997,
    color: 'black'
}


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
                <Counter/>
                {/* <GithubUser username='Johnnie-Walker' /> */}
                <CarDetails initialData={initialData} />
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
