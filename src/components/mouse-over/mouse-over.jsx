import { useState } from "react";

export function MouseOver(){

    const colors = ["yellow", "red", "pink", "purple", "orange"]; // color options
    const [selectedColor,setSelectedColorObj] = useState(""); 
    function handleMouseOver(color){
        setSelectedColorObj(color+".png");
    }
    return(
        
    <div style={{ padding: "20px" }}>
      <h3 style={{ display: "inline-block", paddingRight: "50px" }}>Choose a color:</h3>
      <div style={{ display: "inline-flex", gap: "20px", verticalAlign: "middle" }}>
        {
        colors.map((color) => (
             <div key={color} style={{backgroundColor: color, width: "100px", height: "100px" }} onMouseOver={()=>handleMouseOver(color)} />
          ))
        }
      </div>
      <div style={{display: "flex", marginLeft: "400px", marginTop:"20px"}}>
       <img src={selectedColor} width="300px" height="300px"/>
      </div>
      
    </div>
    )
}