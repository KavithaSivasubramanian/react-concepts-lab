import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



export function FakestoreProducts() {
    const param = useParams();
    const[products, setProducts] = useState([{id:0, title:null, description:null, category:null, price:0, rating:{rate:0, count:0}, image:null}]);
     
    useEffect(()=>{
     axios.get(`https://fakestoreapi.com/products/category/${param.category}`)
     .then(response => {
        
         setProducts(response.data);
     })
     .catch(error => {
         console.error("Error fetching products:", error);
     });                        
    },[])
   return(
    <div className="container-fluid">
    <div className="row">
    <div className="mx-2 col d-flex flex-row flex-wrap" >
 
        {
            products.map((product) =>
            <div className="card p-3" key={product.id} style={{width: '250px'}}>
             <div className="card-header"><img src={product.image} alt={product.title} className="card-img-top" height="200" /></div>
             <div className="card-body overflow-auto">{product.title}</div>
             <div className="card-footer">
                <Link to={`details/${product.id}`} className="btn btn-primary"><span className="bi bi-info-circle"></span>View Details</Link>
             </div>

            </div>
            )
        } 
    </div>
    <div className="col">
       
     <Outlet> </Outlet>
    </div>
    </div>    
       <Link to="/" className="btn btn-secondary mx-2 my-2">Back to Home</Link> 
    </div>
    
   )
}