import { useState } from "react"

export function FocusDemo(){
    const[code, setCode] = useState('');
    const[tip, setTip] = useState('');
    


    function handleChange(e){
        setCode(e.target.value);
    }
    function handleBlur(){
        setCode(code.toUpperCase());
        setTip('');
    }
    function handleFocus(){
    setTip('Eg: IFSC Code - SBIN000123, HDFC000123');
    }
    return(
        <div className="container-fluid p-4">
            <dl>
                <dt>
                    <dd>
                        <input type="text" value={code} onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur}/>
                    </dd>
                    <dd className="text-warning">{tip}</dd>
                </dt>
            </dl>

        </div>
    )
}