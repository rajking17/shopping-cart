import React,{useState} from 'react'

function Card({cart,setCart,product}) {
  let [toggle,setToggle] = useState(true);
  return <>
    <div className="col mb-5">
      {/* <h1>{cart}</h1> */}
          <div className="card h-100">
              {
                product.isSale ? 
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>:
                <div></div>
              }                            
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />                            
              <div className="card-body p-4">
                  <div className="text-center">                                    
                      <h5 className="fw-bolder">{product.name}</h5> 
                      {
                        product.isRating ? 
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                      </div>:<div></div>
                      }                                
                      {
                        product.isOldPrice ? <span className="text-muted text-decoration-line-through m-1 d-inline-block">{ product.oldPrice }</span>:<span></span>
                      }
                      { product.price }
                  </div>
              </div>                            
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  {
                    toggle?
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=> {setCart(cart+1);setToggle(!toggle)}}>Add to cart</button></div>:
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=> {setCart(cart-1);setToggle(!toggle)}}>Remove from cart</button></div>
                  }
              </div>
          </div>
      </div>
    </>
}

export default Card