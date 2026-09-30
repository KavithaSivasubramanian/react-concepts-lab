import { useSearchParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function FakestoreResults(){
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([{id:0, title:null, description:null, category:null, price:0, rating:{rate:0, count:0}, image:null}]);
     

    useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${searchParams.get("category")}`).
    then(response=>{
        setProducts(response.data);
    })
    },[])
    return(
        <div className="container">
            <h3>
                Search Results
            </h3>
            <div className="my-2">
                {
                  products.map(product=>
                
                 
                    <img  className="mx-2 border border-1" src={product.image} key={product.id} height="200" width="200" />
                
                
                )
                }
                
            </div>
            <Link to={"/search"} className="btn btn-secondary">Back to Search</Link>

        </div>
    )
}