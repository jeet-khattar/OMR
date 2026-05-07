import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Leftlinks = () => {
  return (
    <div className="leftlink">
      <ul>
        <li>
          <Link to="/PerfumeOil">Perfume Oil</Link>
        </li>
        <li>Scented Candle</li>
        <li>
          <Link to="/Collection">Collection</Link>
        </li>
        <li>Accessories</li>
      </ul>
    </div>
  );
};

export default Leftlinks;
