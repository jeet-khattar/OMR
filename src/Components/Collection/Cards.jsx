import "./Collection.css";
import Photo1 from "../Photos/card-1-after.jpg";
import Photo2 from "../Photos/card-2-after.webp";
import Photo3 from "../Photos/card-3-after.webp";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <Link to="/product1">
            <div className="imgbox">
              <img src={Photo1} alt="" />
            </div>

            <div className="text-area">
              <h2>Perfume</h2>
              <h1>INTRO X FLUID SET</h1>
              <p>$95.20</p>
              <span>50ml</span>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/product2">
            <div className="imgbox">
              <img src={Photo2} alt="" />
            </div>

            <div className="text-area">
              <h2>Perfume</h2>
              <h1>FLUID</h1>
              <p>$115.20</p>
              <span>50ml</span>
            </div>
          </Link>
        </div>

        <div className="card">
          <Link to="/product3">
            <div className="imgbox">
              <img src={Photo3} alt="" />
            </div>

            <div className="text-area">
              <h2>Perfume</h2>
              <h1>INTRO</h1>
              <p>$95.20</p>
              <span>50ml</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
