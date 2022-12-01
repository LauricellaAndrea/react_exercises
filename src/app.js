import React, { useState } from "react" //bisogna impostare useState dentro app, altrimenti da errore


import { Counter } from "./Counter"
// import { CarDetails } from "./CarDetails"
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
import  {LanguageContext}  from './LanguageContext';
import { DisplayLanguage } from "./DisplayLanguage";




// const initialData = {
//     model: 'volkswagen',
//     year: 1997,
//     color: 'black'
// }


export function App() {
    const [language, setLanguage] = useState("en")
   

    function handleLanguageChange(event) {
        setLanguage(event.target.value)
    }

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
                {/* <CarDetails initialData={initialData} /> */}
                {/* <GithubUser username= {'Andrea'}/> */}
                {/* <GithubUserList/> */}
                {/* <UncontrolledLogin/> */}
                {/* <Sum/> */}
                {/* <GithubUser username={'Andrea'} /> */}
                {/* <LanguageContext.Provider value="ita"> */}
                {/* <DisplayLanguage/> */}
                {/* </LanguageContext.Provider> */}
                <div>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>
            </div>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />

            </LanguageContext.Provider>
        

            </div>
       
        );
    }
