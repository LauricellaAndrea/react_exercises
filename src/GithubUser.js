
// import React, { useEffect, useState } from "react";

// export function GitHubUser({ username }) {
//   const [user, setUser] = useState(null);
//   const string = "In attesa del server...";

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => response.json())
//       .then((fetcheduser) => setUser(fetcheduser));
//   }, [username]);

//   return (
//     <div>
//       <h1>{user ? user.login : string}</h1>
//     </div>
//   );
// }










import { useGithubUser } from "./useGithubUser";

export function GitHubUser({username}){

    const {data, error, loading} = useGithubUser(username)

    // function handleFetch(){
    //     fetchData(username)
    // }

    return(
        <div>
            {/* <button onClick={handleFetch}>Fetch user data</button> */}

            {loading && <div>Loading..</div>}
            
            { !loading && error && <h3>User not found</h3>}
            
            { !loading && data && <div>
            <h3>{data.login}'s Profile informations</h3>
            <p><strong>Profile real name:</strong> {data.name ? data.name: 'this user has no real name'}</p>
            <p><strong>Profile bio:</strong> {data.bio ? data.bio : 'this user has no bio'}</p>
            </div>}
        </div>
    )
}















// import React from "react";
// import { useGithubUser } from "./useGithubUser";

// export  function GithubUser({ username }) {
  
//   const {user, loading, error} = useGithubUser(username)


//   // //recupero dati dall'utente 
//   // useEffect(() => {
//   //   onFetch(username);
//   // }, [username]);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error</p>}
//       {user && 
//       <div>
//         <h1>{`Name: ${user.name}`}</h1>
//         <h1>{`URL: ${user.url}`}</h1>
//       </div>

//       }
//     </div>
//   )
// }