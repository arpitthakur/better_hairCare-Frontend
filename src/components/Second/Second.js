import React from "react";
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";

function Second({ stepper, setStepper,data,setData }) {
  const array = [
    {
      image:"./Second_Page/thin 1.svg",
      name:"Fine",
      description:"thinner than thread",
      value:"Fine"
    },
    {
      image:"./Second_Page/medium 1 .svg",
      name:"Medium",
      description:"as thick as thread",
      value:"Medium"
    },
    {
      image:"./Second_Page/coarse 1.svg",
      name:"Coarse",
      description:"thicker than thread",
      value:"Coarse"
    }
  ]
  const onclickHandler = (value)=>{
    setData((old)=>{
      let tmp = {...old}
      tmp.hairStructure=value
      return tmp;
    })
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
        <h4>What's your hair structure?</h4>
        <h4> What does a single strand of hair feel like?</h4>
        <p> HOW TO ANSWER</p>
       

      </div>
      {/* <h4 className='text text-center'>What does a single strand of hair feel like?</h4>
      <p className='text text-center'>HOW TO ANSWER</p> */}
      <div className="row">
      {array.map((item,key)=>{
        return<>
        <div className={data.hairStructure&&data.hairStructure==item.value?'col-md-4 active-class':'col-md-4 '}>
        
          <img src={item.image} onClick={()=>{onclickHandler(item.value&&item.value)

          stepperFunc(stepper, setStepper)}}></img>
        
        <div className="text text-center image-text">
        <p className="mb_none">{item.name}</p>
        <p>{item.description}</p>
        </div>
        </div>
        

        </>
      })}
        {/* <div className="col-md-2"></div>
        <div className="col-md-3">
          <img src="first.jpg" onClick={()=>{onclickHandler("fine")}}></img>
        </div>
        <div className="col-md-3">
          <img src="first.jpg"onClick={()=>{onclickHandler("medium")}}></img>
        </div>
        <div className="col-md-3">
          <img src="first.jpg"onClick={()=>{onclickHandler("coarse")}}></img>
          <div className="col-md-2"></div>
        </div> */}
      </div>
  
     
      {/* <button onClick={() => stepperFunc(stepper, setStepper)}>Next</button> */}
      
    </div>
  );
}

export default Second;
