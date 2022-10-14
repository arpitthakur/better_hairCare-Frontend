import React from 'react'
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";

function Eight({stepper, setStepper,data,setData}) {
  const array = [
    {
      image:"./Eight_Page/Group 30.png",
      name:"Shampoo",
      value:"Shampoo",
      price:"1234"
    },
    {
      image:"./Eight_Page/Group 31.png",
      name:" Purple Shampoo",
      value:" Purple Shampoo",
      price:"1234"
    },
    {
      image:"./Eight_Page/Group 30.png",
      name:"Conditioner",
      value:"Conditioner",
      price:"1234"
    },
    {
      image:"./Eight_Page/Group 30.png",
      name:"Shampoo",
      value:"Shampoo1",
      price:"1234"
    },
    {
      image:"./Eight_Page/Group 31.png",
      name:"Purple Shampoo",
      value:"Purple Shampoo",
      price:"1234"
    },
    {
      image:"./Eight_Page/Group 30.png",
      name:"Conditioner",
      value:"Conditioner1",
      price:"1234"
    }

  ]
  const onclickHandler = (value,price) => {
    setData((old) => {
      let tmp = { ...old };
      tmp.product = {
        product_name:value,
        product_price:price
      };
      return tmp;
    });
  };
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
    {/* <div className="main-logo">
      <img src = "main_logo.png"></img>
    </div> */}
    <div className='main_bg'>
    <div className='logo '>
      <img src = "./Eight_Page/shape.png"></img>
    </div>
      <div className='text text-center first_component'>
        <h1>Lorem ipsum dolor sit amit</h1>
        <p>lorem  rjfevewfcvefw  nwcwevkfjv fnerkerverwvwervnwevwevjkewvwvrvrkj</p>
      </div>
      <div className='row'>
      {array.map((item,key)=>{
        return<>
        <div className={data.product&&data.product.product_name==item.value?'col-md-4 active-class':'col-md-4 '}onClick={() => {
                    onclickHandler(item.value, item.price);
                  }}>
        <div class="card">
  <img src={item.image} class="card-img-top" alt="..."></img>
  <div class="card-body image-text align-items-center">
  <h1>{item.name}</h1>
    <p class="card-text pull-right">${item.price}</p>
  </div>

</div>
</div>

        </>
      })}
        {/* <div className='col-md-4'>
        <div class="card">
  <img src="Group 30.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

</div>
</div>
  <div className='col-md-4'>
  <div class="card">
  <img src="Group 31.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

</div>
</div>
 <div className='col-md-4'>
  <div class="card">
  <img src="Group 30.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

</div>
</div>
 <div className='col-md-4'>
  <div class="card">
  <img src="Group 30.png" class="card-img-top pt-3" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

</div>
</div>
 <div className='col-md-4'>
  <div class="card">
  <img src="Group 31.png" class="card-img-top pt-3" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

</div>
</div>
 <div className='col-md-4'>
  <div class="card">
  <img src="Group 30.png" class="card-img-top pt-3" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

</div>
</div> */}
      </div>
      {/* <button onClick={() => stepperFuncdecrement(stepper, setStepper)}>
        prev
      </button> */}
      {/* <button onClick={() => stepperFunc(stepper, setStepper)}>Next</button> */}
      <div className='btn_row text-center'>
    <button className='bottom_center_btn' onClick={() => stepperFunc(stepper, setStepper)}>Next</button>
    </div>

    </div>
    </div>
  )
}

export default Eight