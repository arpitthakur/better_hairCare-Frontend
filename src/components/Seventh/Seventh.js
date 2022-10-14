import React from "react";
import { stepperFunc } from "../../helper/stepperFunc";
import { stepperFuncdecrement } from "../../helper/stepperFunc";

function Seventh({ stepper, setStepper, data, setData }) {
  const array = [
    {
      image: "./seven page/Rectangle 20.jpg",
      name: "Floret",
      description: "fresh,floral,rose,gardenia with earthy sandalwood",
      value: "Floret1",
    },
    {
      image: "./seven page/Rectangle 20.jpg",
      name: "Floret",
      description: "fresh,floral,rose,gardenia with earthy sandalwood",
      value: "Floret2",
    },
    {
      image: "./seven page/Rectangle 20.jpg",
      name: "Floret",
      description: "fresh,floral,rose,gardenia with earthy sandalwood",
      value: "Floret3",
    },
    {
      image: "./seven page/Rectangle 20.jpg",
      name: "Floret",
      description: "fresh,floral,rose,gardenia with earthy sandalwood",
      value: "Floret4",
    },
    {
      image: "./seven page/Rectangle 20.jpg",
      name: "Floret",
      description: "fresh,floral,rose,gardenia with earthy sandalwood",
      value: "Floret5",
    },

    {
      image: "./seven page/Rectangle 20.jpg",
      name: "Floret",
      description: "fresh,floral,rose,gardenia with earthy sandalwood",
      value: "Floret6",
    },
    {
     
      name: "Floret",
      description: "fresh,floral,rose,gardenia with earthy sandalwood",
      value: "Floret7",
    },
  ];
  const onclickHandler = (value) => {
    setData((old) => {
      let tmp = { ...old };
      tmp.fragrance = value;
      return tmp;
    });
  };
  const clickHandler = (value) => {
    setData((old) => {
      let tmp = { ...old };
      tmp.fragrance_strength = value;
      return tmp;
    });
  };
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
        <h1>Choose your fragrance</h1>
      </div>
      <div className="row justify-content-center">
        {array.map((item, key) => {
          return (
            <>
              <div className={data.fragrance&&data.fragrance==item.value?'col-md-6  active-class':'col-md-6 '}onClick={() => {
                    onclickHandler(item.value && item.value);
                  }}>
                <div class="row cstm_card_colom align-items-center">
              <div className="col-md-6">
                <div class="card-body image-text">
                  <h2>{item.name}</h2>

                  <p class="card-text">{item.description}</p>
                </div>
              </div>
              <div className="col-md-6 pt_py">
                <img
                  src={item.image}
                  
                  class="card-img-right"
                  alt="..."
                ></img>
              </div>
              </div>
              </div>
            </>
          );
        })}
        {/* <div className="col-md-6">
          <div class="row cstm_card_colom align-items-center">
            <div className="col-md-6">
              <div class="card-body">
                <h2>Floret</h2>
                <p class="card-text">Some quick example text to.</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt_py">
              <img
                src="Rectangle 20.jpg"
                class="card-img-right"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="row cstm_card_colom align-items-center">
            <div className="col-md-6">
              <div class="card-body">
                <h2>Floret</h2>
                <p class="card-text">Some quick example text to.</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt_py">
              <img
                src="Rectangle 20.jpg"
                class="card-img-right"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="row cstm_card_colom align-items-center">
            <div className="col-md-6">
              <div class="card-body">
                <h2>Floret</h2>
                <p class="card-text">Some quick example text to.</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt_py">
              <img
                src="rectangle3.jpg"
                class="card-img-right"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="row cstm_card_colom align-items-center">
            <div className="col-md-6">
              <div class="card-body">
                <h2>Floret</h2>
                <p class="card-text">Some quick example text to.</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt_py">
              <img
                src="rectangle4.jpg"
                class="card-img-right"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="row cstm_card_colom align-items-center">
            <div className="col-md-6">
              <div class="card-body">
                <h2>Floret</h2>
                <p class="card-text">Some quick example text to.</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt_py">
              <img
                src="Rectangle5.jpg"
                class="card-img-right"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="row cstm_card_colom align-items-center">
            <div className="col-md-6">
              <div class="card-body">
                <h2>Floret</h2>
                <p class="card-text">Some quick example text to.</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt_py">
              <img
                src="rectangle3.jpg"
                class="card-img-right"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
        <div className='col-md-3'></div>



        <div className="col-md-6">
          <div class="row cstm_card_colom align-items-center">
            <div className="col-md-6">
              <div class="card-body">
                <h2>Floret</h2>
                <p class="card-text">Some quick example text to.</p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            </div>
            </div>
            <div className='col-md-3'></div> */}
        <div className="text text-center first_component">
          <h3>Fragrance Strength</h3>
        </div>
        <div className="row text-center">
          <div className={data.fragrance_strength&&data.fragrance_strength=="Light"?'col-md-4 active-class':'col-md-4 '}>
          <div className="round-text">

            <p className="image-text" onClick={() => {
                    clickHandler("Light")
                  }}>Light</p>
          </div>
          </div>
          <div className={data.fragrance_strength&&data.fragrance_strength=="Medium"?'col-md-4 active-class':'col-md-4  '}>
          <div className="round-text">
            <p className ="image-text"onClick={() => {
                    clickHandler("Medium")
                  }}>Medium</p>
                  </div>
          </div>
          <div className={data.fragrance_strength&&data.fragrance_strength=="Strong"?'col-md-4 active-class':'col-md-4 '}>
          <div className="round-text">
            <p className ="image-text"onClick={() => {
                    clickHandler("Strong")
                  }}>Strong</p>
          </div>
        </div>
      </div>
      </div>
      {/* <button onClick={() => stepperFuncdecrement(stepper, setStepper)}>
        prev
      </button> */}
      {/* <button onClick={() => stepperFunc(stepper, setStepper)}>Next</button> */}
      <div className='btn_row text-center'>
    <button className='bottom_center_btn' onClick={() => stepperFunc(stepper, setStepper)}>Next</button>
    </div>
    </div>
  );
}

export default Seventh;
