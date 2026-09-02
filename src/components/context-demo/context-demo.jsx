import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

let UserContext = createContext(null);

export function Level1(){
    let context = useContext(UserContext);
    return(
        <div className="m-4 p-4 bg-success text-white">
            <h4>LEVEL-1 - {context.name}</h4>
            <Level2></Level2>
        </div>
    )
}

export function Level2(){
    let context = useContext(UserContext);
    return(
        <div className="m-4 p-4 bg-info text-white">
            <h4>LEVEL-2 - {context.age}</h4>
        </div>
    )
}

export function ContextDemo(){
    
    const[user,setUser] = useState({name:'Selva',age:30,city:'Chennai'});
    return(
        <div className="m-4 p-4 bg-warning text-white">
            <h4>PARENT</h4>
            <UserContext value={user}>
                <Level1></Level1>
            </UserContext>
        </div>
    )
}