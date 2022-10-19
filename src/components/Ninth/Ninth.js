import axios from "axios";
import React, { useState, useEffect } from "react";
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";
function Ninth({ stepper, setStepper, data, setData }) {
  const [state, setState] = useState({});
  const [formValidate, setformValidate] = useState({
    name: false,
    street: false,
    state: false,
    city: false,
    postcode: false,
    country: false,
    phone_number: false,
    email: false
  })
  useEffect(() => {
    console.log(formValidate)
  }, [formValidate])
  const validate = (e) => {
    let flag=true

    if (!state.name) {
      flag=false
      setformValidate((old) => {
        old.name = "Please Enter your name*"
        return { ...old }
      })
    }
    if (state.name&&(state.name).length<3) {
      flag=false
      setformValidate((old) => {
        old.name = "Name char should be more than three*"
        return { ...old }
      })
    }
    if(!state.street){
      flag=false
      setformValidate((old) => {
        old.street = "Required*"
        return { ...old }
      })
    }
    if(!state.city){
      flag=false
      setformValidate((old) => {
        old.city = "Required*"
        return { ...old }
      })
    }
    if(!state.state){
      flag=false
      setformValidate((old) => {
        old.state = "Required*"
        return { ...old }
      })
    }
    if(!state.postcode){
      flag=false
      setformValidate((old) => {
        old.postcode = "Required*"
        return { ...old }
      })
    }
    if(!state.country){
      flag=false
      setformValidate((old) => {
        old.country = "Required*"
        return { ...old }
      })
    }
    if(state.phone_number&&(state.phone_number).length<10){
      flag=false
      setformValidate((old) => {
        old.phone_number = "Phone number should be 10 digit*"
        return { ...old }
      })
    }
    if(!state.phone_number){
      flag=false
      setformValidate((old) => {
        old.phone_number = "Required*"
        return { ...old }
      })
    }
    // if(!state.email){
    //   setformValidate((old) => {
    //     old.email = "Required*"
    //     return { ...old }
    //   })
    // }
    if(state.email&&!(state.email).includes(".com", '@')){
      flag=false
      setformValidate((old) => {
        old.email = "Enter valid email address*"
        return { ...old }
      })
    }
    if(flag){
      setData((old)=>{
        let tmp={...old}
        tmp.delivery_details={...state}
        return {...tmp}
      })
      saveDetailsApi()
    }
  };
  const saveDetailsApi = async () => {
    var config = {
      method: "post",
      url: "http://localhost:9000/product/store",
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
      if(key=='phone_number'){
        if(value.length>10){
          console.log(value.length)
          // temp.phone_number=temp.phone_number
          return {...temp}
        } 
      }
        console.log("else")
        temp[key] = value;
        return temp;
    });

    setformValidate((old)=>{
      let temp = { ...old};
      temp[key] = false;
      return temp;

    })
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="container">
      <div className="top_header_row">
        <div className="top_logo_colom">
          <button onClick={() => stepperFuncdecrement(stepper, setStepper)}>
            <img src="arrow.png"></img> Back
          </button>
        </div>
        <div className="main-logo">
          <img src="main_logo.png"></img>
        </div>
      </div>
      <div className="text text-center main_bg_colors">
        <h2>Delivery Details</h2>
        <div className="form">
          <div className="enter_name col-12 commnn_pt">
            <input
              type="text"
              name="name"
              required
              placeholder="What's your name?"
              onChange={(e) => {
                changeHandler(e.target.value, "name");
              }}
            ></input>
            {formValidate.name && <span className="invalidInput">{formValidate.name}</span>}
          </div>
          <div className="contect_info commnn_pt">
            <div className="row">
              <h2>Delivery Address*</h2>
              <div className="col-6">
                <input
                  type="text"
                  name="Street"
                  placeholder="Street"
                  onChange={(e) => {
                    changeHandler(e.target.value, "street");
                  }}
                ></input>
                {formValidate.street && <span className="invalidInput">{formValidate.street}</span>}
                <input
                  type="text"
                  name="State"
                  placeholder="State"
                  onChange={(e) => {
                    changeHandler(e.target.value, "state");
                  }}
                ></input>
                {formValidate.state && <span className="invalidInput">{formValidate.state}</span>}

              </div>

              <div className="col-6">
                <input
                  type="text"
                  name="City"
                  placeholder="City/Suburb"
                  onChange={(e) => {
                    changeHandler(e.target.value, "city");
                  }}
                ></input>
                {formValidate.city && <span className="invalidInput">{formValidate.city}</span>}
                <input
                  type="number"
                  name="postcode"
                  placeholder="Zip/Post Code"
                  onChange={(e) => {
                    changeHandler(e.target.value, "postcode");
                  }}
                ></input>
                {formValidate.postcode && <span className="invalidInput">{formValidate.postcode}</span>}
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="Country"
                  placeholder="Country"
                  onChange={(e) => {
                    changeHandler(e.target.value, "country");
                  }}
                ></input>
                {formValidate.country && <span className="invalidInput">{formValidate.country}</span>}

              </div>
            </div>
          </div>
          <div className="commnn_pt">
            <input
              type="number"
              name="Phone number"
              maxLength={10}
              minLength={1}
              placeholder="Delivery Contact Phone Number"
              onChange={(e) => {
                changeHandler(e.target.value, "phone_number");
              }}
              value={state?.phone_number?state.phone_number:''}
            ></input>
            {formValidate.phone_number && <span className="invalidInput">{formValidate.phone_number}</span>}


            <input
              type="text"
              name="Email"
              placeholder=" Delivery Contact Email Address"
              onChange={(e) => {
                changeHandler(e.target.value, "email");
              }}
            ></input>
            {formValidate.email && <span className="invalidInput">{formValidate.email}</span>}

          </div>
          <button className="submit_btn" onClick={(e) => { validate(e) }}>Submit$1234</button>
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