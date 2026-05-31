import axios from "axios";
import { useEffect, useState } from "react"
import './event-binding.css';

export function EventBinding(){
    // function handleButtonClick(e){
    //     console.log(`Button value=${e.target.value}\n Button id =${e.target.id}\n Button class=${e.target.className}\n X position = ${e.clientX}`);
    // }

    // function handleButtonClick(id,name,cities,e){
    //     console.log(`id=${id}\nname=${name}\ncities=${cities}\nButton value=${e.target.value}\n Button id =${e.target.id}\n Button class=${e.target.className}\n X position = ${e.clientX}`);

    // }

    // const[user,setUser] = useState('John');
    // function handleNameChange(e){
    //     setUser(e.target.value);
    // }

        const[mobiles,setMobiles] = useState([{img_src:null}]);
        const[preview,setPreview] = useState("iPhone Black.jpg");
        function LoadMobiles(){
                axios.get("mobiles.json")
                .then(response=>{
                    setMobiles(response.data);
                })
            }

        useEffect(()=>{
             LoadMobiles();
            },[])

        function handlePreview(e){
            setPreview(e.target.src)
        }

    return(
        <div className="p-4">
        {/* <button value = "Insert" id = "btn-insert" className="btn btn-primary" onClick={handleButtonClick}>Insert</button> */}
        
        {/* <button value = "Insert" id = "btn-insert" className="btn btn-primary" onClick={(event)=>handleButtonClick(1,'TV',['Chennai','Hyd'], event)}>Insert</button> */}
       
        {/* <input type="text" value={user} onChange={handleNameChange}/> */}
        {/* <p>{user}</p> */}

        <div className="row">
            <div className="col-2">
            {
                mobiles.map(mobile=>
                   <div className="my-4" key={mobile}> 
                      <img className="border-style" src={mobile.img_src} width="50" height="50" onMouseOver={handlePreview}></img>
                   </div>
            )
            }
             
            </div>
             <div className="col-10">
                <div>
                    <img src={preview} width="400" height="500"></img>
                </div>
            </div>
        </div>
        </div>
    )
}