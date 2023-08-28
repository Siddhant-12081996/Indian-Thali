// // import React, { useEffect, useState } from "react";
// // import { useSelector } from "react-redux";
// // import Header from "../componant/Header";
// // const Checkout = () => {
// //   const getdata = useSelector((state) => state.cartreducer.carts);
// //   console.log("chech");

// //   const [price, setPrice] = useState(0);
// //   const total = () => {
// //     let price = 0;
// //     getdata.map((ele, k) => {
// //       price += (ele.price * ele.qnty )
// //       console.log(ele)
// //     });
// //     setPrice(price);
// //   };
// //   useEffect(() => {
// //     total();
// //   });

// //   return (
// //     <div>
// //       <Header />

// //       {getdata.map((ele) => (
// //         <div style={{ display: "flex", alignItems: "center" }}>
// //           <img
// //             src={ele.imgdata}
// //             alt="image"
// //             style={{
// //               height: "10vh",
// //               margin: "20px",
// //               border: "1px solid black",
// //               margin: "2vh 2vw",
// //               padding: "10px",
// //               width: "15vw",
// //             }}
// //           />

// //           <div
// //             style={{
// //               border: "1px solid black",
// //               height: "10vh",
// //               margin: "2vh 2vw",
// //               width: "100%",
// //             }}
// //           >
// //             <div> Name -{ele.rname}</div>
// //             <div> Address-{ele.address}</div>
// //             <div> Price - {ele.price} , qnty - {ele.qnty}</div>
            
// //           </div>
          
// //         </div>

// //         // console.log(ele);
// //       ))}
// //       <div
// //             style={{
// //               width: "90%",
// //               margin: "3vh 3vw",
// //               height: "10vh",
// //               border: "1px solid black",
// //               textAlign: "center",
// //               fontSize: "20px",
// //               fontWeight: "bold",
// //             }}
// //           >
          
// //             total amount-{price}
// //           </div>
// //     </div>
// //   );
// // };

// // export default Checkout;


// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import Header from "../componant/Header";

// const Checkout = () => {
//   const getdata = useSelector((state) => state.cartreducer.carts);

//   const [price, setPrice] = useState(0);

//   const total = () => {
//     let totalPrice = 0;
//     getdata.forEach((ele) => {
//       totalPrice += ele.price * ele.qnty;
//     });
//     setPrice(totalPrice);
//   };

//   useEffect(() => {
//     total();
//   }, []);

//   return (
//     <div>
//       <Header />

//       {getdata.map((ele, index) => (
//         <div
//           key={index}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             border: "1px solid black",
//             margin: "2vh 2vw",
//             padding: "10px",
//             borderRadius: "5px",
//           }}
//         >
//           <img
//             src={ele.imgdata}
//             alt="image"
//             style={{
//               height: "10vh",
//               width: "15vw",
//               border: "1px solid black",
//               marginRight: "20px",
//             }}
//           />

//           <div
//             style={{
//               flex: 1,
//               border: "1px solid black",
//               padding: "10px",
//               borderRadius: "5px",
//             }}
//           >
//             <div>
//               <strong>Name:</strong> {ele.rname}
//             </div>
//             <div>
//               <strong>Address:</strong> {ele.address}
//             </div>
//             <div>
//               <strong>Price:</strong> {ele.price}, <strong>Quantity:</strong>{" "}
//               {ele.qnty}
//             </div>
//           </div>
//         </div>
//       ))}

//       <div
//         style={{
//           width: "90%",
//           margin: "3vh 3vw",
//           padding: "10px",
//           border: "1px solid black",
//           textAlign: "center",
//           fontSize: "20px",
//           fontWeight: "bold",
//           borderRadius: "5px",
//         }}
//       >
//         <strong>Total Amount:</strong> {price}
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import Header from "../componant/Header";

// const Checkout = () => {
//   const getdata = useSelector((state) => state.cartreducer.carts);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const calculateTotal = () => {
//     let totalPrice = 0;
//     getdata.forEach((ele) => {
//       totalPrice += ele.price * ele.qnty;
//     });
//     setTotalPrice(totalPrice);
//   };

//   useEffect(() => {
//     calculateTotal();
//   }, []);

//   return (
//     <div>
//       <Header />

//       <div className="checkout-container">
//         {getdata.map((ele, index) => (
//           <div key={index} className="checkout-item">
//             <img src={ele.imgdata} alt="image" className="checkout-image" />

//             <div className="checkout-details">
//               <div>
//                 <strong>Name:</strong> {ele.rname}
//               </div>
//               <div>
//                 <strong>Address:</strong> {ele.address}
//               </div>
//               <div>
//                 <strong>Price:</strong> {ele.price}, <strong>Quantity:</strong>{" "}
//                 {ele.qnty}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="total-amount">
//         <strong>Total Amount:</strong> {totalPrice}
//       </div>
//     </div>
//   );
// };

// export default Checkout;


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../componant/Header";
import "./Checkout.css"; // Import the CSS file for styling

const Checkout = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotal = () => {
    let totalPrice = 0;
    getdata.forEach((ele) => {
      totalPrice += ele.price * ele.qnty;
    });
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <div>
      <Header />

      <div className="checkout-container">
        {getdata.map((ele, index) => (
          <div key={index} className="checkout-item">
            <img src={ele.imgdata} alt="image" className="checkout-image" />

            <div className="checkout-details">
              <div className="item-name">
                <strong>Name:</strong> {ele.rname}
              </div>
              <div className="item-address">
                <strong>Address:</strong> {ele.address}
              </div>
              <div className="item-price">
                <strong>Price:</strong> {ele.price}, <strong>Quantity:</strong>{" "}
                {ele.qnty}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="total-amount">
        <strong>Total Amount:</strong> {totalPrice}
      </div>
    </div>
  );
};

export default Checkout;
