import { useState } from "react"

export function PasswordStrength(){
   
    const[password,setPassword] = useState('');
    const[meterValue,setMeterValue] = useState(1);

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setPassword('Strong password');
            setMeterValue(100);
        }
            else if(e.target.value.length < 4){
                 setPassword('Poor password');
                  setMeterValue(30);
            }
                 else{
                    setPassword('Weak password');
                    setMeterValue(70);
                }
            
    }
    
   
    return(
        <div className="container-fluid p-3">
         <dl className="w-25">
            <dt>Password</dt>
            <dd><input type="password" onKeyUp={VerifyPassword} className="form-control" /></dd>
            <dd><meter min="1" max="100" value={meterValue} className="w-100"></meter></dd>
            <dd>{password}</dd>
         </dl>
        </div>
    )
}