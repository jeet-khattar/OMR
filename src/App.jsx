import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Product1page from "./Productpages/Product1/Product1page";
import Homepage from "./Homepage";
import Product2page from "./Productpages/Product2/Product2page";
import Product3page from "./Productpages/Product3/product3page";
import Login from "./Components/Authpage/Login";
import PerfumeOil from "./Components/Navbarpages/PerfumeOil/PerfumeOil";
import Collection from "./Components/Navbarpages/Collection/Collection";

const App = () => {
  console.log("Navbar rendered");
  //  const cursorr = useRef(null);

  //  useEffect(()=>{
  //   const animation = (e) =>{
  //     gsap.to(cursorr.current, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration: 2.5,
  //       ease: "elastic.out(1,0.3)",
  //     })
  //   }
  //    window.addEventListener('mousemove', animation)
  //  }, [])
  return (
    <div>
      {/* <div className="cursor" ref={cursorr}></div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/product1" element={<Product1page />} />
          <Route path="/product2" element={<Product2page />} />
          <Route path="/product3" element={<Product3page/>}/>
          <Route path="/PerfumeOil" element={<PerfumeOil/>} />
          <Route path="/Collection" element={<Collection/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
