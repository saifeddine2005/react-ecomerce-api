import React, { useState, useEffect } from "react";
import ProductsCard from "../Components/ProductsCard";
import axios from "axios";

export default function Home() {
  const [data, setdata] = useState([]);
  const [ld, setld] = useState(false);

  const getdata = async () => {
    setld(true);
    const api = await axios.get(
      "http://localhost:5000/products"
    );
    setdata(api.data);
    setld(false);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <section id="home">
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
              data.map((item) => <ProductsCard key={item.id} {...item} />)
            )}
          </div>
        </div>
      </section>
    </>
  );
}
