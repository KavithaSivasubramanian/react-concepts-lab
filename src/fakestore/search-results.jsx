import { useContext} from "react"
import { SearchContext } from "./search-products"

export function SearchResults({onAddToCart}){

    let context = useContext(SearchContext);

    function handleAddToCart(product){
        onAddToCart(product);
    }

    
    return(
        <div className="d-flex flex-wrap justify-content-center">
            {context.map((product) => (
                <div key={product.id} className="card m-2 p-2" style={{ width: '250px' }}>
                    <img src={product.image} className="card-img-top" height="150px"/>
                    <div className="card-header overflow-auto fw-bold" style={{ height: '120px'}}> 
                        {product.title}
                    </div>
                    <div className="card-body text-center">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="card-footer">
                        <button onClick={() => {handleAddToCart(product)}} className="btn btn-warning bi bi-cart4 w-100">Add to cart</button>
                    </div>
                </div>
            ))}
         </div>
        
    )
}