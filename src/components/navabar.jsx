import React from "react";
import { Link } from "react-router-dom";

export default function Navabar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            eStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              
             
            </ul>
            <div className="buttons">
                <Link><button className="btn btn-outline-dark"><i className="fa fa-sign-in me-2"></i>Login</button></Link>
                <Link><button className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-2"></i>Register</button></Link>
                <Link><button className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-2"></i>Cart(0)</button></Link>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
