import { useEffect, useState, useRef } from "react"
import axios from "axios";
export function CarouselDemo(){
    
    const[product,setProduct]=useState({"id": 0,
                                        "title": null,
                                        "price": 0,
                                        "description": null,
                                        "category": null,
                                        "image": null,
                                        "rating": {
                                                   "rate": 0,
                                                   "count": 0
                                                  }
                                       });

    let productId = useRef(1);
    let thread = useRef(null);

    function LoadProductManual(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
             .then(response=>{
                    setProduct(response.data);
                })

    }
    function LoadProductAuto(){
        if(productId.current >= 20){
           productId.current = 1;
        }
            else {
            productId.current = productId.current + 1;
            }
            axios.get(`https://fakestoreapi.com/products/${productId.current}`)
                .then(response=>{
                        setProduct(response.data);
                    })
            
        

    }
    function PlayClick(){
        if (thread.current) {
            clearInterval(thread.current);
        }
     thread.current=setInterval(LoadProductAuto,1000);
    }
    function PauseClick(){
     clearInterval(thread.current);
    }
    function PreviousClick(){
        if(productId.current > 1){
        productId.current = productId.current - 1;
        LoadProductManual(productId.current);
        }
    }

    function NextClick(){
        if(productId.current < 20){
        productId.current = productId.current + 1;
        LoadProductManual(productId.current);
        }
    }

    function handleSeekBar(e){
     productId.current = parseInt(e.target.value);
     LoadProductManual(productId.current);
    }

    useEffect(()=>{
       LoadProductManual(1);
    },[])
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-4 w-50" >
              <div className="card-header p-2 fs-5 text-center ">{product.title}</div>
              <div className="card-body row">
                <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-dark bi bi-chevron-left" onClick={PreviousClick}></button>
                </div>
                <div className="col-10 position-relative">
                 <div className="position-absolute fs-6 rounded-circle end-0 top-0 badge p-3 bg-danger text-white">{product.price.toLocaleString('en-us',{style:"currency",currency:"USD"})}</div>
                 <img width="100%" height="350"  src={product.image}></img>
                 <div>
                  <input type="range" min={1} max={20} className="form-range" value={productId.current} onChange={handleSeekBar}></input>
                 </div>
                </div>
                 <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-dark bi bi-chevron-right" onClick={NextClick}></button>
                </div>
              </div>
              <div className="card-footer text-center ">
                <button className="btn btn-outline-success bi bi-play me-2" onClick={PlayClick}></button>
                <button className="btn btn-outline-danger bi bi-pause"onClick={PauseClick}></button>
              </div>
            </div>
        </div>
    )
}