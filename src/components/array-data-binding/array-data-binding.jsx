import { useState, useEffect } from "react";
export function DataBinding()
{
    const [collection] = useState([1,2,3,4]);
    const [categories] = useState(['All','Fashion','Electronics','Home','Kids']);
    const [product] = useState({Name:'Samsung TV', Price:45000, ShippedTo:['Delhi', 'Hyd'], Rating:{Rate:4.3, Count:600}});


    return(
        <div className="container p-4">
            <h2>Array Data Binding</h2>
            <nav>
                {
                  categories.map((category,index)=><button className="btn btn-info mx-4" key={index}>{category}</button>)
                }

            </nav>
            <h3>Ordered List</h3>
            <ol>
                {
                  collection.map((num,index) => <li key={index}>{num*2}</li>)
                }
            </ol>
            <h3>UnOrdered List</h3>
            <ul className="list-unstyled">
                {
                  collection.map((num,index) => <li key={index}>{num*4}</li>)
                }
            </ul>
            <h3>Form Select</h3>
            <select className="form-select form-select-lg m-auto" size="3">
                {
                  categories.map((category,index) => <option key={index}>{category}</option>)
                }
            </select>

            <h3>Products Table</h3>
            <table className="table table-bordered">
                <thead  className="table table-dark" >
                    <tr>
                    {
                        Object.keys(product).map(key=><th key={key}>{key}</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {
                        Object.keys(product).map(key=><td key={key}>
                            {
                            Array.isArray(product[key]) ?
                            product[key].join(",") :
                            typeof product[key] === "object" ?
                            Object.entries(product[key]).map(([subkey,value])=>`${subkey}:${value}`).join(",") :
                            product[key]
                            }</td>)
                                                    
                    }
                    </tr>

                </tbody>
            </table>
           <h3>Product Details</h3>
           <dl>
            <dt>Name</dt>
            <dd>{product.Name}</dd>
            <dt>Price</dt>
            <dd>{product.Price.toLocaleString('en-in',{style:'currency', currency:'INR', minimumFractionDigits:0})}</dd>
            <dt>Shipped To</dt>
            <dd>
                <ul>
                    {
                        product.ShippedTo.map(city=> <li key={city}>{city}</li>)
                    }
                </ul>
            </dd>
            <dt>Ratings</dt>
            <dd>
                <span className="badge bg-success rounded p-2">{product.Rating.Rate} <span className="bi bi-star-fill"></span> </span> <span className="fw-bold text-secondary">{product.Rating.Count} ratings</span>
            </dd>
           </dl>

        </div>
    )
}