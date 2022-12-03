import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

// import { GitHubUser } from "./GitHubUser"
// import { ShowGitHubUser } from "./ShowGitHubUser"

export function GitHubUsersList(){
    const [usersList, setUsersList] = useState([])


    const [username, setUsername] = useState('')
    function inputChange(event){
        setUsername(()=>{return event.target.value})
    }

    function userListPush(){
        setUsersList((prev)=>{return [...prev, username]})
        setUsername(()=>{return ''})
    }

    return(
        <div>
            <input name={'username'} onChange={inputChange} value={username}/>
            <button onClick={userListPush}>Add user</button>
            <ul className="list-none pl-0 ">
                {usersList.map((item,index) => {
                    return (
                    <li key={item+index} className="mb-1"><Link className="no-underline text-red-600" to={`/users/${item}`}>{item}</Link></li>
                    )
                })}
            </ul>
            <Outlet/>
        </div>
    )
}




// import React, { useEffect, useState } from "react";
// import { GithubUser } from "./GithubUser";

// export function GithubUserList() {
//   const [user, setUser] = useState("");
//   const [input, setInput] = useState("");
//   const [username, setUsername] = useState([]);

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   const array = [];
//   const handleSubmit = (e) => {
//     array.push(input);
//     setUser(array);
//     setInput("");
//   };

//   useEffect(() => {
//     if (user !== "") {
//       array.push(user);
//       setUsername(username.concat(array));
//     }
//   }, [user]);

//   const list = username.map((user) => {
//     if (user !== null && user !== undefined) {
//       return (
//         <GithubUser user={user} key={user.toString()}/>
//       );
//     }
//   });

//   return (
//     <>
//       <input type="text" onChange={handleChange} value={input}></input>
//       <button onClick={handleSubmit}>Search</button>
//       <div>{list}</div>
//     </>
//   );
// }