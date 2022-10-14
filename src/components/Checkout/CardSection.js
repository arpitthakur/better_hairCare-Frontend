// import React from "react";
// import { CardElement } from "@stripe/react-stripe-js";
// import { useState, useEffect } from "react";
// const CARD_ELEMENT_OPTIONS = {
//   style: {
//     base: {
//       color: "#303238",
//       fontSize: "16px",
//       fontFamily: "sans-serif",
//       fontSmoothing: "antialiased",
//       "::placeholder": {
//         color: "#CFD7DF",
//       },
//     },
//     invalid: {
//       color: "#e5424d",
//       ":focus": {
//         color: "#303238",
//       },
//     },
//   },
// };

// function CardSection({ data, setData }) {
//   const [state, setState] = useState({});

//   const changeHandler = (value, key) => {
//     setState((old) => {
//       let temp = { ...old };
//       temp[key] = value;
//       return temp;
//     });
//   };
//   useEffect(() => {
//     console.log(state);
//   }, [state]);
//   return (
//     <label className="cardSectionLable">
//       <CardElement />
//     </label>
//   );
// }

// export default CardSection;
