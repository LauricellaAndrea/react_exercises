// import { Hello } from "./Hello";
import React from 'react';
import ReactDOM from "react-dom/client";
import { App } from "./App"; 


const AppElement = <App/> 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppElement, root); 