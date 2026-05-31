import { useState } from "react"
import './mouse-event.css';

export function MouseEvent(){
    const[animation,setAnimation] = useState({animationName:'Spin',animationDuration:'5s',animationIterationCount:'infinite',animationTimingFunction:'Linear'})
    
    function handleMouseUp(){
    setAnimation({animationName:'Spin',animationDuration:'5s',animationIterationCount:'infinite',animationTimingFunction:'Linear'});
    }
    function handleMouseDown(){
    setAnimation({animationName:'Spin',animationDuration:'1s',animationIterationCount:'infinite',animationTimingFunction:'Linear'});
    }
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} src="react.svg" style={animation} height="100px" width="100px"/>
        </div>
    )
}