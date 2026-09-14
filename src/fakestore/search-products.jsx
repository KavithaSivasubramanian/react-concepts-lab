import axios from "axios";
import { SearchResults } from "./search-results"
import { createContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
   
export let SearchContext = createContext(null);

export function SearchProducts(){
 
     const [products, setProducts] = useState([{id:0,title:null,image:null,price:0,description:null,category:null,rating:{rate:0,count:0}}]);
     const [searchName, setSearchName] = useState();
     const [cartItems, setCartItems] = useState([]);
     const [cartCount, setCartCount] = useState(0);

     function handleSearchName(e){
        setSearchName(e.target.value);
       
    }

    function handleSearchClick(){
       LoadProducts(`https://fakestoreapi.com/products/category/${searchName}`);
    }

    function handleAddToCart(product){
        cartItems.push(product);
        setCartCount(cartItems.length);
    }   

    function LoadProducts(url){
    axios.get(url).then((response)=>{
        setProducts(response.data);
    })
    }

    useEffect(()=>{
        LoadProducts("https://fakestoreapi.com/products");
    },[])   
   
    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between m-3 p-3 bg-light rounded-3">
                <div className="fw-bold fs-3">Fakestore</div>
                <nav>
                 <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Products" onChange={handleSearchName}/>
                    <button className="bi bi-search btn btn-primary" onClick={handleSearchClick}></button>
                 </div>
                </nav>
                <div>
                <button data-bs-toggle="offcanvas" data-bs-target="#cart" className="btn btn-warning bi bi-cart4 position-relative" ><span className="rounded-circle badge bg-danger position-absolute">{cartCount}</span></button>
                </div>
                <div className="offcanvas offcanvas-end"  id="cart">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>  
                            </thead>
                            <tbody>
                                {cartItems.map((product)=>(     
                                        <tr>
                                            <td><img src={product.image} height="50px"/></td>
                                            <td>{product.title}</td>
                                            <td>${product.price.toFixed(2)}</td>                                    
                                        </tr>      
                                ))}
                            </tbody>
                        </table>               


                    </div>
                </div>
            </header>
            <section className="overflow-auto" style={{height:'600px'}}>
                <SearchContext value={products}>
                    <SearchResults onAddToCart={handleAddToCart} />
                </SearchContext>
            </section>
            
           
        </div>

    )
}