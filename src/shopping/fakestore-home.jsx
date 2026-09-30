import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function FakestoreHome() {
    const [categories, setCategories] = useState([]);
    
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                setCategories(response.data);
            })
           

    },[])
   return(
    <div className="mx-2" >
        
            <ul className="list-unstyled" >
            {
            categories.map((category) => 
               
                  
                     <li className="bg-dark p-3" style={{width: '20%'}} key={category}> <Link className="text-decoration-none text-white" to={`/products/${category}`} >{category.toUpperCase()}</Link></li>
                   
                
            )}
                    <li className="bg-dark p-3" style={{width: '20%'}} > <Link className="text-decoration-none text-white" to={"search"} >SEARCH</Link></li>

            </ul>
            
    </div>
   )
}