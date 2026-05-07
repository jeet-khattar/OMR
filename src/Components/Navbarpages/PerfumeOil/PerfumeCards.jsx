import React, { useEffect, useState } from "react";
import "./Perfume.css";
import photo1 from "./Photos/OMR1.1.webp";
import photo2 from "./Photos/OMR2.1.webp";
import photo3 from "./Photos/OMR3.1.webp";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const PerfumeCards = () => {
  const [apidata, setapidata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const res = axios
      .get("https://68ccfe44da4697a7f30454f2.mockapi.io/api/product")
      .then((res) => {
        setapidata(res.data);
        console.log(res.data);
        setloading(false);
      });
  }, []);

  return (
    <div className="PerfumeCards">
      <div className="container">
        {loading ? (
          <ClipLoader
            color="#000"
            loading={loading}
            size={100}
            className="loadingg"
          />
        ) : (
          apidata.map((items) => {
            return (
              <div className="card" key={items.id}>
                <div className="imgbox">
                  <img src={items.url} alt="" />
                </div>

                <div className="text-area">
                  <h2>{items.productname}</h2>
                  <h1>{items.producttype}</h1>
                  <p>{items.prize}</p>
                  <span>{items.size}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PerfumeCards;
