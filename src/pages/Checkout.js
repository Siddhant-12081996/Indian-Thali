import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../componant/Header";
const Checkout = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("chech");

  const [price, setPrice] = useState(0);
  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price += (ele.price * ele.qnty )
      console.log(ele)
    });
    setPrice(price);
  };
  useEffect(() => {
    total();
  });

  return (
    <div>
      <Header />

      {getdata.map((ele) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={ele.imgdata}
            alt="image"
            style={{
              height: "10vh",
              margin: "20px",
              border: "1px solid black",
              margin: "2vh 2vw",
              padding: "10px",
              width: "15vw",
            }}
          />

          <div
            style={{
              border: "1px solid black",
              height: "10vh",
              margin: "2vh 2vw",
              width: "100%",
            }}
          >
            <div> Name -{ele.rname}</div>
            <div> Address-{ele.address}</div>
            <div> Price - {ele.price} , qnty - {ele.qnty}</div>
            
          </div>
          
        </div>

        // console.log(ele);
      ))}
      <div
            style={{
              width: "90%",
              margin: "3vh 3vw",
              height: "10vh",
              border: "1px solid black",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
          
            total amount-{price}
          </div>
    </div>
  );
};

export default Checkout;
