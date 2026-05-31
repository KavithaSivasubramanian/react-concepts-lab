import { useEffect, useState } from "react";

export function TimerDemo(){
    const[today,setToday] = useState(new Date());
    
    
    useEffect(()=>{
        //console.log("Hello, page loaded!");
        const timer = setInterval(()=>{
            setToday(new Date());
        },1000)

        return ()=>{
            console.log("Timer stopped");
            clearInterval(timer);
        }
    },[])


    return(
        <div className="d-flex container-fluid justify-content-center p-4 ">
        <div className="fs-2 fw-bold">{today.toLocaleTimeString()}</div>
        </div>
    )
}