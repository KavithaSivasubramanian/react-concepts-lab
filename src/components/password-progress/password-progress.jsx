import { useState } from "react"

export function PasswordProgress(){
   
    const[password,setPassword] = useState('');
    const[progressClass,setProgressClass] = useState('');
    const[progressWidth,setProgressWidth] = useState({width:''});

    function VerifyPassword(e){
        if(e.target.value.match(/^(?=.*[A-Z])\w{4,10}$/)){
            setPassword('Strong password');
            setProgressClass('progress-bar bg-success text-white progress-bar-animated progress-bar-striped');
            setProgressWidth({width:"100%"});
        }
            else if(e.target.value.length < 4){
                 setPassword('Poor password');
                  setProgressClass('progress-bar bg-danger text-white progress-bar-animated progress-bar-striped');
                  setProgressWidth({width:"30%"});
            }
                 else{
                    setPassword('Weak password');
                    setProgressClass('progress-bar bg-warning text-white progress-bar-animated progress-bar-striped');
                    setProgressWidth({width:"70%"});
                }
            
    }
    
   
    return(
        <div className="container-fluid p-3">
         <dl className="w-25">
            <dt>Password</dt>
            <dd><input type="password" onKeyUp={VerifyPassword} className="form-control" /></dd>
            <dd className="progress">
                <div className={progressClass} style={progressWidth}>{password}</div>
            </dd>
            
         </dl>
        </div>
    )
}