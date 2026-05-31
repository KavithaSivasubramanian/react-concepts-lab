import { useState } from "react"

export function MouseMove(){
    
    const[styleObj, setStyleObj] = useState({});
    
    function handleMouseMove(e){
    setStyleObj({
    position:'fixed',
    left: e.clientX +'px',
    top : e.clientY +'px'
    })
    }

    return(
        <div className="p-4" on onMouseMove={handleMouseMove}>
        <div style={{height:'1000px'}}>
            <p className="fs-4">Mouse move pointer to test</p>
        </div>
        <img src="flag.gif" width="100" height="100" style={styleObj} />
        </div>
    )
}