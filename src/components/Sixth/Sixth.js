import React, { useEffect, useState } from "react";
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";

function Sixth({ stepper, setStepper, data, setData }) {
  const array1 = [
    {
      name:"Anti-frizz",
      value:"Anti-frizz"

    },
    {
      name:"Color protection",
      value:"Color protection"

    },
    {
      name:"Curl definition",
      value:"Curl definition"

    },
    {
      name:"Deep condition",
      value:"Deep condition"

    },
    {
      name:"Fix split ends",
      value:"Fix split ends"

    },
    {
      name:"Hydrate",
      value:"Hydrate"

    },
    {
      name:"Lengthen",
      value:"Lengthen"

    },
    {
      name:"Nourish roots",
      value:"Nourish roots"

    },
    {
      name:"Rejuvenate",
      value:"Rejuvenate"

    },
    {
      name:"Replenish hair",
      value:"Replenish hair"

    },
    {
      name:"Hair",
      value:"Hair"

    },
    {
      name:"Soothe scalp",
      value:"Soothe scalp"

    },
    {
      name:"Strengthen",
      value:"Strengthen"

    },
    {
      name:"Straighten",
      value:"Straighten"

    },
    {
      name:"Thermal protection",
      value:"Thermal protection"

    }
    
  ]
  const [array, setArray] = useState([]);
  const clickHandler = ()=>{
    setData((old)=>{
      let tmp = {...old}
      tmp.hairGoal = [...array]
      return tmp;
    })
  }
  const onclickHandler = (value) => {
    console.log(value);
    let tmp = [...array];
    // const clickHandler = (value)=>{
    //   setData((old)=>{
    //     let tmp = {...old}
    //     tmp.hairGoal = value
    //     return tmp;
    //   })
    // }

    // else{

    let index = tmp.indexOf(value);
    console.log(index);
    if (index < 0) {
      console.log("not found");
      if (tmp.length > 4) {
        alert(" You can select upto 5 only");
        return;
      }
      tmp.push(value);
    } else {
      console.log("found");
      tmp.splice(index, 1);
    }

    // }
    // console.log("tmp",tmp)
    setArray((old) => {
      return [...tmp];
    });
  };
  useEffect(() => {
    console.log(array);
  }, [array]);
  const checkValue = (value)=>{
    
    let copy = [...array]
    let index = copy.indexOf(value)
    if(index > -1){
      return true;
    }
    else{
      return false;
    }


  }


  
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
  
      <div className="text text-center pb-4 first_component">
        <h4>Select your hair goals</h4>
        <p>Choose up to 5</p>
        <p>RECOMMENDED GOALS BASED ON YOUR SELECTION</p>
      </div>
      <div className="row text-center">
      {array1.map((item,key)=>{
        return<>
        <div className={checkValue(item.value)?"col-md-4 active-class":"col-md-4"}>
          <div className="text text-center image-text">
        <p className="round-text" onClick={() => {
              onclickHandler(item.value&&item.value);
            }}>{item.name}</p>
       
        </div>
          </div>

        </>
      })}
        {/* <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("anti-frizz");
            }}
          >
            Anti-frizz
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("color protection");
            }}
          >
            Color protection
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("curl definition");
            }}
          >
            Curl definition
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("deep condition");
            }}
          >
            Deep condition
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("fix split ends");
            }}
          >
            Fix split ends
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("hydrate");
            }}
          >
            Hydrate
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("lengthen");
            }}
          >
            Lengthen
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("nourish roots");
            }}
          >
            Nourish roots
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("rejuvenate");
            }}
          >
            Rejuvenate
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("replenish hair");
            }}
          >
            Replenish hair
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("hair");
            }}
          >
            Hair
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("soothe scalp");
            }}
          >
            Soothe scalp
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("strengthen");
            }}
          >
            Strengthen
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("straighten");
            }}
          >
            Straighten
          </h1>
        </div>
        <div className="col-md-4">
          <h1
            onClick={() => {
              onclickHandler("thermal protection");
            }}
          >
            Thermal protection
          {/* </h1> */}
        {/* </div> */} 
        <div className="col-md-3"></div>

        <div className={checkValue("volumize")?'col-md-6  active-class':'col-md-6'}>
        <div className="text text-center image-text">

          <p className="round-text"
            onClick={() => {
              onclickHandler("volumize");
            }}
          >
            Volumize
          </p>
        </div>

        </div>
        <div className="col-md-3"></div>
      </div>

      {/* <button onClick={() => stepperFuncdecrement(stepper, setStepper)}>
        prev
      </button> */}
      {/* <button onClick={() => {clickHandler()
        
        stepperFunc(stepper, setStepper)}}>Next</button> */}
        <div className='btn_row text-center'>
    <button className='bottom_center_btn' onClick={() => stepperFunc(stepper, setStepper)}>Next</button>
    </div>
    </div>
  );
}

export default Sixth;
