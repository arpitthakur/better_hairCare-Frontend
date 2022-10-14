import React from 'react'
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";

function Third({ stepper, setStepper,data,setData }) {
  const array = [
    {
      image:"./Third_page/dry 1.svg",
      name:"Dry",
      description:"scalp is itchy or flaky",
      value:"Dry"

    },
    {
      image:"./Third_page/balanced 1.svg",
      name:"Balanced",
      description:"hair is not dry or oily",
      value:"Balanced"

    },
    {
      image:"./Third_page/oily 1.svg",
      name:"Oily",
      description:"roots are flat and greasy",
      value:"Oily"

    }
  ]
  const onclickHandler = (value)=>{
    setData((old)=>{
      let tmp = {...old}
      tmp.treatHair=value
      return tmp;
    })
  }
  return (
    <div className='container'>
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
      <div className='text text-center pb-4 first_component'>
      <h4>Do you color or treat your hair?</h4>
      <h3>Your scalp/roots the day after washing</h3>
     <p> HOW TO ANSWER</p>
      </div>
      {/* <h3 className='text text-center'>Your scalp/roots the day after washing</h3>
      <p className='text-center'>HOW TO ANSWER</p> */}
      <div className='row'>
      {array.map((item,key)=>{
        return<>
        <div className={data.treatHair&&data.treatHair==item.value?'col-md-4 active-class':'col-md-4 '}>
          <img src = {item.image}onClick={()=>{onclickHandler(item.value&&item.value)
            stepperFunc(stepper, setStepper)
          }}></img>
          <div className="text text-center image-text">
          <p className="mb_none">{item.name}</p>
        <p>{item.description}</p>
        </div>

        </div>
          
        </>
      })}
      {/* <div className='col-md-2'></div>
        <div className='col-md-3'>
          <img src = "first.jpg"onClick={()=>{onclickHandler("dry")}}></img>
        </div>
        <div className='col-md-3'>
          <img src = "first.jpg"onClick={()=>{onclickHandler("balanced")}}></img>
        </div>
        <div className='col-md-3'>
          <img src = "first.jpg"onClick={()=>{onclickHandler("oil")}}></img>
        </div>
        <div className='col-md-2'></div> */}
      </div>
      
      {/* <button onClick={() => stepperFunc(stepper, setStepper)}>Next</button> */}
      

    </div>
  )
}

export default Third