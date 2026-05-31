import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function Flipkart(){
    const [product,setProduct] = useState({title:null,price:0,image:null,rating:{rate:0,ratings:0,reviews:0},offers:[]});
    function LoadProduct(){
        /* var http = new XMLHttpRequest();
        http.open("get","product.json",true);
        http.send();
        http.onreadystatechange = function (){
          if(http.readyState===4){
            setProduct(JSON.parse(http.responseText));
          }
        } */
        /* fetch("product.json")
       .then(response=>{
       return response.json();
       })
       .then(product=>{
        setProduct(product);
       })  */

        axios.get("product.json")
        .then(response=>{
            setProduct(response.data);
        })

    }
    useEffect(()=>{
     LoadProduct();
    },[])
    return(
        <div>
            <div className="row mt-4">
                <div className="col-3">
                  <img src={product.image} width="100%"></img>
                </div>
                <div className="col-9">
                    <div className="fs-5">{product.title}</div>
                    <div className="mt-2"><span className="badge bg-success text-white rounded">{product.rating.rate} <span className="bi bi-star-fill"></span></span>
                    <span className="mx-2 text-secondary fw-bold">{product.rating.ratings.toLocaleString('en-in')} Ratings & {product.rating.reviews.toLocaleString('en-in')} Reviews </span>
                    </div>
                    <div className="my-2 fw-bold fs-1">{product.price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0})}</div>
                    <div className="mt-3">
                        <h6>Available Offers</h6>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=>
                                    <li key={offer} className="my-4 bi bi-tag-fill text-success"><span className="mx-2 text-secondary">{offer}</span></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}


