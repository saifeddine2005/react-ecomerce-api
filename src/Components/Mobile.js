import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";

const Mobile = () => {
  const [mob, setmob] = useState([]);
  const [ld, setld] = useState(false);

  const show = async () => {
    setld(true);
    await axios
      .get(`http://localhost:5000/products`)
      .then((response) => {
        setmob(response.data);
        setld(false);
      });
  };

  useEffect(() => {
    show();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="home_content">
          {ld ? (
              <div style={{ margin: "100px", marginLeft: "600px" }}>
                <div className="spinner p-4">
                  <span>Loading...</span>
                  <div className="half-spinner"></div>
                </div>
              </div>
            ) : (
            mob.map((item) => <ProductsCard key={item.id} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
