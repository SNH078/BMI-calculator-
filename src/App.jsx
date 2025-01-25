 import './App.css'
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi,setBMI]=useState('');
  const [message,setMessage]=useState('');


let calculate=(e)=> {
  e.preventDefault();
  if(weight==0 || height==0){
    alert('please enter valid weight and height')
  }
  else {
    let bmi=weight / (height * height);
setBMI(bmi.toFixed(1));
 if(bmi<25){
  setMessage('you are underweight')
 }
 else if(bmi>=25 && bmi <30){
  setMessage('you are a healthy person')
 }
 else 
 {
  setMessage('you are over-weight')
 }
  }

}

 
 let reload=()=>{
 window.location.reload()

  }

  return (
    <div className="App">
      <div className="container">
      <h1> BMI calculator</h1>
      <form onSubmit={calculate}>
        <div>
        <label>Weight(kg)</label>
        <input
          type="text"
          placeholder="Enter weight value"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label>Height(m)</label>
        <input
          type="text"
          placeholder="Enter height value"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button className="btn" type="submit" >
          Submit
        </button>
        
        <button className="btn btn-outline" onClick={reload} type="submit">
          Reload
        </button>

        <div className="center result-container"  >
          <h3>Your BMI is :{bmi} </h3>
          <p>{message}</p>
        </div>
        </div>
      </form>
      </div>

      <footer style={{ position: 'absolute', bottom: 0, right: 0 }}>
      <h4>© 2024 BMI calculator</h4>
      <h4>Developed by SNH078</h4>
      </footer>
    </div>
    );
}

export default App;
