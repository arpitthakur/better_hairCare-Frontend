import React from 'react'
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";

function Four({ stepper,setStepper,data,setData}) {
  const array = [
    {
      name:"Balayage",
      value:"Balayage"
    },
    {
      name:"Bleached",
      value:"Bleached"
    },
    {
      name:"Color",
      value:"Color"
    },
    {
      name:"Highlights",
      value:"Highlights"
    },
    {
      name:"Keratin",
      value:"Keratin"
    },
    {
      name:"Perm",
      value:"Perm"
    },
    {
      name:"Relaxer",
      value:"Relaxer"
    },
    {
      name:"None of these",
      value:"None of these"
    }
    // {
    //   name:"My hair is natural",
    //   value:"My hair is natural"
    // }
  ]

  const onclickHandler = (value)=>{
    console.log(value)
    setData((old)=>{
      let tmp = {...old}
      tmp.colorHair=value
      return tmp;
    })
  }

  console.log("arr : ", array);
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
     <h2> Do you color or treat your hair?</h2>

     <h5>Select all that apply</h5>
     <p className="sky_blue_color mt_top"> <span className="border_bt">WHY WE ASK</span></p>
     </div>
      {/* <div className='text text-center'>
      <h3>Select all that apply</h3>
      </div>
      <div className='text-center'>
      E ASK<p>WHY W
      </div> */}
      <div className='row text-center'>
      {array.map((item,key)=>{
        return<>
        <div className={data.colorHair&&data.colorHair==item.value?'col-md-3  active-class':'col-md-3 '}> 
       
        <div className="text text-center image-text">
        <p className="round-text"onClick={()=>{onclickHandler(item.value&&item.value)
        stepperFunc(stepper, setStepper)
        }}>{item.name}</p>
      
        </div>
      </div>
       
        

        </>
      })}
        {/* <div className='col-md-3 first text'> 
        <h1 onClick={()=>{onclickHandler("balayage")}}>Balayage</h1>
       
        </div>
        <div className='col-md-3 second text'>
        <h1  onClick={()=>{onclickHandler("bleached")}}>Bleached</h1>
        </div>
        <div className='col-md-3 third text'>
        <h1 onClick={()=>{onclickHandler("color")}}>Color</h1>
        </div>
        <div className='col-md-3 fourth text'> 
        <h1 onClick={()=>{onclickHandler("highlights")}}>Highlights</h1>
        </div>
        <div className='col-md-3 fifth text'> 
        <h1 onClick={()=>{onclickHandler("keratin")}}>Keratin</h1>
        </div>
        <div className='col-md-3 sixth text'> 
        <h1 onClick={()=>{onclickHandler("perm")}}>Perm</h1>
        </div>
        <div className='col-md-3 seventh text'>
        <h1 onClick={()=>{onclickHandler("relaxer")}}>Relaxer</h1>
        </div>
        <div className='col-md-3 eighth text'>
        <h1 onClick={()=>{onclickHandler("none of these")}}>None of these</h1>

        </div> */}

        
        {/* <div className='col-md-4'></div> */}
{/* 
        <div className={data.colorHair&&data.colorHair=="my hair is natural"?'col-md-3  active-class':'col-md-3 round-text '}>
          <p className='round-text' onClick={()=>{onclickHandler("my hair is natural")}}>My hair is natural</p>
        </div> */}
      {/* <div className='col-md-3'></div> */}
      </div>

      {/* <button onClick={() => stepperFunc(stepper, setStepper)}>Next</button> */}
      </div>
      
       

        
    
    

    
  )
}

export default Four