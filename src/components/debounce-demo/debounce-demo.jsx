import {useRef, useState} from "react"
export function DebounceDemo(){
    const[msg,setMsg] = useState('');
    let thread = useRef(null);
    function Level1(){
        setMsg("Volume upto 20%");
    }
    function Level2(){
        setMsg("Volume upto 60%");
    }
    function Level3(){
        setMsg("Volume Full");
    }
    function handleClick(){
        setTimeout(Level1, 2000);
      thread.current = setTimeout(Level2, 6000);
        setTimeout(Level3, 10000);
    }

    function handleCancelClick(){
          clearTimeout(thread.current);
    }
    return(
        <div className="container p-4">
            <dl>
                <dt className="fs-4 fw-bold"> Volume Up</dt>
                    <dd className="btn btn-primary bi bi-volume-up" onClick={handleClick} ></dd><dd className="btn btn-warning" onClick={handleCancelClick}>Cancel Level2</dd>
                    <dd className="fs-7 fw-bold">{msg}</dd>
                    
            </dl>
        </div>
    )
}