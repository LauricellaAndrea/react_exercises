import React, {useEffect, useState} from "react";

export function GithubUser({username}) {
    const [user, setUser] = useState()


    useEffect(()=>{
        fetch('https://api.github.com/users/${username}')
        .then((response) => response.json)
        .then((fetchuser) => setUser(fetchuser))
    }, [username])


    return (
        <div>
            <h5>Username {user}</h5>
        </div>
    )

}