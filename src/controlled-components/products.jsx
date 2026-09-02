export function Products(props) {
  return (
    <div className="bg-light d-flex flex-wrap flex-row gap-2 "> {

    
    props.data.map((product) => 
      <div className="card" style={{width: '300px'}}>
       <div className="card-header" style={{height: '200px'}}  >
        <img src={product.image} className="card-img-top" height="180px" />
       </div>
       <div className="card-body">
        <h5 className="card-text">{product.title}</h5>
        <p className="card-text fw-bold">${product.price}</p>
        <p className="card-text"><small className="text-muted">{product.rating.rate}<span className="bi bi-star-fill"></span> ({product.rating.count} reviews)</small></p>                                              
       </div>
       <div className="card-footer text-center">
       <button className="btn btn-warning bi bi-cart4" style={{width: '100%'}}>Add to Cart</button>
     
       </div>
      </div>
    )}
    </div>
  )
}