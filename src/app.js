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





export function App(props) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="Johnnie" />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
