import React from "react";
import restaurantImage from "./assets/MogeTeeImage.png";
import './Business.css';

function Business() {
    const restaurantName = "Moge Tee - Tampa";
    const address = "2850 University Square Dr";
    const city = "Tampa";
    const state = "FL";
    const zipcode = "33612";
    const category = "Bubble tea";
    const rating = 4.7;
    const reviewCount = 245;

    return (
      <div className="business">
        <img
        className="business-img"
        src={restaurantImage}
        alt={restaurantName}
        />
        <h3 className="title">{restaurantName}</h3>

        <div className="business-info">
          <div className="business-address">
            <p className="address">{address}</p>
            <p className="address">{city}</p>
            <p className="address">{state}, {zipcode}</p>
          </div>

          <div className="business-ratings">
            <p className="ratings">{category}</p>
            <p className="ratings">{rating} stars</p>
            <p className="ratings">{reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
}

export default Business;