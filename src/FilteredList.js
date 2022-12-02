import { useMemo } from "react";

export function FilteredList({peopleList}){
    
    const adultList = useMemo(()=>{
        return peopleList.filter(item => { return item.age > 18 
        })
    }, [peopleList])

    console.log(adultList);

    return(
        <>
            {adultList.map(item=>{return <div><h4>{item.name}</h4><p>Age: {item.age} - ID: {item.id}</p></div>})}
        </>
    )
}
