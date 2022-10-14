import React from 'react'
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";

function Five({stepper,setStepper,data,setData}) {
  const array = [
    {
      name:"Black",
      value:"Black"
    },
    {
      name:"Blonde",
      value:"Blonde"
    },
    {
      name:"Brunette",
      value:"Brunette"
    },
    {
      name:"Red",
      value:"Red"
    },
    {
      name:"Gray or silver",
      value:"Gray or silver"
    },
    {
      name:"Fashion color(i.e pink)",
      value:"Fashion color (i.e pink)"
    }
  ]
  const onclickHandler = (value)=>{
    setData((old)=>{
      let tmp = {...old}
      tmp.bestColor=value
      return tmp;
    })
  }
  const clickHandler = (value)=>{
    setData((old)=>{
      let tmp = {...old}
      tmp.siliconFree=!tmp.siliconFree
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
      <h4>Which color best describes your hair?</h4>
      <h3>Choose the best color</h3>
      <p>WHY WE ASK</p>
      </div>
      {/* <div className='text text-center'>
      <h3>Choose the best color</h3>
      <p>WHY WE ASK</p>
      </div> */}
      <div className='row'>
      {array.map((item,key)=>{
        return<>
        <div className={data.bestColor&&data.bestColor==item.value?'col-md-4 active-class':'col-md-4 '}>
          {/* <h1 onClick={()=>{onclickHandler(item.value&&item.value)}}></h1> */}
        
        <div className="text text-center image-text">
        <p className='round-text' onClick={()=>{onclickHandler(item.value&&item.value)}}>{item.name}</p>
       
        </div>
        </div>

    

        </>
      })}
     
       
        {/* <div className='col-md-4'>
          <h1 onClick={()=>{onclickHandler("black")}} >Black</h1>
        </div>
        <div className='col-md-4'>
          <h1 onClick={()=>{onclickHandler("blonde")}}>Blonde</h1>
        </div>
        <div className='col-md-4'>
          <h1 onClick={()=>{onclickHandler("brunette")}}>Brunette</h1>
        </div>
        <div className="col-md-4">
          <h1 onClick={()=>{onclickHandler("red")}}>Red</h1>
        </div>
        <div className="col-md-4">
          <h1 onClick={()=>{onclickHandler("gray or silver")}}>Gray or slver</h1>
        </div>
        <div className='col-md-4'>
          <h1 onClick={()=>{onclickHandler("fashion color")}}>Fashion color(i.e.pink)</h1>
        </div> */}
        <div className='text text-center first_component'>
        <input type="checkbox"onClick={()=>{clickHandler()}}/>
  <label for="formula">&nbsp; I'd like a silicon free formula</label><br/>
        
       
  <p className="sky_blue_color mt_top"> <span className="border_bt font_size">WHAT IS SILICON FREE</span></p>
        </div>
      </div>
    <div className='btn_row text-center'>
    <button className='bottom_center_btn' onClick={() => stepperFunc(stepper, setStepper)}>Next</button>
    </div>
    </div>
  )
}

export default Five