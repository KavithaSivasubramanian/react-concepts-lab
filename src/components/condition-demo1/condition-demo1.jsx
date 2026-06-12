import { useState } from "react";
import { CarouselDemo } from "../carousel-demo.jsx/carousel-demo";
import { FormDemo } from "../form-demo/form-demo";

export function ConditionalComponentDemo(){
    const[user,setUser] = useState();
    const[component,setComponent] = useState();

    function handleInputChange(e){
       setUser(e.target.value);
    }
    function handleSignInClick(){
       if(user==='Kavitha'){
         setComponent(<CarouselDemo/>);
       }
       else{
         setComponent(<FormDemo/>);
       }
    }

    return(
        <div className="container-fluid">
        <h3>Conditional Component Render</h3>
        <input type="text" onChange={handleInputChange}></input>
        <button className="btn bi bi-person-circle" onClick={handleSignInClick}>SignIn</button>
        <div>
            {
                component
            }
        </div>
        </div>
    )
}