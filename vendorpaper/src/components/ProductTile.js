import React from "react";
import "./ProductTile.css";
import pic from "../assets/brand.jpg";

function ProductTile() {
    return (
    <div className="product-tile-box">
        <div className="product-tile-pic">
            <img src={pic} alt="pic" />
        </div>
        <div className="product-tile-name">Product Name</div>
        <div className="product-tile-price">Rs. 1000/-</div>
    </div>
    );
}

export default ProductTile;