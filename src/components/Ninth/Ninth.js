import axios from "axios";
import React, { useState, useEffect } from "react";
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";
function Ninth({ stepper, setStepper, data, setData }) {
  const [state, setState] = useState({});
  const validate = () => {
    let tmp=state
    console.log(state);
    if (
      tmp.name&&
      tmp.street&&
      tmp.city&&
      tmp.state&&
      tmp.postcode&&
      tmp.country&&
      tmp.phone_number
    ) {
    
      setData((old) => {
        let tmp = { ...old };
        tmp.delivery_details = { ...state };
        return tmp;
      });
      saveDetailsApi();
    } else {
      alert("field required");
    }
    // if(state.name!=''){
    //   alert("success")
    // }else{
    //   alert("name required")
    // }
  };
  const saveDetailsApi = async () => {
    var config = {
      method: "post",
      url: "https://secret-reef-17136.herokuapp.com/product/store",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        data: { ...data },
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        stepperFunc(stepper, setStepper);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeHandler = (value, key) => {
    setState((old) => {
      let temp = { ...old };
      temp[key] = value;
      return temp;
    });
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="container">
            <div className="top_header_row">
    <div className="top_logo_colom">
     <button onClick={() => stepperFuncdecrement(stepper, setStepper)}>
     <img src = "arrow.png"></img> Back 
      </button>
      </div>
    <div className="main-logo">
      <img src = "main_logo.png"></img>
    </div>
    </div>
      <div className="text text-center main_bg_colors">
        <h2>Delivery Details</h2>

        <div className="form">
          <div className="enter_name col-12 commnn_pt">
            <input
              type="text"
              name="name"
              placeholder="What's your name?*"
              onChange={(e) => {
                changeHandler(e.target.value, "name");
              }}
            ></input>
          </div>
          <div className="contect_info commnn_pt">
            <div className="row">
              <h2>Delivery Address*</h2>
              <div className="col-6">
                <input
                  type="text"
                  name="Street"
                  placeholder="Street*"
                  onChange={(e) => {
                    changeHandler(e.target.value, "street");
                  }}
                ></input>
                <input
                  type="text"
                  name="State"
                  placeholder="State*"
                  onChange={(e) => {
                    changeHandler(e.target.value, "state");
                  }}
                ></input>
              </div>

              <div className="col-6">
                <input
                  type="text"
                  name="City"
                  placeholder="City/Suburb*"
                  onChange={(e) => {
                    changeHandler(e.target.value, "city");
                  }}
                ></input>
                <input
                  type="number"
                  name="postcode"
                  placeholder="Zip/Post Code*"
                  onChange={(e) => {
                    changeHandler(e.target.value, "postcode");
                  }}
                ></input>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="Country"
                  placeholder="Country*"
                  onChange={(e) => {
                    changeHandler(e.target.value, "country");
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="commnn_pt">
            <input
              type="number"
              name="Phone number"
              placeholder="Delivery Contact Phone Number*"
              onChange={(e) => {
                changeHandler(e.target.value, "phone_number");
              }}
            ></input>

            <input
              type="text"
              name="Email"
              placeholder=" Delivery Contact Email Address*"
              onChange={(e) => {
                changeHandler(e.target.value, "email");
              }}
            ></input>
          </div>
          <button className="submit_btn" onClick={validate}>Submit$1234</button>
          {/* <a href="#" className="send_icon_btn">
          send
          </a> */}
        </div>
      </div>
      {/* <button onClick={() => stepperFuncdecrement(stepper, setStepper)}>
        prev
      </button> */}
      {/* <button onClick={() => stepperFunc(stepper, setStepper)}>Next</button> */}
    </div>
  );
}

export default Ninth;
