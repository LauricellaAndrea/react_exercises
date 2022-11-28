import React from "react";


export function Sum({numbers = []}) {
    let somma = 0;
    numbers.forEach(item => somma+=item)
    return (
        <h1> La somma è : {somma}</h1>
    )
}