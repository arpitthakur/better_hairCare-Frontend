import { useEffect, useState } from "react";
import "./App.css";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Four from "./components/Four/Four";
import Five from "./components/Five/Five";
import Sixth from "./components/Sixth/Sixth";
import Seventh from "./components/Seventh/Seventh";
import Eight from "./components/Eight/Eight";
import Ninth from "./components/Ninth/Ninth";
import Tenth from "./components/Tenth/Tenth";
import Eleventh from "./components/Eleventh/Eleventh";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  <BrowserRouter>
  <Routes>
  
    <Route path="/success" element={<Eleventh />} />
    
    
    
  </Routes>
</BrowserRouter>
  const [stepper, setStepper] = useState(10);
  const [data,setData] = useState({

  })
  useEffect (()=>{
    console.log(data)
    console.log("data value")
  },[data])
  return (
    <>
      {stepper == 1 && <First stepper={stepper} setStepper={setStepper} data={data}setData={setData}/>}
      {stepper == 2 && <Second stepper={stepper} setStepper={setStepper} data={data}setData={setData}/>}
      {stepper == 3 && <Third stepper={stepper} setStepper={setStepper}data={data}setData={setData} />}
      {stepper == 4 && <Four stepper={stepper} setStepper={setStepper}data={data}setData={setData} />}
      {stepper == 5 && <Five stepper={stepper} setStepper={setStepper}data={data}setData={setData} />}
      {stepper == 6 && <Sixth stepper={stepper} setStepper={setStepper} data={data} setData={setData} />}
      {stepper == 7 && <Seventh stepper={stepper} setStepper={setStepper} data={data} setData={setData} />}
      {stepper == 8 && <Eight stepper={stepper} setStepper={setStepper} data={data} setData={setData} />}
      {stepper == 9 && <Ninth stepper={stepper} setStepper={setStepper} data={data} setData={setData} />}
      {stepper == 10 && <Tenth stepper={stepper} setStepper={setStepper} data={data} setData={setData} />}
   
    </>
  );
}

export default App;
