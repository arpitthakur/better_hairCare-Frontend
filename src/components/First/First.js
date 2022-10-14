
import { stepperFunc } from "../../helper/stepperFunc";
function First({ stepper, setStepper ,data,setData }) {
  const array = [
    {
      image:"./First_page/straight 1.svg",
      name:"Straight",
      description:"no bend or curl",
      value:"Straight"
    },
    {
      image:"./First_page/wavy 1 .svg",
      name:"Wavy",
      description:"like a loose S",
      value:"Wavy"
    },
    {
      image:"./First_page/curly1.svg",
      name:"Curly",
      description:"defined curl/spiral",
      value:"Curly"
    },
    {
      image:"./First_page/curly1.svg",
      name:"Medium Curly",
      description:"bouncy ringlets",
      value:"Medium Curly"
    },
    {
      image:"./First_page/medium curly.svg",
      name:"Very Curly",
      description:"Light corkscrews",
      value:"Very curly"

    },
    {
      image:"./First_page/first1.svg",
      name:"Coily",
      description:'"s" shape,loosely packed ',
      value:"Coily"
    
    },
    {
      image:"./First_page/very coily.svg",
      name:"Very coily",
      description:"dense zig zag patterns",
      value:"Very Coily"
    },
    {
      image:"./First_page/tight coils.svg",
      name:"Tight Coils",
      description:"springy zig zag pattern",
      value:"Tight Coils "
    },
  ]
  const onclickHandler = (value)=>{
    
    setData((old)=>{
      let tmp={...old}
      tmp.hairType=value
      return tmp;
      
    })

  }
  return (
    <div className="container">
        <div className="top_header_row">
    <div className="main-logo">
      <img src = "main_logo.png"></img>
    </div>
    </div>
      <div className="text text-center pb-4 first_component">
        <h2>What's your natural hair type?</h2>
        <h5>Your hair when it is treated or unstyled</h5>
        <p className="sky_blue_color mt_top"> <span className="border_bt">HOW TO ANSWER</span></p>
       

      </div>
      {/* <div className='text text-center'>Your hair when it is treated or unstyled</h4> */}

      <div className="row">
      {array.map((item,key)=>{
        return <>
        <div className={data.hairType&&data.hairType==item.value?'col-md-3  active-class':'col-md-3 '} >
        
        <img src= {item.image}onClick={()=>{


        onclickHandler(item.value&&item.value)
        stepperFunc(stepper, setStepper)
        }}></img>
      
        <div className="text text-center image-text">
        <p className="mb_none">{item.name}</p>
        <p>{item.description}</p>
        </div>
      </div>

        </>
      })}
        {/* <div className="col-md-3">
        
          <img src="./First_page/straight 1.svg"onClick={()=>{onclickHandler("straight")}}></img>
        </div> */}
        {/* <div className="col-md-3">
          <img src="first.jpg"onClick={()=>{onclickHandler("wavy")}}></img>
        </div>
        <div className="col-md-3">
          <img src="first.jpg"onClick={()=>{onclickHandler("curly")}}></img>
        </div>
        <div className="col-md-3">
          <img src="first.jpg"onClick={()=>onclickHandler("medium curly")}></img>
        </div>
        <div className="col-md-3">
          <img src="first.jpg" className="img-fluid pt-3"onClick={()=>onclickHandler("very curly")}></img>
        </div>

        <div className="col-md-3">
          <img src="first.jpg" className="img-fluid pt-3"onClick={()=>onclickHandler("coily")}></img>
        </div>
        <div className="col-md-3">
          <img src="first.jpg" className="img-fluid pt-3"onClick={()=>onclickHandler("very coily")}></img>
        </div>
        <div className="col-md-3">
          <img src="first.jpg" className="img-fluid pt-3"onClick={()=>onclickHandler("tight coils")}></img> */}
        {/* </div> */}
      </div>
      {/* <button  onClick={() => stepperFunc(stepper, setStepper)}>Next</button> */}
    </div>
  );
}

export default First;
