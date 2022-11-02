// import { Hello } from "./Hello";
import React from 'react';
import ReactDOM from "react-dom";
import { App } from "./App"; //App conterrò anche le caratteristiche di hello.js

const AppElement = <App/> // Il compomente viene racchiuso in una variabile
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppElement, root); // il primo parametro fa riferimento di cosa fare il render, mentre il secondo la locazione di dove farlo