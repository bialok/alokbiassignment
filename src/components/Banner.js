import React from "react";
import './Banner.css';

function Banner (){
  return (
    <>
      <div className="banner">
        <div className="image">
          <img src="https://binaryinformatics.co/assets/banner.png" alt="" className="img"/>
          <div className="banner-text">
            <h1 className="banner-heading">
              We Power <span>Data Annotation</span> Success
            </h1>
            <br></br>
            <p className="banner-para">
              Easily Build Efficient Reliable Team To Drive Accuracy In Your AI
              Models
            </p>
            <br></br>
            <br></br>
            <button className="btn banner-btn">
              Try free pilot for 15 Days
            </button>
            <br></br>
            <br></br>
            <p class="exper-text">
              <span>
                <img className="banner-img" src="https://binaryinformatics.co/assets/light-bulb@3x.png" alt=""/>
              </span>
              Experience the Journey : 3 Annotators . 15 Days . Cancel Anytime
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

