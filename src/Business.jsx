import React from "react";
import restaurantImage from "./assets/MogeTeeImage.png";

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
        src={restaurantImage}
        alt={restaurantName}
        />
        <h2>{restaurantName}</h2>

        <div className="business-address">
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}, {zipcode}</p>
        </div>

        <div className="business-rating">
          <p>{category}</p>
          <p>{rating} stars</p>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    );
}

export default Business;