import React from "react";
import './Product.css'

const Product1right = () => {
  return (
    <div className="product1right">
      <h1>Intro x Fluid Set</h1>
      <p className="price">€94,95</p>
      <button type="button">Add To Cart</button>
      <p className="para1">
        This bundle brings together INTRO and FLUID — two scents that move
        between confidence and softness, structure and flow. Together, they
        create space for contrast – for edges and in-betweens.
      </p>
      <p className="para2">
        INTRO opens with a vibrant spark of grapefruit and ginger — bold,
        uplifting, and instantly captivating. Lavender and green notes keep the
        expression fresh and balanced, while a warm base of sandalwood, orris
        and amber settles into quiet confidence. A signature scent for stepping
        forward with clarity and presence.
      </p>
      <p className="para3">
        FLUID moves differently. Airy and luminous, with lily of the valley and
        jasmine at its heart, grounded by tonka and heliotrope. Vanilla weaves
        through the composition, while cedar and galbanum add subtle structure
        and green depth. An amber-toned meditation on movement, transformation
        and becoming.
      </p>
      <button className="buynow">BUY NOW</button>
    </div>
  );
};

export default Product1right;
