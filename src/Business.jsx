import React from "react";
import restaurantImage from "./assets/MogeTeeImage.png";
import './Business.css';

// Business component

function Business(props) {
    return (
      <div className="business">
        <img
        className="business-img"
        src={restaurantImage}
        alt={props.restaurantName}
        />
        <h3 className="title">{props.restaurantName}</h3>

        <div className="business-info">
          <div className="business-address">
            <p className="address">{props.address}</p>
            <p className="address">{props.city}</p>
            <p className="address">{props.state}, {props.zipcode}</p>
          </div>

          <div className="business-ratings">
            <p className="ratings">{props.category}</p>
            <p className="ratings">{props.rating} stars</p>
            <p className="ratings">{props.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
}

export default Business;