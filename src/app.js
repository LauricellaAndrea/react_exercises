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
import { FilteredList } from "./FilteredList";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import  Login  from './Login'
import { UncontrolledLogin } from './UncontrolledLogin';
import { TodoList } from './TodoList'
import { Welcome } from"./Welcome"
import { UseForms } from './UseForms';
import  {LanguageContext}  from './LanguageContext';
import { DisplayLanguage } from "./DisplayLanguage";

import { BrowserRouter, Routes, Route } from "react-router-dom";





// const peopleList = [
//     {
//     name:'Paolo',
//     age:20,
//     id:1,
//     },
//     {
//     name:'Giorgia',
//     age: 14,
//     id:2,
//     },
//     {
//     name:'Pippo',
//     age: 19,
//     id: 3,
//     },
//     {
//     name:'Lucas',
//     age:21,
//     id:4,
//     },
   
// ]

export function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="Johnnie Walker" />} />
          <Route
            path="counter" element={<Counter count={5} interval={1000} amount={5} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }