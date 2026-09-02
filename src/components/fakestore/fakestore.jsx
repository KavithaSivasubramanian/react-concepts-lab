import { useState, useEffect } from "react";
import axios from "axios";
import { Products } from "../../controlled-components/products";
export function Fakestore() {

  
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
 
  const [searchTerm, setSearchTerm] = useState('');
  const [component, setComponent] = useState();

  function handleSelectChange(e) {
    setSelectedCategory(e.target.value);
  }

  function LoadProducts(url) {
    if (selectedCategory === 'All') {
    // Fetch all products from the Fakestore API  
    axios.get(url)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
    }else
    {
      // Fetch products for the selected category
      axios.get(`${url}/category/${selectedCategory}`)
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    }
  }

  function LoadCategories() {
    // Fetch categories from the Fakestore API
    axios.get('https://fakestoreapi.com/products/categories') 
      .then(response => {
        response.data.unshift('All'); // Add "All" option at the beginning of the categories list
        setCategories(response.data);
      })     
      .catch(error => console.error('Error fetching categories:', error));
    }
    
  useEffect(() => {
    LoadProducts('https://fakestoreapi.com/products');
  }, [selectedCategory] ); 

  useEffect(() => {
    LoadCategories();
  }, [] ); 
 
  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearchButton(){
    // Filter products based on the search term
    if(categories.includes(searchTerm)){
      setComponent(undefined);
      setSelectedCategory(searchTerm);
    }else{
      setComponent(<div className="text-center fs-3 fw-bold text-danger">No products found for "{searchTerm}"</div>); 
    }
  } 

  return (
    <div className="container-fluid p-2">
      <header>
        <nav className="d-flex justify-content-between p-3 bg-light">
        <div className="fs-4 fw-bold">Fakestore</div>
        <div className="input-group w-25">
            <input type="text" className="form-control" placeholder="Search"  onChange={handleSearchChange}/>
            <button className="btn btn-warning bi bi-search" type="button" onClick={handleSearchButton}></button> 
        </div>
        <div>
            <button className="btn btn-warning bi bi-cart4 position-relative"><span className="badge rounded rounded-circle bg-danger text-white position-absolute">0</span></button>
        </div>
        </nav>
     </header>
     <section>
      <div className="row">
        <div className="col-2 p-3 bg-secondary-subtle">
           <label htmlFor="categories">Categories</label>
            
          <select className="fw-bold" value={selectedCategory} onChange={handleSelectChange}>
           {
              categories.map((category, index) => (
                <option key={index} value={category}>{category.toUpperCase()}</option>
              ))  
            }
            
            
          </select>
          
        </div>
        <div className="col-10">
          {
            component ? component : <Products data={products} />
          }
          
        </div>  
      </div>
        
     </section>

  </div>
  )
}