import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Collection.css";
import { ClipLoader } from "react-spinners";

const Collectioncards = () => {
  const [api, setapi] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const res = axios
      .get(
        "https://68ccfe44da4697a7f30454f2.mockapi.io/api/Collection-products",
      )
      .then((res) => setapi(res.data))
      setloading(false)

  }, []);

  return (
    <div className="collectioncards">
      <div className="container">
        {loading ? (
          <ClipLoader color="#111" size={100} className="loadingg"/>
        ) : (
          api.map((items) => {
            return (
              <div className="card" key={items.id}>
                <div className="imgbox">
                  <img src={items.url} alt="" />
                </div>

                <div className="text-area">
                  <h2>{items.Productname}</h2>
                  <h1>{items.Producttype}</h1>
                  <p>{items.prize}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Collectioncards;
