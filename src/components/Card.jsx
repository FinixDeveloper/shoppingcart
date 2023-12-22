// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

// eslint-disable-next-line react/prop-types
function Card({count,setcount}) {
  let [toggle,setToggle] = useState(true)
  return <><div className="col mb-5">
      <div className="card h-100">
          <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="poster1" width="50" height="170"/>
          <div className="card-body p-4">
              <div className="text-center">
              <h5 className="fw-bolder">Sale Item</h5>
                  <span className="text-muted text-decoration-line-through">$50.00</span>
                  $25.00
              </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                  {toggle ? <button className="btn btn-outline-dark mt-auto" onClick={() => {
                      setcount(count + 1)
                      setToggle(false)
                  } }>
                      Add to cart
                  </button> :
                      <button className="btn btn-outline-dark mt-auto" onClick={() => {
                          setcount(count - 1)
                          setToggle(true)
                      } }>
                          Remove from cart
                      </button>}
              </div>
          </div>
      </div>
  </div>
      </>

}

export default Card