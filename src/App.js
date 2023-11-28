import './App.css';
import { useState } from 'react'

function App() {
  //creating our state variables to be able to do our calculator operations
  const [calculation, setCalculation] = useState("");
  const [result, setResult]  = useState("");
  const operators = ['/', '*', '+', '-', '.'];
  const updateCalculations = value =>{
          //limiting the number of operations, preventing from adding a lot of operations
        if(operators.includes(value) && calculation=== '' ||
            operators.includes(value) && operators.includes(calculation.slice(-1))
        ){
          return;
        }
        setCalculation(calculation + value);
        if(!operators.includes(value)){
          setResult(eval(calculation + value).toString());
        }
  }



  //creating function to generated calculatoe buttons from 1-9
  const createNumbers = () => {
    const numbers = []; //creatong array of digits to store numbers
    for (let i=1; i < 10; i++){
        numbers.push(
          <button key={i} onClick={() => updateCalculations(i.toString())}>{i}</button>
        )
    }
    return numbers;
  }

  //Setting up the function for creating the equal button and converting the number to a String
  const calc = () =>{
    setCalculation(eval(calculation).toString());
  }

  //Setting up the function for creating the delete button after input
  const deleteLastNumber = () =>{
      if(calculation === ''){
        return;
      }
      else{
        const value = calculation.slice(0,-1);
        setCalculation(value);
      }
  }

  return (
    <div className="App">
     <div className = "calculator">
      <div className = "display" id="display">
        { result ? <span>({result})</span>: ''}&nbsp; 
        { calculation || "0" }
      </div>
      <div className = "operators">
        <button onClick={() => updateCalculations('/')}>/</button>
       <button  onClick={() => updateCalculations('*')}>*</button>
        <button onClick={() => updateCalculations('+')}>+/</button>
        <button onClick={() => updateCalculations('-')}>-</button>
        <button onClick={deleteLastNumber}>DEL</button>
      </div>
      <div className="numbers">
        { createNumbers() }
        <button onClick={() => updateCalculations('0')}>0</button>
        <button onClick={() => updateCalculations('.')}>.</button>

        <button onClick={calc}>=</button>
      </div>
     </div>
    </div>
  );
}

export default App;
