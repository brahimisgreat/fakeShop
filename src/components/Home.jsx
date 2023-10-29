import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-white border-0">
        <img src={require('../assets/pic.jpg')} className="card-img" alt="Background" height='650px' />
        <div className="card-img-overlay d-flex flex-column justify-content-center
        ">
        <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OT ALL THE TRENDS
          </p>
         

        </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
