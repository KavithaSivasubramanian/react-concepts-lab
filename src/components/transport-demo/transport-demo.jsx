import { useState } from "react";

export function ChildComponent({onChildComponentClickEvent}){
    function handleClick(){
        const data="hello, from child";
        onChildComponentClickEvent(data);
    }
    return(
        <div className="m-4 p-4 bg-light text-dark">
            <h4>Child</h4>
            <button onClick={handleClick} className="btn btn-primary">send data to parent</button>
        </div>

    )
}

export function TransportDemo(){
    const [data, setData] = useState();

    function handleChildClick(e){
        setData(e);
    }
    return(
        <div className="m-4 p-4 bg-dark text-white">
            <h4>Parent</h4>
            <p>{data}</p>
            <ChildComponent onChildComponentClickEvent={handleChildClick}/>
        </div>

    )
}