// eslint-disable-next-line no-unused-vars
import React from 'react'

function Footer(){
  return <>
    <footer className="py-4 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li><i className="fas fa-user"></i> PRAVEENKUMAR &copy;2023</li>
              <li>
                <i className="fab fa-github"></i>
                <a href= "https://github.com/FinixDeveloper" target="_blank" rel="noreferrer"> GitHub</a>
              </li>
              <li>
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/praveen-kumar-84989128b" target="_blank" rel="noreferrer"> LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="col-md-8 text-end">
            <ul className="list-unstyled">
              <li>
                <i className="far fa-envelope"></i>
                <a href="mailto:praveenkumarfinix@gmail.com"> praveenkumarfinix@gmail.com</a>
              </li>
              <li><i className="fas fa-phone"></i> +91 6383536088</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer

