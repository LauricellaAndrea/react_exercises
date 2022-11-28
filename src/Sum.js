import React from "react";


export function Sum({numbers = [10, 2, 5]}) {
    let somma = 0;
    numbers.forEach(item => somma+=item)
    return (
        <h1> La somma è : {somma}</h1>
    )
}