import React from "react";
import { useState } from "react";



export function UseForms(){

    const [forms, setForms] = useState({
         username: '',
         password: '',
        });

        const {username, password} = forms;

        const handleInputChange = (e) => {
            setForms({...UseForms, [e.target.name]: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(forms)
           
        }

        return(
            <>
            <form onSubmit={handleSubmit}>
            <input
             id="username"
             type="username"
             value={username}
             onChange={handleInputChange}
            ></input>
            <input
             id="password" 
             type='passowrd'
             value={password}
             onChange={handleInputChange} 
             ></input>
            <button type="submit">Submit</button>
            </form>
          
            </>
        )


    }

    
   



