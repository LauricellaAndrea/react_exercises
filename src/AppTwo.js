// import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"
import {ShowGitHubUser} from "./ShowGitHubUser"
import { GitHubUsersList } from "./GithubUserList";


export function AppTwo(){
    
    return(
        <BrowserRouter>
        <div>
            <h3>I miei Link</h3>
            <p> 
            <Link to={"/"}>Home</Link>
            <Link to = "/counter">Show Counter</Link>
            <Link to = "*">Coming soon </Link>
            <Link to = "/users">list </Link>
            </p>
        </div>

        <Routes>
            <Route path="/" element={<Welcome name={'Johnnie'}/>}/>
            <Route path="/counter" element={<Counter count={0} interval={1000} amount={5} />} />
            <Route path="/users/username" element={<ShowGitHubUser/>}/>
            <Route path="*" element={<h3>Page not found</h3>}/>
            <Route path="/users" element={<GitHubUsersList/>} >
                <Route path=":username" element={<ShowGitHubUser/>}/>
                <Route index element={<p>Aggiungi utente e seleziona il tuo preferito</p>} />
            </Route>
        </Routes>
    
        </BrowserRouter>
    )
}