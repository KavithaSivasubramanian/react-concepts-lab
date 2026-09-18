import { useEffect, useState } from "react";

export function Login(){
    
    useEffect(()=>{
        console.log("Login Component Mounted"); 
        return()=>{
            console.log("Login Component Unmounted");
        }           
    },[])
    return(
        <div>
            <h2>Login Component</h2>
        </div>
    )
}  

export function Register(){ 
    useEffect(()=>{ 
            console.log("Register Component Mounted");
            return()=>{
                console.log("Register Component Unmounted");
            }   
        },[])  
        return(
            <div>
                <h2>Register Component</h2>
            </div>
        )
}     

export function LifecycleDemo(){
    const [component, setComponent] = useState();

    function handleLoginClick(){
        setComponent(<Login/>);
    }
    function handleRegisterClick(){
        setComponent(<Register/>);
    }

    return(
        <div className="container text-center">
            <h1>Lifecycle Demo</h1>
            <button onClick={handleLoginClick} className="btn btn-primary mx-2">
                Login
            </button>
            <button onClick={handleRegisterClick} className="btn btn-primary mx-2">
                Register
            </button>
            <hr/>
            {
                component
            }
        </div>
    )
}