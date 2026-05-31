import { useEffect, useState } from "react"
import axios from "axios"

export function KeyDemo(){
    const[users,setUsers] = useState([{user_id:null}]);
    const[msg,setMsg] = useState('');
    const[errorClass,setErrorClass] = useState('');
    const[toggleClass,setToggleClass] = useState('d-none');

    function LoadUsers(){
        axios.get("users.json").then(response=>{setUsers(response.data)})
    }
    
    useEffect(()=>{
        LoadUsers();
    },[])
    
    function VerifyUser(e){
        for(var user of users){
            if(e.target.value === user.user_id){
            setMsg("User id already taken, Try Another");
            setErrorClass("text-danger");
            break;
            }
            else{
            setMsg("User id is available");
            setErrorClass("text-success");
            }
        }
    }

    function VerifyCaps(e){
        if(e.which >= 65 && e.which <=90 )
            setToggleClass("d-block");
        else
            setToggleClass("d-none");
    }   
    return(
        <div className="p-4">
          <h3>Registration</h3>
          <div>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUser}/></dd>
                <dd className={errorClass}>{msg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyUp={VerifyCaps}/></dd>
                <dd className={`bi bi-exclamation-triangle text-warning ${toggleClass}`}>Warning:Caps On</dd>
            </dl>
          </div>
        </div>
    )
}