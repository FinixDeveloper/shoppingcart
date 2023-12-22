// eslint-disable-next-line no-unused-vars
import React from 'react'

function header() {
  return (
    <header>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://i.postimg.cc/0yZDYnbN/photo-2023-12-21-12-17-55.jpg" className="d-block w-100" alt="image1" width="200" height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/T18DdHHt/photo-2023-12-21-12-19-13.jpg" className="d-block w-100" alt="image2" width="200" height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/HLhMKL0D/photo-2023-12-21-12-19-18.jpg" className="d-block w-100" alt="image3" width="200" height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.postimg.cc/zXCnB8NK/photo-2023-12-21-12-19-23.jpg" className="d-block w-100" alt="image4" width="200" height="400"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/g0JRNhZH/photo-2023-12-21-12-19-28.jpg" className="d-block w-100" alt="image5" width="200" height="400"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</header>
  )
}

export default header