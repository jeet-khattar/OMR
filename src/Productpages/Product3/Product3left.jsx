import React from "react";
import "./Product3.css";
import IMAGE1 from "./IMAGE3/card-3-after.webp";
import IMAGE2 from './IMAGE3/card-3-before.webp'

const Product3left = () => {
  return (
    <div className="Product3left">
      <img src={IMAGE1} className="img1" alt="" />
      <img src={IMAGE2} className="img2" alt="" />
    </div>
  );
};

export default Product3left;
