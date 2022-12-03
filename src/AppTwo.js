// import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"

export function AppTwo(){
    
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome name={'Johnnie'}/>}/>
            <Route
            path="/counter" element={<Counter count={0} interval={1000} amount={5} />}
          />
        </Routes>
        <Link to = "/counter">Show Counter</Link>
        </BrowserRouter>
    )
}