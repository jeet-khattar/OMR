import React from "react";
import Herosec from "./Components/Herosection/Herosec";
import Tagline from "./Components/Tagline/Tagline";
import Collectionline from "./Components/Collection/Collectionline";
import Cards from "./Components/Collection/Cards";
import Detailscards from "./Components/Details/Detailscards";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Herosec />
      <Tagline />
      <Collectionline />
      <Cards />
      <Detailscards />
      <Footer />
    </div>
  );
};

export default Homepage;
