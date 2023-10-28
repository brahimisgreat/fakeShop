import React from "react";

export default function Home() {
  return (
    <div className="hero">
      <div class="card text-white border-0">
        <img src={require('../assets/pic.jpg')} class="card-img" alt="Background" height='650px' />
        <div class="card-img-overlay d-flex flex-column justify-content-center
        ">
        <div className="container">
          <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p class="card-text lead fs-2">
            CHECK OT ALL THE TRENDS
          </p>
         

        </div>
        </div>
      </div>
    </div>
  );
}
