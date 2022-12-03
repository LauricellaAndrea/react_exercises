import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function AppTwo(){
    
    return(
        <div>
        <Routes>
            <Route path="/" element={<Welcome name={'Johnnie'}/>}/>
        </Routes>
        </div>
    )
}