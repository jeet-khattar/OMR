import React from "react";
import "./Details.css";
import deatilphoto1 from "../Photos/details-photo-1.webp";
import deatilphoto2 from "../Photos/details-photo-2.webp";
import deatilphoto3 from "../Photos/details-photo-3.webp";
import deatilphoto4 from "../Photos/details-photo-4.webp";

const Detailscards = () => {
  return (
    <div className="details">
      <div className="card">
        <img src={deatilphoto1} alt="" />
        <h1>Our Story</h1>
        <div className="text-area">
          <p>
            A Swedish fragrance house redefining the boundaries between personal
            expression and performance.
          </p>
          <button type="button">more</button>
        </div>
      </div>

      <div className="card">
        <img src={deatilphoto2} alt="" />
        <h1>Home Fragrance</h1>
        <div className="text-area">
          <p>
            Our scented candles are an extension of our approach to scent:
            considered, intentional, and designed to be felt — never rushed.
          </p>
          <button type="button">more</button>
        </div>
      </div>

      <div className="card">
        <img src={deatilphoto3} alt="" />
        <h1>EAU DE PARFUM</h1>
        <div className="text-area">
          <p>
            A collection of fragrances crafted to express individuality and
            emotion.
          </p>
          <button type="button">more</button>
        </div>
      </div>

      <div className="card">
        <img src={deatilphoto4} alt="" />
        <h1>Furfume OIL</h1>
        <div className="text-area">
          <p>
            A modern way to wear fragrance. Vegan, skin-friendly, and designed
            for life on the go.
          </p>
          <button type="button">more</button>
        </div>
      </div>
    </div>
  );
};

export default Detailscards;
