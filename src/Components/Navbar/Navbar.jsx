import React, { useEffect, useRef, useState } from "react";
import Leftlinks from "./Leftlinks";
import Logo from "./Logo";
import Rightlinks from "./Rightlinks";
import "./Nav.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, X, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navref = useRef(null);
  const [Ismenuopen, setIsmenuopen] = useState(false);
  const [Issearchopen, setIssearchopen] = useState(false);
  useEffect(() => {
    gsap.to(navref.current, {
      backgroundColor: "white",
      boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.08)",
      scrollTrigger: {
        trigger: navref.current,
        start: "top -5%",
        end: "top -10%",
        markers: false,
        scrub: 2,
      },
    });
  }, []);

  const handlesearchbar = () => {
    setIssearchopen((prev) => !prev);
    console.log(Issearchopen);
  };
  
  // const crossbtn = () =>{
  //   setIssearchopen(false);
  // }
  return (
    <div className="nav">
      {/* <div className="box">
        <div className="searchbar">
          <input type="text" placeholder="Search Your Product" />
          <Search className="seachicon" />
          <X className="crossbtn" />
          <ChevronRight className="rightarrow" />
        </div>
      </div> */}
      <div className="navbar" ref={navref}>
        <Logo />
        <div className={`navlinkss ${Ismenuopen ? "active" : ""}`}>
          <Leftlinks />
          <Rightlinks seachfunc={handlesearchbar} />
        </div>
        <button
          type="button"
          className="tooglebtn"
          onClick={() => {
            setIsmenuopen(!Ismenuopen);
          }}
        >
          menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;
