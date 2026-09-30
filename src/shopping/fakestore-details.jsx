import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export function FakestoreDetails() {
    const  params  = useParams();
    const [productDetails, setProductDetails] = useState({id:0, title:null, description:null, category:null, price:0, rating:{rate:0, count:0}, image:null});

    useEffect(() => {
        console.log(params.id);
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                setProductDetails(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [params.id]);

    

    return (
        <div className="container-fluid">
            
                <h3>Product Details</h3>
                
                <div className="card p-3 border-2" style={{width: '400px'}}>
                    <div className="card-header"><img src={productDetails.image} alt={productDetails.title} className="card-img-top" height="300" /></div>
                    <div className="card-body overflow-auto fs-3 fw-bold">{productDetails.title}
                    <div className="card-text fs-6">{productDetails.description}</div>
                    <div className="card-text fs-6">Category: {productDetails.category}</div>
                    <div className="card-text fs-6">Rating: <span className="bi bi-star-fill text-success">{productDetails.rating.rate}</span> ({productDetails.rating.count} reviews)</div>
                    </div>
                    <div className="card-footer text-center">${productDetails.price.toFixed(2)}</div>   
                </div>
                
        </div>
   )
}